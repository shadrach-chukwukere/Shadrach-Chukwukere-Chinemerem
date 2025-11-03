import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import type { FormEvent, ChangeEvent } from "react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import {
  githubProfile,
  isValidEmail,
  isValidMessage,
  isValidName,
  isValidPhoneNumber,
  linkendinProfile,
  npmProfile,
  phone,
  xProfile,
} from "../utility";

// React Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    contact: "", // combined email/phone
    message: "",
    firstname: "",
    lastname: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!isValidName(form.firstname))
      newErrors.firstname = "Invalid first name";
    if (!isValidName(form.lastname)) newErrors.lastname = "Invalid last name";

    const contact = form.contact.trim();
    if (!contact) {
      newErrors.contact = "Provide at least email or phone number";
    } else {
      const isEmail = isValidEmail(contact);
      const isPhone = isValidPhoneNumber(contact);
      if (!isEmail && !isPhone)
        newErrors.contact = "Invalid email or phone number format";
    }

    if (!isValidMessage(form.message))
      newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await new Promise<boolean>((resolve) =>
        setTimeout(() => resolve(true), 3000)
      );
      if (res) {
        toast.success("Request submitted successfully!");
        setForm({
          contact: "",
          message: "",
          firstname: "",
          lastname: "",
        });
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-20 pt-12">
      <h1 className="font-bold text-3xl text-center">Contact Us</h1>

      <div className="grid lg:grid-cols-3 pt-10 max-w-6xl mx-auto gap-4 px-4">
        {/* Contact Info + Social Links */}
        <div className="lg:col-span-1  px-4 sm:px-12 py-12 rounded-xl order-last lg:order-first">
          <h3 className="font-semibold lg:text-left text-xl mb-6">
            Get In Touch
          </h3>

          <ul className="flex flex-col gap-10">
            <li className="flex items-center gap-3 text-blue-500 transition-colors">
              <FaGithub className="text-2xl" />
              <Link
                to={githubProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                GitHub: {githubProfile.username}
              </Link>
            </li>
            <li className="flex items-center gap-3 text-red-500 transition-colors">
              <SiNpm className="text-2xl" />
              <Link
                to={npmProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                NPM: {npmProfile.usename}
              </Link>
            </li>
            <li className="flex items-center gap-3 text-blue-600 transition-color">
              <FaLinkedin className="text-2xl" />
              <Link
                to={linkendinProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="s"
              >
                LinkedIn: {linkendinProfile.username}
              </Link>
            </li>
            <li className="flex items-center gap-3 text-blue-400 transition-colors">
              <FaXTwitter className="text-2xl" />
              <Link
                to={xProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                X / Twitter: {xProfile.username}
              </Link>
            </li>
            <li className="flex items-center gap-3 text-green-400 transition-colors">
              <FaWhatsapp className="text-2xl" />
              <Link
                to={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Whatsapp: {phone}
              </Link>
            </li>
            <li className="flex items-center gap-3 text-orange-400 transition-colors">
              <Phone className="text-2xl" />
              <Link
                to={`tel:${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Call: {phone}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className=" px-4 sm:px-12 py-12 rounded-xl lg:col-span-2">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8"
            onSubmit={handleSubmit}
          >
            <Input
              name="firstname"
              type="text"
              value={form.firstname}
              onChange={handleChange}
              autoComplete="given-name"
              placeholder="John"
              label="First name:"
              error={errors.firstname}
              readOnly={loading}
              disabled={loading}
            />
            <Input
              name="lastname"
              type="text"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Doe"
              autoComplete="family-name"
              label="Last name:"
              error={errors.lastname}
              readOnly={loading}
              disabled={loading}
            />

            {/* Combined Contact Input */}
            <div className="md:col-span-2">
              <Input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Email or Phone Number"
                label="Contact (Email or Phone):"
                error={errors.contact}
                readOnly={loading}
                disabled={loading}
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type here ..."
                autoComplete="off"
                label="Message:"
                rows={6}
                error={errors.message}
                readOnly={loading}
                disabled={loading}
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center">
              <Button
                type="submit"
                disabled={loading}
                className="rounded-[17px]"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
