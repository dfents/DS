import React from 'react';
import { X } from 'lucide-react';

interface AudioPlayerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AudioPlayer({ isOpen, onClose }: AudioPlayerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">Shaun's Theme Song</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <audio
          controls
          className="w-full"
          autoPlay
        >
          <source src="https://res.cloudinary.com/dae1ybs5i/video/upload/v1733613190/DateShaun.com_anim4p.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        
        <p className="mt-4 text-sm text-gray-600 text-center">
          ♫ The Official Shaun Theme Song ♫
        </p>
      </div>
    </div>
  );
}