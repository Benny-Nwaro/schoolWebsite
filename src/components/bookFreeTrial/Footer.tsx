'use client'; // Mark as Client Component due to hooks

import React from "react";
import { Box, Typography, TextField, Button, Divider, Link as MuiLink, IconButton, useMediaQuery } from "@mui/material"; // Renamed Link to MuiLink
import { Email, Phone, Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { styled, useTheme, Theme } from "@mui/material/styles"; // Import Theme type
import NextLink from 'next/link'; // Import Next.js Link
import Image from 'next/image'; // Import Next.js Image
import educifyLogo from '@/src/assets/images/EducifyLogo.png'; // Import the logo image - ADJUST PATH AS NEEDED

// Styled footer container
const FooterContainer = styled(Box)(({ theme }: { theme: Theme }) => ({ // Add Theme type
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(0, 2), // Use theme spacing for padding
  width: "100%", // Take full width
  maxWidth: "1000px", // Limit max width
  height: "auto", // Adjust height automatically
  opacity: 0.4,
  margin: "0 auto",
  flexGrow: 0,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2), // Add padding on smaller screens
  },
}));

// Styled text
const FooterText = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  fontSize: "11px",
  lineHeight: "16px",
  letterSpacing: "-0.1px",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
});

// Styled divider dot
const DividerDot = styled(Box)({
  width: "3px",
  height: "17px",
  display: "flex",
  alignItems: "center",
  color: "#FFFFFF",
});

// Styled icon buttons
const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[500],
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const Footer: React.FC = () => { // Define component type
  const theme: Theme = useTheme(); // Add Theme type
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ 
      background: "#171717", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      padding: { xs: "50px 20px", md: "100px 0 50px" }, // Responsive padding
      gap: { xs: "40px", md: "80px" }, // Responsive gap
      width: "100%", 
      //maxWidth: "1440px", 
      zIndex: 7 
    }}>
      
      {/* Newsletter Section */}
      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", md: "row" }, // Stack on mobile
        alignItems: "center", 
        gap: { xs: "20px", md: "80px" }, // Responsive gap
        width: { xs: "90%", md: "1241px" }, // Responsive width
        height: "auto", // Adjust height automatically
        textAlign: { xs: "center", md: "left" } // Center text on mobile
      }}>
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: { xs: "center", md: "flex-start" }, // Center on mobile
          gap: "8px", 
          width: { xs: "100%", md: "461px" } // Responsive width
        }}>
          <Typography variant="h6" sx={{ fontSize: "24px", color: "#FFFFFF", letterSpacing: "-0.2px" }}>
            Sign Up for Our Newsletter, Offers, promotions and educational contents
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#666B71", letterSpacing: "-0.2px" }}>
            Join our professional community to stay ahead
          </Typography>
        </Box>

        {/* Email Input & Subscribe Button */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile
          alignItems: "center", 
          gap: { xs: "10px", md: "24px" }, // Responsive gap
          width: { xs: "100%", md: "700px" }, // Responsive width
          height: "auto" // Adjust height automatically
        }}>
          <TextField 
            placeholder="Enter your email address" 
            variant="standard"
            fullWidth // Take full width on mobile
            sx={{ 
              background: "rgba(255,255,255,0.05)", 
              borderBottom: "1px solid white", 
              width: { xs: "100%", md: "426px" }, // Responsive width
              color: "white", 
              input: { color: "white", fontSize: "16px" } 
            }}
          />
          <Button 
            sx={{
              background: "linear-gradient(90deg, #F6515B 0%, #A040C1 51.11%, #2F89FD 100%)",
              border: "1.5px solid #FFFFFF",
              boxShadow: "-8px -8px 24px rgba(238, 79, 101, 0.2), 8px 8px 24px rgba(55, 132, 249, 0.4)",
              borderRadius: "70px",
              padding: "16px 24px",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "16px",
              width: { xs: "100%", md: "auto" } // Full width on mobile
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      <Divider sx={{ width: "90%", maxWidth: "1440px", borderColor: "#3F3F3F" }} />

      {/* Footer Section */}
      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", md: "row" }, // Stack on mobile
        justifyContent: "space-between", 
        padding: { xs: "0px 20px", md: "0px 100px" }, // Responsive padding
        width: "90%", // Responsive width
        maxWidth: "1440px", 
        height: "auto", // Adjust height automatically
        gap: { xs: "40px", md: "0px" } // Responsive gap
      }}>
        
        {/* Educify Description */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          width: { xs: "100%", md: "340.89px" }, // Responsive width
          textAlign: { xs: "center", md: "left" }, // Center text on mobile
          alignItems: { xs: "center", md: "flex-start" } // Center on mobile
        }}>
          <Image src={educifyLogo} alt="Educify Logo" width={105} height={43} priority /> {/* Use next/image */}
          <Typography sx={{ fontSize: "14px", color: "#666B71", lineHeight: "24px", letterSpacing: "-0.2px" }}>
            Educify Inc is a global Educational Technology company focused on making education accessible to everyone...
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: { xs: "center", md: "flex-start" }, // Center on mobile
          width: { xs: "100%", md: "109.86px" }, // Responsive width
          textAlign: { xs: "center", md: "left" } // Center text on mobile
        }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "800", color: "#FFFFFF" }}>Company</Typography>
          <MuiLink component={NextLink} href="/about" sx={{ fontSize: "14px", color: "#666B71", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>About Us</MuiLink>
          <MuiLink component={NextLink} href="/terms" sx={{ fontSize: "12px", color: "#666B71", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Terms of Service</MuiLink>
          <MuiLink component={NextLink} href="/teachers" sx={{ fontSize: "14px", color: "#666B71", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Teachers</MuiLink>
          <MuiLink component={NextLink} href="/students" sx={{ fontSize: "14px", color: "#666B71", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Students</MuiLink>
        </Box>

        {/* Support Section */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: { xs: "center", md: "flex-start" }, // Center on mobile
          width: { xs: "100%", md: "170px" }, // Responsive width
          textAlign: { xs: "center", md: "left" } // Center text on mobile
        }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "800", color: "#FFFFFF" }}>Support</Typography>
          <MuiLink component={NextLink} href="/help" sx={{ fontSize: "14px", color: "#666B71", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Help & Support</MuiLink>
          <MuiLink component={NextLink} href="/contact" sx={{ fontSize: "14px", color: "#666B71", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Contact Us</MuiLink>
          <MuiLink component={NextLink} href="/faq" sx={{ fontSize: "14px", color: "#666B71", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>FAQs</MuiLink>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Phone sx={{ color: "#FFFFFF", opacity: 0.25 }} />
            <Typography sx={{ fontSize: "14px", color: "#666B71" }}>+1 888-2529-485</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Email sx={{ color: "#FFFFFF", opacity: 0.3 }} />
            <Typography sx={{ fontSize: "14px", color: "#666B71" }}>Support@educify.org</Typography>
          </Box>
        </Box>
      </Box>
      {/* Added Footer */}
      <FooterContainer>
        {/* Copyright */}
        <FooterText>© 2025 Educify. All rights reserved.</FooterText>

        {/* Terms & Privacy */}
        <Box display="flex" alignItems="center" gap={1} sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <MuiLink component={NextLink} href="/terms" color="white" underline="hover" fontSize={11}>
            Terms & Conditions
          </MuiLink>
          <DividerDot>·</DividerDot>
          <MuiLink component={NextLink} href="/privacy" color="white" underline="hover" fontSize={11}>
            Privacy Policy
          </MuiLink>
        </Box>

        {/* Social Media Links */}
        <Box display="flex" gap={2}>
          <NextLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <SocialIconButton>
              <Facebook />
            </SocialIconButton>
          </NextLink>
          <NextLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <SocialIconButton>
              <Twitter />
            </SocialIconButton>
          </NextLink>
          <NextLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <SocialIconButton>
              <LinkedIn />
            </SocialIconButton>
          </NextLink>
          <NextLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <SocialIconButton>
              <Instagram />
            </SocialIconButton>
          </NextLink>
        </Box>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
