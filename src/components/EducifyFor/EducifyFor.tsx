import blueFile from "../../assets/svg/file-blue.svg";
import group from "../../assets/svg/group.svg";
import handshake from "../../assets/svg/handshake.svg";
import build from "../../assets/svg/build.svg";
import "./educify.styles.scss";
const EducifyFor = () => {
  const emblems = [
    {
      image: blueFile.src,
      title: "Struggle with studying abroad",
      text: "Our quality tutors personalize your learning pace",
    },
    {
      image: group.src,
      title: "Face Challenges Finding High-Quality Tutors",
      text: "Get personalized tutoring and prep materials for SAT, ACT, or skill development. Achieve your learning goals with Educify",
    },
    {
      image: handshake.src,
      title: "Face Academic pressure",
      text: "Our tutors provide personalized coaching to build study skills",
    },
    {
      image: build.src,
      title: "Struggle with complex concepts",
      text: "Get expert support tailored to your needs",
    },
    {
      image: blueFile.src,
      title: "Avoid Expensive Education",
      text: "Explore Educify for affordable tutoring",
    },
    {
      image: group.src,
      title: "Struggle to balance sports training and academics",
      text: "Educify offers flexible tutoring sessions",
    },
    {
      image: handshake.src,
      title: "Seek Tailored tutoring for your child's learning challenges",
      text: "Get personalized support with Educify",
    },
    {
      image: build.src,
      title: "Are Unsatisfied with tutoring programs",
      text: "We match your child with expert tutors who tailor lessons to meet their specific needs",
    },
  ];
  return (
    <div className="whos_educify_for">
      <header>
        <h1>Who is Educify For? </h1>
      </header>
      <div className="emblems">
        {emblems.map((el, i) => (
          <Emblem {...el} key={i} />
        ))}
      </div>
    </div>
  );
};

const Emblem = ({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="teacher_emblem">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <span>{text}</span>
    </div>
  );
};

export default EducifyFor;
