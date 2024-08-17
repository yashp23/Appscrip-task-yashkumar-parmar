import React from "react";
import Image from "next/image";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque velit elementum dolor.
        </p>
      </div>

      {/* Items Section */}
      <div className={styles.itemsSection}>
        <div className={styles.itemsInfo}>
          <span>3425 ITEMS</span>
          <a href="#" className={styles.filterLink}>
            HIDE FILTER
          </a>
        </div>

        <div className={styles.sortingOption}>
          <span>RECOMMENDED</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
