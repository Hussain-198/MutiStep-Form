import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "../components/ProgressBar";
import PersonalInfo from "./PersonalInfo";
import Review from "./Review";
import Address from "./Address";

const steps = [
  { label: "Personal Info" },
  { label: "Address" },
  { label: "Review" },
];

// Unique transition: scale and fade
const variants = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
};

const initialFormData = {
  name: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
};

function Home() {
  const [formData, setFormData] = useState(initialFormData);
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  const handleSubmit = () => {
    alert("Form submitted");
    setFormData(initialFormData);
    setStep(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto">
        <ProgressBar steps={steps} currentStep={step} />
        <div className="bg-white rounded-lg shadow p-8">
          <AnimatePresence mode="wait" initial={false}>
            {step === 0 && (
              <motion.div
                key="step1"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <PersonalInfo
                  onNext={nextStep}
                  formData={formData}
                  setFormData={setFormData}
                />
              </motion.div>
            )}
            {step === 1 && (
              <motion.div
                key="step2"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Address
                  onNext={nextStep}
                  onBack={prevStep}
                  formData={formData}
                  setFormData={setFormData}
                />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="step3"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Review
                  onBack={prevStep}
                  onSubmit={handleSubmit}
                  formData={formData}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Home;
