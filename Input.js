import React, { useState } from "react";
// import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    eprNumber: "",
    partNumber: "",
    cnNumber: "",
    releaseType: "Production intent",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000); // Hide confirmation after 3 seconds
  };

  const handleClear = () => {
    setFormData({
      eprNumber: "",
      partNumber: "",
      cnNumber: "",
      releaseType: "Production intent",
    });
  };

  return (
    <div className="form-container">
      <h2>Enter Request Number</h2>
      {showConfirmation && <div className="confirmation">Request Number Added</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group" title="Enter the unique EPR number">
          <label>EPR Number</label>
          <input
            type="text"
            name="eprNumber"
            value={formData.eprNumber}
            onChange={handleChange}
            placeholder="Enter EPR Number"
            required
          />
 
        </div>
        <div className="form-group" title="Enter the part number">
          <label>Part Number</label>
          <input
            type="text"
            name="partNumber"
            value={formData.partNumber}
            onChange={handleChange}
            placeholder="Enter Part Number"
            required
          />
       
        </div>
        <div className="form-group" title="Enter the CN number">
          <label>CN Number</label>
          <input
            type="text"
            name="cnNumber"
            value={formData.cnNumber}
            onChange={handleChange}
            placeholder="Enter CN Number"
            required
          />
          
        </div>
        <div className="form-group" title="Select the release type">
          <label>Release Type</label>
          <select
            name="releaseType"
            value={formData.releaseType}
            onChange={handleChange}
          >
            <option value="Production intent">Production intent</option>
            <option value="Design intent">Design intent</option>
            <option value="Concept intent">Concept intent</option>
          </select>
        </div>
        <div className="button-group">
          <button type="submit">Save Data</button>
          <button type="button" onClick={handleClear} className="clear-button">
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
