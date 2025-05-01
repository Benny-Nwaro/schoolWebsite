'use client'; // Mark as Client Component due to hooks

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";
import { Theme } from '@mui/material/styles'; // Import Theme type
import { ArrowForwardIos } from "@mui/icons-material";
import { StaticImageData } from 'next/image'; // Import StaticImageData for image types
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

import musicImage from "@/src/assets/images/music.png"; // Adjusted path
import mathsImage from "@/src/assets/images/maths.png"; // Adjusted path
import languagesImage from "@/src/assets/images/languages.png"; // Adjusted path
import criticalImage from "@/src/assets/images/critical.png"; // Adjusted path
import artsImage from "@/src/assets/images/arts.png"; // Adjusted path
import stemImage from "@/src/assets/images/STEM.png"; // Adjusted path
import codingImage from "@/src/assets/images/coding.png"; // Adjusted path
import englishImage from "@/src/assets/images/english.png"; // Adjusted path

// Define the structure for a lesson object
interface Lesson {
  title: string;
  description: string;
  image: StaticImageData; // Use StaticImageData for imported images
  route?: string; // Route is optional
}

const lessons: Lesson[] = [ // Add type annotation to the array
  {
    title: "Music",
    description:
      "Elevate your musical skills with our intensive trumpet classes. Our experienced instructors will guide you through proper embouchure, breath control, and articulation.",
    image: musicImage,
    route: "/landing/Music", // Add the route for Music
  },
  {
    title: "Maths",
    description:
      "Enhance your problem-solving abilities with our expert-led math courses. Master algebra, calculus, and geometry with ease and confidence.",
    image: mathsImage,
    route: "/landing/Mathematics",
  },
  {
    title: "Languages",
    description:
      "Learn a new language or improve your fluency with our specialized classes. Explore grammar, pronunciation, and conversational skills in various languages.",
    image: languagesImage,
    route: "/landing/Language",
  },
  {
    title: "STEM",
    description:
      "Discover the beauty of the violin with our expert-led classes...",
    image: stemImage,
    route: "/landing/STEM",
  },
  {
    title: "Arts",
    description:
      "Discover the beauty of the violin with our expert-led classes...",
    image: artsImage,
    route: "/landing/Social%20Sciences",
  },
  {
    title: "Coding",
    description:
      "Discover the beauty of the violin with our expert-led classes...",
    image: codingImage,
    route: "/landing/Coding",
  },
  {
    title: "English Reading/Writing",
    description:
      "Elevate your musical knowledge with our intensive music theory classes. Our experienced instructors will guide you through scales, intervals, chords, and more, teaching you how to read and write music with confidence. Prepare to become a music theory expert and deepen your understanding of musical structure and composition!",
    image: englishImage,
    route: "/tutors/search/English/Language",
  },
  {
    title: "Critical Thinking",
    description:
      "Discover the beauty of the violin with our expert-led classes...",
    image: criticalImage,
    route: "/tutors/search/critical%20thinking",
  },
];

// Define props for LessonCard
interface LessonCardProps {
  title: string;
  description: string;
  image: StaticImageData; // Use StaticImageData
  onClick: () => void;
}
const LessonCard: React.FC<LessonCardProps> = ({ title, description, image, onClick }) => (
  <Box
    tabIndex={0} // Make the card focusable
    sx={{
      width: '100%', // Take full width of grid cell
      maxWidth: 310, // Max width for larger screens
      minHeight: 402, // Use minHeight to allow content to potentially grow slightly
      borderRadius: "32px",
      boxShadow: "0px 0px 100px rgba(77, 92, 144, 0.25)",
      border: "1px solid #F1F1F9",
      display: "flex",
      justifyContent: 'space-between', // Push button to bottom
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.2)",
      },
      "&:focus-visible": { // Add focus state for keyboard navigation
        outline: '2px solid',
        outlineColor: 'primary.main',
        outlineOffset: '2px',
      },
    }}
    onClick={onClick}
  >
    {/* Lesson Image */}
    <Box
      sx={{
        width: "100%",
        height: 172,
        backgroundImage: `url(${image.src})`, // Use image.src for the URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "5px 10px 10px rgba(128, 128, 128, 0.07)",
      }}
    />

    {/* Lesson Text */}
    <Box sx={{ padding: "16px", textAlign: "center", flexGrow: 1 }}> {/* Allow text area to grow */}
      <Typography
        sx={{
          fontSize: { xs: 18, sm: 20 }, // Responsive font size
          fontWeight: 700,
          letterSpacing: "-0.4px",
          color: "#000000",
          marginBottom: "8px",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 13, sm: 14 }, // Responsive font size
          fontWeight: 400,
          lineHeight: "150%",
          color: "#414158",
          letterSpacing: "0.02em",
        }}
      >
        {description}
      </Typography>
    </Box>

    {/* Button */}
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#171717",
        borderRadius: "50px",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        // marginTop: "auto", // Removed as justify-content handles positioning
        mb: 2, // Add some bottom margin
        transition: "background-color 0.3s ease",
        "&:hover": { backgroundColor: "#000000" },
        "&:focus-visible": { // Add focus state for button
            outline: '2px solid',
            outlineColor: 'white', // Contrast against dark button
            outlineOffset: '2px',
          },      }}
    >
      Find a Tutor
      <ArrowForwardIos sx={{ fontSize: 16 }} />
    </Button>
  </Box>
);

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

const OurLessons: React.FC = () => { // Define component type
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null); // Type the selected lesson state
  const themeTyped: Theme = theme; // Type the theme
  const isMobile = useMediaQuery(themeTyped.breakpoints.down("sm"));
  const router = useRouter(); // Use Next.js router

  const handleOpen = (lesson: Lesson): void => { // Type the lesson parameter
    setSelectedLesson(lesson);
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    setSelectedLesson(null);
  };

  interface HandleLessonClickParams {
    route?: string;
  }

  const handleLessonClick = (lesson: HandleLessonClickParams): void => {
    if (lesson.route) {
      router.push(lesson.route); // Use router.push
    }
  };

  return (
    <ThemeProvider theme={themeTyped}> {/* Use typed theme */}
      <Container
        id="lessons" // Add an ID if you want to link to this section
        maxWidth="xl"
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Example shadow
          bgcolor: "#FFF8EB",
          borderRadius: "16px",
          p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          my: 4,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          {/* Title */}
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "40px" }, // Responsive font size
              fontWeight: 700,
              letterSpacing: "-2px",
              color: "#171717",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Our Lessons
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" }, // Responsive font size
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: "#000000",
              marginBottom: "32px",
            }}
          >
            What You Can Learn on Educify
          </Typography>

          {/* Lessons Grid */}
          <Box
            sx={{
              display: "grid", // Changed to grid layout
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }, // Responsive columns
              gap: { xs: 2, sm: 3, md: 4 }, // Responsive gap using theme spacing (e.g., 2 = 16px, 3 = 24px, 4 = 32px)
              placeItems: 'center', // Center items within grid cells
              justifyContent: "center",
            }}
          >
            {lessons.map((lesson, index) => (
              <LessonCard
                key={index}
                {...lesson}
                onClick={() => handleLessonClick(lesson)} // Use the new handler
              />
            ))}
          </Box>

          {/* Modal for Lesson Details */}
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
          >
            <Fade in={open}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "90%", sm: 400, md: 500 }, // Responsive modal width
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: "16px",
                  textAlign: "center",
                }}
              >
                {selectedLesson && (
                  <>
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: 150, sm: 200 }, // Responsive image height
                        backgroundImage: `url(${selectedLesson.image.src})`, // Corrected: Use image.src
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "12px",
                      }}
                    />
                    <Typography sx={{ fontSize: { xs: 20, sm: 24 }, fontWeight: 700, mt: 2 }}>
                      {selectedLesson.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, mt: 1, color: "#414158" }}
                    >
                      {selectedLesson.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#171717",
                        borderRadius: "50px",
                        padding: "10px 20px",
                        marginTop: "20px",
                        "&:hover": { backgroundColor: "#000000" },
                        "&:focus-visible": { // Add focus state for button
                          outline: '2px solid',
                          outlineColor: 'white', // Contrast against dark button
                          outlineOffset: '2px',
                        },
                      }}
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </>
                )}
              </Box>
            </Fade>
          </Modal>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default OurLessons;
