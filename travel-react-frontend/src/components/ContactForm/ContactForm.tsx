import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './ContactForm.module.scss';

export const ContactForm: React.FC = () => {
  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.grid}>
        <div>
          <h2 className={styles.formHeading}>Get in Touch</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Your name"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                className={styles.input}
                placeholder="your@email.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                className={styles.textarea}
                placeholder="Your message"
              ></textarea>
            </div>
            <button className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
        
        <div className={styles.contactInfo}>
          <h2 className={styles.infoHeading}>Contact Information</h2>
          <div className={styles.infoItem}>
            <Mail className={styles.icon} />
            <div>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>info@travelkashmir.com</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <Phone className={styles.icon} />
            <div>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>+91 (123) 456-7890</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <MapPin className={styles.icon} />
            <div>
              <h3 className={styles.infoTitle}>Address</h3>
              <p className={styles.infoText}>123 Dal Gate<br />Srinagar, Kashmir 190001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;