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
    "My name is Ha Duy Hung. I am a full-stack mobile app developer, able to work well in both of Android and iOS using native SDK or Flutter framework. I started as an Android developer and learned about iOS and Flutter on working process. In my work history, I worked on many projects and in many domains, such as e-wallet, e-commerce, music player and education app. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1qy4Fw4Dqo0Ccx3ekxVn15zavNQc8U6-y/view?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hnvn",
  reposLength: 0,
  specificRepos: ["flutter_shimmer", "flutter_image_cropper", "flutter_downloader", "flutter_flip_panel"],
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
    "Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.",
  email: "mr.haduyhung@gmail.com",
};


export { navBar, mainBody, about, repos, skills, getInTouch };
