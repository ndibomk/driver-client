import React, { useState } from "react";
import QrReader from "react-qr-reader";

const BarcodeScanner = () => {
    const [scannedBarcode, setScannedBarcode] = useState(null);
  
    const handleScan = (data) => {
      if (data) {
        setScannedBarcode(data);
      }
    };
  
    const handleError = (error) => {
      console.error("Error scanning barcode:", error);
    };
  
    return (
      <div>
        <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
        <h3>Scanned Barcode: {scannedBarcode}</h3>
      </div>
    );
  };

  export default BarcodeScanner