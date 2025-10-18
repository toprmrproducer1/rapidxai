import React from 'react';

interface CloudinaryVideoPlayerProps {
  cloudName: string;
  publicId: string;
  profile?: string;
  className?: string;
}

export const CloudinaryVideoPlayer: React.FC<CloudinaryVideoPlayerProps> = ({
  cloudName,
  publicId,
  profile = 'cld-default',
  className = ''
}) => {
  const embedUrl = `https://player.cloudinary.com/embed/?cloud_name=${cloudName}&public_id=${publicId}&profile=${profile}`;

  return (
    <div className={`relative w-full ${className}`}>
      <iframe
        src={embedUrl}
        width="640"
        height="360"
        style={{
          height: 'auto',
          width: '100%',
          aspectRatio: '640 / 360',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        className="rounded-2xl shadow-2xl"
      />
    </div>
  );
};
