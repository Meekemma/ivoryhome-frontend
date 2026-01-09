import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

// Import gallery images
import gallery_one from '../../assets/images/gallery_one.jpg';
import gallery_two from '../../assets/images/gallery_two.jpg';
import gallery_three from '../../assets/images/gallery_three.jpg';
import gallery_four from '../../assets/images/gallery_four.jpg';
import gallery_five from '../../assets/images/gallery_five.jpg';
import gallery_six from '../../assets/images/gallery_six.jpg';
import gallery_seven from '../../assets/images/gallery_seven.jpg';

const MasonryGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images data
  const images = [
    { id: 1, url: gallery_one, title: 'Company Event', description: 'Ivory Homes Limited Event' },
    { id: 2, url: gallery_two, title: 'Team Meeting', description: 'Our Team in Action' },
    { id: 3, url: gallery_three, title: 'Property Launch', description: 'New Development Launch' },
    { id: 4, url: gallery_four, title: 'Corporate Gathering', description: 'Annual Corporate Event' },
    { id: 5, url: gallery_five, title: 'Site Visit', description: 'Client Site Inspection' },
    { id: 6, url: gallery_six, title: 'Award Ceremony', description: 'Excellence Recognition' },
    { id: 7, url: gallery_seven, title: 'Community Outreach', description: 'Giving Back to the Community' },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (lightboxOpen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') previousImage();
        if (e.key === 'Escape') closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, currentImageIndex]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="break-inside-avoid mb-4 group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close"
          >
            <IoClose size={40} />
          </button>

          {/* Previous Button */}
          <button
            onClick={previousImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Previous"
          >
            <MdNavigateBefore size={50} />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-screen p-4 flex flex-col items-center">
            <img
              src={images[currentImageIndex]?.url}
              alt={images[currentImageIndex]?.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="text-white mt-4 text-center">
              <h3 className="text-2xl font-bold mb-2">
                {images[currentImageIndex]?.title}
              </h3>
              <p className="text-gray-300">{images[currentImageIndex]?.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {currentImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Next"
          >
            <MdNavigateNext size={50} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MasonryGallery;
