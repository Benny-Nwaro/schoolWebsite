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
import yoruba from "@/src/assets/images/languages/yoruba.png"
import igbo from "@/src/assets/images/languages/igbo.png"
import norway from "@/src/assets/images/languages/norway.png"
import tagalog from "@/src/assets/images/languages/tagalog.png"
import urohbo from "@/src/assets/images/languages/urohbo.png"
import afrikaans from "@/src/assets/images/languages/afrikaans.png"
import japanese from '@/src/assets/images/categories/Languages/japanese.png'
import english from '@/src/assets/images/categories/Languages/english.png'
import spanish from '@/src/assets/images/categories/Languages/spanish.png'




export default function Home() {
  const categories = [
    {
      title: 'English',
      description: "Do complex equations and abstract concepts leave you frustrated? At Educify, we transform confusion into clarity. Our algebra classes are crafted by expert tutors who break down difficult topics into simple, digestible lessons. Whether you need help with homework or want to excel in class, our personalized approach ensures you understand and master algebra with ease.",
      image: english,
      pageUrl:"/language/english"

    },
    {
      title: 'Spanish',
      description: "Are sine, cosine, and tangent leaving you bewildered? We understand the complexities of trigonometry and are here to help. Our expert tutors provide comprehensive trigonometry classes that break down challenging concepts into simple, understandable lessons.",
      image: spanish,
      pageUrl:"/language/spanish"

    },
    {
      title: 'Japanese',
      description: "Are derivatives, integrals, and limits making you feel overwhelmed? Our expert tutors offer in-depth calculus classes designed to breakdown complex concepts and make them understandable. With personalized instruction and interactive lessons, you'll gain a solid understanding of calculus and the confidence to excel. Let Educify be your guide to conquering calculus challenges.",
      image: japanese,
      pageUrl:"/language/japanese"

    },
  ];

  const additionalCategories = [
    {
      title: 'Yoruba',
      description: "Our expert tutors will help you become proficient in Yoruba through personalized classes. Focus on all language aspects—speaking, listening, reading, and writing—to prepare for exams, cultural immersion, or personal enrichment. Start learning Yoruba with us now!",
      image: yoruba,
      pageUrl:"/language/yoruba"

    },
    {
      title: 'Igbo',
      description: "Discover the richness of the Igbo language with our specialized tutors. Our classes are designed to fit your goals, whether for academic purposes, cultural engagement, or personal growth. Begin your journey to Igbo fluency today!",
      image: igbo,
      pageUrl:"/language/igbo"

    },
    {
      title: 'Norwegian',
      description: "Our expert tutors will help you become proficient in Norwegian through personalized classes. Focus on all language aspects—speaking, listening, reading, and writing—to prepare for exams, travel, or personal growth. Start learning Norwegian with us now!",
      image: norway,
      pageUrl:"/language/norwegian"

    },
    {
      title: 'Tagalog',
      description: "Join our tailored Tagalog classes and master the language with skilled tutors. Whether you're preparing for exams, planning a trip to the Philippines, or connecting with your heritage, our lessons are designed for you. Begin your journey to Tagalog fluency now!",
      image: tagalog,
      pageUrl:"/language/tagalog"

    },
    {
      title: 'Urohbo',
      description: "Discover the beauty of the Urhobo language with our specialized tutors. Our classes are designed to fit your goals, whether for personal growth, cultural awareness, or connecting with family roots. Begin your journey to Urhobo fluency today!",
      image: urohbo,
      pageUrl:"/language/urohbo"

    },
    {
      title: 'Afrikaans',
      description: "Join our tailored Afrikaans classes and master the language with skilled tutors. Whether you're preparing for exams, planning a trip to South Africa, or simply fascinated by the language, our lessons are designed for you. Begin your journey to Afrikaans fluency now!",
      image: afrikaans,
      pageUrl:"/language/afrikaans"

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
        title="Languages"
        description="Brushing up on your conversational skills, preparing for an international exam, or diving into a new language from scratch? Educify is your gateway to mastering languages. From Yoruba to Hausa, English to Spanish, French to Arabic, and everything in between, we're here to help you expand your horizons"
        backgroundImage="https://scc.losrios.edu//scc/main/img/social-1200-630/academics/World-Languages-1200x630.jpg"
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
