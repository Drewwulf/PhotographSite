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
        {/* Замість цих посилань можна використовувати реальні зображення */}
        <motion.img
          src="https://source.unsplash.com/400x300/?nature"
          alt="Nature"
          className={styles.galleryImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src="https://source.unsplash.com/400x300/?portrait"
          alt="Portrait"
          className={styles.galleryImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          src="https://source.unsplash.com/400x300/?city"
          alt="City"
          className={styles.galleryImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.img
          src="https://source.unsplash.com/400x300/?landscape"
          alt="Landscape"
          className={styles.galleryImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
};

export default GalleryPage;
