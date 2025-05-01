'use client'; // Mark as Client Component

import React, { ReactNode } from 'react'; // Import React and ReactNode
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  DialogProps, // Import DialogProps for maxWidth type
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Define the interface for the component props
interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  title?: string; // Title is optional
  children: ReactNode; // Children are required
  actions?: ReactNode; // Actions are optional
  maxWidth?: DialogProps['maxWidth']; // Use type from DialogProps
  dialogHeight?: string | number; // Allow string or number for height
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = 'sm',
  dialogHeight = '650px',
}) => { // Added type annotation for props
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      sx={{
        '& .MuiDialog-paper': {
          width: '80vw', // Consider making this responsive or a prop
          height: dialogHeight,
          maxHeight: '90vh',
          borderRadius: 5, // Consider using theme.shape.borderRadius * factor
          padding: '16px', // Consider using theme.spacing
          overflow: 'hidden',
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        aria-label='close'
        onClick={onClose}
        size='small'
        sx={{
          position: 'absolute',
    top: 10, // Consider using theme.spacing
    right: 10, // Positions it 10px from the right
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '50%',
    boxShadow: 3,
    zIndex: 1301,
    '&:hover': {
      backgroundColor: '#f0f0f0',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Title */}
      {title && (
        <DialogTitle
          sx={{ textAlign: 'center', fontWeight: 700, fontSize: 24 }}
        >
          {title}
        </DialogTitle>
      )}

      {/* Children */}
      <DialogContent
        sx={{
          height: 'calc(500px - 128px)', // Adjust height as needed
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center content vertically
          overflow: 'hidden', // Remove scrollbar
          padding: 0, // Remove extra padding
        }}
      >
        {children}
      </DialogContent>

      {/* Actions */}
      {actions && (
        <DialogActions sx={{ justifyContent: 'center', display: 'grid' }}>
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ReusableModal;
