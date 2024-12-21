// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Profile.css';

// const ProfileForm = () => {
//   const [formData, setFormData] = useState({
//     userId: '', // Replace with actual user ID
//     firstName: '',
//     lastName: '',
//     age: '',
//     mobileNumber: '',
//     occupation: '',
//     monthlyIncome: '',
//     monthlyExpenses: '',
//     monthlySavings: 0,
//     aadharCardNumber: Array(12).fill(''),
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name.startsWith('aadhar')) {
//       const index = parseInt(name.split('-')[1], 10);
//       const newAadhar = [...formData.aadharCardNumber];
//       newAadhar[index] = value.slice(0, 1);
//       setFormData({ ...formData, aadharCardNumber: newAadhar });
//     } else {
//       setFormData((prevFormData) => {
//         const updatedData = { ...prevFormData, [name]: value };

//         if (name === 'monthlyIncome' || name === 'monthlyExpenses') {
//           const income = parseFloat(updatedData.monthlyIncome) || 0;
//           const expenses = parseFloat(updatedData.monthlyExpenses) || 0;
//           updatedData.monthlySavings = income - expenses;
//         }

//         return updatedData;
//       });
//     }
//   };

//   const handleSaveChanges = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8000/api/auth/profile', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userId: formData.userId,
//           profileData: {
//             firstName: formData.firstName,
//             lastName: formData.lastName,
//             age: formData.age,
//             mobileNumber: formData.mobileNumber,
//             occupation: formData.occupation,
//             monthlyIncome: formData.monthlyIncome,
//             monthlyExpenses: formData.monthlyExpenses,
//             monthlySavings: formData.monthlySavings,
//             aadharCardNumber: formData.aadharCardNumber,
//           },
//         }),
//       });

//       if (!response.ok) throw new Error('Failed to save changes');
//       const data = await response.json();
//       console.log('Profile Updated:', data.message);
//       alert('Profile updated successfully');
//       navigate('/'); // Redirect if needed
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div className="profile-container">
//       <form onSubmit={handleSaveChanges} className="profile-form">
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="input-box"
//           />
//         </div>

//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="input-box"
//           />
//         </div>

//         <div className="form-group">
//           <label>Occupation</label>
//           <select
//             name="occupation"
//             value={formData.occupation}
//             onChange={handleChange}
//             className="input-box"
//           >
//             <option value="">Select Occupation</option>
//             <option value="Student">Student</option>
//             <option value="Job holder">Job holder</option>
//             <option value="Business professional">Business professional</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Monthly Income</label>
//           <input
//             type="number"
//             name="monthlyIncome"
//             value={formData.monthlyIncome}
//             onChange={handleChange}
//             className="input-box"
//           />
//         </div>

//         <div className="form-group">
//           <label>Monthly Expenses</label>
//           <input
//             type="number"
//             name="monthlyExpenses"
//             value={formData.monthlyExpenses}
//             onChange={handleChange}
//             className="input-box"
//           />
//         </div>

//         <div className="form-group">
//           <label>Monthly Savings</label>
//           <p>₹ {formData.monthlySavings}</p>
//         </div>

//         <div className="form-group">
//           <label>Age</label>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="input-box"
//             min="18"
//           />
//         </div>

//         <div className="form-group">
//           <label>Mobile Number</label>
//           <input
//             type="text"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             className="input-box"
//           />
//         </div>

//         <div className="form-group">
//           <label>Aadhar Card Number</label>
//           <div className="aadhar-input-group">
//             {formData.aadharCardNumber.map((digit, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 name={`aadhar-${index}`}
//                 value={digit}
//                 onChange={handleChange}
//                 maxLength="1"
//                 className="aadhar-input-box"
//               />
//             ))}
//           </div>
//         </div>

//         <button type="submit" className="submit-button">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default ProfileForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    mobileNumber: '',
    occupation: '',
    monthlyIncome: '',
    monthlyExpenses: '',
    monthlySavings: 0,
    aadharCardNumber: Array(12).fill(''),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('aadhar')) {
      const index = parseInt(name.split('-')[1], 10);
      const newAadhar = [...formData.aadharCardNumber];
      newAadhar[index] = value.slice(0, 1);  // Only allow one character
      setFormData({ ...formData, aadharCardNumber: newAadhar });
    } else {
      setFormData((prevFormData) => {
        const updatedData = { ...prevFormData, [name]: value };

        if (name === 'monthlyIncome' || name === 'monthlyExpenses') {
          const income = parseFloat(updatedData.monthlyIncome) || 0;
          const expenses = parseFloat(updatedData.monthlyExpenses) || 0;
          updatedData.monthlySavings = income - expenses;
        }

        return updatedData;
      });
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
  
    // Log the form data to ensure it's correct
    console.log('Form Data:', formData);
  
    try {
      const response = await fetch('http://localhost:8000/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: formData.age,
          mobileNumber: formData.mobileNumber,
          occupation: formData.occupation,
          monthlyIncome: formData.monthlyIncome,
          monthlyExpenses: formData.monthlyExpenses,
          aadharCardNumber: formData.aadharCardNumber,
        }),
      });

      // Log the raw response text to inspect if it's HTML or JSON
      const responseText = await response.text();
      console.log('Response:', responseText);

      // Attempt to parse the response as JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (error) {
        throw new Error('The response is not valid JSON.');
      }

      // Check if the response was successful
      if (!response.ok) {
        throw new Error(data.message || 'Failed to save profile');
      }
  
      console.log('Profile Updated:', data);
      alert('Profile updated successfully');
      navigate('/'); // Redirect if needed
    } catch (error) {
      console.error('Error:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSaveChanges} className="profile-form">
        {/* First Name */}
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="input-box"
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="input-box"
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="18"
            required
            className="input-box"
          />
        </div>

        {/* Mobile Number */}
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Mobile number should be exactly 10 digits"
            className="input-box"
          />
        </div>

        {/* Occupation */}
        <div className="form-group">
          <label>Occupation</label>
          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
            className="input-box"
          >
            <option value="">Select Occupation</option>
            <option value="Student">Student</option>
            <option value="Job holder">Job holder</option>
            <option value="Business professional">Business professional</option>
          </select>
        </div>

        {/* Monthly Income */}
        <div className="form-group">
          <label>Monthly Income</label>
          <input
            type="number"
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleChange}
            required
            className="input-box"
          />
        </div>

        {/* Monthly Expenses */}
        <div className="form-group">
          <label>Monthly Expenses</label>
          <input
            type="number"
            name="monthlyExpenses"
            value={formData.monthlyExpenses}
            onChange={handleChange}
            required
            className="input-box"
          />
        </div>

        {/* Monthly Savings */}
        <div className="form-group">
          <label>Monthly Savings</label>
          <p>₹ {formData.monthlySavings}</p>
        </div>

        {/* Aadhar Card */}
        <div className="form-group">
          <label>Aadhar Card Number</label>
          <div className="aadhar-input-group">
            {formData.aadharCardNumber.map((digit, index) => (
              <input
                key={index}
                type="text"
                name={`aadhar-${index}`}
                value={digit}
                onChange={(e) => {
                  const { value } = e.target;
                  if (value.match(/^\d?$/)) { // Allow only one digit (0-9)
                    const newAadhar = [...formData.aadharCardNumber];
                    newAadhar[index] = value;
                    setFormData({ ...formData, aadharCardNumber: newAadhar });

                    // Automatically move focus to the next input
                    if (value && index < 11) {
                      e.target.nextSibling.focus();
                    }
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !formData.aadharCardNumber[index] && index > 0) {
                    e.target.previousSibling.focus();
                  }
                }}
                maxLength="1"
                className="aadhar-input-box"
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileForm;
