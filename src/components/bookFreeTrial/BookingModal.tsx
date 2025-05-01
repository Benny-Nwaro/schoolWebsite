'use client'; // Mark as Client Component due to useState and DOM interaction

import React, { useState, ChangeEvent } from 'react'; // Import React and event types
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle, { DialogTitleProps } from '@mui/material/DialogTitle' // Import DialogTitleProps
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

// --- Type Definitions ---

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

// Interface for the close button props, extending DialogTitleProps
interface DialogTitleWithCloseProps extends DialogTitleProps {
  onClose: () => void;
}

// Custom Dialog Title with Close Button
const BootstrapDialogTitle = (props: DialogTitleWithCloseProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const BookingModal: React.FC<BookingModalProps> = ({ onClose, open }) => {
  // --- State Variables with Types ---
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [childGrade, setChildGrade] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter(); // Use Next.js router

  // --- Handlers ---
  const handleSendOtp = (): void => {
    console.log('OTP sent to:', phoneNumber)
    // Add actual OTP sending logic here (e.g., API call)
  };

  const handleVerifyOtp = (): void => {
    console.log('Verifying OTP:', otp);
    // Add actual OTP verification logic here
  };

  const handleSubmit = (): void => {
    console.log('Form submitted:', {
      name,
      email,
      subject,
      phoneNumber,
      otp,
      childGrade,
      password,
      confirmPassword,
    });

    // Add actual form submission logic (e.g., API call)

    // Basic password match check (improve as needed)
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Navigate after successful submission (or API call success)
    router.push('/bookclass'); // Use router.push
    onClose(); // Close the modal
  }

  return (
    <Dialog
      maxWidth='sm'
      scroll='body'
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          height: '650px', // Set the modal height here
          maxHeight: '90vh', // Optional, prevents it from exceeding viewport height
          borderRadius: 10,
        },
      }}
    >
      <BootstrapDialogTitle
        onClose={onClose} // Pass onClose to the custom title
        fontWeight={700}
        fontSize={32}
        color='#171717'
      >
        Book a free class with us
      </BootstrapDialogTitle>
      <Typography
        fontWeight={500}
        fontSize={16}
        color='#414158'
        sx={{ textAlign: 'center' }}
      >
        limited spot Available
      </Typography>
      <DialogContent
        sx={{
          height: 'calc(500px - 128px)',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <TextField
          autoFocus
          margin='dense'
          label='Parents Name*'
          type='text'
          fullWidth
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          size='small'
          sx={{ mb: 2 }}
        />
        <TextField
          margin='dense'
          label='Parents Email Address*'
          type='email'
          fullWidth
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          size='small'
          className='!mt-4'
        />

        <Stack
          gap={4}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent='space-between'
          className='!mt-4'
        >
          <FormControl fullWidth margin='dense' size='small'>
            <InputLabel>Choose Subject*</InputLabel>
            <Select
              value={subject}
              onChange={(e: SelectChangeEvent<string>) => setSubject(e.target.value)}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='Math'>Math</MenuItem>
              <MenuItem value='Science'>Science</MenuItem>
              {/* Add more subjects as needed */}
            </Select>
          </FormControl>

          <FormControl fullWidth margin='dense' size='small'>
            <InputLabel>Child Grade/Class in School*</InputLabel>
            <Select
              value={childGrade}
              onChange={(e: SelectChangeEvent<string>) => setChildGrade(e.target.value)}
            >
              <MenuItem value='Grade 1'>Grade 1</MenuItem>
              <MenuItem value='Grade 2'>Grade 2</MenuItem>
              {/* Add more grades as needed */}
            </Select>
          </FormControl>
        </Stack>

        <TextField
          margin='dense'
          label='Parents Mobile Number*'
          type='text'
          fullWidth
          value={phoneNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
          InputProps={{
            endAdornment: (
              <Box className=' w-32 flex justify-end'>
                <Button
                  sx={{ bgcolor: '#3198F5', color: 'white' }}
                  fullWidth
                  onClick={handleSendOtp}
                >
                  Send OTP
                </Button>
              </Box>
            ),
          }}
          size='small'
        />
        <TextField
          margin='dense'
          label='OTP from SMS*'
          type='text'
          fullWidth
          value={otp}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)}
          size='small'
          InputProps={{
            endAdornment: (
              <Box className=' w-32 flex justify-end'>
                <Button
                  sx={{ bgcolor: '#3198F5', color: 'white' }}
                  fullWidth
                  onClick={handleVerifyOtp} // Changed to verify OTP
                >
                  Verify
                </Button>
              </Box>
            ),
          }}
        />

        <Stack
          gap={4}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent='space-between'
          className='!mt-4'
        >
          <TextField
            margin='dense'
            label='Create Password*'
            type='password'
            fullWidth
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            size='small'
          />
          <TextField
            margin='dense'
            label='Confirm Password*'
            type='password'
            fullWidth
            value={confirmPassword} // Bind to confirmPassword state
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} // Update confirmPassword state
            size='small'
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', display: 'grid' }}>
        <StyledButton
          sx={{ maxWidth: 300, mx: 'auto' }}
          onClick={handleSubmit} // Call the actual submit handler
        >
          Schedule a Free Class
        </StyledButton>

        <Typography
          mt={2}
          fontWeight={400}
          fontSize={14}
          color='#414158'
          sx={{ textAlign: 'center' }}
        >
          Hammer ocean next were supervisor seat first-order hurting version
          teeth. Squad hard dive will reality terms and conditions effects
          expectations skulls. Impact.
        </Typography>
      </DialogActions>
    </Dialog>
  )
}

const StyledButton = styled(Button)`
  background-color: #3d8bff; /* Set the blue color */
  color: #fff; /* White text color */
  border-radius: 24px; /* Rounded corners to match the image */
  padding: 10px 24px; /* Adjust padding for size */
  text-transform: none; /* Remove uppercase transformation */
  font-size: 16px; /* Set font size for readability */
  font-weight: 500; /* Font weight for better readability */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16); /* Subtle shadow for depth */

  &:hover {
    background-color: #3b7ce7; /* Slightly darker shade on hover */
  }
`;

export default BookingModal
