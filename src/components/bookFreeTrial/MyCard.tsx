'use client'; // Mark as Client Component due to useState

import React, { useState } from 'react'; // Import React and useState
import styled from '@emotion/styled'
import { Box, Button, ImageListItem, Stack } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image, { StaticImageData } from 'next/image'; // Import next/image
import BookingModal from './BookingModal'
import TutorSelectionModal from './TutorSelectionModal'

// Define props interface
interface MyCardProps {
  headingText: string;
  paragraphText: string;
  imageUrl: string | StaticImageData; // Allow string URL or imported image object
}

// Define theme type for styled component if needed, though not used in current styles
// import { Theme } from '@mui/material/styles';

const GradientButton = styled(Button)({
  width: '224px', // Adjusted width for a larger button
  height: '48px', // Increased height for a substantial appearance
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  letterSpacing: '-0.2px',
  color: '#FFFFFF',
  background: 'linear-gradient(90deg, #F6515B 0%, #A040C1 51.11%, #2F89FD 100%)', // Gradient background
  border: '1.5px solid #FFFFFF',
  boxShadow: '-8px -8px 24px rgba(238, 79, 101, 0.2), 8px 8px 24px rgba(55, 132, 249, 0.4)',
  borderRadius: '70px', // Rounded corners
  flex: 'none',
  order: 0,
  flexGrow: 0,
  padding: '20px', // Added padding for spacing
  '&:hover': {
    background: 'linear-gradient(90deg, #F6515B 10%, #A040C1 61.11%, #2F89FD 110%)', // Gradient hover effect
  },
});

const MyCard: React.FC<MyCardProps> = ({ headingText, paragraphText, imageUrl }) => {
  // Add explicit types for state
  const [open, setOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true)
  }
  const handleClose = (): void => {
    setOpen(false)
  }
  const handleModalOpen = (): void => {
    setModalOpen(true)
  }
  return (
    <>
      <Box className='container' maxWidth={1000} marginX='auto'>
        <Stack
          spacing={{ xs: 2, sm: 4, md: 20 }}
          direction={{ xs: 'column', sm: 'row' }}
        >
          <ImageListItem className='w-full '>
            {/* Use next/image */}
            <Image
              className='rounded-lg'
              src={imageUrl}
              alt={headingText}
              width={500} // Provide appropriate width (adjust as needed)
              height={300} // Provide appropriate height (adjust as needed)
            />
          </ImageListItem>
          <CardContent>
            <Typography
              color='#171717'
              fontWeight={700}
              fontSize={24}
              textAlign='center'
              gutterBottom
              variant='h5'
              component='div'
              sx={{
                width: '380px',
                height: '58px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                lineHeight: '120%',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.311752px',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {headingText}
            </Typography>
            <Typography
              color='#414158'
              fontWeight={400}
              fontSize={20}
              textAlign='center'
              variant='body2'
              sx={{
                width: '380px',
                height: '180px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                lineHeight: '30px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.233814px',
                order: 1,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {paragraphText}
            </Typography>
          </CardContent>
        </Stack>
        <Box
          className="mx-auto max-w-[250px] pt-4 md:pt-12 lg:pt-20"
          display="flex"
          justifyContent="center"
          sx={{
            p: 10, // Adds padding of theme.spacing(2) (default: 16px) on all sides
          }}
        >
          <GradientButton variant='contained' onClick={handleModalOpen}>
            Book a free class
          </GradientButton>
        </Box>
      </Box>

      {isModalOpen && (
        <TutorSelectionModal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          // Add onSelectData prop if TutorSelectionModal requires it
          // onSelectData={(data) => console.log('Tutor selected:', data)}
        />
      )}

      {open && <BookingModal onClose={handleClose} open={open} />}
    </>
  )
};

export default MyCard;
