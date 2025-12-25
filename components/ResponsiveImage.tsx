import React from 'react';

interface ResponsiveImageProps {
  src: string;
  mobileSrc?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

/**
 * ResponsiveImage Component
 * 
 * Manages images for different device sizes.
 * Use 'mobileSrc' for art direction (different crops on small screens).
 * Automatically uses srcset for performance if applicable.
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  mobileSrc,
  alt,
  className = "",
  aspectRatio,
  priority = false,
}) => {
  // Simple helper to check if it's an Unsplash URL to append sizing parameters
  const isUnsplash = src.includes('unsplash.com');

  const getSrcSet = (baseUrl: string) => {
    if (!isUnsplash) return undefined;
    // Generate different widths for better resolution switching
    return `
      ${baseUrl.split('&w=')[0]}&w=400 400w,
      ${baseUrl.split('&w=')[0]}&w=800 800w,
      ${baseUrl.split('&w=')[0]}&w=1200 1200w,
      ${baseUrl.split('&w=')[0]}&w=1600 1600w
    `.trim();
  };

  return (
    <picture style={{ aspectRatio }} className={`block overflow-hidden ${className}`}>
      {/* Mobile Source - Art Direction */}
      {mobileSrc && (
        <source
          media="(max-width: 768px)"
          srcSet={getSrcSet(mobileSrc) || mobileSrc}
          sizes="(max-width: 768px) 100vw"
        />
      )}
      
      {/* Desktop/Default Source */}
      <img
        src={src}
        srcSet={getSrcSet(src)}
        sizes={mobileSrc ? "(min-width: 769px) 100vw" : "100vw"}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`w-full h-full object-cover ${className}`}
      />
    </picture>
  );
};

export default ResponsiveImage;