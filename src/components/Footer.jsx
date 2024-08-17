"use client";
import { useState } from "react";
import styles from "./Footer.module.css";

// SVG Icons
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2 8v8a4 4 0 004 4h8a4 4 0 004-4V8M8 2h8"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2 8a6 6 0 0012 0V8a6 6 0 00-12 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M22 8a6 6 0 00-12 0v8a6 6 0 0012 0V8z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 2h8"
    />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.upperSection}>
        <p className={styles.beFirstToKnow}>Be the first to know</p>
        <p className={styles.signUpText}>
          Sign up for updates from mettā muse.
        </p>
        <div className={styles.subscribeFormContainer}>
          <form className={styles.subscribeForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>
              SUBSCRIBE
            </button>
          </form>
          <div className={styles.contactInfo}>
            <p className={styles.contactTitle}>CONTACT US</p>
            <p className={styles.contactDetail}>+44 221 133 5360</p>
            <p className={styles.contactDetail}>customercare@mettamuse.com</p>
            <p className={styles.contactTitle}>Currency</p>
            <p className={styles.contactDetail}>USD</p>
            <p className={styles.contactDisclaimer}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        {/* <hr className={styles.horizontalLine} /> */}
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3 className={styles.title}>mettā muse</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Artisans
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Boutiques
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  EU Compliances Docs
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.link}>
                  Orders & Shipping
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Join/Login as a Seller
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Payment & Pricing
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Return & Refunds
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Follow Us</h3>
            <ul className={styles.socialLinks}>
              <li>
                <a href="#" className={styles.socialIcon}>
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialIcon}>
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <p className={styles.copyright}>
              Copyright © 2023 mettā muse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
