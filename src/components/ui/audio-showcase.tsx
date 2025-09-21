import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Phone, Globe, Target, Users, Sparkles, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientButton from './button-1';

interface AudioShowcaseProps {
  primaryCTA: () => void;
}

export function AudioShowcase({ primaryCTA }: AudioShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Simple working audio URL for testing
  const audioUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Audio play failed:', error);
      });
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-purple-600/5 via-violet-600/10 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-xl rounded-full px-8 py-4 border border-purple-500/30 mb-12">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 font-medium text-sm tracking-[0.2em] uppercase">VOICE DEMONSTRATIONS</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-display font-bold mb-12 text-white tracking-tight leading-tight" 
              style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif' }}>
            Listen to our <span className="gradient-text">AI voice</span> in action
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-8" 
             style={{ fontFamily: '"Crimson Text", "Cormorant Garamond", Georgia, serif' }}>
            Real scenarios. Human-grade conversations.
          </p>
          <p className="text-lg text-purple-400 max-w-3xl mx-auto font-light" 
             style={{ fontFamily: '"Merriweather", "Crimson Text", Georgia, serif' }}>
            Demo audio for testing • Real recordings available on discovery call
          </p>
        </motion.div>

        {/* Simple Audio Player */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/30">
                <Phone className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">AI Voice Demo</h3>
              <p className="text-gray-400">Sample conversation with our AI agent</p>
            </div>

            {/* Audio Controls */}
            <div className="space-y-6">
              <button
                onClick={togglePlay}
                className="w-full p-6 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white transition-all duration-300 flex items-center justify-center gap-4 group shadow-2xl shadow-purple-500/40 hover:scale-[1.02]"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 group-hover:scale-110 transition-transform" />
                ) : (
                  <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
                )}
                <span className="text-xl font-semibold">
                  {isPlaying ? 'Pause Demo' : 'Play Demo Audio'}
                </span>
              </button>

              {/* Progress Bar */}
              {duration > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="font-mono">{formatTime(currentTime)}</span>
                    <span className="font-mono">{formatTime(duration)}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-200"
                      style={{ width: `${getProgressPercentage()}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Direct Audio Element for Fallback */}
            <div className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <p className="text-sm text-gray-400 mb-3">If the player above doesn't work, use the browser's default audio controls:</p>
              <audio 
                controls 
                className="w-full"
                preload="metadata"
              >
                <source src={audioUrl} type="audio/wav" />
                <source src="https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav" type="audio/wav" />
                <source src="https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>

        {/* Hidden Audio Element for Custom Player */}
        <audio 
          ref={audioRef}
          src={audioUrl}
          preload="metadata"
        />

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl px-12 py-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group mb-12">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-sm tracking-wider uppercase">AUDIO DEMO</span>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <p className="text-gray-300 font-light text-lg" style={{ fontFamily: '"Merriweather", serif' }}>
              Demo audio for testing • Real AI voice recordings on discovery call
            </p>
          </div>

          <GradientButton
            width="320px"
            height="70px"
            onClick={primaryCTA}
          >
            <div className="flex items-center gap-4 group text-xl font-semibold text-white">
              <Phone className="w-6 h-6 drop-shadow-lg" strokeWidth={2} />
              Experience Our AI
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
            </div>
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}