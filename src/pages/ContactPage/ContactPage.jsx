import React, { useState } from "react";
import styles from './ContactPage.module.css';
import designerImg from '../../assets/poze-site/atelier/atelier.jpg';
import SocialCarusel from "../../Components/SocialMedia/SocialCarusel";
import { instagramData, tiktokData, facebookData } from "../../Components/SocialMedia/socialData";


import { FaTiktok, FaFacebook } from "react-icons/fa";

export default function ContactPage({ API_URL, theme }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return alert("Completează toate câmpurile!");
    }

    fetch(`${API_URL}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => {
        if (!res.ok) throw new Error("Eroare la trimitere");
        return res.json();
      })
      .then(() => {
        setSuccess("Mesajul a fost trimis cu succes!");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(""), 5000);
      })
      .catch(err => alert("Eroare: " + err.message));
  };

  return (
    <section className={`${styles.contactPage} ${theme === 'dark' ? styles.dark : ''}`}>
      <h2>Contact</h2>

      
      <div className={styles.topContainer}>
        <div className={styles.leftColumn}>
          <img src={designerImg} alt="Designer" className={styles.designerImg} />
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.contactCard}>
            <div className={styles.contactDetail}>
              <p className={styles.detailTitle}>Adresa locației:</p>
              <p className={styles.detailValue}>
                Str. Ion Tuculescu, nr.19, bloc 37C, ap.22, etaj 2, Sector 3, București
              </p>
            </div>

            <div className={styles.contactDetail}>
              <p className={styles.detailTitle}>Telefon / WhatsApp:</p>
              <p className={styles.detailValue}>
                <a href="tel:+40752966566">+40 752 966 566</a>
              </p>
            </div>

            <div className={styles.contactDetail}>
              <p className={styles.detailTitle}>Email:</p>
              <p className={styles.detailValue}>
                <a href="mailto:raluandrecouture@gmail.com">raluandrecouture@gmail.com</a>
              </p>
            </div>

            <div className={styles.contactDetail}>
              <p className={styles.detailTitle}>Program de lucru:</p>
              <p className={styles.detailValue}>Luni - Vineri: 08:00 - 16:00</p>
            </div>

            
            <div className={styles.socialIcons}>
              <a
                href={tiktokData[0].link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href={facebookData[0].link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className={styles.mapContainer}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.539618553761!2d26.12434627625293!3d44.43419337910316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffab1b000001%3A0x6f1b5c8f24f7db2d!2sStrada%20Ion%20Tuculescu%2019%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1694070000000!5m2!1sen!2sro"
          allowFullScreen=""
          loading="lazy"
          className={styles.map}
        ></iframe>
      </div>

      
      <div className={styles.formContainer}>
        {success && <p className={styles.success}>{success}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Nume"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className={styles.input}
          />
          <textarea
            placeholder="Mesaj"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className={styles.textarea}
          />
          <button type="submit" className={styles.btn}>Trimite</button>
        </form>
      </div>

     
      <div style={{ maxWidth: "1024px", width: "100%", margin: "2rem auto" }}>
        <SocialCarusel data={instagramData.slice(0, 3)} />
      </div>
    </section>
  );
}
