import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./devgad.css"; // Import CSS

const Devgad = () => {
  const navigate = useNavigate();
  const [selectedWeek, setSelectedWeek] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("A1+");
  const [quantity, setQuantity] = useState(1);
  const pricePerDozen = 1899; // Price per dozen

  return (
    <div className="devgad-container">
      {/* Breadcrumb */}
      <p className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span> &gt;{" "}
        <span onClick={() => navigate("/products")}>Products</span> &gt; Devgad Alphonso Mango (Devgad Hapus)
      </p>

      <div className="devgad-content">
        {/* Left Section - Image */}
        <div className="devgad-left">
          <img src=".\src\assets\m5.jpg" alt="Devgad Alphonso Mango" />
          <button className="zoom-button">🔍</button>
        </div>

        {/* Right Section - Product Info */}
        <div className="devgad-right">
          <h1>Devgad Alphonso Mango (Devgad Hapus)</h1>

          {/* Select Week */}
          <div className="selection-group">
            <label>Select Week</label>
            <select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)}>
              <option value="">Choose an option</option>
              <option value="Week 1">Week 1</option>
              <option value="Week 2">Week 2</option>
              <option value="Week 3">Week 3</option>
            </select>
            <span className="info-icon">ℹ</span>
          </div>

          {/* Select Grade */}
          <div className="selection-group">
            <label>Select Grade</label>
            <div className="grade-options">
              <button className={selectedGrade === "A1+" ? "active" : ""} onClick={() => setSelectedGrade("A1+")}>
                A1+
              </button>
              <button className={selectedGrade === "A2" ? "active" : ""} onClick={() => setSelectedGrade("A2")}>
                A2
              </button>
              <button className={selectedGrade === "A3" ? "active" : ""} onClick={() => setSelectedGrade("A3")}>
                A3
              </button>
            </div>
            <span className="info-icon">ℹ</span>
          </div>

          {/* Select Quantity */}
          <div className="selection-group">
            <label>Quantity (in dz.)</label>
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Price */}
          <div className="price-group">
            <label>Price</label>
            <span>₹{(pricePerDozen * quantity).toLocaleString()}</span>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-basket">Add to basket</button>
            <button className="buy-now" onClick={() => navigate("/checkout")}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devgad;
