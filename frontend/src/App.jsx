import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Hello from "./Hello";
import Devgad from "./Devgad" ; // Import new page
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Importing CSS for styling
import "./Hello.css"; // Importing CSS for Hello component

function App() {
  const navigate = useNavigate();
  const images = ["/src/assets/m3.jpg", "/src/assets/m2.2.jpg","/src/assets/m2.1.jpg","/src/assets/m1.52.jpg","/src/assets/m1.5.jpg"];
  const animations = ["fade", "zoom-in", "zoom-out"]; // Different transitions
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState("fade"); // Default animation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentAnimation(animations[Math.floor(Math.random() * animations.length)]); // Pick a random animation
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Marquee Offer Section */}
      <marquee className="offer-marquee" behavior="scroll" direction="left" scrollamount="8">
        🥭 Special Offer! Get Devgad Alphonso Mangoes at ₹999 per dozen – Fresh & Direct from Farms! Order Now! 🥭
      </marquee>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-section">
          <img src="./src/assets/gmail logo.webp" alt="Gmail Logo" className="social-logo" />
          <span>Email: <a href="mailto:konkankartmailbox@gmail.com">konkankartmailbox@gmail.com</a></span>
        </div>
        <div className="nav-section">
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/facebook logo.jpg" alt="Facebook Logo" className="social-logo" />
            Facebook
          </a>
        </div>
        <div className="nav-section">
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/instagram logo.png" alt="Instagram Logo" className="social-logo" />
            Instagram
          </a>
        </div>
        <div className="nav-section">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/linkedin logo.webp" alt="LinkedIn Logo" className="social-logo" />
            LinkedIn
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        {/* Left Section */}
        <div className="left-section">
          <div className="image-container">
            <img src="/src/assets/8.png" alt="Konkan Kart" />
            <div className="button-group">
              {/* Send state to trigger scroll */}
              <button onClick={() => navigate("/hello", { state: { scrollToCategories: true } })}>SHOP NOW</button>
              <a href="https://wa.me/918169246157" target="_blank" rel="noopener noreferrer">
                <button>Order on WhatsApp</button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Image Slider */}
        <div className="right-section">
          <img src={images[currentImageIndex]} alt="Konkan Kart" className={`slider-image ${currentAnimation}`} />
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      <a href="https://wa.me/918169246157" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/whatsapp logo.png" alt="WhatsApp" />
      </a>

      {/* Define Routes */}
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/devgad" element={<Devgad />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
