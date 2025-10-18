import React, { useEffect, useRef } from 'react';

interface CloudinaryVideoPlayerProps {
  cloudName: string;
  publicId: string;
  profile?: string;
  className?: string;
}

declare global {
  interface Window {
    cloudinary: any;
  }
}

export const CloudinaryVideoPlayer: React.FC<CloudinaryVideoPlayerProps> = ({
  cloudName,
  publicId,
  profile = 'cld-default',
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current || !window.cloudinary) return;

    const initPlayer = () => {
      try {
        if (playerRef.current) {
          playerRef.current.dispose();
        }

        playerRef.current = window.cloudinary.videoPlayer(videoRef.current, {
          cloudName,
          publicId,
          profile,
          controls: true,
          autoplay: false,
          muted: false,
          fluid: true,
          colors: {
            accent: '#8b5cf6',
            base: '#1f2937',
            text: '#ffffff'
          }
        });
      } catch (error) {
        console.error('Error initializing Cloudinary video player:', error);
      }
    };

    if (window.cloudinary) {
      initPlayer();
    } else {
      const checkCloudinary = setInterval(() => {
        if (window.cloudinary) {
          clearInterval(checkCloudinary);
          initPlayer();
        }
      }, 100);

      return () => clearInterval(checkCloudinary);
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.dispose();
        } catch (error) {
          console.error('Error disposing video player:', error);
        }
      }
    };
  }, [cloudName, publicId, profile]);

  return (
    <div className={`relative w-full ${className}`}>
      <video
        ref={videoRef}
        className="cld-video-player w-full rounded-2xl shadow-2xl"
        controls
      />
    </div>
  );
};
