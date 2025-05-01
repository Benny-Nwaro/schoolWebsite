'use client'; // Mark as Client Component due to useState

import React, { useState } from 'react';
import TutorSelectionModal from './TutorSelectionModal';
import BookingComponent from './BookingComponent';

function BookFlow() {
  // Add explicit types for state
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedTutorData, setSelectedTutorData] = useState<any | null>(null); // Replace 'any' with a specific tutor data type if available

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Define a handler for when data is selected in the modal
  const handleSelectData = (data: any) => { // Replace 'any' with the specific type
    setSelectedTutorData(data);
    handleCloseModal(); // Optionally close modal on selection
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Select Tutor</button>

      <TutorSelectionModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSelectData={handleSelectData} // Pass the handler
      />

      {selectedTutorData && (
        <BookingComponent selectedData={selectedTutorData} />
      )}
    </div>
  );
}

export default BookFlow;



//import { useState, useEffect, useRef } from 'react';
//import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
//import { Box, Stack, Typography, IconButton, InputAdornment } from '@mui/material';
//import styled from '@emotion/styled';
//import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
//import PhoneInput from 'react-phone-input-2';
//import 'react-phone-input-2/lib/style.css';
//import Visibility from '@mui/icons-material/Visibility';
//import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';

// Custom component to wrap PhoneInput and add the Send OTP button
{/*const PhoneInputWithSendOTP = ({
  phoneNumberString,
  handlePhoneNumberChange,
  handleSendOtp,
  otpSent,
  resendCooldown,
}) => {
  const phoneInputRef = useRef(null);
  return (
    <PhoneInputContainer>
      <PhoneInput
        ref={phoneInputRef}
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

const BookingFormContent = ({ collectedData }) => {
  const [role, setRole] = useState('PARENT'); // Changed to uppercase
  const [firstName, setFirstName] = useState(''); // Split name into first and last
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberString, setPhoneNumberString] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [subjectArea, setSubjectArea] = useState('');
  const [schoolLevel, setSchoolLevel] = useState('');
  const [reasons, setReasons] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

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

  const validatePassword = (password) => {
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
      // subjectArea.trim() !== '' && // Removed from validation
      // schoolLevel.trim() !== '' && // Removed from validation
      // reasons.trim() !== '' && // Removed from validation
      // address.trim() !== '' && // Removed from validation
      // gender.trim() !== '' && // Removed from validation
      // nationality.trim() !== ''; // Removed from validation
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

  const handlePhoneNumberChange = (value, data) => {
    setPhoneNumber(value);
    setPhoneNumberString(value);
  };

  const handleSendOtp = async () => {
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

      if (response.data) {
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
      console.error("Error sending OTP:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to send OTP. Try again.");
    }
  };

  const handleVerifyOtp = async () => {
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

      if (response.data) {
        setOtpVerified(true);
        alert("OTP verified successfully!");
      } else {
        alert(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to verify OTP. Please try again.");
    }
  };

  const handleSubmit = async () => {
    if (!isFormValid) {
      alert('Please fill in all required fields, ensure the OTP is verified, and that the password is valid.');
      return;
    }

    try {
      const response = await axios.post(
        "https://testbackend.educify.org/api/api/v1/students/signup",
        {
          user: {
            email: email,
            role: role,
            subjectArea: subjectArea,
            schoolLevel: schoolLevel,
            reasons: reasons,
            scheduleTime: new Date().toISOString(), // You might need to adjust this
            locationPreference: collectedData.location || "", // You might want to add this field later
            lastName: lastName,
            firstName: firstName,
            password: password,
            limited: "", // You might want to add this field later
            address: address,
            phone: phoneNumber,
            profileImage: {}, // You might want to add this field later
            gender: gender,
            nationality: nationality,
          },
        }
      );

      console.log("Signup Response:", response.data);

      if (response.data) {
        alert("Signup successful!");
        navigate('/bookclass'); // Navigate after successful signup
      } else {
        alert(response.data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box width="100%" maxWidth={550} height={540} mx="auto" mt={15}>
        <ToggleSwitch sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <ToggleButton
            active={role === 'PARENT'}
            onClick={() => setRole('PARENT')}
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
            active={role === 'STUDENT'}
            onClick={() => setRole('STUDENT')}
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
            onChange={(e) => setFirstName(e.target.value)}
            size="small"
            mb={2}
            sx={{ marginTop: '0px' }}
          />
          <TextField
            margin="dense"
            label="Last Name*"
            type="text"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            size="small"
            mb={2}
            sx={{ marginTop: '0px' }}
          />
        </Stack>
        <TextField
          margin="dense"
          label="Email Address*"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setOtp(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
        </Stack>*/}
        {/* <FormControl fullWidth margin="dense" size="small" sx={{ marginTop: '8px' }}>
          <InputLabel>Choose Subject*</InputLabel>
          <Select value={subjectArea} onChange={(e) => setSubjectArea(e.target.value)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Maths">Maths</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            {/* Add more subjects as needed */}
          {/* </Select>
        </FormControl> */}
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
        />
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

const ToggleSwitch = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#333',
  borderRadius: '20px',
  padding: '4px',
  width: '200px',
  margin: '0 auto 16px',
});

const ToggleButton = styled(Button)(({ active }) => ({
  flex: 1,
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: active ? 'bold' : 'normal',
  backgroundColor: active ? '#fff' : 'transparent',
  color: active ? '#000' : '#fff',
  borderRadius: '16px',
  padding: '6px 12px',
  transition: 'all 0.3s',
  minWidth: '60px',
  '&:hover': { backgroundColor: active ? '#f0f0f0' : 'transparent' },
}));

const StyledButton = styled(Button)({
  backgroundColor: '#3d8bff',
  color: '#fff',
  borderRadius: '24px',
  padding: '10px 24px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '500',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  '&:hover': { backgroundColor: '#3b7ce7' },
  '&:disabled': { backgroundColor: '#ccc', cursor: 'not-allowed' },
});

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

export default BookingFormContent; */}
