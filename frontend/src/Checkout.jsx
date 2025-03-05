import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css"; // Import CSS for styling

const Checkout = () => {
  const navigate = useNavigate();
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    country: "India",
  });

  const handleChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="checkout-title">Checkout</h1> {/* Title kept outside the container */}
      
      <div className="checkout-container">
        {/* Left Section: Order Summary & Payment */}
        <div className="checkout-left">
          {/* Order Summary */}
          <div className="order-summary">
            <h2>Your Order</h2>
            <div className="order-details">
              <p><strong>Product:</strong> Devgad Alphonso Mango (Devgad Hapus) × 6</p>
              <p><strong>Select Week:</strong> 14 April to 21 April 22 (Week 5)</p>
              <p><strong>Select Grade:</strong> A1+</p>
              <p><strong>Subtotal:</strong> ₹12,600.00</p>
              <p><strong>Shipping:</strong> Bluedart - ₹399.00</p>
              <p className="total"><strong>Total:</strong> ₹12,999.00</p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="payment-section">
            <h2>Select Payment Mode</h2>
            <label>
              <input type="radio" name="payment" checked />
              Credit Card / Debit Card / UPI
            </label>
            <p className="privacy-text">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
              <a href="#">privacy policy</a>.
            </p>
            <button className="place-order-button">Place Order</button>
          </div>

          {/* Back Button */}
          <button className="back-button" onClick={() => navigate("/products")}>
            Go Back to Products
          </button>
        </div>

        {/* Right Section: Billing Details */}
        <div className="checkout-right">
          <h2>Billing Details</h2>
          <form>
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleChange}
            />

            {/* Two fields per row */}
            <div className="input-group">
              <div>
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={billingDetails.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={billingDetails.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label>Street Address *</label>
            <input
              type="text"
              name="streetAddress"
              value={billingDetails.streetAddress}
              onChange={handleChange}
            />

            <label>Town / City *</label>
            <input
              type="text"
              name="city"
              value={billingDetails.city}
              onChange={handleChange}
            />

            <label>State *</label>
            <select name="state" value={billingDetails.state} onChange={handleChange}>
              {[
                "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
                "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
                "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
                "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
                "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
                "Uttar Pradesh", "Uttarakhand", "West Bengal"
              ].map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            <label>Postcode / ZIP *</label>
            <input
              type="text"
              name="zip"
              value={billingDetails.zip}
              onChange={handleChange}
            />

            <label>Phone *</label>
            <input
              type="text"
              name="phone"
              value={billingDetails.phone}
              onChange={handleChange}
            />

            <label>Country / Region *</label>
            <select name="country" value={billingDetails.country} onChange={handleChange}>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
