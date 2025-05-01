'use client'; // Add this directive because useState is used
import React, { useState } from 'react';
import { Box, } from '@mui/material';
import Header from '@/src/components/bookFreeTrial/Header';
import BodyPart from '@/src/components/bookFreeTrial/BodyPart';
import HowItWorks from '@/src/components/bookFreeTrial/HowItWorks';
import TutorSelectionModal from '@/src/components/bookFreeTrial/TutorSelectionModal';
import OurLessons from '@/src/components/bookFreeTrial/OurLessons';
import TransformLearning from '@/src/components/bookFreeTrial/TransformLearning';
import SecureFuture from '@/src/components/bookFreeTrial/SecureFuture';
import FAQ from '@/src/components/bookFreeTrial/FAQ';
import TestimonialSection from '@/src/components/bookFreeTrial/TestimonialSection';
import Footer from '@/src/components/bookFreeTrial/Footer';



export default function Home() {
  const [openTutorModal, setOpenTutorModal] = useState(false);

  const handleTutorModalOpen = () => setOpenTutorModal(true);
  const handleCloseTutorModal = () => setOpenTutorModal(false); // Simplified close handler

  return (
    <Box sx={{ overflowX: 'hidden' }}> {/* Add overflowX: 'hidden' here */}
      <Header />
      <Box>
        <BodyPart handleModalOpen={handleTutorModalOpen} />
        <HowItWorks handleModalOpen={handleTutorModalOpen} /> {/* This might need adjustment */}
      </Box>
      {openTutorModal && (
        <TutorSelectionModal open={openTutorModal} onClose={handleCloseTutorModal} />
      )}
      <Box><OurLessons/></Box>
      <Box>
        <TransformLearning handleModalOpen={handleTutorModalOpen} />
        <SecureFuture/>
        <FAQ/>
        <TestimonialSection/>
        <Footer/>
      </Box>
    </Box>
  );
}
