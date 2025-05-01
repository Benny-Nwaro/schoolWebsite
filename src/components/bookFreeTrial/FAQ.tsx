'use client'; // Mark as Client Component due to useMediaQuery hook

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";
import { Theme } from '@mui/material/styles'; // Import Theme type
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "How do i signup as a tutor?",
    answer: "Click on the Sign Up button. Follow the prompts to create your profile, including providing your personal information, educational background, areas and years of expertise. Once submitted, our team will review your application and notify you of the next steps.",
  },
  {
    question: "What qualification or experience do i need?",
    answer: "We require tutors to have a minimum of a bachelor's degree in their subject area or a related field. Prior tutoring or teaching experience is highly preferred.",
  },
  {
    question: "How are tutors matched with students?",
    answer: "Tutors are matched with students based on their subject expertise, availability, and the student's specific needs and learning goals..",
  },
  {
    question: "What subject or topic can i teach?",
    answer: "Educify supports a wide range of subjects and topics, including but not limited to math, science, English, history, foreign languages, and test preparation. We encourage tutors to list all the subjects they are qualified to teach in their profiles.",
  },
  {
    question: "Can i control my schedule and availability?",
    answer: "Yes, as a tutor on Educify, you have full control over your schedule and availability. You can set your preferred working hours and update them as needed to accommodate your personal and professional commitments.",
  },
  {
    question: "What support or resources are provided for tutoring sesions?",
    answer: "Educify offers a comprehensive suite of resources to support your tutoring sessions, including interactive tools, lesson planning materials, and access to a library of dynamic lessons.",
  },
  {
    question: "How are payments handled?",
    answer: "Payments are processed securely through our platform. Tutors are paid on a regular basis, typically bi-weekly or monthly, depending on your preference. You can track your earnings and payment history through your tutor dashboard.",
  },
  {
    question: "Is there a screening process for tutors?",
    answer: "Yes, Educify conducts a thorough screening process to ensure the quality and reliability of our tutors. This process includes verifying educational qualifications, conducting background checks, and reviewing prior tutoring or teaching experience.",
  },
  {
    question: "Are there opportunities for professional development?",
    answer: "Absolutely. Educify is committed to the continuous growth and development of our tutors. We offer various professional development opportunities, including webinars, workshops, and access to educational resources to help you enhance your skills and stay updated with the latest teaching strategies.",
  },
  {
    question: "What measures ensures security and safety for tutors and students?",
    answer: "Educify prioritizes the safety and security of both tutors and students. We implement strict verification processes, secure payment methods, and provide a safe online environment for tutoring sessions. Additionally, we offer guidelines and support to ensure safe interactions during in-person sessions",
  },
];

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

const FAQ: React.FC = () => { // Define component type as React.FC (Functional Component)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Example shadow
          bgcolor: "#FFFFFF",
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
            gap: "50px",
            width: "100%",
            mx: "auto",
            py: { xs: 8, md: 12 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#25282C",
              textAlign: "center",
              width: { xs: "100%", md: "780px" },
            }}
          >
            FAQs
          </Typography>

          <Box sx={{ width: "100%", maxWidth: "780px" }}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  boxShadow: "0px 0px 100px rgba(78, 77, 144, 0.15)",
                  borderRadius: "8px",
                  border: "1px solid #F1F1F9",
                  marginBottom: "8px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ padding: "18px 24px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#171717",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: "0px 24px 18px" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#414158",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default FAQ;
