'use client'; // Mark as Client Component due to hooks

import React, { useState, useEffect, useRef, MouseEvent, KeyboardEvent } from "react"; // Import event types
import { FaPhone, FaGlobe, FaArrowDown, FaBars, FaUserCircle } from "react-icons/fa";
import { Box, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import Logo from './Logo'; // Assuming Logo is compatible or needs conversion too
import NextLink from 'next/link'; // Import Next.js Link
import { useRouter } from 'next/navigation'; // Import Next.js Router

const Header: React.FC = () => { // Define component type
  // --- State Variables with Types ---
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null); // Type the ref
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Type anchorEl for MUI Menu
  const router = useRouter(); // Use Next.js router

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => { // Type the event
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // --- Event Handlers with Types ---
  const handleLanguageClick = (event: MouseEvent<HTMLButtonElement>) => { // Type the event
    setAnchorEl(event.currentTarget);
    setIsLanguageDropdownOpen(true);
  };

  const handleLanguageClose = (): void => {
    setAnchorEl(null);
    setIsLanguageDropdownOpen(false);
  };

  const handleLogoClick = (): void => {
    // Use router.push for external links if needed, or window.location for simple cases
    window.location.href = "/"; // Or router.push("https://educify.org");
  };

  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderBottom: "1px solid #ccc",
        position: "fixed", // Changed to fixed
        top: 0, // Stick to the top
        zIndex: 50, // Ensure it's above other content
      }}
    >
      {/* Top Banner */}
      <Box
        sx={{
          width: "100%",
          height: "30px",
          backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="caption" sx={{ color: "white", fontWeight: 300 }}>
          Knowledge would believe playing ping picture. Product marketing incompetent drive.
        </Typography>
      </Box>

      {/* Main Header */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 0.5,
          gap: 2,
        }}
      >
        {/* Logo and Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }} onClick={handleLogoClick}> {/* Add onClick here */}
            <Box
              sx={{
                width: "72px",
                height: "30px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                borderRadius: 1,
                fontSize: '0.8rem'
              }}
            >
              <Logo/>
            </Box>
          </Box>

          {/* Navigation Links (Hidden on Mobile) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
            {["How it works", "Pricing", "Blog"].map((link) => (
              // Use NextLink for internal navigation, adjust href as needed
              <Button
                key={link}
                component={NextLink}
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} // Example href generation
                passHref // Important for MUI + NextLink
                sx={{ color: "gray", textTransform: "none", "&:hover": { color: "blue" }, fontSize: '0.8rem' }}
              >
                {link}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Contact and Language Selector */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {/* Phone Number */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: "1px solid #ccc",
              borderRadius: "50px",
              px: 2,
              py: 0.5,
              cursor: "pointer",
              "&:hover": { borderColor: "#999" },
            }}
          >
            <FaPhone style={{ color: "#666", fontSize: '0.8rem' }} />
            <Typography variant="caption" sx={{ color: "#333" }}>
              +1 888-252-9485
            </Typography>
          </Box>

          {/* Language Selector */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: "1px solid #ccc",
              borderRadius: "50px",
              px: 2,
              py: 0.5,
              cursor: "pointer",
              "&:hover": { borderColor: "#999" },
            }}
            ref={languageDropdownRef}
            tabIndex={0} // Keep for accessibility if needed
            onBlur={handleLanguageClose}
          >
            <IconButton onClick={handleLanguageClick} sx={{p:0, '& svg': {fontSize: '0.8rem'}}}>
              <FaGlobe style={{ color: "#666" }} />
            </IconButton>
            <Typography variant="caption" sx={{ color: "#333" }}>
              EN/USD
            </Typography>
            <FaArrowDown
              style={{
                color: "#666",
                transition: "transform 0.3s",
                transform: isLanguageDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                fontSize: '0.8rem'
              }}
            />
            <Menu
              anchorEl={anchorEl}
              open={isLanguageDropdownOpen}
              onClose={handleLanguageClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {["EN/USD", "FR/EUR", "ES/GBP"].map((option) => (
                <MenuItem key={option} onClick={handleLanguageClose} sx={{fontSize: '0.8rem'}}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Menu Toggle */}
          <Box
            sx={{ display: { md: "none", xs: "flex" }, alignItems: "center", cursor: "pointer" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars style={{ color: "#666", fontSize: "1.2rem" }} />
          </Box>

          {/* User Profile Icon */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", cursor: "pointer" }}>
            
          </Box>
        </Box>
      </Box>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <Box
          sx={{
            display: { md: "none", xs: "flex" },
            width: "100%",
            backgroundColor: "white",
            borderTop: "1px solid #eee",
            flexDirection: "column",
            alignItems: "center",
            py: 2,
            animation: "fadeIn 0.3s",
          }}
        >
          {["How it works", "Pricing", "Blog"].map((link) => (
            <Button
              key={link}
              component={NextLink}
              href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} // Example href generation
              passHref
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              sx={{ color: "gray", textTransform: "none", py: 1, "&:hover": { color: "blue" }, fontSize: '0.8rem' }}
            >
              {link}
            </Button>
          ))}
          
        </Box>
      )}
    </Box>
  );
};

export default Header;
