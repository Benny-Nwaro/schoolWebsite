'use client'; // Mark as Client Component

import React from 'react'; // Import React
import {
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image, { StaticImageData } from 'next/image'; // Import next/image

// Define the interface for the component props
interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  title?: string; // Optional title
  message?: string; // Optional message
  imageSrc: string | StaticImageData; // Can be a URL string or imported image object
  details?: { [key: string]: any }; // Object with any key-value pairs
  actionLinkText?: string; // Optional link text
  onActionLinkClick?: () => void; // Optional click handler for the link
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onClose,
  title = 'Your free class has been booked!',
  message = 'Login to your account to see the details of your upcoming meeting/class',
  imageSrc, // Removed default empty string, should be provided
  details = {},
  actionLinkText = 'Login',
  onActionLinkClick,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='sm'
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '24px',
          padding: '16px',
          backgroundColor: 'gray.200',
          color: 'white',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        aria-label='close'
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'white',
          backgroundColor: '#1E2A5E',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#1E2A5E',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        {/* Title */}
        <Typography
          variant='h5'
          align='center'
          sx={{
            fontWeight: 700,
            fontSize: '1.5rem',
            marginBottom: '16px',
            color: '#171717',
          }}
        >
          {title}
        </Typography>

        {/* Illustration */}
        <Box display='flex' justifyContent='center' mb={2}>
          {/* Use next/image for optimized image loading */}
          <Image
            src={imageSrc}
            alt='Confirmation Illustration'
            width={300} // Provide appropriate width
            height={200} // Provide appropriate height
            style={{ maxWidth: '80%', height: 'auto', borderRadius: '12px' }} // Maintain aspect ratio
          />
        </Box>

        {/* Details Section */}
        {Object.keys(details).length > 0 && (
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '16px',
              color: '#1E2A5E',
              mb: 3,
              //   boxShadow:
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 700,
                fontSize: '16px',
                color: '#171717',
                mb: 2,
              }}
            >
              Class details
            </Typography>
            {Object.entries(details).map(([key, value], index) => (
              <Box
                display='flex'
                justifyContent='space-between'
                mb={1}
                key={index}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#414158',
                  }}
                  variant='body2'
                >
                  {key}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#171717',
                  }}
                  variant='body2'
                >
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Additional Message */}
        <Typography
          align='center'
          variant='body2'
          sx={{ color: '#414158', fontWeight: 400, fontSize: '16px' }}
        >
          <span
            style={{
              color: '#3198F5',
              fontWeight: 400,
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
            onClick={onActionLinkClick} // Ensure this handler is provided if actionLinkText is used
          >
            {actionLinkText}
          </span>{' '}
          {message}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
