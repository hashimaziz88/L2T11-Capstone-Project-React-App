import React from "react";

// HelpModal component displaying shipping options
const HelpModal = () => {
  return (
    <div className="container" style={{ padding: "20px" }}>
      {/* Heading for shipping options */}
      <h4 className="mb-3">Shipping Options:</h4>
      {/* Standard Shipping */}
      <p className="mb-2">
        <strong>1. Standard Shipping:</strong> Delivery within 5-7 business
        days.
      </p>
      {/* Express Shipping */}
      <p>
        <strong>2. Express Shipping:</strong> Delivery within 2-3 business days.
      </p>
    </div>
  );
};

export default HelpModal;
