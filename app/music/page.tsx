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
import trumpet from "@/src/assets/images/categories/music/trumpet2.png"
import Eguitar from "@/src/assets/images/categories/music/Eguitar.png"
import bassGuitar from "@/src/assets/images/categories/music/bassGuitar.png"
import cello from "@/src/assets/images/categories/music/celloo.png"
import drum from "@/src/assets/images/categories/music/drum.png"
import violin from "@/src/assets/images/categories/music/violin1.png"
import guitar1 from "@/src/assets/images/categories/music/guitar1.png"
import mastering from "@/src/assets/images/categories/music/mastering.png"
import musicTheory from "@/src/assets/images/categories/music/musicTheory.png"
import piano from "@/src/assets/images/categories/music/piano2.png"
import ukuele from "@/src/assets/images/categories/music/ukuele.png"
import production from "@/src/assets/images/categories/music/production.png"
import recorder from "@/src/assets/images/categories/music/recorder.png"
import sax from "@/src/assets/images/categories/music/sax.png"
import singing from "@/src/assets/images/categories/music/singing.png"
import soundEngineering from "@/src/assets/images/categories/music/soundEngineering.png"



export default function Home() {
  const categories = [
    {
      title: 'Trumpet',
      description: "Do complex equations and abstract concepts leave you frustrated? At Educify, we transform confusion into clarity. Our algebra classes are crafted by expert tutors who break down difficult topics into simple, digestible lessons. Whether you need help with homework or want to excel in class, our personalized approach ensures you understand and master algebra with ease.",
      image: trumpet,
      pageUrl:"/music/trumpet"

    },
    {
      title: 'Guitar',
      description: "Are sine, cosine, and tangent leaving you bewildered? We understand the complexities of trigonometry and are here to help. Our expert tutors provide comprehensive trigonometry classes that break down challenging concepts into simple, understandable lessons.",
      image: guitar1,
      pageUrl:"/music/guitar"

    },
    {
      title: 'Piano',
      description: "Are derivatives, integrals, and limits making you feel overwhelmed? Our expert tutors offer in-depth calculus classes designed to breakdown complex concepts and make them understandable. With personalized instruction and interactive lessons, you'll gain a solid understanding of calculus and the confidence to excel. Let Educify be your guide to conquering calculus challenges.",
      image: piano,
      pageUrl:"/music/piano"

    },
  ];

  const additionalCategories = [
    {
      title: 'Violin',
      description: "Do shapes, angles, and formulas seem difficult? Our expert tutors offer comprehensive geometry classes that break down complex concepts into easy-to-follow lessons. With personalized support and interactive tools, you'll master the principles of geometry and develop the skills to solve any problem.",
      image: violin,
      pageUrl:"/music/violin"

    },
    {
      title: 'Saxophone',
      description: "Struggling with differential equations? Our specialized classes focus on making difficult concepts manageable, ensuring you don't just learn, but master the material. With the guidance of our experienced tutors, interactive lessons, and tailored support, you'll move from confusion to comprehension.",
      image: sax,
      pageUrl:"/music/saxophone"

    },
    {
      title: 'Export Cello',
      description: "Finding logical reasoning difficult? Educify can make it simple. Our dedicated tutors explain concepts clearly and provide practical tools to improve your skills. With our help, you’ll understand and solve logical reasoning questions with ease. Find a tutor with Educify and boost your logical thinking today.",
      image: cello,
      pageUrl:"/music/cello"

    },
    {
      title: 'Music Theoory',
      description: "Do the numbers in statistics and probability seem overwhelming? With Educify, you'll find a simpler way to understand these complex topics. Our experienced tutors provide practical examples and easy-to-follow explanations in areas like hypothesis testing, probability rules, and data visualization, helping you gain confidence and proficiency",
      image: musicTheory,
      pageUrl:"/music/musictheory"

    },
    {
      title: 'Bass Guitar',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: bassGuitar,
      pageUrl:"/music/bguitar"

    },
    {
      title: 'Electric  Guitar',
      description: "Finding logical reasoning difficult? Educify can make it simple. Our dedicated tutors explain concepts clearly and provide practical tools to improve your skills. With our help, you’ll understand and solve logical reasoning questions with ease. Find a tutor with Educify and boost your logical thinking today.",
      image: Eguitar,
      pageUrl:"/music/eguitar"

    },
    {
      title: 'Ukuele',
      description: "Do the numbers in statistics and probability seem overwhelming? With Educify, you'll find a simpler way to understand these complex topics. Our experienced tutors provide practical examples and easy-to-follow explanations in areas like hypothesis testing, probability rules, and data visualization, helping you gain confidence and proficiency",
      image: ukuele,
      pageUrl:"/music/ukuele"

    },
    {
      title: 'Music Production',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: production,
      pageUrl:"/music/production"

    },
    {
      title: 'Mastering ',
      description: "Finding logical reasoning difficult? Educify can make it simple. Our dedicated tutors explain concepts clearly and provide practical tools to improve your skills. With our help, you’ll understand and solve logical reasoning questions with ease. Find a tutor with Educify and boost your logical thinking today.",
      image: mastering,
      pageUrl:"/music/mastering"

    },
    {
      title: 'Recorder',
      description: "Do the numbers in statistics and probability seem overwhelming? With Educify, you'll find a simpler way to understand these complex topics. Our experienced tutors provide practical examples and easy-to-follow explanations in areas like hypothesis testing, probability rules, and data visualization, helping you gain confidence and proficiency",
      image: recorder,
      pageUrl:"/music/recorder"

    },
    {
      title: 'Singing',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: singing,
      pageUrl:"/music/singing"

    },
    {
      title: 'Sound Engineering',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: soundEngineering,
      pageUrl:"/music/soundengineering"

    },
    {
      title: ' Drum',
      description: "Is precalculus giving you trouble? Let our expert tutors guide you by offering detailed instruction on critical topics like limits, rational functions, and parametric equations. With personalized lessons and interactive tools, you'll master the material and boost your academic performance. Join Educify and make precalculus your strong suit.",
      image: drum,
      pageUrl:"/music/drum"

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
        title="Music"
        description="Are you passionate about music and ready to take your skills to the next level? Look no further than Educify, where we offer comprehensive music education classes designed to equip you with the knowledge and expertise needed to excel in the world of music."
        backgroundImage="https://t3.ftcdn.net/jpg/02/23/60/54/360_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpghttps://t3.ftcdn.net/jpg/02/23/60/54/360_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg"
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
