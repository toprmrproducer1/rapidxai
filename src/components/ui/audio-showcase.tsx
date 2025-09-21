import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Phone, Globe, Target, Users, Sparkles, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientButton from './button-1';

interface AudioTrack {
  id: string;
  title: string;
  description: string;
  language: string;
  scenario: string;
  outcome: string;
  url: string;
  duration: string;
  icon: React.ElementType;
  gradient: string;
}

interface AudioShowcaseProps {
  primaryCTA: () => void;
}

export function AudioShowcase({ primaryCTA }: AudioShowcaseProps) {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks: AudioTrack[] = [
    {
      id: '0mvogy',
      title: 'Real Estate Lead Qualification',
      description: 'AI agent qualifies property buyer and books viewing appointment',
      language: 'Hindi + English',
      scenario: 'Inbound property inquiry',
      outcome: 'Qualified lead + appointment booked',
      url: 'https://files.catbox.moe/0mvogy.mp3',
      duration: '2:45',
      icon: Phone,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'zif1y8',
      title: 'Outbound Sales Follow-up',
      description: 'AI agent follows up on previous inquiry and schedules demo',
      language: 'English',
      scenario: 'Callback to warm lead',
      outcome: 'Demo scheduled',
      url: 'https://files.catbox.moe/zif1y8.mp3',
      duration: '3:12',
      icon: Target,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'p50jhw',
      title: 'Multilingual Customer Support',
      description: 'AI agent handles customer query in Hindi and English',
      language: 'Hindi + English',
      scenario: 'Customer support inquiry',
      outcome: 'Issue resolved + satisfaction',
      url: 'https://files.catbox.moe/p50jhw.mp3',
      duration: '4:08',
      icon: Globe,
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      id: 'xp7f12',
      title: 'Appointment Confirmation',
      description: 'AI agent confirms appointment and handles rescheduling',
      language: 'English',
      scenario: 'Appointment reminder call',
      outcome: 'Confirmed + calendar updated',
      url: 'https://files.catbox.moe/xp7f12.mp3',
      duration: '1:58',
      icon: Users,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

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
  }, [currentTrack]);

  const playTrack = (trackId: string) => {
    const track = tracks.find(t => t.id === trackId);
    if (!track || !audioRef.current) return;

    if (currentTrack === trackId && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentTrack !== trackId) {
        audioRef.current.src = track.url;
        audioRef.current.load(); // Force reload of new audio source
        setCurrentTrack(trackId);
        setCurrentTime(0);
      }
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
        // Handle autoplay restrictions
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-purple-600/5 via-violet-600/10 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      
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
            <span className="text-purple-300 font-light text-sm tracking-[0.2em] uppercase">LIVE DEMONSTRATIONS</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-extralight mb-12 text-white tracking-tighter leading-[0.85]" 
              style={{ fontFamily: '"Fraunces", "Playfair Display", serif', fontWeight: 200 }}>
            Listen to our <span className="gradient-text">AI voice</span> in action
          </h2>
          <p className="text-3xl md:text-4xl text-gray-300 max-w-4xl mx-auto font-extralight leading-tight mb-8" 
             style={{ fontFamily: '"Newsreader", "Crimson Text", serif', fontWeight: 200 }}>
            Real conversations. Real results.
          </p>
          <p className="text-xl text-purple-400 max-w-3xl mx-auto font-extralight" 
             style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 200 }}>
            Hindi • English • Human-grade quality
          </p>
        </motion.div>

        {/* Audio Player Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Premium Card Container */}
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                
                {/* Animated Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <track.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extralight text-white group-hover:text-purple-200 transition-colors duration-300 leading-tight" 
                          style={{ fontFamily: '"Fraunces", serif', fontWeight: 200 }}>
                        {track.title}
                      </h3>
                      <p className="text-sm text-purple-400 font-light mt-1">{track.language}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-light">{track.duration}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-8 leading-relaxed font-extralight text-lg" 
                   style={{ fontFamily: '"Newsreader", serif', fontWeight: 200 }}>
                  {track.description}
                </p>

                {/* Scenario & Outcome */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                    <div className="text-xs text-purple-400 font-light mb-1 uppercase tracking-wider">Scenario</div>
                    <div className="text-sm text-white font-light">{track.scenario}</div>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                    <div className="text-xs text-green-400 font-light mb-1 uppercase tracking-wider">Outcome</div>
                    <div className="text-sm text-white font-light">{track.outcome}</div>
                  </div>
                </div>

                {/* Play Button */}
                <button
                  onClick={() => playTrack(track.id)}
                  className={`w-full p-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-4 group/play ${
                    currentTrack === track.id && isPlaying
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40'
                      : 'bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600/50 hover:to-violet-600/50 text-gray-300 hover:text-white border border-gray-700/50 hover:border-purple-500/50 cursor-pointer'
                  }`}
                >
                  {currentTrack === track.id && isPlaying ? (
                    <Pause className="w-6 h-6 group-hover/play:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-6 h-6 group-hover/play:scale-110 transition-transform" />
                  )}
                  <span className="text-lg font-light" style={{ fontFamily: '"Fraunces", serif', fontWeight: 300 }}>
                    {currentTrack === track.id && isPlaying ? 'Pause' : 'Listen'}
                  </span>
                </button>

                {/* Progress Bar (only show for active track) */}
                {currentTrack === track.id && (
                  <motion.div 
                    className="mt-6 space-y-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Enhanced Progress Bar */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="font-mono">{formatTime(currentTime)}</span>
                        <span className="text-purple-400 font-medium">{Math.round(getProgressPercentage())}% complete</span>
                        <span className="font-mono">{formatTime(duration)}</span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-200 relative"
                            style={{ width: `${getProgressPercentage()}%` }}
                          >
                            <div className="absolute right-0 top-0 w-1 h-full bg-white/80 rounded-full"></div>
                          </div>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max={duration || 0}
                          value={currentTime}
                          onChange={handleSeek}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                    
                    {/* Enhanced Controls */}
                    <div className="flex items-center justify-between bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                      {/* Left Controls */}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={toggleMute}
                          className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors group"
                        >
                          {isMuted ? 
                            <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" /> : 
                            <Volume2 className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                          }
                        </button>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Vol</span>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-20 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer volume-slider"
                          />
                          <span className="text-xs text-gray-500 font-mono w-8">{Math.round(volume * 100)}</span>
                        </div>
                      </div>
                      
                      {/* Speed Controls */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Speed</span>
                        <div className="flex items-center gap-1">
                          {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                            <button
                              key={speed}
                              onClick={() => handleSpeedChange(speed)}
                              className={`px-2 py-1 rounded text-xs font-mono transition-all duration-200 ${
                                playbackSpeed === speed
                                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                                  : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50 hover:text-white'
                              }`}
                            >
                              {speed}×
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${track.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Audio Element */}
        <audio 
          ref={audioRef} 
          preload="metadata" 
          crossOrigin="anonymous"
          onLoadStart={() => console.log('Audio loading started')}
          onCanPlay={() => console.log('Audio can play')}
          onError={(e) => console.error('Audio error:', e)}
          onLoadedData={() => {
            if (audioRef.current) {
              audioRef.current.playbackRate = playbackSpeed;
            }
          }}
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
              <span className="text-green-400 font-light text-sm tracking-wider uppercase">LIVE PERFORMANCE</span>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <p className="text-gray-300 font-extralight text-lg" style={{ fontFamily: '"Instrument Serif", serif' }}>
              Ready for your business?
            </p>
          </div>

          <GradientButton
            width="320px"
            height="70px"
            onClick={primaryCTA}
          >
            <div className="flex items-center gap-4 group text-xl font-light text-white">
              <Phone className="w-6 h-6 drop-shadow-lg" strokeWidth={2} />
              Experience Our AI
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
            </div>
          </GradientButton>
        </motion.div>
      </div>

      {/* Enhanced Custom Slider Styles */}
      <style jsx>{`
        .volume-slider {
          background: linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%);
        }
        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
          transition: all 0.2s ease;
        }
        .volume-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.8);
        }
        .volume-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </section>
  );
}
                      <span className="text-xs text-gray-400 font-mono">{formatTime(currentTime)}</span>
                      <div className="flex-1">
                        <input
                          type="range"
                          min="0"
                          max={duration || 0}
                          value={currentTime}
                          onChange={handleSeek}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      <span className="text-xs text-gray-400 font-mono">{formatTime(duration)}</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-gray-400" />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-20 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${track.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Audio Element */}
        <audio 
          ref={audioRef} 
          preload="metadata" 
          crossOrigin="anonymous"
          onLoadStart={() => console.log('Audio loading started')}
          onCanPlay={() => console.log('Audio can play')}
          onError={(e) => console.error('Audio error:', e)}
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
              <span className="text-green-400 font-light text-sm tracking-wider uppercase">LIVE PERFORMANCE</span>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <p className="text-gray-300 font-extralight text-lg" style={{ fontFamily: '"Instrument Serif", serif' }}>
              Ready for your business?
            </p>
          </div>

          <GradientButton
            width="320px"
            height="70px"
            onClick={primaryCTA}
          >
            <div className="flex items-center gap-4 group text-xl font-light text-white">
              <Phone className="w-6 h-6 drop-shadow-lg" strokeWidth={2} />
              Experience Our AI
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
            </div>
          </GradientButton>
        </motion.div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider {
          background: linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${(currentTime / duration) * 100}%, #374151 ${(currentTime / duration) * 100}%, #374151 100%);
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </section>
  );
}