const Review = ({ onBack, onSubmit, formData }) => (
  <>
    <h2 className="text-xl font-bold mb-4">Review</h2>
    <div className="mb-4 space-y-2">
      <div>
        <strong>Name:</strong> {formData.name}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Mobile:</strong> {formData.mobile}
      </div>
      <div>
        <strong>Address:</strong> {formData.address}
      </div>
      <div>
        <strong>City:</strong> {formData.city}
      </div>
    </div>
    <div className="flex justify-between">
      <button
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
        onClick={onBack}
      >
        Back
      </button>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  </>
);

export default Review;
