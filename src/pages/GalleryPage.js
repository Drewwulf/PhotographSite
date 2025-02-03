import React from 'react';
import styles from '../styles/GalleryPage.module.css'; // Стилі для галереї
import { motion } from 'framer-motion'; // Для анімацій

const GalleryPage = () => {
  return (
    <div className={styles.galleryContainer}>
      <motion.h1
        className={styles.galleryTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Photography Gallery
      </motion.h1>

      <div className={styles.imageGrid}>
        {/* Зображення */}
        <motion.img
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80"
          alt="Nature"
          className={styles.galleryImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src="https://thephotoacademy.com/storage/magazine/448/3-the-photo-academy-portrait-Yousuf-Karsh.jpeg"
          alt="Portrait"
          className={styles.galleryImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          src="https://t4.ftcdn.net/jpg/03/21/49/17/360_F_321491746_tJimdq0ZS7F6wGKpaGOeL7EQjcdlaeqK.jpg"
          alt="City"
          className={styles.galleryImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.img
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
          alt="Landscape"
          className={styles.galleryImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Опис галереї */}
      <motion.div
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>About the Gallery</h2>
        <p>
          Welcome to my photography gallery! This collection features a range of my favorite photographs, capturing moments from the beauty of nature to the bustling life of cities. Photography allows me to freeze time and preserve memories, creating art that tells a story of the world around us.
        </p>
        <p>
          Every image in this gallery has a special place in my heart, as it reflects my love for capturing the essence of the moment. Whether it's a serene landscape, a vibrant cityscape, or an intimate portrait, each photo represents a unique perspective.
        </p>
        <p>
          Feel free to explore the images and immerse yourself in the beauty of photography. Each piece is a glimpse into a world I hope you can experience through my lens.
        </p>
      </motion.div>

    
    </div>
  );
};

export default GalleryPage;
