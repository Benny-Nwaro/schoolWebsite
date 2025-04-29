"use client";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import "./helpWith.styles.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HelpWith = () => {
  const router = useRouter();
  const data = [
    "Enhance my musical talents",
    "Master complex calculations",
    "Elevate my confidence in math",
    "Master complex calculations",
    "Enhance my musical talents",
    "Master complex calculations",
    "Elevate my confidence in math",
    "Master complex calculations",
    "Enhance my musical talents",
    "Master complex calculations",
    "Elevate my confidence in math",
    "Master complex calculations",
  ];

  return (
    <div className="help_with_section">
      <h1>What do you need help with?</h1>
      <div className="carousel_container">
        {[...Array(4)].map((_, rowIndex) => {
          // Scrambled initial position based on row index
          const initialX = rowIndex % 2 === 0 ? -1 : -1120; // Adjust offset as needed
          const { ref, inView } = useInView({
            threshold: 0.1, // Trigger when 10% of the element is visible
          });

          return (
            <motion.div
              className="carousel_row"
              key={rowIndex}
              ref={ref}
              initial={{ x: initialX }}
              animate={{
                x: inView ? (rowIndex % 2 === 0 ? "-100%" : "100%") : initialX,
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 60,
              }}
            >
              {[...data, ...data, ...data].map((text, index) => (
                <HelpItem
                  text={text}
                  key={index + rowIndex * data.length}
                  isColored={index % 2 === 0}
                />
              ))}
              {[...data, ...data, ...data].map((text, index) => (
                <HelpItem
                  text={text}
                  key={index + (rowIndex + 1) * data.length}
                  isColored={index % 2 === 0}
                />
              ))}
            </motion.div>
          );
        })}
      </div>
      <Button
        variant="ghost"
        size="lg"
        onClick={() => {
          router.push("/tutors");
        }}
      >
        Explore all our Classes
      </Button>
    </div>
  );
};

const HelpItem = ({
  text,
  isColored,
}: {
  text: string;
  isColored: boolean;
}) => {
  return (
    <div className={`help_item ${isColored ? "colored" : ""}`}>{text}</div>
  );
};

export default HelpWith;
