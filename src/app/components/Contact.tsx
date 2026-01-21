import { useState } from "react";
import { contactApi, ApiError, ContactFormData } from "../../lib/api";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await contactApi.submit(formData);
      if (response.success) {
        setSubmitStatus({ type: "success", message: response.message || "Message sent!" });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
      }
    } catch (error) {
      if (error instanceof ApiError) {
        setSubmitStatus({ type: "error", message: error.message });
      } else {
        setSubmitStatus({ type: "error", message: "Unexpected error. Try again later." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl mb-6 text-center">Get in Touch</h2>

      {submitStatus.type && (
        <Alert
          variant={submitStatus.type === "success" ? "default" : "destructive"}
          className="mb-4"
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
          ) : (
            <AlertCircle className="h-4 w-4 mr-2" />
          )}
          <AlertDescription>{submitStatus.message}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={5}
            required
            disabled={isSubmitting}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </section>
  );
}
