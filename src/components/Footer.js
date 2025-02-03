import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3>Get in Touch</h3>
        <p>If you want to create beautiful memories, let's work together.</p>
        <div className={styles.contactInfo}>
          <p>Email: contact@photographer.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Photographer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
