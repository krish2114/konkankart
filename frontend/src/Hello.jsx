import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Hello.css"; // Import CSS for styling

function Hello() {
  const navigate = useNavigate();
  const location = useLocation();
  const shopNowRef = useRef(null);

  // Scroll when the component mounts
  useEffect(() => {
    if (location.state?.scrollToCategories && shopNowRef.current) {
      shopNowRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="hello-container">
      {/* Header Section */}
      <div className="hello-header">
        <h1>WELCOME LOVERS OF HAPUS AMBA</h1>
        <p>
          At Konkan Kart, we deliver farm-fresh Devgad Alphonso mangoes with
          premium quality, fair pricing, and hassle-free service—experience
          Konkan’s true taste with guaranteed freshness!
        </p>
      </div>

      {/* Scroll Target Section */}
      <div ref={shopNowRef} className="categories-section">
        <h2>CATEGORIES</h2>
        <div className="categories">
          <button className="category" onClick={() => navigate("/devgad")}>
            <img src=".\src\assets\m2.2.jpg" alt="Mangoes" />
            <h3>Devgad Hapus</h3>
            <p>Fresh and juicy Alphonso mangoes.</p>
          </button>
          <button className="category">
            <img src=".\src\assets\m5.jpg" alt="Cashews" />
            <h3>Ratnagiri Hapus</h3>
            <p>Premium quality Konkan cashews.</p>
          </button>
          <button className="category">
            <img src=".\src\assets\m6.jpg" alt="Raigad Hapus" />
            <h3>Raigad Hapus</h3>
            <p>Organic and natural Konkan honey.</p>
          </button>
        </div>
      </div>

      {/* Next Section with Full-Width Image */}
      <div className="sales">
        <img src="./src/assets/m4.avif" alt="Konkan Beauty" />
        <div className="sales-text">
          <h2>SALE IS ON</h2>
          <button
            onClick={() =>
              shopNowRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="shop-now-button"
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Go Back Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        Go Back to Home
      </button>
    </div>
  );
}

export default Hello;
