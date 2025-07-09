const Address = ({ onNext, onBack, formData, setFormData }) => (
  <>
    <h2 className="text-xl font-bold mb-4">Address</h2>
    <input
      className="w-full border p-2 mb-4 rounded"
      placeholder="Address"
      value={formData.address}
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
    />
    <input
      className="w-full border p-2 mb-4 rounded"
      placeholder="City"
      value={formData.city}
      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
    />
    <div className="flex justify-between">
      <button
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
        onClick={onBack}
      >
        Back
      </button>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  </>
);

export default Address;
