import FAQSection from "@/src/components/FAQSection/FAQSection";
import Carousel from "@/src/components/Mathematics/Carousel";
import HeroSection from "@/src/components/Mathematics/HeroSection";
import SectionHeader from "@/src/components/Mathematics/SectionHeader";
import TutorCard from "@/src/components/Mathematics/TutorCard";
import Tutor1 from "@/src/assets/images/mathematics/Tutor1.png";
import Tutor2 from "@/src/assets/images/mathematics/Tutor2.png";
import Tutor3 from "@/src/assets/images/mathematics/Tutor3.png";
import MathClassesSection from "@/src/components/Mathematics/MathClassesSection";
import CategoryCard from "@/src/components/Mathematics/CategoryCard";
import javascript from "@/src/assets/images/categories/computing/javascript.png";
import HTML from "@/src/assets/images/categories/computing/HTML.png";
import SQL from "@/src/assets/images/categories/computing/SQL.png";
import python from "@/src/assets/images/categories/computing/python.png";
import LLM from "@/src/assets/images/categories/computing/LLM.png";
import mobile from "@/src/assets/images/categories/computing/mobile.png";
import crypto from "@/src/assets/images/categories/computing/crypto.png";
import frontenddev from "@/src/assets/images/categories/computing/frontendDev.png";
import programming from "@/src/assets/images/categories/computing/programming.png";
import webdesign from "@/src/assets/images/categories/computing/webDesign.png";
import scratch from "@/src/assets/images/categories/computing/scratch.png";





export default function Home() {
  const categories = [
    {
      title: 'Javascript',
      description: "Do complex equations and abstract concepts leave you frustrated? At Educify, we transform confusion into clarity. Our algebra classes are crafted by expert tutors who break down difficult topics into simple, digestible lessons. Whether you need help with homework or want to excel in class, our personalized approach ensures you understand and master algebra with ease.",
      image: javascript,
      pageUrl:"/coding/javascript"

    },
    {
      title: 'Python',
      description: "Are sine, cosine, and tangent leaving you bewildered? We understand the complexities of trigonometry and are here to help. Our expert tutors provide comprehensive trigonometry classes that break down challenging concepts into simple, understandable lessons.",
      image: python,
      pageUrl:"/coding/python"

    },
    {
      title: 'HTML',
      description: "Are derivatives, integrals, and limits making you feel overwhelmed? Our expert tutors offer in-depth calculus classes designed to breakdown complex concepts and make them understandable. With personalized instruction and interactive lessons, you'll gain a solid understanding of calculus and the confidence to excel. Let Educify be your guide to conquering calculus challenges.",
      image: HTML,
      pageUrl:"/coding/html"

    },
  ];

  const additionalCategories = [
    {
      title: 'Mobile Development',
      description: "Do shapes, angles, and formulas seem difficult? Our expert tutors offer comprehensive geometry classes that break down complex concepts into easy-to-follow lessons. With personalized support and interactive tools, you'll master the principles of geometry and develop the skills to solve any problem.",
      image: mobile,
      pageUrl:"/coding/mobile"

    },
    {
      title: 'Machine Learning and Intelligence',
      description: "Struggling with differential equations? Our specialized classes focus on making difficult concepts manageable, ensuring you don't just learn, but master the material. With the guidance of our experienced tutors, interactive lessons, and tailored support, you'll move from confusion to comprehension.",
      image: LLM,
      pageUrl:"/coding/llm"

    },
    {
      title: ' Cryptography ',
      description: "Do the numbers in statistics and probability seem overwhelming? With Educify, you'll find a simpler way to understand these complex topics. Our experienced tutors provide practical examples and easy-to-follow explanations in areas like hypothesis testing, probability rules, and data visualization, helping you gain confidence and proficiency",
      image: crypto,
      pageUrl:"/coding/cryptography"

    },
    {
      title: 'Scratch',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: scratch,
      pageUrl:"/coding/scratch"

    },
    {
      title: 'Frontend Development',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: frontenddev,
      pageUrl:"/coding/frontenddev"

    }, {
      title: 'SQL',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: SQL,
      pageUrl:"/coding/sql"

    }, {
      title: 'Computer Programming',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: programming,
      pageUrl:"/coding/programming"

    },{
      title: 'Web Designing',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: webdesign,
      pageUrl:"/coding/webdesign"

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
        title="Computing"
        description="Trying to learn coding fundamentals, preparing for a career in tech, or exploring the latest advancements in computing? Educify is your go-to platform for mastering computing skills. From programming languages like Python and Java to HTML and CSS, Mobile App Development, and Frontend Development, we're here to equip you with the knowledge and skills you need to thrive in the digital age."
        backgroundImage="https://media.istockphoto.com/id/1254718662/photo/cloud-computing-technology-and-online-data-storage-for-business-network-concept.jpg?s=612x612&w=0&k=20&c=9qKGNWQ-bPlYF1bO2nLebRNGbfHJcw3LPgeUq7tu2S0="
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
