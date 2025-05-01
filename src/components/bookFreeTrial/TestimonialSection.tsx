'use client'; // Mark as Client Component due to useMediaQuery hook

import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";
import { Theme } from '@mui/material/styles'; // Import Theme type
import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const TestimonialSection: React.FC = () => { // Define component type
  const themeTyped: Theme = theme; // Type the theme
  const isMobile = useMediaQuery(themeTyped.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={themeTyped}> {/* Use typed theme */}
      <Container
        maxWidth="xl"
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Example shadow
          bgcolor: "#075092",
          borderRadius: "16px",
          p: 4,
          my: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            width: "100%",
            // height: "542px", // Removed fixed height
          }}
        >
          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "90%", md: "779px" }, // Responsive width
              height: "40px",
              // marginTop: "-80px", // Removed fixed margin
              mt: { xs: 0, md: -10 }, // Responsive margin top
            }}
          >
            {/* Removed empty Box content */}
          </Box>

          {/* Testimonial Card */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
              gap: "12px",
              width: { xs: "90%", md: "779px" }, // Responsive width
              // height: "287px", // Removed fixed height
              borderRadius: "24px",
            }}
          >
            {/* User Avatar */}
            <Avatar
              src="/images/avatar.jpg" // Consider using next/image if src is dynamic or local
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "#E1F7FE",
                borderRadius: "50%",
              }}
            />
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "#075092",
                border: "1px solid #3198F5",
                borderRadius: "50%",
                color: "white",
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "#075092",
                border: "1px solid #3198F5",
                borderRadius: "50%",
                color: "white",
              }}
            >
              <ChevronRight />
            </IconButton>
            {/* Testimonial Quote */}
            <Typography
              sx={{
                width: { xs: "90%", md: "747px" }, // Responsive width
                // height: "63px", // Removed fixed height
                fontFamily: "Poppins",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0.02em",
                color: "#FFFFFF",
                textAlign: "center",
                whiteSpace: "pre-wrap", // Allow text wrapping
              }}
            >
              “These teeth goalposts boys 2 first-order. Seems calculator could
              catching dunder later rundown manage. Put ask disband knowledge
              right kpis price me let's seat. Shower staircase problem low
              re-inventing. Feature policy”
            </Typography>

            {/* User Info */}
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{ fontWeight: 500, fontSize: "14px", color: "#FFFFFF" }}
              >
                Jane Cooper
              </Typography>
              <Typography
                sx={{ fontWeight: 500, fontSize: "12px", color: "#FFFFFF" }}
              >
                Student
              </Typography>
            </Box>

            {/* Star Rating */}
            <Box sx={{ display: "flex", gap: "8px" }}>
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  sx={{ color: "#F5AA00", fontSize: "16px" }}
                />
              ))}
            </Box>
          </Box>

          {/* Pagination Dots */}
          <Box sx={{ display: "flex", gap: "12px", mt: "16px" }}>
            {[...Array(12)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: index === 6 ? "#3198F5" : "#FFFFFF",
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default TestimonialSection;
