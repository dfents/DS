import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendEmail } from '../utils/emailService';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const success = await sendEmail(formData);
      if (success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (error) {
    return (
      <div className="py-20 bg-rose-50" id="contact">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h3>
            <p className="text-gray-600 mb-4">
              We couldn't send your message. Please try again later.
            </p>
            <button
              onClick={() => setError(false)}
              className="text-rose-500 hover:text-rose-600 font-semibold"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-rose-50" id="contact">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 font-serif">Get in Touch with Shaun</h2>
        <p className="text-center text-gray-600 mb-12">
          Interested in getting to know Shaun better? Send him a message and he'll get back to you soon!
        </p>

        {submitted ? (
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
            <p className="text-gray-600">
              Thanks for reaching out! Shaun will get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-rose-500 hover:text-rose-600 font-semibold"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring focus:ring-rose-200 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring focus:ring-rose-200 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring focus:ring-rose-200 transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="What would you like to say to Shaun?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}