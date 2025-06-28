import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://github.com/syazwaninaqibah",
    title: "Jobified - AI Job Matching Platform",
    description:
      "Building AI-powered job match with upskilling and talent recommendation for jobseekers and recruiters.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["AI", "Machine Learning", "Full-stack"],
    slug: "jobified",
    content: (
      <div>
        <p>
          Jobified is an innovative AI-powered platform that revolutionizes the job matching process by connecting jobseekers with relevant opportunities while providing personalized upskilling recommendations. The platform uses advanced machine learning algorithms to analyze skills, experience, and career aspirations.
        </p>
        <p>
          The system not only matches candidates with suitable positions but also identifies skill gaps and suggests targeted learning paths. For recruiters, it provides intelligent talent recommendations based on job requirements and company culture fit, streamlining the hiring process and improving match quality.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/syazwaninaqibah",
    title: "Quality Assurance Dashboard",
    description:
      "Data analysis and visualization dashboard for content moderation quality metrics and performance tracking.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Data Analysis", "Visualization", "Quality Control"],
    slug: "qa-dashboard",
    content: (
      <div>
        <p>
          Developed a comprehensive quality assurance dashboard to track and analyze content moderation performance metrics. The dashboard provides real-time insights into accuracy rates, processing times, and trend analysis for content review operations.
        </p>
        <p>
          Features include automated reporting, performance benchmarking, and predictive analytics to identify potential quality issues before they impact operations. The system has been instrumental in improving team efficiency and maintaining high standards in content moderation processes.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/syazwaninaqibah",
    title: "Persatuan Belia Harmoni",
    description:
      "Led academic and intellectualism initiatives as Head of Department, organizing educational programs and community outreach.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Community Building", "Leadership", "Education"],
    slug: "belia-harmoni",
    content: (
      <div>
        <p>
          As Head of Department for Persatuan Belia Harmoni, I spearheaded various academic and intellectual initiatives aimed at empowering youth through education and community engagement. The programs focused on developing critical thinking, leadership skills, and social awareness among participants.
        </p>
        <p>
          Organized workshops, seminars, and community outreach programs that reached hundreds of young people across Malaysia. The initiatives included academic support programs, leadership development workshops, and social impact projects that addressed local community needs.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/syazwaninaqibah",
    title: "Sawala - Social Movement",
    description:
      "Founded a social movement focused on human rights and religion, promoting dialogue and understanding across communities.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Social Impact", "Community Organizing", "Human Rights"],
    slug: "sawala",
    content: (
      <div>
        <p>
          Sawala is a social movement I founded in 2020 to promote dialogue and understanding around human rights and religious freedom. The movement focuses on creating safe spaces for meaningful conversations about social justice, equality, and religious tolerance.
        </p>
        <p>
          Through various initiatives including community forums, educational workshops, and advocacy campaigns, Sawala has worked to bridge divides and promote mutual understanding across different communities. The movement emphasizes the importance of respectful dialogue in addressing complex social issues.
        </p>{" "}
      </div>
    ),
  },
];