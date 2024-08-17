"use client";
import React, { useState } from "react";
import styles from "./Shop.module.css";
import Image from "next/image";

const Shop = () => {
  const [openSections, setOpenSections] = useState({
    customizable: false,
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const products = [
    { id: 1, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 2, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 3, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 4, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 5, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 6, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 7, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 8, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 9, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 10, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 11, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 12, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 13, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 14, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 15, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 16, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
    { id: 17, name: "PPXOC MILKYWAY DRESS IN...", image: "/image.png", price: "Sign in or Create an account to see pricing", newProduct: false },
];

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Filters</h2>
        <ul>
          <li onClick={() => toggleSection("customizable")}>
            <input type="checkbox" /> Customizable
          </li>
          <li onClick={() => toggleSection("idealFor")}>
            Ideal For <span>{openSections.idealFor ? "^" : "v"}</span>
          </li>
          <li onClick={() => toggleSection("occasion")}>
            Occasion <span>{openSections.occasion ? "^" : "v"}</span>
          </li>
          <li onClick={() => toggleSection("work")}>
            Work <span>{openSections.work ? "^" : "v"}</span>
          </li>
          <li onClick={() => toggleSection("fabric")}>
            Fabric <span>{openSections.fabric ? "^" : "v"}</span>
          </li>
          <li onClick={() => toggleSection("segment")}>
            Segment <span>{openSections.segment ? "^" : "v"}</span>
          </li>
          <li onClick={() => toggleSection("suitableFor")}>
            Suitable For <span>{openSections.suitableFor ? "^" : "v"}</span>
          </li>
          <li onClick={() => toggleSection("rawMaterials")}>
            Raw Materials <span>{openSections.rawMaterials ? "^" : "v"}</span>
          </li>
          <li onClick={() => toggleSection("pattern")}>
            Pattern <span>{openSections.pattern ? "^" : "v"}</span>
          </li>
        </ul>
      </aside>

      <main className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            {product.newProduct && <div className={styles.newProductBadge}>NEW PRODUCT</div>}
            <Image
              width={300}
              height={400}
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>{product.price}</p>
            <div className={styles.productIcons}>
              <span>&hearts;</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Shop;
