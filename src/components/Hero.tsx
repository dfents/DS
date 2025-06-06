import React from 'react';
import { Heart, PlayCircle } from 'lucide-react';

export function Hero({ onPlayClick }: { onPlayClick: () => void }) {
  return (

     <>
      {/* Desktop Message (positioned at top of hero) */}
      <div className="hidden md:block bg-yellow-100 text-gray-900 p-6 rounded-lg shadow-lg mb-6 max-w-3xl mx-auto text-center mt-6 z-30 relative">
        <p className="text-lg leading-relaxed">
          This might seem odd, but nothing amazing ever came from trying to stay away from odd.
          In the spirit of being open and novel, we've created a platform to invite people to make contact with our friend Shaun.
          Take a chance, invest in opportunity, and based on us rating him, consider making contact to "Date Shaun".
          <br /><br />
          Signed, Shaun's friends (we're listed below 😉)
        </p>
      </div>

       
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img
          src="https://res.cloudinary.com/dae1ybs5i/image/upload/v1733612713/shaun_ic19mw.jpg"
          alt="Shaun smiling warmly at the camera"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="relative z-20 flex flex-col justify-end min-h-screen pb-16 px-4">
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-white">DateShaun.com</h1>
            <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl mb-8 text-white/90">Meet the man with the winning smile</p>
          <button
            onClick={onPlayClick}
            className="flex items-center gap-2 mx-auto bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            <PlayCircle className="w-6 h-6" />
            Play Shaun's Song
          </button>
        </div>
      </div>
    </div>

     {/* Mobile Message (placed below hero) */}
      <div className="block md:hidden bg-yellow-100 text-gray-900 p-6 rounded-lg shadow-lg my-6 max-w-3xl mx-auto text-center">
        <p className="text-base leading-relaxed">
          This might seem odd, but nothing amazing ever came from trying to stay away from odd.
          In the spirit of being open and novel, we've created a platform to invite people to make contact with our friend Shaun.
          Take a chance, invest in opportunity, and based on us rating him, consider making contact to "Date Shaun".
          <br /><br />
          Signed, Shaun's friends (we're listed below 😉)
        </p>
      </div>
    </>
       
  );
}
