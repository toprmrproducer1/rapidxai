import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
}

export const VapiWidget: React.FC<VapiWidgetProps> = ({ 
  apiKey, 
  assistantId
}) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState<Array<{role: string, text: string}>>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on('call-start', () => {
      console.log('Call started');
      setIsConnected(true);
      setIsLoading(false);
      setIsExpanded(true);
    });

    vapiInstance.on('call-end', () => {
      console.log('Call ended');
      setIsConnected(false);
      setIsSpeaking(false);
      setIsLoading(false);
      setIsExpanded(false);
      setTranscript([]);
    });

    vapiInstance.on('speech-start', () => {
      console.log('Assistant started speaking');
      setIsSpeaking(true);
    });

    vapiInstance.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setIsSpeaking(false);
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        setTranscript(prev => [...prev, {
          role: message.role,
          text: message.transcript
        }]);
      }
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
      setIsLoading(false);
      setIsConnected(false);
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  const startCall = () => {
    if (vapi) {
      setIsLoading(true);
      vapi.start(assistantId);
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50 font-sans">
        {!isConnected && !isLoading ? (
          <button
            onClick={startCall}
            className="group relative flex items-center gap-2 bg-gray-900/90 hover:bg-gray-800/90 text-white border border-gray-700/50 hover:border-purple-500/50 rounded-lg px-3 py-2 text-xs font-medium cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <Mic className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={2} />
            <span className="text-gray-300 group-hover:text-white transition-colors hidden sm:inline">Talk to AI</span>
          </button>
        ) : isLoading ? (
          <div className="flex items-center gap-2 bg-gray-900/90 text-white rounded-lg px-3 py-2 shadow-lg backdrop-blur-sm border border-gray-700/50">
            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            <span className="text-xs hidden sm:inline">Connecting...</span>
          </div>
        ) : (
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-700/50 overflow-hidden transition-all duration-300 ease-out"
               style={{ width: isExpanded ? '280px' : '240px' }}>
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-gray-800/50 text-white border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full ${isSpeaking ? 'bg-red-400' : 'bg-green-400'}`}>
                    {isSpeaking && (
                      <div className="absolute inset-0 bg-red-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-xs">AI Assistant</div>
                  <div className="text-xs text-gray-400 hidden sm:block">
                    {isSpeaking ? 'Speaking...' : 'Listening...'}
                  </div>
                </div>
              </div>
              <button
                onClick={endCall}
                className="p-1 hover:bg-gray-700/50 rounded transition-all duration-200 text-gray-400 hover:text-white"
              >
                <PhoneOff className="w-3 h-3" strokeWidth={2} />
              </button>
            </div>

            {/* Transcript */}
            <div className="h-32 sm:h-40 overflow-y-auto p-3 bg-gray-800/20">
              {transcript.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <Mic className="w-5 h-5 mx-auto text-purple-400 opacity-70" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs hidden sm:block">Conversation will appear here...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {transcript.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                    >
                      <div
                        className={`max-w-[85%] px-3 py-2 rounded-xl text-xs font-medium shadow-lg backdrop-blur-sm ${
                          msg.role === 'user'
                            ? 'bg-purple-600/80 text-white'
                            : 'bg-gray-700/80 border border-gray-600/50 text-gray-100 shadow-gray-900/30'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-gray-800/30 border-t border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500 hidden sm:block">
                  <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Powered by RapidXAI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-gray-500'} transition-all duration-300`}></div>
                  <span className="text-xs text-gray-500 hidden sm:inline">
                    {isConnected ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default VapiWidget;