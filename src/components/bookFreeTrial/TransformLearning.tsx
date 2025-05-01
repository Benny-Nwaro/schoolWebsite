'use client'; // Mark as Client Component due to interactivity

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image, { StaticImageData } from 'next/image'; // Import next/image
import girlImage from '@/src/assets/images/girl.png'; // Adjusted path assuming '@' alias points to src/

// Define props interface
interface TransformLearningProps {
  handleModalOpen: () => void;
}

const TransformLearning: React.FC<TransformLearningProps> = ({ handleModalOpen }) => {
  return (
    <Container maxWidth="xl" sx={{
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Example shadow
      bgcolor: '#3198F5',
      borderRadius: '16px',
      p: { xs: 2, sm: 3, md: 4 }, // Responsive padding for the container
      my:4
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on smaller screens
          alignItems: "center",
          // Removed padding here, handled by Container 'p' prop
          width: "100%",
          minHeight: { xs: "auto", md: "450px" }, // Use minHeight, slightly reduced
          position: "relative",
          isolation: "isolate",
        }}
      >
        {/* Left Section - Text Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 4 }, // Responsive gap using theme spacing
            maxWidth: { xs: '100%', md: '695px' }, // Added maxWidth for larger screens
            width: '100%', // Ensures it takes full width on smaller screens
            zIndex: 1,
            textAlign: { xs: 'center', md: 'left' }, // Center text on mobile
            alignItems: { xs: 'center', md: 'flex-start' }, // Center button on mobile
          }}
        >
          {/* Title & Description */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "40px" }, // Slightly smaller title on smaller screens
                fontWeight: 'bold', // Use string for consistency
                lineHeight: { xs: 1.2, md: '36px' }, // Adjust line height for responsiveness
                letterSpacing: "-1.2px",
                color: "#FFFFFF",
              }}
            >
              Transform Your Child’s Learning Experience
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '15px', sm: '16px' }, // Slightly smaller on extra small screens
                fontWeight: 400,
                lineHeight: { xs: 1.5, sm: '24px' }, // Adjust line height
                letterSpacing: "-0.2px",
                color: "#EDEEF0",
              }}
            >
              We believe in <b>empowering young minds</b> through accessible,{" "}
              <b>high-quality education</b> tailored to their unique needs. As a
              global EdTech platform, we connect students with{" "}
              <b>expert tutors</b> in a safe, engaging, and flexible learning
              environment. The first Lesson is <b>Completely Free</b>. Join us
              today and discover the joy of learning with Educify!
            </Typography>
          </Box>

          {/* Call-to-Action Button */}
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(90deg, #F6515B 0%, #A040C1 51.11%, #2F89FD 100%)",
              border: "1.5px solid #FFFFFF",
              boxShadow:
                "-8px -8px 24px rgba(238, 79, 101, 0.2), 8px 8px 24px rgba(55, 132, 249, 0.4)",
              borderRadius: "70px",
              padding: "16px 24px",
              width: { xs: '100%', sm: '250px' }, // Full width on xs, fixed on sm+
              height: "56px",
              color: "#FCFCFC",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "-0.2px",
              textTransform: "none",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #E34752 0%, #922EAD 51.11%, #2179F3 100%)",
              },
              "&:focus-visible": { // Add focus state for keyboard navigation
                outline: '2px solid white',
                outlineOffset: '2px',
                boxShadow: 'none', // Optionally remove gradient shadow on focus
              },
            }}
            onClick={handleModalOpen}
          >
            Book a Free Trial
            <ArrowForwardIosIcon sx={{ fontSize: 16, marginLeft: "8px" }} />
          </Button>
        </Box>

        {/* Right Section - Background Image */}
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '597px' }, // Added maxWidth for larger screens
            width: { xs: '80%', sm: '60%', md: '100%' }, // Adjust width for different stages
            height: { xs: "250px", sm: "300px", md: "400px" }, // Responsive height
            position: { xs: 'relative', md: 'relative' }, // Keep relative for Image fill
            mt: { xs: 4, md: 0 }, // Add margin top on mobile
            mx: { xs: 'auto', md: 0 }, // Center horizontally on mobile
            ml: { md: "3px" }, // Keep left margin for desktop separation
          }}
        >
          {/* Use next/image */}
          <Image
            src={girlImage}
            alt="Educify Student"
            fill // Use fill to make the image cover the container
            style={{ // objectFit is applied via style prop with fill
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default TransformLearning;
