import { useState, type FormEvent, type ChangeEvent } from "react";
import toast from "react-hot-toast";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { submitDeletionForm } from "../script/Form";
import { isValidEmail, isValidMessage } from "../utility";

export default function Deletion() {
  const [form, setForm] = useState({
    email: "",
    userId: "",
    password: "",
    confirmPassword: "",
    reason: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!isValidEmail(form.email)) newErrors.email = "Invalid email address";
    if (!form.userId) newErrors.userId = "User ID is required";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!isValidMessage(form.reason))
      newErrors.reason = "Please provide a reason";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setLoading(true);
    try {
      await submitDeletionForm(form);
      toast.success("Request submitted successfully!");
      setForm({
        email: "",
        userId: "",
        password: "",
        confirmPassword: "",
        reason: "",
      });
      setErrors({});
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8 py-12">
      <h1 className="font-bold text-3xl text-center">
        Account Deletion Request
      </h1>
      <p className="font-medium text-lg text-center ">
        Send us a request to delete your account. Note account deletion process
        takes 14 business days to complete.
      </p>

      <div className="bg-[#161616] px-4 sm:px-12 py-12 rounded-xl max-w-3xl mx-auto">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8"
          onSubmit={handleSubmit}
        >
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g., yourname@example.com"
            label="Email Address:"
            error={errors.email}
            readOnly={loading}
            disabled={loading}
            className="rounded-[9px]"
            autoComplete="email"
          />
          <Input
            name="userId"
            value={form.userId}
            onChange={handleChange}
            placeholder="Enter your User ID or username"
            label="User ID:"
            error={errors.userId}
            readOnly={loading}
            disabled={loading}
            className="rounded-[9px]"
            autoComplete="username"
          />
          <Input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            label="Password:"
            error={errors.password}
            readOnly={loading}
            disabled={loading}
            className="rounded-[9px]"
            autoComplete="new-password"
          />
          <Input
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            label="Confirm Password:"
            error={errors.confirmPassword}
            readOnly={loading}
            disabled={loading}
            className="rounded-[9px]"
            autoComplete="new-password"
          />
          <div className="md:col-span-2">
            <Textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              placeholder="Tell us why you want to delete your account..."
              label="Reason:"
              rows={10}
              error={errors.reason}
              readOnly={loading}
              disabled={loading}
              className="rounded-[9px]"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" className="rounded-[17px]" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
