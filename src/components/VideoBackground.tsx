import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  flipY?: boolean;
  playbackRate?: number;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, className = '', flipY = false, playbackRate = 1 }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: false,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => { });
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => { });
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = playbackRate;
      }
    }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={`absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100 transition-opacity duration-500 ${flipY ? 'scale-y-[-1]' : ''} ${className}`}
    />
  );
};
