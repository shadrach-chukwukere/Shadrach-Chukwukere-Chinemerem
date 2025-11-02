import toast from "react-hot-toast";
import {
  baseURL,
  isValidEmail,
  isValidMessage,
  isValidName,
  isValidPhoneNumber,
} from "../utility";

interface ContactFormData {
  email: string;
  message: string;
  firstname: string;
  lastname: string;
  phoneNumber: string | number;
  enquiryType: "app" | "general" | string;
}

export const ContactUsSender = async (data: ContactFormData) => {
  try {
    // Validation
    if (!isValidEmail(data?.email)) {
      toast.error("Invalid email address");
      return;
    }
    if (!isValidPhoneNumber(data?.phoneNumber.toString())) {
      toast.error("Invalid phone number");
      return;
    }
    if (!isValidMessage(data?.message)) {
      toast.error("Message cannot be empty");
      return;
    }
    if (!isValidName(data?.firstname)) {
      toast.error("Invalid first name");
      return;
    }

    // Submit form
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Server error");
    }

    const result = await res.json();
    toast.success("Message sent successfully!");
    return result;
  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    toast.error(error?.message || "Something went wrong");
    return false;
  }
};

export interface DeletionFormData {
  email: string;
  userId: string;
  password: string;
  confirmPassword: string;
  reason: string;
}

export const submitDeletionForm = async (data: DeletionFormData) => {
  // Basic client-side validation
  if (!data.email) {
    toast.error("Email is required");
    throw new Error("Email is required");
  }
  if (!data.userId) {
    toast.error("User ID is required");
    throw new Error("User ID is required");
  }
  if (!data.password) {
    toast.error("Password is required");
    throw new Error("Password is required");
  }
  if (!data.confirmPassword) {
    toast.error("Confirm your password");
    throw new Error("Confirm your password");
  }
  if (data.password !== data.confirmPassword) {
    toast.error("Passwords do not match");
    throw new Error("Passwords do not match");
  }
  if (!data.reason) {
    toast.error("Reason is required");
    throw new Error("Reason is required");
  }

  try {
    const response = await fetch(`${baseURL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const err = await response.json();
      toast.error(err.message || "Submission failed");
      throw new Error(err.message || "Submission failed");
    }

    toast.success("Account deletion request submitted successfully!");
    return await response.json(); // success response
  } catch (error: any) {
    console.error("Deletion form submission error:", error);
    toast.error(error?.message || "Submission failed");
    throw new Error(error?.message || "Submission failed");
  }
};
