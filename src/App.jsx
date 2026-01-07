import { createSignal, onCleanup } from "solid-js";
import TiltedCard from "./TiltedCard.jsx";
import "./collection.jsx";
import "./App.css";
import headphoto from "./assets/AppProfile.jpg";
import seniorpic from "./assets/SeniorPicture.jpg";
import { onMount } from "solid-js";
import { getCollection } from "./collection.jsx";
import Expanded from "./expanded.jsx";
import Expanded1 from "./expanded1.jsx";

function App() {
  const [count, setCount] = createSignal(0);

  /* Sidebar functions */
  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  /*Card Expansion*/
  const Details = [
    {
      id: "lucidwake 1",
      title: "Lucid Wake",
      subtitle:
        "Device to detect when sleep paralysis episode is occuring and then wake user up",
      role: "Role: Team Lead, Lead App Developer",
      background: "/WhiteGreyGrid.jpg",

      heroImg: "/Projects/LucidWakePoster.png",
      imagePlacement: "right-sidebar",
      imageMode: "normal",

      tech: [
        "Matlab",
        "Bluetooth Interfacing",
        "App Development",
        "Research",
        "Data Analysis",
        "Public Speaking",
        "Prototype Testing",
      ],

      sections: [
        {
          heading: "Our Approach",
          img: "/LucidWakeOurApproach.png",
        },
        {
          heading: "My Role",
          text: "-I created the app prototype that integrates audio analysis software with any Bluetooth capable device, and sends a stimulus when audio data indicates an episode is happening to wake the user up. App allows customizability of the sensitivity of the determining thresholds, and ability to upload custom audio stimulus. The app also allows users to upload soundbites to train Software.",
          text1:
            "-During testing, I created a survey aimed at determinening consumer reactions to various methods of stimulus and housing our device and then did the subsequent data analysis of reasults. The results were used to deterimine the specifics of housing the device and led to the decisions that would be made on the final prototype. Said prototype was highly complimented by Doctors, the Project Partner, and other visting industry professionals.",
        },
        {
          heading: "Our Product",
          text: "-Based on the ability to hyperventilate during episodes making detection both possible and accurate.",
          text1:
            "-Compatible with any Bluetooth capable microphone and headphone or earphone.",
          text2:
            "-The microphone captures breathing sounds and transmits them to an audio analysis software.",
          text3:
            "-This then processes the data using a Fourier Transform and can determine whether the breathing is hyperventilation or normal. This determination is based on breathing rate and volume thresholds, above which the breathing is considered abnormal.",
          text4:
            "-Initially the thresholds are determined through training sound samples that the user can upload, but they can be further adjusted and fine-tuned as required.",
          text5:
            "-If the software recognizes this breathing as hyperventilation it will send an audio stimulus to the headphones, waking the user up.",
          text6:
            "-The app serves as an interface allowing users to upload their own custom alarm sounds and breathing sound samples for training, in addition to customizing the sensitivity of the thresholds.",
        },
      ],

      side: [
        {
          title: "Team / Timeline / Project Partner",
          text: "Annan Vora, Ben Zhu, Eric Wang",
          text1: "Sept 2025 - Dec 2025",
          text2: "Professor Zachary Berent",
        },
        {
          title: "Links",
          link: "https://drive.google.com/file/d/1No4VBGzC9xipdY6AgJg4p-0mRoH30cLA/view?usp=sharing",
          linkName: "Project Report",
          link1:
            "https://drive.google.com/file/d/18Bw24P5nm7e0kBfZrvfiUsROLntmgEnU/view?usp=sharing",
          linkName1: "Project Poster",
        },
        {
          title: "Background",
          text: "Sleep Paralysis is an experience where a person regains consciousness before their body comes out of muscle atonia, the inability to move muscles, that the body enters when it undergoes REM Sleep, the sleep phase where dreams are experienced. Episodes can range from a few seconds to over half an hour and can come with experiences such as hallucinations, feelings of pressure and general fear and anxiety. An estimated 5% of the population will experience episodes regularly. Professor Zachary Berent, reached out to us to design a way to interrupt his episodes as they occur. He specified that he was looking for a non-disruptive product that did not involve medication. A specific ability that he shared was that he was able to control his breathing during episodes.",
        },
      ],
    },
    {
      id: "lucidwake 2",
      title: "Air Force Research Lab Challenge Competition Problem 1",
      subtitle:
        "Design a training regime for an image-recognition program under severe data constraints",
      role: "",
      background: "/WhiteGreyGrid.jpg",

      tech: [
        "Python",
        "Command Line Interface",
        "Machine Learning",
        "Feature Engineering",
      ],

      sections: [
        {
          heading: "My Approach",
          text: "-I decided to use feature engineering to ensure the program would learn to associate specific aspects of each animal to said animal.",
          text2:
            "-Said aspects were talons, beaks and wings for birds; height, 3 dimensionality and snouts for dogs; and length, fins and a dark background for fish. ",
          text3:
            "-Then made the training data in 3 levels, first taking the base training data and removing the images with 0 or 1 aspects, second removing those with less than two and then finally picking the ones with the best defined aspects that also fit within the training data constraints. ",
          text4:
            "-I then wrote code to change the amount of epochs and the batch size that the program trained under to optimize the new training set.",
        },
        {
          heading: "Results",
          text: "The difference between the models was that later on I discovered that some of the training images I used were also being tested on in the model and I figured that would skew the results so I went back through the test images and removed the ones that the model had been trained on, this model is called Test1.",
          img1: "/Projects/AFRL11.png",
          img2: "/Projects/AFRL12.png",
        },
      ],

      side: [
        {
          title: "Overview",
          text: "All teams were tasked with modifying an existing image recognition program to work under severe training data constraints. Said program would need to be able to identify birds, dogs and fish.",
        },
        {
          title: "Team / Timeline / Mentor",
          text: "Solo",
          text1: "May 2024",
          text2: "Dr. Zac Schrecengost",
        },
        {
          title: "Links",
          link: "https://drive.google.com/file/d/1nVGfY6fOqZcCFTkJCM5HnWNRoia_Ppbl/view?usp=sharing",
          linkName: "Presentation",
        },
      ],
    },
    {
      id: "lucidwake 3",
      title: "Rover Prototype",
      subtitle:
        "Research a planet and construct a rover prototype designed to explore it",

      background: "/WhiteGreyGrid.jpg",

      tech: [
        "Java",
        "Sodering",
        "Fusion360",
        "3D Printing",
        "Sensor Interfacing",
        "Rover Design",
        "Solar Panel Integration as a power source",
      ],

      sections: [
        {
          heading: "Our Prototype",
          text: "Designed to take samples from dead oceans, water sources and land samples. The rover head contains multiple holes for camera and spectrometers. On top of the rover rests a small cavern to carry a drone equipped to measure atmospheric data as well as take pictures. Also contains a side compartment for gas collection and storage and a front compartment for rock collection. It is hollow to allow for maximus rock storage and the prototype is powered by solar panels.",
          img: "/Projects/Rover.jpg",
        },
      ],

      side: [
        {
          title: "Overview",
          text: "Tasked to conduct research on an exoplanet that could be capable of containing life and then designing a rover prototype that could explore said planet along with mock terrain of said planet. Our planet chosen was KEPLER-452b. We choose this planet because it has flowing rivers, lakes and pools; It used to have oceans; It has land masses; There is an atmosphere. ",
        },
        {
          title: "Team",
          text: "Defne Atalay",
        },
        {
          title: "Links",
          link: "https://drive.google.com/file/d/1upaWM7McxRqOCFybFl6VHelMYeCulgjl/view?usp=sharing",
          linkName: "Presentation",
        },
      ],
    },
    {
      id: "lucidwake 4",
      title: "Air Force Research Lab Challenge Competition Problem 2",
      subtitle: "Find bugs within an image-recognition system and repair it",
      role: "",
      background: "/WhiteGreyGrid.jpg",

      tech: ["Python", "Command Line Interface", "Hot Codes"],

      sections: [
        {
          heading: "My Approach",
          text: "-Run tests with the image-recognition program.",
          text2: "-Accessed and analyzed the training set.",
          text3: "-Realized that the hot codes assigned to images were wrong.",
          text4:
            "-Wrote code to change the hot codes based on the metadata of each image.",
        },
        {
          heading: "Results",
          img: "/Projects/AFRL21.png",
        },
      ],

      side: [
        {
          title: "Overview",
          text: "We were given a different image-recognition program that was not functioning properly and were tasked with finding out what was wrong and fixing it.",
        },
        {
          title: "Team / Timeline / Mentor",
          text: "Solo",
          text1: "May 2024",
          text2: "Dr. Zac Schrecengost",
        },
        {
          title: "Links",
          link: "https://drive.google.com/file/d/1qkSaqLWWA1V1zXwgLcRe573AYn7c1sY0/view?usp=sharing",
          linkName: "Presentation",
        },
      ],
    },
    {
      id: "lucidwake 5",
      title: "This Website",

      background: "/WhiteGreyGrid.jpg",

      tech: [
        "CSS",
        "HTML",
        "Javascript",
        "Vite",
        "Solid",
        "GSAP",
        "MotionOne",
        "Blender",
        "Vercel",
      ],

      sections: [
        {
          heading: "The Website",
          text: "This website was coded in HTML, CSS and Javascript using the Vite + Solid Framework and GSAP and MotionOne. Javascript was used to make the animations seen on this website. This is the third iteration of the website. The first was a bare bones site containing the content only. The second was a hodgepodge of animation techniques and web development styles I had learned throughout my research and the third was an integration of those principles with my own style and desired modifications and enhancements. The creation of the website was primarily used as a hands-on learning tool for the skills mentioned in the skills section of this project. The website consists of 4,800 lines of code plus the default code of the Vite + Solid framework. The website was deployed using Vercel.",
        },
      ],

      side: [
        {
          title: "Overview",
          text: "Designed to show off my resume in a larger context than a one page resume. Also to help me learn CSS and HTML and more about Javascript in a hands-on manner. It is the culmination of the things I learned in these languages.",
        },
      ],
    },
    {
      id: "lucidwake 6",
      title: "Air Force Research Lab Challenge Competition Problem 3",
      subtitle:
        "Modify an image-recognition program to counter adversarial images",
      role: "",
      background: "/WhiteGreyGrid.jpg",

      tech: [
        "Python",
        "Command Line Interface",
        "Machine Learning",
        "Feature Engineering",
      ],

      sections: [
        {
          heading: "My Approach",
          text: "-I used noisy images and blockers in training to train the program.",
          text2:
            "-I made 4 models: All noise levels included in training, 0.1 to 0.5 noise levels included in training, 0.6 - 1 noise levels included in training, All noise levels and blockers included in training.",
        },
        {
          heading: "Results",
          img1: "/Projects/AFRL31.png",
          img2: "/Projects/AFRL32.png",
        },
      ],

      side: [
        {
          title: "Overview",
          text: "Modify an image-recognition program to counter adversarial images.",
        },
        {
          title: "Team / Timeline / Mentor",
          text: "Solo",
          text1: "May 2024",
          text2: "Dr. Zac Schrecengost",
        },
        {
          title: "Links",
          link: "https://drive.google.com/file/d/1gbYY3QHU0IfihkeEhiFbE890zzdFuAh6/view?usp=sharing",
          linkName: "Presentation",
        },
      ],
    },
    {
      id: "lucidwake 7",
      title: "Coming Soon",
      subtitle:
        "Device to detect when sleep paralysis episode is occuring and then wake user up",
      role: "Team Lead, Lead App Developer",
      background: "/WhiteGreyGrid.jpg",

      heroImg: "/LucidWake2.jpg",
      imagePlacement: "hero-right",
      imageMode: "morph",

      tech: [],

      sections: [
        {
          heading: "",
          text: "",
        },
        {
          heading: "",
          text: "",
        },
        {
          heading: "",
          text: "",
        },
      ],

      side: [
        {
          title: "",
          text: "",
        },
        {
          title: "",
          text: "",
        },
        {
          title: "",
          text: "",
        },
      ],
    },
    {
      id: "lucidwake 8",
      title: "Education",
      subtitle: "My Academic Journey",

      background: "/WhiteGreyGrid.jpg",

      heroImg: "/Education.jpg",
      imagePlacement: "hero-right",
      imageMode: "morph",

      sections: [
        {
          heading: "Northwestern (2025-Current)",
          text: "-Attending for a B.S in Mechanical Engineering with a concentration in Aerospace.",
          text1: "-Current GPA: 3.7.",
          text2:
            "-Relevent coursework: Advanced Inorganic Chemistry, Physics for ISP, Design Thinking and Communication, Multivariable Differential Calculus, Principles of the Properties of Materials.",
          text3:
            "-Relevent Activities: Propulsion Team (Building Northwestern's first Liquid-Fueled Rocket)",
        },
        {
          heading: "Christian Brothers Academy",
          text: "-Degree: NYS Regents Advanced-Designation – Math & Science Mastery (Honors) Diploma (98.78% GPA).",
          text1: "-National Honors Society.",
          text2: "-Tri-M National Honors Society.",
          text3: "-AP Scholar with Distinction.",
          text4: "-3x NY State Scholar Athlete.",
          text5: "-Secretary-General of Model UN.",
        },
      ],

      side: [
        {
          title: "Certifications from Codecademy (50+ million users)",
          text: "-Certification in “AI Fundamentals” - contained 7 courses.",
          text1:
            "-Certification in “Math for Data Science” - contained 6 courses.",
          text2: "-Certification in “Python 3”.",
          text3:
            "-Certification in “Feature Engineering” - contained 4 courses.",
          text4:
            "-Certification in “Introduction to Cybersecurity” - 1 course.",
          text5: "-Certification in “Intro to Cloud Computing” -  1 course.",
        },
      ],
    },
    {
      id: "lucidwake 9",
      title: "Declan Reed",
      subtitle: "Basics About Me",
      role: "",
      background: "/WhiteGreyGrid.jpg",

      heroImg: "/Projects/AboutMe.png",
      imagePlacement: "hero-right",
      imageMode: "morph",

      sections: [
        {
          text: "My name is Declan Reed, and I am a current Freshman attending Northwestern University, studying Mechanical Engineering with a concentration in Aerospace. The Aerospace field has long held my interest with rockets and space in general, having fascinated me since I was a kid. Obviously, as I have grown my interests have become more complex, as have my skills. Now, specifically, I am interested in the propulsion subfield of Aerospace and look forward to exploring it more during my academic journey, along with the aerospace field in general. The rest of this website details my educational background, experience, projects as well as how to get in contact with me.",
        },
        {
          text: "To give a brief overview, I graduated high school in 2025 from Christian Brothers Academy in Syracuse, NY with a 98.78% GPA and the NYS Regents Advanced-Designation – Math & Science Mastery (Honors) Diploma along with a multitude of other certifications or coursework completed outside of high school. I have awards ranging from local Best and Brightest, to recognitions from the state on my achievements, to national awards. I now attend Northwestern University in Evanston, IL. Here, I have secured a job in the Mechanical Engineering Department helping the personnel here with any tasks that require assistance. I also however have previous experience from interning at the Griffiss Institute, as well as serving as a consultant to Quanterion Solution as well as Professor McKnight from Syracuse University's MITOpenCourseWareCourse, along with experience in a myriad of softwares and programming languages, as outlined coming up.",
        },
      ],

      side: [
        {
          title: "Currently",
          text: "University: Freshman Northwestern University",
          text1:
            "Major: Mechanical Engineering with a concentration in Aerospace",
          text2: "GPA: 3.7",
        },
      ],
    },
    {
      id: "lucidwake 10",
      title: "My Experience",
      subtitle: "My career so far",
      role: "",
      background: "/WhiteGreyGrid.jpg",

      heroImg: "/Experiences.jpg",
      imagePlacement: "hero-right",
      imageMode: "morph",

      sections: [
        {
          heading: "Griffiss Institute (Intern)",
          heading1: "August 2024 - Current (Each Summer)",
          text: "-Received special permission from the federal government to hire me.",
          text1:
            "-Managed and led other interns while the Director was sick, assisted visiting professors in operations.",
          text2:
            "-Co-Created a new inventory management system containing enhanced scalability and ability to easily retrieve data analytics.",
          text3:
            "-Created a database to house 3,000+ data points collected from various STEM Programs and compiled and organized the data analytics from that data. Database structure now used for future iterations of those programs.",
          text4:
            "-Worked on Python programs and installed and troubleshooted various Softwares.",
        },
        {
          heading: "NU Dept. of Mech. Eng. (Aide)",
          heading1: "Sep. 2025 - Current",
          text: "-Edit Dept Web Applications.",
          text2: "-Write Expense Reports.",
          text3: "-Compile Dept Orders.",
          text4: "-Assist Dept Personnel with Daily Operations.",
        },
        {
          heading: "Quanterion Solutions and ORION (Student Consultant)",
          heading1: "Feb. 2024",
          text: "-Consulted on STEM Education programs.",
          text1:
            "-Co-Developed new flow for a Cloud Infrastructure Education Program.",
          text2:
            "-Co-Developed new marketing materials and strategies for STEM Education Program.",
          text3: "-Modeled in Marketing Materials.",
        },
        {
          heading: "MIT OpenCourseWare (Consultant)",
          heading1: "March 2024",
          text: "-Helped edit and consulted for Professor McKnights course on MIT OpenCourseWare.",
          text1: "",
        },
      ],

      side: [
        {
          title: "Refrences",
          text: "Griffiss: Director Jen Marshall",
          text1: "Norhtwestern: Jeremy Wells",
          text3: "Quanterion: Todd Huminston",
          text4: "MIT OCW: Professor McKnight",
        },
      ],
    },
    {
      id: "lucidwake 11",
      title: "Awards",
      subtitle: "Awards I have received",

      background: "/WhiteGreyGrid.jpg",

      heroImg: "/LucidWake2.jpg",
      imagePlacement: "hero-right",
      imageMode: "morph",

      sections: [
        {
          heading:
            "1st Place in the Air Force Research Lab's Challenge Comperition - Air Force Research Lab",
        },
        {
          heading:
            "Central New York's Best and Brightest - Syracuse Post Standard",
        },
        {
          heading:
            "Xerox Award for Innovation and Technology - University of Rochester",
        },
        {
          heading: "Certificate of Achievement - Senator Sean M. Ryan",
        },
        {
          heading: "Certificate of Merit - New York State Assembly",
        },
        {
          heading:
            "Admitted into Northwestern's Integrated Science Program - Northwestern Univeristy (40 out of 2,000 admitted)",
        },
        {
          heading: "3x New York State Scholar Athlete - New York State",
        },
      ],

      side: [],
    },
    {
      id: "lucidwake 12",
      title: "Coming Soon",
      subtitle: "",
      role: "",
      background: "/Space.JPG",

      heroImg: "",
      imagePlacement: "",
      imageMode: "",

      tech: [],

      sections: [
        {
          heading: "",
          text: "",
        },
        {
          heading: "",
          text: "",
        },
        {
          heading: "",
          text: "",
        },
      ],

      side: [
        {
          title: "",
          text: "",
        },
        {
          title: "",
          text: "",
        },
        {
          title: "",
          text: "",
        },
      ],
    },
  ];
  const [expanded, setExpanded] = createSignal(null);
  const closeExpanded = () => {
    setExpanded(null);
    document.body.style.overflow = "";
  };
  const OpenExpanded = (index) => {
    const data = Details[index];
    if (!data) return;
    setExpanded(data);
    document.body.style.overflow = "hidden";
  };
  const [expanded1, setExpanded1] = createSignal(null);
  const closeExpanded1 = () => {
    setExpanded1(null);
    document.body.style.overflow = "";
  };
  const OpenExpanded1 = () => {
    setExpanded1(true);
    document.body.style.overflow = "hidden";
  };

  /*Contact Form*/
  const [response, setResponse] = createSignal("");
  function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    setResponse(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    );
  }

  onMount(() => {
    /*Skills Section*/
    getCollection();

    /*Make Expand*/
    const toggleExpansion = (element, to, duration = 1) => {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          element.style.transition =
            "width 1s ease-in-out, height 1s ease-in-out, left 1s ease-in-out, top 1s ease-in-out";
          element.style.top = "0px";
          element.style.left = "0px";
          element.style.width = "100vw";
          element.style.height = "100vh";
        });
        setTimeout(resolve, duration * 1000);
      });
    };

    const fadeContent = (element, duration = 1) => {
      return new Promise((resolve) => {
        [...element.children].forEach((child) => {
          requestAnimationFrame(() => {
            child.style.transition = `opacity ${duration}s linear`;
            child.style.opacity = 0;
          });
        });
        setTimeout(resolve, duration * 1000);
      });
    };

    const fadeOutAndRemove = (el, duration = 2.5) => {
      return new Promise((resolve) => {
        el.style.transition = `opacity ${duration}s ease`;
        el.style.opacity = "1";

        requestAnimationFrame(() => {
          el.style.opacity = "0";
        });

        setTimeout(() => {
          el.remove();
          resolve();
        }, duration * 1000);
      });
    };

    onCleanup(() => {
      document.body.style.overflow = "";
    });

    /*Main Section*/
    let mainitems = document.querySelectorAll(".mainimageitem");
    let mainnext = document.querySelector(".nextButton");
    let mainprev = document.querySelector(".previousButton");

    let mainactive = 2;
    function loadShow() {
      let stt = 0;
      mainitems[mainactive].style.transform = `translateX(0) scale(1)`;
      mainitems[mainactive].style.filer = "none";
      mainitems[mainactive].style.transformStyle = "preserve-3d";
      mainitems[mainactive].style.zIndex = 1;
      mainitems[mainactive].style.filter = "none";
      mainitems[mainactive].style.opacity = 1;
      for (var i = mainactive + 1; i < mainitems.length; i++) {
        stt++;
        mainitems[i].style.transform =
          `translateX(${300 * stt}px) scale(${1 - 0.3 * stt}) perspective(16px) rotateY(-1deg)`;
        mainitems[i].style.zIndex = -stt;
        mainitems[i].style.filter = "blur(1px)";
        mainitems[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
      stt = 0;
      for (var i = mainactive - 1; i >= 0; i--) {
        stt++;
        mainitems[i].style.transform =
          `translateX(${-300 * stt}px) scale(${1 - 0.3 * stt}) perspective(16px) rotateY(1deg)`;
        mainitems[i].style.zIndex = -stt;
        mainitems[i].style.filter = "blur(1px)";
        mainitems[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }
    loadShow();

    mainnext.onclick = function () {
      mainactive =
        mainactive + 1 < mainitems.length ? mainactive + 1 : mainactive;
      loadShow();
    };
    mainprev.onclick = function () {
      mainactive =
        mainactive - 1 < mainitems.length ? mainactive - 1 : mainactive;
      loadShow();
    };

    /*Star Background*/
    const canvas = document.getElementById("c");
    const cancon = canvas.getContext("2d");
    function resizestar() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizestar);
    resizestar();

    const starCount = 70;
    const MinRadius = 3;
    const MaxRadius = 7;

    const dots = [];

    function starPosition() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: MinRadius + Math.random() * (MaxRadius - MinRadius),
        zero: 0,
        dir: 1,
        fadeSpeed: 0.01 + Math.random() * 0.03,
      };
    }
    for (let i = 0; i < starCount; i++) {
      dots.push(starPosition());
    }
    function makeStar(dot) {
      const starG = cancon.createRadialGradient(
        dot.x,
        dot.y,
        0,
        dot.x,
        dot.y,
        dot.radius,
      );
      starG.addColorStop(0, `rgba(255,255,255,${dot.zero})`);
      starG.addColorStop(1, "rgba(255,255,255,0)");

      cancon.fillStyle = starG;
      cancon.beginPath();
      cancon.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      cancon.fill();
    }
    function animateStar() {
      cancon.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.zero += dot.fadeSpeed * dot.dir;
        if (dot.zero >= 1) dot.dir = -1;
        if (dot.zero <= 0) {
          dot.dir = 1;
          dot.x = Math.random() * canvas.width;
          dot.y = Math.random() * canvas.height;
          dot.radius = MinRadius + Math.random() * (MaxRadius - MinRadius);
        }
        makeStar(dot);
      });
      requestAnimationFrame(animateStar);
    }
    animateStar();

    /*Intro*/
    const bars = document.querySelectorAll(".contentbar, .contentbar1");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (!entry.target.dataset.loadedScheduled) {
              entry.target.dataset.loadedScheduled = "true";

              setTimeout(() => {
                entry.target.classList.add("has-loaded");
              }, 13000);
            }
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.4,
      },
    );
    bars.forEach((bar) => observer.observe(bar));
    const introName = document.querySelectorAll(".rotatingimagecontent");
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            if (!entry.target.dataset.loadedScheduled) {
              entry.target.dataset.loadedScheduled = "true";

              setTimeout(() => {
                entry.target.classList.add("has-loaded");
              }, 20000);
            }
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.6,
      },
    );
    introName.forEach((el) => observer1.observe(el));

    /*Button fade In*/
    const coolButton = document.querySelectorAll(
      ".coolButton1, .coolButton2, .skillslist",
    );
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.6 },
    );
    coolButton.forEach((btn) => observer2.observe(btn));

    /*Images*/
  });

  return (
    <>
      <div class="mainpage">
        <div class="starbackground">
          <canvas id="c"></canvas>
        </div>
        <nav>
          <ul class="sidebar">
            <li onClick={hideSidebar}>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="#ffffffff"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#images">Images</a>
            </li>
            <li>
              <a href="#featured">Featured</a>
            </li>
          </ul>
          <ul>
            <li
              class="resumeButton"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1fZTsPe_8OK5g4KjvjxS-tm5spLC8tskI/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              <r>My Resume</r>
            </li>
            <li class="hideOnMobile">
              <a href="#projects">Projects</a>
            </li>
            <li class="hideOnMobile">
              <a href="#overview">Overview</a>
            </li>
            <li class="hideOnMobile">
              <a href="#skills">Skills</a>
            </li>
            <li class="hideOnMobile">
              <a href="#contact">Contact</a>
            </li>
            <li class="hideOnMobile">
              <a href="#images">Images</a>
            </li>
            <li class="hideOnMobile">
              <a href="#featured">Featured</a>
            </li>

            <li onClick={showSidebar}>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="#e3e3e3"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        <div id="projects" class="rotatingimagecontainer">
          <div class="rotatingimagebanner">
            <div class="rotatingimageslider" style="--quantity: 6">
              <div class="rotatingimageitem" style="--position: 1">
                <div class="rotatingimagecard">
                  <div class="cardexpansion1" onClick={() => OpenExpanded(0)}>
                    <img src="/LucidWakeProject.png" />
                  </div>
                </div>
              </div>
              <div class="rotatingimageitem" style="--position: 2">
                <div class="rotatingimagecard">
                  <div class="cardexpansion1" onClick={() => OpenExpanded(1)}>
                    <img src="/AFRL1.png" />
                  </div>
                </div>
              </div>
              <div class="rotatingimageitem" style="--position: 3">
                <div class="rotatingimagecard">
                  <div class="cardexpansion1" onClick={() => OpenExpanded(2)}>
                    <img src="/Rover.png" />
                  </div>
                </div>
              </div>
              <div class="rotatingimageitem" style="--position: 4">
                <div class="rotatingimagecard">
                  <div class="cardexpansion1" onClick={() => OpenExpanded(3)}>
                    <img src="/AFRL2.png" />
                  </div>
                </div>
              </div>
              <div class="rotatingimageitem" style="--position: 5">
                <div class="rotatingimagecard">
                  <div class="cardexpansion1" onClick={() => OpenExpanded(4)}>
                    <img src="/Website.png" />
                  </div>
                </div>
              </div>
              <div class="rotatingimageitem" style="--position: 6">
                <div class="rotatingimagecard">
                  <div class="cardexpansion1" onClick={() => OpenExpanded(5)}>
                    <img src="/AFRL3.png" />
                  </div>
                </div>
              </div>
            </div>

            <div class="rotatingimagecontent">
              <div class="PortfolioHolder">
                <svg
                  width="570"
                  height="71"
                  viewBox="0 0 570 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.984 67.968C19.232 67.968 16.576 67.744 14.016 67.296C11.52 66.784 9.43999 66.176 7.77599 65.472C6.17599 64.704 5.37599 63.968 5.37599 63.264C5.37599 61.6 5.53599 59.104 5.85599 55.776C6.23999 52.448 6.43199 48.288 6.43199 43.296V32.448C6.43199 28.224 6.59199 24.8 6.91199 22.176C7.29599 19.488 7.67999 17.408 8.06399 15.936H4.79999L-8.29622e-06 9.504L0.767992 7.968H8.83199C11.648 7.968 14.304 7.936 16.8 7.872C19.296 7.808 21.376 7.776 23.04 7.776C24.768 7.776 26.624 8.352 28.608 9.504C30.656 10.592 32.544 12 34.272 13.728C36.064 15.392 37.504 17.152 38.592 19.008C39.744 20.864 40.32 22.56 40.32 24.096C40.32 28 40.224 32 40.032 36.096C39.904 40.192 39.84 44.608 39.84 49.344C39.84 54.528 39.104 58.464 37.632 61.152C36.16 63.84 34.08 65.664 31.392 66.624C28.768 67.52 25.632 67.968 21.984 67.968ZM26.208 16.32C24.672 16.32 23.232 16.384 21.888 16.512C20.608 16.576 19.232 16.768 17.76 17.088C17.312 18.752 16.928 20.832 16.608 23.328C16.288 25.76 16.128 28.576 16.128 31.776V45.696C16.128 49.344 16.064 52.288 15.936 54.528C15.872 56.768 15.712 58.656 15.456 60.192C16.224 60.384 17.152 60.48 18.24 60.48C22.08 60.48 24.992 59.36 26.976 57.12C28.96 54.816 29.952 50.848 29.952 45.216C29.952 41.952 30.016 38.752 30.144 35.616C30.272 32.416 30.368 29.536 30.432 26.976C30.56 24.416 30.624 22.464 30.624 21.12C30.624 19.456 30.272 18.24 29.568 17.472C28.928 16.704 27.808 16.32 26.208 16.32ZM67.3012 68.64C65.7652 68.64 63.8772 68.256 61.6372 67.488C59.3972 66.656 57.1572 65.6 54.9172 64.32C52.7412 62.976 50.9172 61.536 49.4452 60C47.9732 58.4 47.2372 56.832 47.2372 55.296C47.2372 53.76 47.3332 51.104 47.5252 47.328C47.7812 43.552 47.9092 39.04 47.9092 33.792C47.9092 25.472 52.4532 21.312 61.5412 21.312C62.9492 21.312 64.5812 21.76 66.4372 22.656C68.2932 23.488 70.0852 24.608 71.8132 26.016C73.5412 27.36 74.9812 28.768 76.1332 30.24C77.2852 31.712 77.8612 33.088 77.8612 34.368V42.24C77.8612 47.424 74.9812 50.016 69.2212 50.016C67.4292 50.016 65.3812 49.92 63.0772 49.728C60.7732 49.472 58.7252 49.184 56.9332 48.864C56.8692 50.976 56.8052 52.896 56.7412 54.624C56.7412 56.288 56.7412 57.248 56.7412 57.504C56.7412 58.528 56.9972 59.264 57.5092 59.712C58.0212 60.16 58.9492 60.384 60.2932 60.384C62.2772 60.384 64.4212 60.096 66.7252 59.52C69.0932 58.88 71.2052 57.952 73.0612 56.736H74.5012L79.6852 64.608C78.4692 65.76 76.6452 66.72 74.2132 67.488C71.8452 68.256 69.5412 68.64 67.3012 68.64ZM57.2212 36.864C57.2212 37.376 57.1892 38.144 57.1252 39.168C57.1252 40.192 57.1252 41.344 57.1252 42.624C58.9812 42.816 61.1252 42.912 63.5572 42.912C65.4132 42.912 66.6932 42.464 67.3972 41.568C68.1652 40.608 68.5492 39.168 68.5492 37.248V32.064C68.5492 31.36 68.3572 30.752 67.9732 30.24C67.5892 29.728 66.7572 29.472 65.4772 29.472C62.9172 29.472 60.9012 30.016 59.4292 31.104C57.9572 32.128 57.2212 34.048 57.2212 36.864ZM109.498 54.432L117.562 59.616C116.282 62.624 114.426 64.928 111.994 66.528C109.626 68.128 106.938 68.928 103.93 68.928C102.01 68.928 99.9625 68.512 97.7865 67.68C95.6105 66.784 93.5625 65.664 91.6425 64.32C89.7225 62.976 88.1225 61.568 86.8425 60.096C85.6265 58.624 85.0185 57.248 85.0185 55.968C85.0185 55.136 85.0185 53.856 85.0185 52.128C85.0825 50.4 85.1145 48.608 85.1145 46.752C85.1785 44.832 85.2105 43.232 85.2105 41.952V34.08C85.2105 29.856 86.4905 26.656 89.0505 24.48C91.6105 22.24 95.0345 21.12 99.3225 21.12C100.666 21.12 102.234 21.536 104.026 22.368C105.818 23.136 107.578 24.192 109.306 25.536C111.034 26.816 112.474 28.256 113.626 29.856C114.778 31.392 115.354 32.928 115.354 34.464C115.354 36.128 115.29 37.6 115.162 38.88C115.034 40.096 114.874 41.216 114.682 42.24L104.794 40.32C105.306 37.248 105.562 34.56 105.562 32.256C105.562 31.168 105.338 30.432 104.89 30.048C104.506 29.664 103.866 29.472 102.97 29.472C97.4665 29.472 94.7145 32.224 94.7145 37.728V45.408C94.7145 49.504 94.6505 52.512 94.5225 54.432C94.4585 56.288 94.4265 57.76 94.4265 58.848C94.4265 59.552 94.7465 60.096 95.3865 60.48C96.0265 60.864 96.8265 61.056 97.7865 61.056C100.154 61.056 102.17 60.576 103.834 59.616C105.498 58.592 107.002 56.96 108.346 54.72L109.498 54.432ZM136.157 69.504C132.061 67.968 128.893 66.592 126.653 65.376C124.477 64.096 123.389 62.944 123.389 61.92C123.389 61.024 123.485 59.648 123.677 57.792C123.933 55.872 124.061 54.016 124.061 52.224V26.4C124.061 22.56 124.189 19.04 124.445 15.84C124.765 12.576 125.149 9.952 125.597 7.968H121.469L116.189 1.728L116.861 0.192001H129.341L135.005 7.488C134.557 9.984 134.205 12.832 133.949 16.032C133.693 19.168 133.565 22.368 133.565 25.632V53.28C133.565 55.584 133.469 57.632 133.277 59.424C133.085 61.152 132.989 62.464 132.989 63.36C132.989 64 133.213 64.512 133.661 64.896C134.173 65.216 135.389 65.888 137.309 66.912L136.157 69.504ZM177.226 68.832C175.69 68.32 174.282 67.808 173.002 67.296C171.722 66.72 170.506 66.112 169.354 65.472C168.458 66.368 167.37 67.104 166.09 67.68C164.874 68.192 163.466 68.448 161.866 68.448C160.778 68.448 159.178 68.096 157.066 67.392C155.018 66.688 152.906 65.792 150.73 64.704C148.554 63.552 146.698 62.304 145.162 60.96C143.69 59.552 142.954 58.176 142.954 56.832C142.954 55.168 142.954 53.696 142.954 52.416C143.018 51.072 143.05 50.272 143.05 50.016C143.05 46.24 144.01 43.584 145.93 42.048C147.914 40.448 150.666 39.648 154.186 39.648C155.978 39.648 157.898 39.776 159.946 40.032C161.994 40.288 163.658 40.576 164.938 40.896C165.002 39.104 165.034 37.408 165.034 35.808C165.098 34.144 165.13 32.896 165.13 32.064C165.13 31.36 164.938 30.848 164.554 30.528C164.17 30.208 163.466 30.048 162.442 30.048C159.946 30.048 157.834 30.24 156.106 30.624C154.378 31.008 152.746 31.648 151.21 32.544H149.386L143.146 23.424L143.914 21.888H159.946C161.226 21.888 162.666 22.4 164.266 23.424C165.93 24.384 167.562 25.6 169.162 27.072C170.762 28.544 172.074 30.048 173.098 31.584C174.122 33.12 174.634 34.464 174.634 35.616C174.634 37.728 174.57 40.224 174.442 43.104C174.314 45.984 174.186 48.928 174.058 51.936C173.93 54.88 173.866 57.568 173.866 60C173.866 61.92 174.186 63.264 174.826 64.032C175.466 64.736 176.682 65.44 178.474 66.144L177.226 68.832ZM152.458 56.832C152.458 58.432 152.746 59.456 153.322 59.904C153.898 60.288 154.602 60.48 155.434 60.48C158.058 60.48 160.234 59.808 161.962 58.464C163.754 57.056 164.65 54.88 164.65 51.936C164.65 51.36 164.65 50.656 164.65 49.824C164.714 48.992 164.746 48.064 164.746 47.04C164.042 46.848 163.178 46.72 162.154 46.656C161.13 46.592 160.202 46.56 159.37 46.56C157.066 46.56 155.338 47.072 154.186 48.096C153.034 49.12 152.458 50.912 152.458 53.472V56.832ZM197.394 69.312C193.298 67.776 190.13 66.4 187.89 65.184C185.714 63.904 184.626 62.752 184.626 61.728C184.626 60.832 184.722 59.456 184.914 57.6C185.17 55.68 185.298 53.824 185.298 52.032V39.744C185.298 38.464 185.33 36.864 185.394 34.944C185.522 33.024 185.746 31.392 186.066 30.048H182.514L177.522 23.424L178.194 21.888H187.218C187.474 21.888 188.018 22.336 188.85 23.232C189.746 24.064 190.642 25.024 191.538 26.112C192.754 24.448 194.258 23.232 196.05 22.464C197.906 21.632 199.698 21.216 201.426 21.216H203.442C204.722 21.216 206.13 21.728 207.666 22.752C209.266 23.776 210.802 25.024 212.274 26.496C213.81 27.968 215.058 29.44 216.018 30.912C216.978 32.32 217.458 33.472 217.458 34.368C217.458 35.968 217.394 37.952 217.266 40.32C217.138 42.688 217.074 44.608 217.074 46.08V53.088C217.074 55.392 216.978 57.44 216.786 59.232C216.594 60.96 216.498 62.272 216.498 63.168C216.498 63.808 216.722 64.32 217.17 64.704C217.682 65.024 218.898 65.696 220.818 66.72L219.666 69.312C215.57 67.776 212.402 66.4 210.162 65.184C207.986 63.904 206.898 62.752 206.898 61.728C206.898 60.832 206.994 59.456 207.186 57.6C207.442 55.68 207.57 53.824 207.57 52.032V47.04C207.57 44.992 207.634 42.656 207.762 40.032C207.89 37.408 207.954 35.104 207.954 33.12C207.954 31.84 207.794 30.976 207.474 30.528C207.154 30.08 206.45 29.856 205.362 29.856C201.778 29.856 199.122 30.784 197.394 32.64C195.666 34.432 194.802 36.928 194.802 40.128V53.088C194.802 55.392 194.706 57.44 194.514 59.232C194.322 60.96 194.226 62.272 194.226 63.168C194.226 63.808 194.45 64.32 194.898 64.704C195.41 65.024 196.626 65.696 198.546 66.72L197.394 69.312ZM231.263 -1.90735e-06C232.095 0.960001 232.799 2.048 233.375 3.264C233.951 4.48 234.239 6.016 234.239 7.872C234.239 10.304 233.599 12.672 232.319 14.976C231.103 17.216 228.543 19.744 224.639 22.56L222.911 20.64C223.679 19.552 224.287 18.304 224.735 16.896C225.247 15.488 225.503 14.112 225.503 12.768C225.503 11.232 225.279 10.08 224.831 9.312C224.447 8.48 223.807 7.616 222.911 6.72V5.088L231.263 -1.90735e-06ZM253.959 69.024C249.095 69.024 245.287 67.456 242.535 64.32C239.783 61.12 237.863 56.8 236.775 51.36L239.847 50.496C241.063 53.568 242.439 55.744 243.975 57.024C245.575 58.304 247.719 58.944 250.407 58.944C253.479 58.944 256.071 58.08 258.183 56.352C260.359 54.624 261.447 52.512 261.447 50.016C261.447 48.608 260.935 47.904 259.911 47.904C259.079 47.904 257.863 48.096 256.263 48.48C254.727 48.864 253.191 49.28 251.655 49.728C250.119 50.112 248.967 50.304 248.199 50.304C247.047 50.304 245.863 49.76 244.647 48.672C243.495 47.584 242.407 46.208 241.383 44.544C240.359 42.816 239.527 41.024 238.887 39.168C238.247 37.312 237.927 35.584 237.927 33.984C237.927 30.208 239.111 27.04 241.479 24.48C243.911 21.92 247.367 20.64 251.847 20.64C255.687 20.64 258.823 21.664 261.255 23.712C263.687 25.76 265.543 28.896 266.823 33.12L263.463 34.272C261.735 31.52 259.111 30.144 255.591 30.144C252.519 30.144 249.927 30.944 247.815 32.544C245.703 34.144 244.647 36.16 244.647 38.592C244.647 39.872 245.255 40.512 246.471 40.512C247.431 40.512 248.679 40.32 250.215 39.936C251.751 39.488 253.287 39.072 254.823 38.688C256.359 38.304 257.607 38.112 258.567 38.112C260.039 38.112 261.479 38.944 262.887 40.608C264.295 42.272 265.447 44.384 266.343 46.944C267.239 49.504 267.687 52.128 267.687 54.816C267.687 59.104 266.503 62.56 264.135 65.184C261.767 67.744 258.375 69.024 253.959 69.024ZM301.653 70.368C297.429 68.96 294.229 67.648 292.053 66.432C289.877 65.216 288.789 64.224 288.789 63.456C288.789 62.752 288.853 62.016 288.981 61.248C289.109 60.48 289.237 59.36 289.365 57.888C289.493 56.416 289.557 54.304 289.557 51.552V32.352C289.557 28.128 289.717 24.704 290.037 22.08C290.421 19.392 290.805 17.312 291.189 15.84H287.925L283.125 9.408L283.893 7.872H292.533C295.029 7.872 297.333 7.84 299.445 7.776C301.557 7.648 303.125 7.584 304.149 7.584C305.621 7.584 307.349 8.128 309.333 9.216C311.317 10.24 313.237 11.552 315.093 13.152C317.013 14.752 318.613 16.416 319.893 18.144C321.173 19.808 321.813 21.312 321.813 22.656V32.832C321.813 37.824 320.917 41.568 319.125 44.064C317.333 46.496 314.389 47.712 310.293 47.712C308.565 47.712 306.741 47.552 304.821 47.232C302.901 46.912 301.045 46.464 299.253 45.888V53.664C299.253 56.416 299.157 58.624 298.965 60.288C298.837 61.888 298.773 63.136 298.773 64.032C298.773 65.12 300.149 66.304 302.901 67.584L301.653 70.368ZM307.413 15.84C306.453 15.84 305.429 15.872 304.341 15.936C303.317 16 302.229 16.128 301.077 16.32C300.565 18.048 300.117 20.192 299.733 22.752C299.413 25.312 299.253 28.288 299.253 31.68V39.552C300.469 39.808 301.877 39.936 303.477 39.936C306.805 39.936 309.077 39.072 310.293 37.344C311.509 35.616 312.117 32.896 312.117 29.184V20.64C312.117 18.912 311.797 17.696 311.157 16.992C310.517 16.224 309.269 15.84 307.413 15.84ZM346.185 68.832C344.649 68.832 342.793 68.448 340.617 67.68C338.441 66.912 336.329 65.888 334.281 64.608C332.233 63.328 330.505 61.856 329.097 60.192C327.753 58.528 327.081 56.832 327.081 55.104C327.081 54.336 327.177 52.096 327.369 48.384C327.625 44.672 327.753 40.032 327.753 34.464C327.753 29.984 329.065 26.688 331.689 24.576C334.313 22.464 338.249 21.408 343.497 21.408C345.033 21.408 346.729 21.888 348.585 22.848C350.505 23.808 352.329 25.056 354.057 26.592C355.785 28.128 357.193 29.76 358.281 31.488C359.433 33.152 360.009 34.72 360.009 36.192C360.009 38.624 359.945 41.248 359.817 44.064C359.753 46.88 359.721 50.496 359.721 54.912C359.721 59.008 358.601 62.368 356.361 64.992C354.121 67.552 350.729 68.832 346.185 68.832ZM340.041 60.672C343.561 60.672 346.121 59.936 347.721 58.464C349.385 56.992 350.217 54.816 350.217 51.936C350.217 49.888 350.249 47.584 350.313 45.024C350.377 42.4 350.441 40 350.505 37.824C350.569 35.584 350.601 34.016 350.601 33.12C350.601 32.032 350.409 31.232 350.025 30.72C349.641 30.144 348.873 29.856 347.721 29.856C344.265 29.856 341.609 30.464 339.753 31.68C337.961 32.832 337.065 35.04 337.065 38.304C337.065 44.448 337.001 49.088 336.873 52.224C336.745 55.296 336.681 57.376 336.681 58.464C336.681 59.936 337.801 60.672 340.041 60.672ZM384.776 70.176C379.272 68.384 375.304 66.848 372.872 65.568C370.44 64.224 369.224 63.264 369.224 62.688C369.224 61.984 369.32 60.768 369.512 59.04C369.768 57.312 369.896 54.624 369.896 50.976V39.072C369.896 37.792 369.96 36.288 370.088 34.56C370.216 32.768 370.408 31.264 370.664 30.048H367.112L362.12 23.424L362.792 21.888H371.816C372.136 21.888 372.744 22.368 373.64 23.328C374.6 24.288 375.528 25.376 376.424 26.592C377.64 24.736 379.208 23.456 381.128 22.752C383.112 21.984 384.904 21.664 386.504 21.792L391.304 28.128L390.728 29.568C387.336 29.568 384.584 30.656 382.472 32.832C380.424 34.944 379.4 38.592 379.4 43.776V52.32C379.4 55.52 379.304 58.016 379.112 59.808C378.984 61.536 378.92 62.688 378.92 63.264C378.92 63.648 379.048 64 379.304 64.32C379.56 64.576 380.168 64.896 381.128 65.28C382.152 65.664 383.752 66.304 385.928 67.2L384.776 70.176ZM413.542 68.544C412.582 68.544 411.27 68.192 409.606 67.488C407.942 66.72 406.246 65.76 404.518 64.608C402.79 63.392 401.318 62.144 400.102 60.864C398.886 59.52 398.278 58.24 398.278 57.024C398.278 56.32 398.31 55.584 398.374 54.816C398.438 54.048 398.534 53.056 398.662 51.84C398.79 50.56 398.886 48.864 398.95 46.752C399.014 44.64 399.046 41.888 399.046 38.496C399.046 37.216 399.046 35.872 399.046 34.464C399.046 33.056 399.014 31.584 398.95 30.048H397.222L392.326 23.616L392.998 22.08C396.39 21.696 398.534 20.672 399.43 19.008C400.326 17.344 400.774 14.816 400.774 11.424L402.406 10.848L408.262 15.264C408.262 16.416 408.262 17.536 408.262 18.624C408.262 19.712 408.262 20.8 408.262 21.888H416.422L421.222 28.608L420.55 30.048H408.358C408.358 32.352 408.358 34.56 408.358 36.672C408.358 38.784 408.358 40.8 408.358 42.72C408.358 46.432 408.294 49.28 408.166 51.264C408.102 53.248 408.006 54.72 407.878 55.68C407.75 56.64 407.686 57.536 407.686 58.368C407.686 59.648 408.358 60.288 409.702 60.288C410.854 60.288 412.102 60 413.446 59.424C414.79 58.784 416.038 58.016 417.19 57.12H418.534L423.046 64.608C422.15 65.696 420.742 66.624 418.822 67.392C416.902 68.16 415.142 68.544 413.542 68.544ZM441.436 69.6C437.596 68.256 434.492 66.912 432.124 65.568C429.756 64.224 428.572 63.04 428.572 62.016C428.572 61.12 428.7 59.808 428.956 58.08C429.212 56.352 429.34 54.592 429.34 52.8V40.608C429.34 38.176 429.404 36.16 429.532 34.56C429.66 32.896 429.916 31.392 430.3 30.048H425.98L420.508 23.52L421.18 21.888H432.124C431.164 20.8 430.236 19.424 429.34 17.76C428.508 16.032 428.092 14.112 428.092 12C428.092 8.864 429.116 6.272 431.164 4.224C433.212 2.176 436.412 1.152 440.764 1.152C443.132 1.152 445.18 1.536 446.908 2.304L451.42 9.984L450.364 11.232C449.724 11.04 448.86 10.88 447.772 10.752C446.748 10.56 445.468 10.464 443.932 10.464C441.436 10.464 439.484 10.944 438.076 11.904C436.668 12.864 435.964 14.368 435.964 16.416C435.964 18.592 436.668 20.416 438.076 21.888H446.716L451.804 28.608L450.94 30.048H439.9C439.452 31.264 439.164 32.832 439.036 34.752C438.908 36.608 438.844 38.88 438.844 41.568V53.856C438.844 56.16 438.748 58.112 438.556 59.712C438.364 61.312 438.268 62.56 438.268 63.456C438.268 64.096 438.524 64.64 439.036 65.088C439.548 65.472 440.796 66.112 442.78 67.008L441.436 69.6ZM472.091 68.832C470.555 68.832 468.699 68.448 466.523 67.68C464.347 66.912 462.235 65.888 460.187 64.608C458.139 63.328 456.411 61.856 455.003 60.192C453.659 58.528 452.987 56.832 452.987 55.104C452.987 54.336 453.083 52.096 453.275 48.384C453.531 44.672 453.659 40.032 453.659 34.464C453.659 29.984 454.971 26.688 457.595 24.576C460.219 22.464 464.155 21.408 469.403 21.408C470.939 21.408 472.635 21.888 474.491 22.848C476.411 23.808 478.235 25.056 479.963 26.592C481.691 28.128 483.099 29.76 484.187 31.488C485.339 33.152 485.915 34.72 485.915 36.192C485.915 38.624 485.851 41.248 485.723 44.064C485.659 46.88 485.627 50.496 485.627 54.912C485.627 59.008 484.507 62.368 482.267 64.992C480.027 67.552 476.635 68.832 472.091 68.832ZM465.947 60.672C469.467 60.672 472.027 59.936 473.627 58.464C475.291 56.992 476.123 54.816 476.123 51.936C476.123 49.888 476.155 47.584 476.219 45.024C476.283 42.4 476.347 40 476.411 37.824C476.475 35.584 476.507 34.016 476.507 33.12C476.507 32.032 476.315 31.232 475.931 30.72C475.547 30.144 474.779 29.856 473.627 29.856C470.171 29.856 467.515 30.464 465.659 31.68C463.867 32.832 462.971 35.04 462.971 38.304C462.971 44.448 462.907 49.088 462.779 52.224C462.651 55.296 462.587 57.376 462.587 58.464C462.587 59.936 463.707 60.672 465.947 60.672ZM506.938 69.504C502.842 67.968 499.674 66.592 497.434 65.376C495.258 64.096 494.17 62.944 494.17 61.92C494.17 61.024 494.266 59.648 494.458 57.792C494.714 55.872 494.842 54.016 494.842 52.224V26.4C494.842 22.56 494.97 19.04 495.226 15.84C495.546 12.576 495.93 9.952 496.378 7.968H492.25L486.97 1.728L487.642 0.192001H500.122L505.786 7.488C505.338 9.984 504.986 12.832 504.73 16.032C504.474 19.168 504.346 22.368 504.346 25.632V53.28C504.346 55.584 504.25 57.632 504.058 59.424C503.866 61.152 503.77 62.464 503.77 63.36C503.77 64 503.994 64.512 504.442 64.896C504.954 65.216 506.17 65.888 508.09 66.912L506.938 69.504ZM520.935 15.456L514.599 8.64V7.68C516.327 5.376 518.663 3.36 521.607 1.632L527.943 8.256L527.847 9.408C526.567 10.304 525.351 11.296 524.199 12.384C523.111 13.472 522.023 14.496 520.935 15.456ZM529.479 69.504C525.383 67.968 522.215 66.592 519.975 65.376C517.799 64.096 516.711 62.944 516.711 61.92C516.711 61.024 516.807 59.648 516.999 57.792C517.255 55.872 517.383 54.016 517.383 52.224V38.496C517.383 36.832 517.447 35.296 517.575 33.888C517.767 32.416 518.055 31.136 518.439 30.048H515.271L510.183 23.52L510.855 21.888H523.143L528.711 29.376C527.943 30.4 527.431 31.68 527.175 33.216C526.983 34.752 526.887 36.704 526.887 39.072V53.28C526.887 55.584 526.791 57.632 526.599 59.424C526.407 61.152 526.311 62.464 526.311 63.36C526.311 64 526.535 64.512 526.983 64.896C527.495 65.216 528.711 65.888 530.631 66.912L529.479 69.504ZM555.904 68.832C554.368 68.832 552.512 68.448 550.336 67.68C548.16 66.912 546.048 65.888 544 64.608C541.952 63.328 540.224 61.856 538.816 60.192C537.472 58.528 536.8 56.832 536.8 55.104C536.8 54.336 536.896 52.096 537.088 48.384C537.344 44.672 537.472 40.032 537.472 34.464C537.472 29.984 538.784 26.688 541.408 24.576C544.032 22.464 547.968 21.408 553.216 21.408C554.752 21.408 556.448 21.888 558.304 22.848C560.224 23.808 562.048 25.056 563.776 26.592C565.504 28.128 566.912 29.76 568 31.488C569.152 33.152 569.728 34.72 569.728 36.192C569.728 38.624 569.664 41.248 569.536 44.064C569.472 46.88 569.44 50.496 569.44 54.912C569.44 59.008 568.32 62.368 566.08 64.992C563.84 67.552 560.448 68.832 555.904 68.832ZM549.76 60.672C553.28 60.672 555.84 59.936 557.44 58.464C559.104 56.992 559.936 54.816 559.936 51.936C559.936 49.888 559.968 47.584 560.032 45.024C560.096 42.4 560.16 40 560.224 37.824C560.288 35.584 560.32 34.016 560.32 33.12C560.32 32.032 560.128 31.232 559.744 30.72C559.36 30.144 558.592 29.856 557.44 29.856C553.984 29.856 551.328 30.464 549.472 31.68C547.68 32.832 546.784 35.04 546.784 38.304C546.784 44.448 546.72 49.088 546.592 52.224C546.464 55.296 546.4 57.376 546.4 58.464C546.4 59.936 547.52 60.672 549.76 60.672Z"
                    fill="#F0EAD6"
                  />
                </svg>
              </div>
              <h3>Click each Project Card for details</h3>
              <div class="contentbar"></div>
              <div class="contentbar1"></div>
            </div>
            <div class="blackHoleHolder">
              <video src="BlackHole.mp4" autoplay muted loop></video>
            </div>
          </div>
        </div>

        <div class="headerbox1" id="overview">
          <div class="coolButton1">
            <h1>Overview</h1>
          </div>
        </div>

        <div class="mainsectionscroller">
          <div class="mainimageslider">
            <div class="mainimageitem" onClick={() => OpenExpanded(6)}>
              <div class="mainimageitemwrapper">
                <TiltedCard>
                  <div class="mainimageinner" data-index="7">
                    <h1>Coming Soon</h1>
                  </div>
                </TiltedCard>
              </div>
            </div>
            <div class="mainimageitem" onClick={() => OpenExpanded(7)}>
              <div class="mainimageitemwrapper">
                <TiltedCard>
                  <div class="mainimageinner" data-index="8">
                    <h1>Education</h1>
                  </div>
                </TiltedCard>
              </div>
            </div>
            <div class="mainimageitem" onClick={() => OpenExpanded(8)}>
              <div class="mainimageitemwrapper">
                <TiltedCard>
                  <div class="mainimageinner" data-index="9">
                    <h1>About Me</h1>
                  </div>
                </TiltedCard>
              </div>
            </div>
            <div class="mainimageitem" onClick={() => OpenExpanded(9)}>
              <div class="mainimageitemwrapper">
                <TiltedCard>
                  <div class="mainimageinner" data-index="10">
                    <h1>Experiences</h1>
                  </div>
                </TiltedCard>
              </div>
            </div>
            <div class="mainimageitem" onClick={() => OpenExpanded(10)}>
              <div class="mainimageitemwrapper">
                <TiltedCard>
                  <div class="mainimageinner" data-index="11">
                    <h1>Awards</h1>
                  </div>
                </TiltedCard>
              </div>
            </div>
          </div>
          <div class="nextButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="#e3e3e3"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </div>
          <div class="previousButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="#e3e3e3"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </div>
        </div>

        <div class="skillssection" id="skills">
          <div class="coolButton2">
            <h1>Skills</h1>
          </div>
          <div class="gallery-container">
            <div class="gallery"></div>
          </div>
          <div class="skillsdescription"></div>
          <div class="skillslist">
            <h3>List of Skills</h3>
            <p>(Click on each image for more info)</p>
            <ul>
              <li>-Programming</li>
              <li>&#9-Java</li>
              <li>&#9-Python</li>
              <li>&#9-JavaScript</li>
              <li>&#9-CSS</li>
              <li>&#9-HTML</li>

              <li>-Software</li>
              <li>&#9-Solid</li>
              <li>&#9-Blender</li>
              <li>&#9-Fusion360</li>
              <li>&#9-Vite</li>
              <li>&#9-MotionOne</li>
              <li>&#9-NASA CEA</li>
              <li>&#9-OpenRocket</li>

              <li>-Hardware</li>
              <li>&#9-Laser Engraver</li>
              <li>&#9-Saws/Mills</li>
              <li>&#9-General Machinery</li>
            </ul>
          </div>
        </div>

        <div class="contactsection" id="contact">
          <h1 class="contactTitle">Let's Talk!</h1>
          <h2 class="contactSubtitle">Fill out to send a message to Declan!</h2>
          <form
            autocomplete="off"
            class="form"
            id="ContactForm"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="688916ba-e9bc-4002-971c-01a689db6701"
            ></input>
            <div class="form-group">
              <label>
                <input type="text" id="firstName" name="firstName" required />
                <span for="firstName">First Name</span>
              </label>
              <label>
                <input type="text" id="lastName" name="lastName" required />
                <span for="lastName">Last Name</span>
              </label>
            </div>
            <label>
              <input type="email" id="email" name="email" required></input>
              <span for="email">Email</span>
            </label>
            <label>
              <input
                type="subject"
                id="subject"
                name="subject"
                required
              ></input>
              <span for="subject">Subject</span>
            </label>
            <label>
              <textarea
                id="message"
                name="message"
                placeholder=" "
                required
              ></textarea>
              <span for="message">Message</span>
            </label>
            <div class="form-group">
              <button type="button" onClick={submitForm}>
                See
              </button>
              <button type="sumbit">Send</button>
            </div>
          </form>
          <div id="response">
            <pre>{response()}</pre>
          </div>
        </div>

        <div class="linkSection">
          <h1>Connect with Declan!</h1>
          <div class="linkContainer">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/declan-reed-b30413379"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  <span> - LinkdIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/declan_354/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  <span> - Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/declanreed2029"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-github" aria-hidden="true"></i>
                  <span> - GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="imageSection1" id="images">
          <button class="imageSection" onClick={() => OpenExpanded1()}>
            Images
          </button>
          <h2>Click for Images of Declan at Work!</h2>
        </div>

        <div class="featuredSection" id="featured">
          <h1>Featured In</h1>
          <div class="featured-container-wrapper">
            <div class="featured-container">
              <div class="featured-item">
                <img src="/Projects/F1.png" alt="Space News Logo" />
                <div class="featured-item-overlay">
                  <h2>Central NY's Best and Brightest</h2>
                  <p>
                    An article featuring those who have been awarded the Best
                    and Brightest Award. Also features pictures of each winner
                    and brief info about them.
                  </p>
                  <div class="featured-wrapper">
                    <a
                      href="https://www.syracuse.com/galleries/7FVZZ5KP35CGZHLQE7PITI6CRQ/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img src="/Projects/F2.png" alt="Space News Logo" />
                <div class="featured-item-overlay">
                  <h2>Congratulations to Declan Reed</h2>
                  <p>
                    Congradulating me on winning the 2024 Air Force Research Lab
                    Challenge Competition as a team of One.
                  </p>
                  <div class="featured-wrapper">
                    <a
                      href="https://www.facebook.com/cbasyracuse/posts/congratulations-to-junior-declan-reed-who-won-first-place-which-included-a-3000-/896198602310552/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img src="/Projects/F3.png" alt="Space News Logo" />
                <div class="featured-item-overlay">
                  <h2>Griffiss Institute: Meet Declan Reed</h2>
                  <p>
                    An article intervewing me after winning the 2024 Air Force
                    Research Lab Challenge Competition.
                  </p>
                  <div class="featured-wrapper">
                    <a
                      href="https://www.griffissinstitute.org/news/meet-declan-reed-winner-of-afrls-april-challenge-competition-and-orion-stem-alum/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="featured-container">
              <div class="featured-item">
                <img src="/Projects/F4.png" alt="Space News Logo" />
                <div class="featured-item-overlay">
                  <h2>The Daily Sentinel</h2>
                  <p>
                    An Article talking about the 2024 Air Force Research Lab
                    Challenge Competetion which asked me for quotes as I had
                    won.
                  </p>
                  <div class="featured-wrapper">
                    <a
                      href="https://www.romesentinel.com/entertainment-life/rome-air-force-research-lab-challenge-competition-awards-winners/article_0454d3b0-03f7-11ef-a82f-73bfb0e49c02.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img src="/Projects/F5.png" alt="Space News Logo" />
                <div class="featured-item-overlay">
                  <h2>ORION: Meet Declan Reed</h2>
                  <p>
                    An article intervewing me after winning the 2024 Air Force
                    Research Lab Challenge Competition.
                  </p>
                  <div class="featured-wrapper">
                    <a
                      href="https://orionassured.com/meet-declan-reed-winner-of-afrls-april-challenge-competition-and-orion-stem-alum/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img src="/Projects/F6.png" alt="Space News Logo" />
                <div class="featured-item-overlay">
                  <h2>Congradulations Declan!!</h2>
                  <p>
                    Congradulating me on winning Central New York's Best and
                    Brightest Award.
                  </p>
                  <div class="featured-wrapper">
                    <a
                      href="https://www.facebook.com/photo/?fbid=1026312202632524&set=congrats-declan-reedhttpswwwsyracusecomentertainment202411meet-the-23-winners-of"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Expanded data={expanded()} onClose={closeExpanded} />
      <Expanded1 data={expanded1()} onClose={closeExpanded1} />
    </>
  );
}
export default App;
