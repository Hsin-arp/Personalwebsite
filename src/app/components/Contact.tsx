import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { contactApi, ApiError } from "../../lib/api";
import { Alert, AlertDescription } from "./ui/alert";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    setErrors({});

    try {
      const response = await contactApi.submit(formData);
      
      if (response.success) {
        setSubmitStatus({
          type: 'success',
          message: response.message || "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 5000);
      }
    } catch (error) {
      if (error instanceof ApiError) {
        // Handle validation errors
        if (error.errors && error.errors.length > 0) {
          const fieldErrors: Record<string, string> = {};
          error.errors.forEach((err) => {
            fieldErrors[err.field] = err.message;
          });
          setErrors(fieldErrors);
        }
        
        setSubmitStatus({
          type: 'error',
          message: error.message || 'Failed to send message. Please try again.',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'An unexpected error occurred. Please try again later.',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: <Mail className="text-blue-500" size={24} />, text: "pranish909@gmail.com" },
    { icon: <Phone className="text-blue-500" size={24} />, text: "+977-9844637427" },
    { icon: <MapPin className="text-blue-500" size={24} />, text: "Lalitpur, Nepal" },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
    { icon: <Twitter size={24} />, href: "https://twitter.com" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-12 text-center"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6">Let's Work Together</h3>
            <p className="text-gray-700 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <h4 className="text-lg mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Alert
                      variant={submitStatus.type === 'success' ? 'default' : 'destructive'}
                      className={
                        submitStatus.type === 'success'
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : ''
                      }
                    >
                      {submitStatus.type === 'success' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                      <AlertDescription>{submitStatus.message}</AlertDescription>
                    </Alert>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className={errors.message ? 'border-red-500' : ''}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}