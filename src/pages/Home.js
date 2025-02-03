import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className={styles.heroTitle}
            initial={{ y: -50 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            Capturing the World through My Lens
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            Professional Photography for Every Moment
          </motion.p>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className={styles.about}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.7 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className={styles.aboutText}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }}
        >
          I am a passionate photographer with a love for capturing life's most beautiful moments. My expertise lies in both portrait and landscape photography.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1.2 }}
        >
          My Services
        </motion.h2>
        <div className={styles.servicesList}>
          <motion.div 
            className={styles.serviceItem}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.4 }}
          >
            <h3>Portrait Photography</h3>
            <p>Capturing the essence of your personality in every shot.</p>
          </motion.div>
          <motion.div 
            className={styles.serviceItem}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.6 }}
          >
            <h3>Event Photography</h3>
            <p>Preserving the memories of your special events.</p>
          </motion.div>
          <motion.div 
            className={styles.serviceItem}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.8 }}
          >
            <h3>Nature Photography</h3>
            <p>Capturing breathtaking landscapes and moments in nature.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 2 }}
        >
          My Gallery
        </motion.h2>
        <div className={styles.imageGrid}>
          <motion.img 
            src="https://source.unsplash.com/300x200/?photography"
            alt="Gallery 1"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 2.2 }}
          />
          <motion.img 
            src="https://source.unsplash.com/300x200/?nature"
            alt="Gallery 2"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 2.4 }}
          />
          <motion.img 
            src="https://source.unsplash.com/300x200/?city"
            alt="Gallery 3"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 2.6 }}
          />
          <motion.img 
            src="https://source.unsplash.com/300x200/?portrait"
            alt="Gallery 4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 2.8 }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 3 }}
        >
          Contact Me
        </motion.h2>
        <p className={styles.contactInfo}>You can reach me via email at <strong>photographer@email.com</strong>.</p>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
