"use client";
import { useEffect, useRef, useState } from "react";
import { fetchSimilarTutors } from "@/src/lib/tutors/tutors";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import SimilarTutorCard from "../SimilarTutorCard/SimilarTutorCard";
import Slider from "react-slick";

import arrowLeft from "@/src/assets/svg/slider-left-arrow.svg";
import arrowRight from "@/src/assets/svg/slider-arrow-right.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tutor } from "@/src/types/types";

const SimilarTutors = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);
  const sliderRef = useRef<Slider>(null);
  const { id } = useParams();
  const { data: similarTutors, isLoading } = useQuery({
    queryKey: ["similar-tutors"],
    queryFn: () => fetchSimilarTutors(id as string),
  });
  useEffect(() => {
    if (sliderRef.current && sliderRef.current.props.children) {
      const children = sliderRef.current.props.children;
      if (Array.isArray(children)) {
        setTotalSlides(children.length);
      } else {
        setTotalSlides(1);
      }
    }
  }, [sliderRef.current]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchThreshold: 10,
    afterChange: (current: number) => setCurrentSlide(current + 1),
    responsive: [
      {
        breakpoint: 1325,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1045,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="similar_tutors ">
      <div className="header">
        <h1>Similar Tutors</h1>
        <div className="tutors_slider_control">
          <img
            src={arrowLeft.src}
            alt="Previous"
            style={{ cursor: "pointer" }}
            onClick={handlePrev}
          />
          <span>
            {currentSlide}/{totalSlides}
          </span>
          <img
            src={arrowRight.src}
            alt="Next"
            style={{ cursor: "pointer" }}
            onClick={handleNext}
          />
        </div>
      </div>
      <div>
        <Slider ref={sliderRef} {...settings}>
          {similarTutors &&
            similarTutors
              .slice(0, 10)
              .map((el: Tutor, i: number) => (
                <SimilarTutorCard tutor={el} key={el.id} index={i + 1} />
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimilarTutors;
