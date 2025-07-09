const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="mb-8">
      <div className="w-full flex items-center justify-between">
        {steps.map((step, idx) => (
          <>
            <div key={step.label} className="flex items-center">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2
                    ${
                      currentStep > idx
                        ? "bg-blue-500 border-blue-500 text-white"
                        : currentStep === idx
                        ? "bg-blue-100 border-blue-500 text-blue-600"
                        : "bg-gray-200 border-gray-300 text-gray-400"
                    }
                  `}
                >
                  {currentStep > idx ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    idx + 1
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium text-center ${
                    currentStep === idx
                      ? "text-blue-600"
                      : currentStep > idx
                      ? "text-blue-400"
                      : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
                {step.optional && (
                  <span className="text-xs text-gray-400">Optional</span>
                )}
              </div>
            </div>
            {/* Connector */}
            {idx < steps.length - 1 && (
              <div
                className="flex-1 h-0.5 mx-2"
                style={{
                  background: currentStep > idx ? "#3b82f6" : "#e5e7eb",
                }}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
