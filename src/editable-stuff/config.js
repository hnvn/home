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
    "My name is Ha Duy Hung. I am a full-stack mobile app developer. I can work well with both of Android and iOS using native SDK or Flutter framework. I started as an Android developer and learnt about iOS and Flutter on working process. In my work history, I worked on many projects and in many domains, such as e-wallet, music player, e-commerce and education app. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1qy4Fw4Dqo0Ccx3ekxVn15zavNQc8U6-y/view?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hnvn", //i.e."johnDoe12Gh"
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
    { name: "Kotlin", value: 65 },
    { name: "Dart", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Mobile App Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mr.haduyhung@gmail.com",
};


export { navBar, mainBody, about, repos, skills, getInTouch };
