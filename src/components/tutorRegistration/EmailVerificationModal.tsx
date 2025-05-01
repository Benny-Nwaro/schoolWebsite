import React, { useState, useEffect, useRef } from 'react';
import emailVerification from "@/src/assets/images/emailVerification.png";
import Image from 'next/image';


interface EmailVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: (code: string) => void;
}

const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  isOpen,
  onClose,
  onProceed,
}) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (isOpen) {
      setCode(Array(6).fill(''));
      inputRefs.current[0]?.focus();
    }
  }, [isOpen]);

  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d$/.test(val)) {
      const newCode = [...code];
      newCode[index] = val;
      setCode(newCode);
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (val === '') {
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (code[index] === '') {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        const newCode = [...code];
        newCode[index] = '';
        setCode(newCode);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData('Text').replace(/\D/g, '').slice(0, 6);
    if (pasteData.length === 6) {
      const pasteArray = pasteData.split('');
      setCode(pasteArray);
      pasteArray.forEach((val, idx) => {
        if (inputRefs.current[idx]) inputRefs.current[idx].value = val;
      });
      inputRefs.current[5]?.focus();
    }
  };

  const handleProceed = () => {
    const joinedCode = code.join('');
    if (joinedCode.length === 6) {
      onProceed(joinedCode);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-sm mx-4 text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6">
          <Image
            src={emailVerification}
            alt="Email Verification"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Please verify your email
          </h3>
          <p className="text-sm text-gray-500 text-ce">
            Enter the six digit code we sent to your email address to verify your new Educify account:
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => {
                inputRefs.current[index] = el!;
              }}
              value={code[index]}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-10 h-10 rounded-md border border-gray-300 text-center text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          ))}
        </div>

        <button
          onClick={handleProceed}
          disabled={code.includes('')}
          className={`w-full py-3 rounded-full text-white font-semibold transition ${
            code.includes('')
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-yellow-500 hover:bg-yellow-600'
          }`}
        >
          Proceed →
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationModal;
