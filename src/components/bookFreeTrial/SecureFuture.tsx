'use client'; // Mark as Client Component for potential future interactivity

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Removed unused bgImage import as a hardcoded URL is used below

const SecureFuture: React.FC = () => { // Define component type
  return (
    <Container maxWidth="xl" sx={{
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Example shadow
      bgcolor: '#00000066', // Semi-transparent black
      borderRadius: '16px',
      p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      my:4,
      position: 'relative', // Needed for absolute positioning of the image
    }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", md: "638px" },
          minHeight: { xs: '400px', sm: '500px', md: '638px' }, // Ensure minimum height, especially on mobile
          overflow: "hidden",
          display: 'flex',
          flexDirection: 'column',
          position: 'relative', // Needed for absolute positioning of the image
          isolation: "isolate",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(https://s3-alpha-sig.figma.com/img/692c/13ee/a7db71abafac9c9175fdab94e10922ec?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IU0GyYuC96lFLPUVpEPOmGGWzi3e0AZYlyfLOZh2cSiArze4wV5csobHF4gpuK2-baFmXL-x2k4Dhn9BSohcipL6I-FbImdx6XmIVU~DsbLJkY3UI6cq5EUtUM8fGW55JqBSTr20mGmN6oUr1dswuoATIxVp9QR2N-~YApvJ6AZgxvjGpWIciBtHSUjZewZuQ9vGATngvHHijLvyeDC5rX~hbOeQu7y5JYJCdKCDyHiUTUEtrHcUl6xF8yf~lSOGm23-AAFxnmH6xReMAA0RbbFC64NgisgZXBoQNuDAsF7-v6Ly6CBPf2hhN5GTk7wjqzXwdMLyCTFYyX7rbRkEUQ__)`, // Replaced with the URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Text Content Container */}
        <Box
          sx={{
            position: "relative",
            // Use padding/margin for positioning instead of top/left for better flow
            pt: { xs: 8, sm: 12, md: '120px' }, // Responsive top padding
            px: { xs: 2, sm: 4, md: 0 }, // Horizontal padding on smaller screens
            ml: { md: '176px' }, // Left margin only on medium+ screens
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: '12px' }, // Responsive gap
            maxWidth: { xs: '90%', md: '666px' }, // Added maxWidth
            zIndex: 2,
            textAlign: { xs: 'center', md: 'left' }, // Center text on mobile
          }}
        >
          {/* "Don't Wait!" Text */}
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "-0.3px", // Keep letter spacing
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
            }}
          >
            Don't Wait!
          </Typography>

          {/* Main Heading */}
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
              lineHeight: { xs: 1.1, md: "120%" }, // Responsive line height
              letterSpacing: "-2px",
              color: "#FFFFFF",
            }}
          >
            Secure Your Child’s Future Today!
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400, // Adjusted weight slightly for readability
              lineHeight: { xs: 1.5, md: "150%" }, // Responsive line height
              // justifyContent: 'flex-start', // Not applicable on Typography
              letterSpacing: "-0.2px",
              color: "#FFFFFF",
            }}
          >
            Give your child the best learning experience with Educify. Sign up now
            and let’s help them thrive! But don’t delay—our FREE trial class spots
            are limited, and they’re filling up fast! This is your chance to
            ignite your child’s curiosity and set them on a path to success in a
            tech-driven world. Opportunities like this don’t last forever. Act now
            and ensure your child doesn’t miss out on this life-changing
            experience!
          </Typography>

        </Box>
      </Box>
    </Container>
  );
};

export default SecureFuture;
