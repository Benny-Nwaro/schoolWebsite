import React from "react";
import hero1 from "@/src/assets/images/mathematics/Algebra/1.png"
import hero2 from "@/src/assets/images/mathematics/Algebra/2.png"
import hero3 from "@/src/assets/images/mathematics/Algebra/3.png"
import hero4 from "@/src/assets/images/mathematics/Algebra/4.png"
import { BiSearch } from "react-icons/bi"; // Search icon
import { GoLocation } from "react-icons/go"; // Location icon
import { usePathname } from "next/navigation";

const HeroSection: React.FC = () => {
  const path = usePathname()
  const pathname = path.split("/")
  let title, description = ""
  switch (pathname[2]) {
    case "algebra":
      title="Master Algebraic Concepts with Educify's Expert Classes!";
      description="Our algebra classes cover a wide range of topics, from basic operations and linear equations to quadratic functions, inequalities, and beyond. Whether you're a beginner looking to build a solid foundation in algebra or an advanced learner seeking to master advanced topics, our expert instructors will guide you every step of the way."
      
      break;
    case "trig":
        title="Master Trigonometry with Educify's Expert Classes";
        description="Gain access to expert-led classes that cover a wide range of trigonometric topics, from basic trigonometric ratios to advanced identities and applications."
        
        break;

    case "calculus":
          title="Master Calculus with Educify's Expert Classes";
          description="Dive into the fascinating realm of calculus with Educify's specialized classes, meticulously crafted to demystify complex concepts and empower you to excel in calculus and beyond."
          
          break;

    case "statistics":
            title="Dive into the World of Statistics and Probability";
            description="Statistics and probability play a crucial role in various fields, from science and business to finance, healthcare, and beyond. With Educify, you'll embark on a journey to unravel the intricacies of statistical analysis, probability theory, and data-driven decision-making, unlocking valuable insights and opening doors to exciting career opportunities."
            
            break;

      case "geometry":
              title="Discover the Wonders of Geometry with Educify's Expert Classes";
              description="Geometry is more than just lines and angles; it's a fundamental branch of mathematics that underpins architecture, design, engineering, and countless other fields. With Educify, you'll gain a deep understanding of geometric principles and applications, empowering you to visualize, analyze, and solve a wide range of geometric problems with confidence and precision"
              
              break;
      case "precalculus":
                title="Master Precalculus and Unlock the Power of Advanced Mathematics";
                description="Dive into the fascinating world of precalculus with Educify's comprehensive classes designed to equip you with the skills and knowledge needed to excel in higher-level mathematics."
                
                break;  
      case "logic":
                title="Sharpen Your Logical Reasoning Skills with Educify's Expert Classes";
                description="Gain access to comprehensive classes that cover a wide range of logical reasoning topics, including deductive and inductive reasoning, formal logic, argument analysis, and more"
                
                break; 
  
    default:
      break;
  }
  console.log(pathname) 
  return (
    <div className="bg-blue-50 py-10 pt-48 max-md:pt-32 ">
      {/* Main Content */}
      <div className="flex flex-col  max-md:pl-5 max-md:flex-col">
        <div className="flex flex-row w-full lg:space-x-96  max-md:flex-col">
            <div className="w-2/3 pl-32 max-md:w-full max-md:text-left max-md:px-5">
                {/* Breadcrumbs */}
                 <div className="text-gray-500 text-sm mb-4">
                        <a href="/" className="hover:text-gray-700 cursor-pointer">Educify</a> &gt; 
                        <a href="/categories" className="hover:text-gray-700 cursor-pointer ml-2">Categories</a> &gt; 
                        <a href={`/${pathname[pathname.length-2]}`} className="hover:text-gray-700 cursor-pointer ml-2">{pathname[pathname.length-2]}</a> &gt; 
                        <a className="text-black ml-2">{pathname[pathname.length-1]}</a>
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {title}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {description}
                </p>
            </div>
          
              {/* Right Section */}
            <div className="flex flex-row  w-2/3 max-md:w-full max-md:px-5">
            <img 
                    src={hero1.src} 
                    alt="Chalkboard 1" 
                    className="rounded-lg shadow-lg w-[166px] h-[419px] max-md:w-20 "
                />
            <div className="flex flex-col">
                <div className="flex flex-row ">
                
                <img 
                    src={hero2.src} 
                    alt="Chalkboard 2" 
                    className="rounded-lg shadow-lg object-cover w-[209px] h-[251px] max-md:w-20 "
                />
                <img 
                    src={hero4.src}  
                    alt="Chalkboard 3" 
                    className="rounded-lg shadow-lg object-cover w-[123px] h-[251px] max-md:w-20 "
                />
                </div>
                <img 
                    src={hero3.src} 
                    alt="Chalkboard 4" 
                    className="rounded-lg shadow-lg object-cover w-[334px] h-[166px] "
                />
                </div>
            </div>
        </div>
        

        <div className="flex items-center justify-between bg-white shadow-lg border-2 border-gray-400 rounded-full  px-4 py-2 w-full md:w-2/3 lg:w-1/2 ml-32 max-md:mx-auto max-md:mt-10  ">
      {/* Search Icon and Input */}
      <div className="flex items-center gap-2 flex-grow">
        <BiSearch className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search similar classes"
          className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Divider */}
      <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>

      {/* Location Icon and Input */}
      <div className="flex items-center gap-2 flex-grow">
        <GoLocation className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Tutor's location"
          className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Search Button */}
      <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium rounded-full  px-6 py-2 shadow-lg hover:shadow-xl transition">
        Search
      </button>
    </div>


    
       
      </div>
    </div>
  );
};

export default HeroSection;
