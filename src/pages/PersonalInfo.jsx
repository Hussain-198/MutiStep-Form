const PersonalInfo = ({ onNext, formData, setFormData }) => (
  <>
    <h2 className="text-xl font-bold mb-4">Personal Information</h2>
    <input
      className="w-full border p-2 mb-4 rounded"
      placeholder="Name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
    <input
      className="w-full border p-2 mb-4 rounded"
      placeholder="Email"
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
    <input
      className="w-full border p-2 mb-4 rounded"
      placeholder="Mobile Number"
      type="tel"
      value={formData.mobile}
      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
    />
    <div className="flex justify-end">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  </>
);

export default PersonalInfo;
