import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { AudioPlayer } from './components/AudioPlayer';
import { ContactSection } from './components/ContactSection';

function App() {
  const [isAudioPlayerOpen, setIsAudioPlayerOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onPlayClick={() => setIsAudioPlayerOpen(true)} />
      <Testimonials />
      <ContactSection />
      <AudioPlayer 
        isOpen={isAudioPlayerOpen}
        onClose={() => setIsAudioPlayerOpen(false)}
      />
    </div>
  );
}

export default App;