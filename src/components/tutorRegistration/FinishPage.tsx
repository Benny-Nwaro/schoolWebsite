import React from 'react';
import { motion } from 'framer-motion';
import finish from "@/src/assets/images/finish.png"
import Image from 'next/image';

interface CongratulationsProps {
    onGoToDashboard: () => void;
}

const FinishPage: React.FC<CongratulationsProps> = ({ onGoToDashboard }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  ">
      

            {/* Graphic */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="mb-8"
            >
                {/* Replace this with your actual image or SVG. */}
                {/* You can use a placeholder image for now. */}
                <Image
                    src={finish} // Placeholder URL
                    alt="Congratulations Graphic"
                    // className="max-w-full h-auto"
                    height={300}
                    width={315.32867431640625}
                />
            </motion.div>

            {/* Text Content */}
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-black  mb-4">
                    Congratulations!
                </h2>
                <p className="text-black  mb-2">
                    You have successfully completed your account setup.
                </p>
                <p className="text-black ">
                    You will be invited for an interview shortly.
                </p>
            </div>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <button
                    onClick={onGoToDashboard}
                    className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full" // Added rounded-full
                >
                    Go to my dashboard →
                </button>
            </motion.div>
        </div>
    );
};

export default FinishPage;
