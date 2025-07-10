import { useState } from "react";

const PersonalInfo = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10,}$/.test(formData.mobile))
      newErrors.mobile = "Invalid mobile number";
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onNext();
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <input
        className="w-full border p-2 mb-1 rounded"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {errors.name && (
        <div className="text-red-500 text-sm mb-2">{errors.name}</div>
      )}
      <input
        className="w-full border p-2 mb-1 rounded"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && (
        <div className="text-red-500 text-sm mb-2">{errors.email}</div>
      )}
      <input
        className="w-full border p-2 mb-1 rounded"
        placeholder="Mobile Number"
        type="tel"
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
      />
      {errors.mobile && (
        <div className="text-red-500 text-sm mb-2">{errors.mobile}</div>
      )}
      <div className="flex justify-end">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
