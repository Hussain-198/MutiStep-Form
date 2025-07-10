import { useState } from "react";

const Address = ({ onNext, onBack, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
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
      <h2 className="text-xl font-bold mb-4">Address</h2>
      <input
        className="w-full border p-2 mb-1 rounded"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      {errors.address && (
        <div className="text-red-500 text-sm mb-2">{errors.address}</div>
      )}
      <input
        className="w-full border p-2 mb-1 rounded"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      {errors.city && (
        <div className="text-red-500 text-sm mb-2">{errors.city}</div>
      )}
      <div className="flex justify-between">
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          onClick={onBack}
        >
          Back
        </button>
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

export default Address;
