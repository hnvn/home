// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hà",
  middleName: "Duy",
  lastName: "Hưng",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/hnvn",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hưng-hà-b25496a7",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@hunghdyb",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hunghd.jpg"),
  imageSize: 375,
  message:
    "I'm Ha Duy Hung, a full-stack mobile app developer skilled in both Android and iOS, using native SDKs and the Flutter framework. I started as an Android developer and expanded into iOS and Flutter through hands-on experience. I've worked on a wide range of projects, including e-wallets, e-commerce, music, and education apps. In my free time, I enjoy contributing to open-source projects.",
  resume: "https://drive.google.com/file/d/1X1ano6puPA6Rdeb5Lqd5WoltiWibOtOg/view?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hnvn",
  reposLength: 0,
  specificRepos: ["flutter_shimmer", "flutter_image_cropper", "flutter_pattern_formatter", "flutter_flip_panel"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Android", value: 90 },
    { name: "iOS", value: 75 },
    { name: "Flutter", value: 90 },
    { name: "Java", value: 85 },
    { name: "Objective-C", value: 70 },
    { name: "Swift", value: 65 },
    { name: "Kotlin", value: 60 },
    { name: "Dart", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it",
  email: "mr.haduyhung@gmail.com",
};


export { navBar, mainBody, about, repos, skills, getInTouch };
