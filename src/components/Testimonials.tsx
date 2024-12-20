import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah J.",
    text: "Shaun is the most thoughtful person I've ever met. His attention to detail and caring nature are unmatched!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
    {
    name: "Amie",
    text: "Shaun is an all-round great guy. We got to know him through family connections and he was immediately easy to get along with thanks to his laid-back personality and multi-faceted interests. I am confident his authenticity will make him a great partner.",
    image: "https://res.cloudinary.com/dae1ybs5i/image/upload/v1734650668/ffceb0_gqz6ti.png"
  },
   {
    name: "Emily R.",
    text: "Not only is he incredibly charming, but his sense of humor will keep you laughing all day long.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
    {
    name: "Andrew",
    text: "Shaun is loyal and always puts others first. This translates to love life.",
    image: "https://res.cloudinary.com/dae1ybs5i/image/upload/v1734650668/abcbd5_pmjshj.png"
  },
    {
    name: "Daniel F.",
    text: "Shaun is a hero - not because he wears a cape - but because he has chosen to pursue what he fears most: his potential.",
    image: "https://res.cloudinary.com/dae1ybs5i/image/upload/v1734599097/DF_zxgqkg.png"
  },
       {
    name: "Tim",
    text: "Shaun is a fair man and he has a reputation for always paying back any debts. He owes me sixty dollars.",
    image: "https://res.cloudinary.com/dae1ybs5i/image/upload/v1734650668/Screen_Shot_2024-12-20_at_9.53.14_am_aevbjk.png"
  },
      {
    name: "Pete",
    text: "Wait, is this DateShaun.com actually a real thing? You really want me to list reasons why chicks should date him?",
    image: "https://res.cloudinary.com/dae1ybs5i/image/upload/v1734599096/PK_hpz3pc.png"
  },
  {
    name: "KiP",
    text: "I've never met Shaun, though I've heard great things about him. I can't work out why we've not been introduced to each other yet.",
    image: "https://res.cloudinary.com/dae1ybs5i/image/upload/v1734650667/Screen_Shot_2024-12-20_at_9.52.54_am_ulv4ua.png"
  },
  {
    name: "Suj",
    text: "I've known Shaun for close to fifteen years, and his willingness to listen, learn and challenge himself is special. It isn't often that someone is as curious, caring, and intrigued by all life has to offer. Having Shaun as a friend adds to my world.",
    image: "https://res.cloudinary.com/dae1ybs5i/image/upload/v1734597068/Suj_fb_v6o7d3.jpg"
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
