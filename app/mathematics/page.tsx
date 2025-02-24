import FAQSection from "@/src/components/FAQSection/FAQSection";
import Carousel from "@/src/components/Mathematics/Carousel";
import HeroSection from "@/src/components/Mathematics/HeroSection";
import SectionHeader from "@/src/components/Mathematics/SectionHeader";
import TutorCard from "@/src/components/Mathematics/TutorCard";
import Tutor1 from "@/src/assets/images/mathematics/Tutor1.png";
import Tutor2 from "@/src/assets/images/mathematics/Tutor2.png";
import Tutor3 from "@/src/assets/images/mathematics/Tutor3.png";
import Algebra from "@/src/assets/images/mathematics/AlgebbraImage.png";
import Trig from "@/src/assets/images/mathematics/TrigImage.png";
import Calculus from "@/src/assets/images/mathematics/CalculusImage.png";
import Geometry from "@/src/assets/images/mathematics/Geometry.png";
import Differential from "@/src/assets/images/mathematics/Differential.png";
import Statistics from "@/src/assets/images/mathematics/Statistics.png";
import Precalculus from "@/src/assets/images/mathematics/Precalculus.png";
import Logical from "@/src/assets/images/mathematics/Logical.png";
import MathClassesSection from "@/src/components/Mathematics/MathClassesSection";
import CategoryCard from "@/src/components/Mathematics/CategoryCard";



export default function Home() {
  const categories = [
    {
      title: 'Algebra',
      description: "Do complex equations and abstract concepts leave you frustrated? At Educify, we transform confusion into clarity. Our algebra classes are crafted by expert tutors who break down difficult topics into simple, digestible lessons. Whether you need help with homework or want to excel in class, our personalized approach ensures you understand and master algebra with ease.",
      image: Algebra,
      pageUrl:"/mathematics/algebra"
    },
    {
      title: 'Trigonometry',
      description: "Are sine, cosine, and tangent leaving you bewildered? We understand the complexities of trigonometry and are here to help. Our expert tutors provide comprehensive trigonometry classes that break down challenging concepts into simple, understandable lessons.",
      image: Trig,
      pageUrl:"/mathematics/trig"

    },
    {
      title: 'Calculus',
      description: "Are derivatives, integrals, and limits making you feel overwhelmed? Our expert tutors offer in-depth calculus classes designed to breakdown complex concepts and make them understandable. With personalized instruction and interactive lessons, you'll gain a solid understanding of calculus and the confidence to excel. Let Educify be your guide to conquering calculus challenges.",
      image: Calculus,
      pageUrl:"/mathematics/calculus"

    },
  ];

  const additionalCategories = [
    {
      title: 'Geometry',
      description: "Do shapes, angles, and formulas seem difficult? Our expert tutors offer comprehensive geometry classes that break down complex concepts into easy-to-follow lessons. With personalized support and interactive tools, you'll master the principles of geometry and develop the skills to solve any problem.",
      image: Geometry,
      pageUrl:"/mathematics/geometry"

    },
    {
      title: 'Differential Equations',
      description: "Struggling with differential equations? Our specialized classes focus on making difficult concepts manageable, ensuring you don't just learn, but master the material. With the guidance of our experienced tutors, interactive lessons, and tailored support, you'll move from confusion to comprehension.",
      image: Differential,
      pageUrl:"/mathematics/differentialequations"

    },
    {
      title: 'Logical Reasoning',
      description: "Finding logical reasoning difficult? Educify can make it simple. Our dedicated tutors explain concepts clearly and provide practical tools to improve your skills. With our help, you’ll understand and solve logical reasoning questions with ease. Find a tutor with Educify and boost your logical thinking today.",
      image: Logical,
      pageUrl:"/mathematics/logicalreasoning"

    },
    {
      title: 'Statistics and Probability',
      description: "Do the numbers in statistics and probability seem overwhelming? With Educify, you'll find a simpler way to understand these complex topics. Our experienced tutors provide practical examples and easy-to-follow explanations in areas like hypothesis testing, probability rules, and data visualization, helping you gain confidence and proficiency",
      image: Statistics,
      pageUrl:"/mathematics/statistics"

    },
    {
      title: 'Precalculus',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: Precalculus,
      pageUrl:"/mathematics/precalculus"

    },

  ];

  const tutors = [
    {
      name: 'Guy Hawkins',
      rating: '4.3k Reviews',
      location: 'Online, Nigeria',
      experience: '4yr experience',
      image: Tutor1,
    },
    {
      name: 'Jane Doe',
      rating: '3.8k Reviews',
      location: 'Online, USA',
      experience: '5yr experience',
      image: Tutor2,
    },
    {
      name: 'Guy Hwakins',
      rating: '3.8k Reviews',
      location: 'Online, USA',
      experience: '5yr experience',
      image: Tutor3,
    },
    {
      name: 'Guy Hawkins',
      rating: '4.3k Reviews',
      location: 'Online, Nigeria',
      experience: '4yr experience',
      image: Tutor1,
    },
    {
      name: 'Jane Doe',
      rating: '3.8k Reviews',
      location: 'Online, USA',
      experience: '5yr experience',
      image: Tutor2,
    },
    {
      name: 'Guy Hwakins',
      rating: '3.8k Reviews',
      location: 'Online, USA',
      experience: '5yr experience',
      image: Tutor3,
    },
   
  ];
  return (
      <main>
       <div className="mt-20">
      <HeroSection
        title="Mathematics"
        description="Do you find yourself falling behind in class or feeling overwhelmed by your math homework? At Educify, we understand the challenges you face with mathematics. Our expert tutors offer comprehensive mathematics classes designed to simplify complex topics, making them easier to understand and apply."
        backgroundImage="https://img.freepik.com/free-photo/blue-stationery-with-copy-space_23-2148475335.jpg?t=st=1733412865~exp=1733416465~hmac=fbb99fc2762f0c919df00bcecd8a2d2fca8e71c84ecebe3325a528d8cacda29d&w=1800"
      />
       <div className="bg-gray-50">
          <SectionHeader title="Start Exploring Mathematics Today" />
          <div className="flex flex-wrap space-x-4 justify-center px-8  ">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                description={category.description}
                image={category.image.src}
                pageUrl={category.pageUrl}
              />
            ))}
          </div>
      <SectionHeader title="Top Mathematics Tutors" />
      <Carousel>
        {tutors.map((tutor, index) => (
          <TutorCard
            key={index}
            name={tutor.name}
            rating={tutor.rating}
            location={tutor.location}
            experience={tutor.experience}
            image={tutor.image.src}
          />
        ))}
      </Carousel>
      <SectionHeader title="Explore More Topics" />
      <div className="flex space-x-8 flex-wrap justify-center px-8 mx-28 ">
        {additionalCategories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            image={category.image.src}
            pageUrl={category.pageUrl}
          />
        ))}
      </div>
    </div>
    <MathClassesSection/>
      <FAQSection/>
       </div>
      </main>
   
  );
}
