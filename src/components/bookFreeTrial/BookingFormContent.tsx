'use client'; // Mark as a Client Component

import React, { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react'; // Import React and specific event types
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box, Stack, Typography, IconButton, InputAdornment } from '@mui/material';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import axios from 'axios';
import PhoneInput, { CountryData } from 'react-phone-input-2'; // Import CountryData type if needed
import 'react-phone-input-2/lib/style.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

// --- Type Definitions ---

// Define the structure of the data passed from previous steps
interface CollectedData {
  subject?: string;
  schoolLevel?: string;
  goal?: string;
  location?: string;
  address?: string;
  [key: string]: any; // Allow other potential properties
}

// Custom component to wrap PhoneInput and add the Send OTP button
interface PhoneInputWithSendOTPProps {
  phoneNumberString: string;
  handlePhoneNumberChange: (value: string, data: CountryData | {}, event: ChangeEvent<HTMLInputElement>, formattedValue: string) => void;
  handleSendOtp: () => Promise<void>;
  otpSent: boolean;
  resendCooldown: number;
}

const PhoneInputWithSendOTP: React.FC<PhoneInputWithSendOTPProps> = ({
  phoneNumberString,
  handlePhoneNumberChange,
  handleSendOtp,
  otpSent,
  resendCooldown,
}) => {
  const phoneInputRef = useRef(null);
  return ( // Added explicit return type React.ReactElement if needed, but usually inferred
    <PhoneInputContainer>
      <PhoneInput
        // Removed the ref prop as react-phone-input-2 does not support it
        country={'us'}
        value={phoneNumberString} // Use the string value here
        onChange={handlePhoneNumberChange} // Keep the same handler
        inputProps={{ name: 'phone', required: true }}
        inputStyle={{ width: '100%', height: '40px' }}
        containerStyle={{ width: '100%' }}
      />
      <SendOTPButton
        sx={{
          bgcolor: otpSent ? 'green' : '#3198F5',
          color: 'white',
          fontSize: '12px',
          padding: '6px 12px',
          minWidth: '80px',
          height: '32px',
          position: 'absolute',
          top: '50%',
          right: '8px',
          transform: 'translateY(-50%)',
          '&:hover': { bgcolor: otpSent ? 'darkgreen' : '#297BCF' },
        }}
        onClick={handleSendOtp}
        disabled={otpSent && resendCooldown > 0}
      >
        {otpSent ? <span style={{ color: 'white' }}>Resend OTP ({resendCooldown}s)</span> : 'Send OTP'}
      </SendOTPButton>
    </PhoneInputContainer>
  );
};

// Define props for the main component
interface BookingFormContentProps {
  collectedData?: CollectedData | null; // Make collectedData optional and allow null
}

const BookingFormContent: React.FC<BookingFormContentProps> = ({ collectedData }) => {
  // --- State Variables with Types ---
  const [role, setRole] = useState<'PARENT' | 'STUDENT'>('PARENT');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>(''); // Raw phone number from react-phone-input-2
  const [phoneNumberString, setPhoneNumberString] = useState<string>(''); // Formatted string if needed separately
  const [otp, setOtp] = useState<string>('');
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otpVerified, setOtpVerified] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [resendCooldown, setResendCooldown] = useState<number>(0);
  const router = useRouter(); // Use Next.js router
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>('');
  const [subjectArea, setSubjectArea] = useState<string>('');
  const [schoolLevel, setSchoolLevel] = useState<string>('');
  const [reasons, setReasons] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [gender, setGender] = useState<string>(''); // Consider specific types like 'Male' | 'Female' | 'Other' if applicable
  const [nationality, setNationality] = useState<string>('');
  const [userId] = useState<string>(uuidv4()); // userId is constant after generation
  //const [paymentMethod] = useState<string>("Free"); // paymentMethod is constant

  useEffect(() => {
    if (collectedData) {
      setSubjectArea(collectedData.subject || '');
      setSchoolLevel(collectedData.schoolLevel || '');
      setReasons(collectedData.goal || '');
      if (collectedData.location === "Student's home" || collectedData.location === "Teacher's place") {
        setAddress(collectedData.address || '');
      }
    }
  }, [collectedData]);

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  useEffect(() => {
    const isValid =
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      email.includes('@') &&
      phoneNumber.length >= 10 &&
      otpVerified &&
      password.trim() !== '' &&
      validatePassword(password) &&
      true; // Always valid for these fields

    setIsFormValid(isValid);
  }, [firstName, lastName, email, phoneNumber, otpVerified, password]);

  useEffect(() => {
    if (password.length > 0) {
      if (!validatePassword(password)) {
        setPasswordError(
          'Password must be at least 8 characters long and contain at least one uppercase letter and one symbol.'
        );
      } else {
        setPasswordError('');
      }
    } else {
      setPasswordError('');
    }
  }, [password]);

  // Type the parameters for the phone number change handler
  const handlePhoneNumberChange = (
    value: string,
    data: CountryData | {}, // data can be CountryData or an empty object
    event: ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ): void => {
    setPhoneNumber(value);
    setPhoneNumberString(formattedValue); // Store the formatted value if needed elsewhere
  };
  const handleSendOtp = async (): Promise<void> => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      console.log("Sending OTP to:", phoneNumber, "with email:", email);

      const response = await axios.post(
        "https://testbackend.educify.org/api/api/v1/students/send-otp",
        { phone: phoneNumber, email: email } // Use phoneNumber here
      );

      console.log("OTP Response:", response.data);

      if (response.data) { // Check if response.data itself is truthy (API might return empty success)
        setOtpSent(true);
        setResendCooldown(30);
        alert("OTP sent successfully!");

        const interval = setInterval(() => {
          setResendCooldown((prev) => {
            if (prev === 1) {
              clearInterval(interval);
              setOtpSent(false);
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        alert(response.data.message || "Failed to send OTP. Try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", (error as any).response?.data || (error as any).message);
      alert((error as any).response?.data?.message || "Failed to send OTP. Try again.");
    }
  };

  const handleVerifyOtp = async (): Promise<void> => {
    console.log("Verifying OTP with:", { email, phone: phoneNumber, code: otp });

    if (!email) {
      alert("Email is required for OTP verification.");
      return;
    }

    try {
      const response = await axios.post(
        "https://testbackend.educify.org/api/api/v1/students/verify-otp",
        {
          email: email.trim(),
          phone: phoneNumber, // Use phoneNumber here
          code: otp.trim(),
        }
      );

      console.log("OTP Verified Response:", response.data);

      if (response.data) { // Check if response.data itself is truthy
        setOtpVerified(true);
        alert("OTP verified successfully!");
      } else {
        alert(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", (error as any).response?.data || (error as any).message);
      alert((error as any).response?.data?.message || "Failed to verify OTP. Please try again.");
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!isFormValid) {
      alert('Please fill in all required fields, ensure the OTP is verified, and that the password is valid.');
      return;
    }

    // 1. Combine data from the modal (collectedData) and this form's state
    const finalSignupData = {
      // Data from previous steps (passed via props)
      subjectArea: collectedData?.subject || '',
      schoolLevel: collectedData?.schoolLevel || '',
      reasons: collectedData?.goal || '',
      locationPreference: collectedData?.location || '',
      address: collectedData?.address || '', // Use address from collectedData if available
      // Data from this form
      userId: userId,
      email: email,
      role: 'STUDENT', // Role is always STUDENT for this endpoint
      lastName: lastName,
      firstName: firstName,
      password: password,
      phone: phoneNumber,
      paymentMethod: 'WALLET', // Hardcoded as per previous requirement
      // Optional fields - set defaults or leave empty if not collected yet
      gender: gender || '',
      nationality: nationality || '',
      // profileImage: {}, // Add if you collect profile image data
      // limited: "", // Add if needed
    };

    // 2. Store the combined data in sessionStorage to pass to the next step
    sessionStorage.setItem('pendingSignupData', JSON.stringify(finalSignupData));

    // 3. Navigate to the scheduling page
    router.push('/schedule-class'); // Adjust this route if needed
  };

  const handleClickShowPassword = (): void => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <>
      <Box width="100%" maxWidth={550} height={540} mx="auto" mt={15}>
        <ToggleSwitch sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <ToggleButton
            isActive={role === 'PARENT'}
            onClick={() => setRole('PARENT')} // Type inference works here
            sx={{
              fontSize: '12px',
              padding: '4px 12px',
              height: '32px',
              minWidth: '80px',
              borderRadius: '4px',
              bgcolor: role === 'PARENT' ? '#3198F5' : '#f0f0f0',
              color: role === 'PARENT' ? 'white' : '#000',
              '&:hover': { bgcolor: role === 'PARENT' ? '#297BCF' : '#e0e0e0' },
            }}
          >
            Parent
          </ToggleButton>
          <ToggleButton
            isActive={role === 'STUDENT'}
            onClick={() => setRole('STUDENT')} // Type inference works here
            sx={{
              fontSize: '12px',
              padding: '4px 12px',
              height: '32px',
              minWidth: '80px',
              borderRadius: '4px',
              bgcolor: role === 'STUDENT' ? '#3198F5' : '#f0f0f0',
              color: role === 'STUDENT' ? 'white' : '#000',
              '&:hover': { bgcolor: role === 'STUDENT' ? '#297BCF' : '#e0e0e0' },
            }}
          >
            Student
          </ToggleButton>
        </ToggleSwitch>

        <Stack
          gap={4}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
          className="!mt-4"
          sx={{ marginTop: '8px' }}
        >
          <TextField
            autoFocus
            margin="dense"
            label="First Name*"
            type="text"
            fullWidth
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            size="small"
            sx={{ marginBottom: 2, marginTop: '0px' }}
          />
          <TextField
            margin="dense"
            label="Last Name*"
            type="text"
            fullWidth
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            size="small"
            sx={{ marginBottom: 2, marginTop: '0px' }}
          />
        </Stack>
        <TextField
          margin="dense"
          label="Email Address*"
          type="email"
          fullWidth
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          size="small"
          className="!mt-4"
          sx={{ marginTop: '8px' }}
        />

        <PhoneInputWithSendOTP
          phoneNumberString={phoneNumberString} // Pass the string state here
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleSendOtp={handleSendOtp}
          otpSent={otpSent}
          resendCooldown={resendCooldown}
        />

        <TextField
          margin="dense"
          label="OTP from SMS*"
          type="text"
          fullWidth
          value={otp}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)}
          size="small"
          sx={{ marginTop: '8px' }}
          InputProps={{
            endAdornment: (
              <Button
                sx={{
                  bgcolor: otpVerified ? 'green' : '#3198F5',
                  color: 'white',
                  fontSize: '10px',
                  padding: '2px 6px',
                  minWidth: '75px',
                  height: '32px',
                  '&:hover': { bgcolor: otpVerified ? 'darkgreen' : '#297BCF' },
                }}
                onClick={handleVerifyOtp}
                disabled={otpVerified}
              >
                {otpVerified ? 'Verified' : 'Verify'}
              </Button>
            ),
          }}
        />

        <Stack
          gap={4}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
          className="!mt-4"
          sx={{ marginTop: '8px' }}
        >
          <TextField
            margin="dense"
            label="Create Password*"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            size="small"
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        {/*<TextField
          margin="dense"
          label="Subject*"
          type="text"
          fullWidth
          value={subjectArea}
          onChange={(e) => setSubjectArea(e.target.value)}
          size="small"
          sx={{ marginTop: '8px' }}
        />
        <TextField
          margin="dense"
          label="School Level*"
          type="text"
          fullWidth
          value={schoolLevel}
          onChange={(e) => setSchoolLevel(e.target.value)}
          size="small"
          sx={{ marginTop: '8px' }}
        />
        <TextField
          margin="dense"
          label="Reasons*"
          type="text"
          fullWidth
          value={reasons}
          onChange={(e) => setReasons(e.target.value)}
          size="small"
          sx={{ marginTop: '8px' }}
        />
        <TextField
          margin="dense"
          label="Address*"
          type="text"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          size="small"
          sx={{ marginTop: '8px' }}
        />
        <TextField
          margin="dense"
          label="Gender*"
          type="text"
          fullWidth
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          size="small"
          sx={{ marginTop: '8px' }}
        />
        <TextField
          margin="dense"
          label="Nationality*"
          type="text"
          fullWidth
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          size="small"
          sx={{ marginTop: '8px' }}
        />*/}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '18px',
            width: '100%',
          }}
        >
          <StyledButton
            sx={{ maxWidth: 300, width: '100%', textAlign: 'center' }}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Schedule a Free Class
          </StyledButton>
        </Box>

        <Typography
          mt={2}
          fontWeight={400}
          fontSize={14}
          color="#414158"
          sx={{ textAlign: 'center' }}
        >
          By continuing, you agree to our Terms and Conditions.
        </Typography>
      </Box>
    </>
  );
};

const ToggleSwitch = styled(Box)(() => ({ // Use function form for better type inference with themes if needed later
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#333',
  borderRadius: '20px',
  padding: '4px',
  width: '200px',
  margin: '0 auto 16px',
}));

const ToggleButton = styled(Button)<{ isActive: boolean }>(({ isActive }) => ({
  flex: 1,
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: isActive ? 'bold' : 'normal',
  backgroundColor: isActive ? '#fff' : 'transparent',
  color: isActive ? '#000' : '#fff',
  borderRadius: '16px',
  padding: '6px 12px',
  transition: 'all 0.3s',
  minWidth: '60px',
  '&:hover': { backgroundColor: isActive ? '#f0f0f0' : 'transparent' },
}));

const StyledButton = styled(Button)`
  background-color: #3d8bff;
  color: #fff;
  border-radius: 24px;
  padding: 10px 24px;
  text-transform: none;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  &:hover {
    background-color: #3b7ce7;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Styled components for the custom PhoneInput wrapper
const PhoneInputContainer = styled(Box)({
  position: 'relative',
  marginBottom: '10px',
});

const SendOTPButton = styled(Button)({
  position: 'absolute',
  top: '50%',
  right: '8px',
  transform: 'translateY(-50%)',
  zIndex: 10, // Ensure the button is on top
});

export default BookingFormContent;
