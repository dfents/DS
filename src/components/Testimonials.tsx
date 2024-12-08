import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah J.",
    text: "Shaun is the most thoughtful person I've ever met. His attention to detail and caring nature are unmatched!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Emily R.",
    text: "Not only is he incredibly charming, but his sense of humor will keep you laughing all day long.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    name: "Jessica M.",
    text: "A true gentleman with a heart of gold. Shaun knows how to make anyone feel special.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What They Say About Shaun</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-rose-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                </div>
              </div>
              <Quote className="w-8 h-8 text-rose-400 mb-2" />
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}