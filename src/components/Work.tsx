import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  ScrollTrigger.refresh();

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              num: "01",
              title: "Traffic Monitoring System",
              category: "AI / Computer Vision",
              tools: "Python, OpenCV, OCR, AI Vision, Anomaly Detection",
              desc: "ANPR plate scanning with OCR, vehicle classification, and anomaly detection across 8+ video feeds.",
              image: "/images/traffic_monitoring.jpg",
            },
            {
              num: "02",
              title: "Library Management System",
              category: "Software & Database",
              tools: "Python, MySQL, DBMS, Desktop GUI",
              desc: "Desktop app managing inventory, real-time issue/return status, and student records database.",
              image: "/images/library_management.jpg",
            },
            {
              num: "03",
              title: "Smart Agricultural Automation",
              category: "IoT & Embedded Systems",
              tools: "Arduino, GSM, Sensors, Motor Control",
              desc: "Automated crop protection system integrating Arduino, environmental sensors, GSM, and motor control.",
              image: "/images/smart_agriculture.jpg",
            },
            {
              num: "04",
              title: "Front-End Web Projects",
              category: "Web Development",
              tools: "HTML5, CSS3, JavaScript, UI/UX",
              desc: "Responsive web projects and interactive interfaces independently built and practiced.",
              image: "/images/web_development.jpg",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
