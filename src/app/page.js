import Products from "@/components/Product";
import Shop from "@/components/Shop";

export default function Home() {
  const products = [
    { id: 1, name: "Product 1", image: "/product1.jpg", price: "$100" },
    { id: 2, name: "Product 2", image: "/product2.jpg", price: "$200" },
    { id: 3, name: "Product 3", image: "/product3.jpg", price: "$150" },
    { id: 4, name: "Product 4", image: "/product4.jpg", price: "$120" },
    { id: 5, name: "Product 5", image: "/product5.jpg", price: "$180" },
    { id: 6, name: "Product 6", image: "/product6.jpg", price: "$130" },
    { id: 7, name: "Product 7", image: "/product7.jpg", price: "$160" },
    { id: 8, name: "Product 8", image: "/product8.jpg", price: "$110" },
  ];

  return (
    <div className="main-content">
      <div className="product-page"><Products /></div>

      <div className="filter-options">
        <a href="#" className="filter-link">Most Recent</a>
        <a href="#" className="filter-link">Best Selling</a>
      </div>
      <h4 className="new-products">NEW PRODUCTS</h4>

      <div>
        <Shop />
      </div>
    </div>
  );
}
