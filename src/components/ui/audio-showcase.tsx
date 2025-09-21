import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Phone, Globe, Target, Users, Sparkles, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientButton from './button-1';

interface AudioShowcaseProps {
  primaryCTA: () => void;
}

interface AudioRecording {
  id: string;
  title: string;
  description: string;
  scenario: string;
  outcome: string;
  url: string;
  duration?: string;
}

const AudioPlayer = ({ recording }: { recording: AudioRecording }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const handleError = () => {
      setError('Failed to load audio');
      setIsLoading(false);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      setError(null);
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audioRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Audio play failed:', err);
      setError('Unable to play audio. Please try the browser controls below.');
      setIsLoading(false);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    if (duration === 0 || isNaN(duration)) return 0;
    return (currentTime / duration) * 100;
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 group">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
          {recording.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{recording.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30">
            <span className="text-purple-400 font-medium">Scenario: </span>
            <span className="text-gray-300">{recording.scenario}</span>
          </div>
          <div className="bg-purple-600/20 rounded-lg p-3 border border-purple-500/30">
            <span className="text-purple-300 font-medium">Outcome: </span>
            <span className="text-white">{recording.outcome}</span>
          </div>
        </div>
      </div>

      {/* Custom Audio Controls */}
      <div className="space-y-4">
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="w-full p-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg shadow-purple-500/25 hover:scale-[1.02] disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          ) : (
            <Play className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          )}
          <span className="font-semibold">
            {isLoading ? 'Loading...' : isPlaying ? 'Pause' : 'Play Demo'}
          </span>
        </button>

        {/* Progress Bar */}
        {duration > 0 && !isNaN(duration) && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-200"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        )}

        {error && (
          <div className="text-red-400 text-sm text-center bg-red-500/10 rounded-lg p-3 border border-red-500/30">
            {error}
          </div>
        )}

        {/* Fallback Browser Controls */}
        <div className="pt-4 border-t border-gray-700/30">
          <p className="text-xs text-gray-500 mb-2">Browser audio controls:</p>
          <audio 
            ref={audioRef}
            controls 
            className="w-full h-8"
            preload="metadata"
            src={recording.url}
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export function AudioShowcase({ primaryCTA }: AudioShowcaseProps) {
  const recordings: AudioRecording[] = [
    {
      id: 'customer-support',
      title: 'Customer Support Inquiry',
      description: 'AI agent handles customer inquiry in Hindi and English',
      scenario: 'Customer calls with a support question',
      outcome: 'Issue resolved + satisfaction confirmed',
      url: 'https://files.catbox.moe/xp7f12.mp3'
    },
    {
      id: 'appointment-reminder',
      title: 'Appointment Reminder Call',
      description: 'AI agent confirms appointment and handles rescheduling',
      scenario: 'Automated reminder call to customer',
      outcome: 'Confirmed + calendar updated',
      url: 'https://files.catbox.moe/p50jhw.mp3'
    },
    {
      id: 'lead-qualification',
      title: 'Lead Qualification',
      description: 'AI agent qualifies incoming lead and books meeting',
      scenario: 'Potential customer inquiry call',
      outcome: 'Lead qualified + meeting scheduled',
      url: 'https://files.catbox.moe/zif1y8.mp3'
    },
    {
      id: 'follow-up-call',
      title: 'Follow-up Call',
      description: 'AI agent follows up on previous interaction',
      scenario: 'Automated follow-up sequence',
      outcome: 'Engagement maintained + next steps confirmed',
      url: 'https://files.catbox.moe/0mvogy.mp3'
    }
  ];

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
            Actual AI voice recordings from live deployments
          </p>
        </motion.div>

        {/* Audio Recordings Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {recordings.map((recording, index) => (
            <motion.div
              key={recording.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AudioPlayer recording={recording} />
            </motion.div>
          ))}
        </div>

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
              <span className="text-green-400 font-medium text-sm tracking-wider uppercase">LIVE RECORDINGS</span>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <p className="text-gray-300 font-light text-lg" style={{ fontFamily: '"Merriweather", serif' }}>
              Real AI voice agents from production deployments
            </p>
          </div>

          <GradientButton
            width="320px"
            height="70px"
            onClick={primaryCTA}
          >
            <div className="flex items-center gap-4 group text-xl font-semibold text-white">
              <Phone className="w-6 h-6 drop-shadow-lg" strokeWidth={2} />
              Get This For Your Business
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
            </div>
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}