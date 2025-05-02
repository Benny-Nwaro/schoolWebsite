'use client'; // Mark as Client Component due to hooks

import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { FaPhone, FaGlobe, FaArrowDown, FaBars } from "react-icons/fa";
import { Box, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import Logo from './Logo'; // Assuming Logo is a React component
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  // --- State Variables ---
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for mobile menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  // --- Effects ---

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as Node; // Explicitly type event.target

      if (languageDropdownRef.current && !languageDropdownRef.current.contains(target)) {
        setIsLanguageDropdownOpen(false);
        setAnchorEl(null); // Also close MUI Menu
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // --- Event Handlers ---
  const handleLanguageClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsLanguageDropdownOpen(true);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
    setIsLanguageDropdownOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        position: "fixed",
        top: 0,
        zIndex: 50,
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={handleLogoClick}
          >
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
              <Logo />
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
            {["How it works", "Pricing", "Blog"].map((link) => (
              <NextLink key={link} href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                <Button
                  component="a" // Use 'a' tag for correct behavior with NextLink
                  sx={{
                    color: "gray",
                    textTransform: "none",
                    "&:hover": { color: "blue" },
                    fontSize: '0.8rem'
                  }}
                >
                  {link}
                </Button>
              </NextLink>
            ))}
          </Box>
        </Box>

        {/* Contact and Language Selector */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {/* Phone Number */}
          <a href="tel:+18882529485">
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
          </a>

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
            tabIndex={0}
            onBlur={handleLanguageClose}
          >
            <IconButton onClick={handleLanguageClick} sx={{ p: 0, '& svg': { fontSize: '0.8rem' } }}>
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
                <MenuItem
                  key={option}
                  onClick={handleLanguageClose}
                  sx={{ fontSize: '0.8rem' }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Menu Toggle */}
          <Box
            sx={{ display: { md: "none", xs: "flex" }, alignItems: "center", cursor: "pointer" }}
            onClick={handleMobileMenuToggle}
            ref={mobileMenuRef} // Add ref here
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
          ref={mobileMenuRef} // Add the ref here
          sx={{
            display: { md: "none", xs: "flex" },
            width: "100%",
            backgroundColor: "white",
            borderTop: "1px solid #eee",
            flexDirection: "column",
            alignItems: "center",
            py: 2,
            animation: "fadeIn 0.3s",
            position: 'fixed', // Use fixed positioning
            top: '58px', // Position below the header
            left: 0,
            zIndex: 40,
          }}
        >
          {["How it works", "Pricing", "Blog"].map((link) => (
            <NextLink key={link} href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} passHref>
              <Button
                component="a" // Use 'a' tag
                onClick={handleMobileMenuToggle} // Close on click
                sx={{
                  color: "gray",
                  textTransform: "none",
                  py: 1,
                  "&:hover": { color: "blue" },
                  fontSize: '0.8rem'
                }}
              >
                {link}
              </Button>
            </NextLink>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Header;
