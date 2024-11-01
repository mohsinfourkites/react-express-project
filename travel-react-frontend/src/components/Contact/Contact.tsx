import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.heading}>Get in Touch</h2>
            <p className={styles.description}>
              Have questions about our travel packages? We're here to help you plan your perfect vacation.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail className={styles.icon} />
                <span>contact@wanderlust.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.icon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.icon} />
                <span>123 Adventure Street, Travel City, TC 12345</span>
              </div>
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Name</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input type="email" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea rows={4} className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
