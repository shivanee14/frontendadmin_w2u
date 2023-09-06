import React, { useState } from 'react';
import axios from 'axios';

const DarshanForm = () => {
  const [formData, setFormData] = useState({
    temple_name: '',
    summer: [],
    winter: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/darshan', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Darshan</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="temple_name">Temple Name:</label>
          <input
            type="text"
            id="temple_name"
            name="temple_name"
            value={formData.temple_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="summer">Summer:</label>
          <textarea
            id="summer"
            name="summer"
            value={formData.summer}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="winter">Winter:</label>
          <textarea
            id="winter"
            name="winter"
            value={formData.winter}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DarshanForm;
