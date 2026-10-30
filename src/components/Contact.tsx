import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { profile, socials } from "@/data/portfolio";
import { Reveal, Sparkle, ArrowUpRight } from "./decor";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const inputClass =
  "w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-accent";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const configured = Boolean(
    emailjsConfig.serviceId &&
      emailjsConfig.templateId &&
      emailjsConfig.publicKey
  );

  const onSubmit = async (values: FormValues) => {
    if (!configured) {
      const subject = encodeURIComponent(
        `Portfolio enquiry from ${values.name}`
      );
      const body = encodeURIComponent(
        `${values.message}\n\nReply to: ${values.email}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }
    try {
      await emailjs.send(
        emailjsConfig.serviceId!,
        emailjsConfig.templateId!,
        {
          from_name: values.name,
          reply_to: values.email,
          email: values.email,
          message: values.message,
        },
        { publicKey: emailjsConfig.publicKey! }
      );
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Couldn't send your message. Try email instead.");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <Reveal>
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-ink-soft uppercase">
          <span className="h-px w-6 bg-ink-soft" aria-hidden="true" />
          Contact
        </p>
        <h2 className="max-w-3xl text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
          Have a project in mind?{" "}
          <span className="text-accent">Let&apos;s build something great.</span>
          <Sparkle className="ml-2 inline-block h-5 w-5 text-accent" />
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center justify-between gap-4 rounded-card bg-card px-6 py-5 transition-colors hover:bg-accent hover:text-white"
            >
              <div>
                <p className="text-xs font-semibold tracking-widest text-ink-soft uppercase group-hover:text-white/70">
                  Email
                </p>
                <p className="mt-1 font-semibold break-all">{profile.email}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="rounded-card bg-ink px-6 py-5 text-white">
              <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">
                Also find me on
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-white/85 hover:text-accent"
                    >
                      {s.label}
                      <span className="text-white/40 group-hover:text-accent">
                        {s.handle}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5 rounded-card border border-ink/5 bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-sm font-semibold"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className={inputClass}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs font-medium text-accent">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-sm font-semibold"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-accent">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-semibold"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell me about your project…"
                className={`${inputClass} resize-none`}
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs font-medium text-accent">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            {!configured && (
              <p className="text-center text-xs text-ink-soft">
                Submitting opens your mail app — or add EmailJS keys to{" "}
                <code>.env.local</code> for direct sending.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
