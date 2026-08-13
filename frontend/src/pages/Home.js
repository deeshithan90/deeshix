import React, { useState } from "react";
import robot from "../images/Robo.png";
import WhyChooseus from "../components/WhyChoose us";
import Callus from "../components/Call-us";
import CoreExpertise from "../components/CoreExpertise";
import e3 from '../images/images/turw.png'
import award1 from '../images/images/award1.jpeg'
import award2 from '../images/images/award2.jpeg'
import award3 from '../images/images/deeshithan-Sathish.webp'
import award4 from '../images/images/deeshithan-Sathish2.webp'

const Home = ({ sett }) => {
  const [isTalking, setIsTalking] = useState(false);
  const [text, Settext] = useState(false)
  const [mice, Setmice] = useState(true)
  const [InnerText, SetInnerText] = useState(false)
  function aiSpeak(text) { if (!text) return; const utterance = new SpeechSynthesisUtterance(text); const voices = speechSynthesis.getVoices(); utterance.voice = voices.find(v => v.lang === "en-US") || voices[0]; utterance.rate = 0.9; utterance.pitch = 0.1; utterance.volume = 1; speechSynthesis.speak(utterance); }
  const speak = () => {
    window.speechSynthesis.cancel()
    SetInnerText(false)
    const message = new SpeechSynthesisUtterance(
      `Hello human. Welcome to Deeshix Technology, 
      your trusted partner for innovative and result-driven 
      web development solutions in Chennai, Tamil Nadu, India. 
      We specialize in creating modern, responsive,
       and high-performing websites that help businesses grow digitally.`);
    message.rate = 0.9;
    message.pitch = 0.1;
    message.volume = 1;

    // Start animation
    setIsTalking(true);
    setTimeout(() => {
      Settext(true)
    }, 2000);

    // Stop animation when speech ends
    message.onend = () => {
      setIsTalking(false);
      Settext(false)
    };

    window.speechSynthesis.speak(message);
  };

  const speak2 = () => {
    window.speechSynthesis.cancel()
    Settext(false)
    const message = new SpeechSynthesisUtterance(
      `
      Meet Deeshithan Sathish - 
            Founder of Deeshix Technology, I am 12 years 
            old self-taught MERN stack developer specialized in MongoDB, 
            Express.js , React.js Node.js Mongoose ODM TanstackQuery , JWT , 
            dotenv, cookieparser, Java script Type script , css , html, tailwindcss python, 
            Django. Hi, I’m Deeshithan Sathish Young Full-Stack (MERN) Developer & Future
             AI Engineer Chennai, Tamil Nadu, India 🇮🇳. I build modern, responsive, and scalable 
             web and mobile applications using industry-standard technologies. 
             I have successfully delivered real client portfolio projects 
            independently and continuously expand my skills into AI-powered applications.
`);
    message.rate = 0.9;
    message.pitch = 0. - 1;
    message.volume = 1;

    // Start animation
    setIsTalking(true);
    setTimeout(() => {
      SetInnerText(true)
    }, 3000);

    // Stop animation when speech ends
    message.onend = () => {
      setIsTalking(false);
      SetInnerText(false)
    };

    window.speechSynthesis.speak(message);
  }


  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true; // keep listening
  recognition.interimResults = false;

  // start automatically when page load

  recognition.onresult = (event) => {
    const lastResult = event.results[event.results.length - 1];
    const text = lastResult[0].transcript.toLowerCase();
    window.speechSynthesis.cancel()
    console.log("Heard:", text);
    reanswer(text)

  }

  const reanswer = (res) => {
    if (res == 'how are you') {
      aiSpeak('Hello.  How I can help you toady')
      recognition.stop()
      Setmice(true)
    }

    else {
      aiSpeak('Sorry, I will answer next time')
      recognition.stop()
      Setmice(true)
    }
  }

  function clickmen() {
    Setmice(false)
    recognition.start()
  }

  const faqData = [
    {
      question: "What is Deeshix Technology?",
      answer:
        "Deeshix Technology is a technology startup focused on web development, mobile app development, UI/UX design, MERN stack applications, and custom software solutions for businesses and startups."
    },
    {
      question: "Who founded Deeshix Technology?",
      answer:
        "Deeshix Technology was founded by Deeshithan Sathish, a young technology innovator and full-stack developer from Chennai."
    },
    {
      question: "What services does Deeshix Technology provide?",
      answer:
        "Website Development Mobile App Development MERN Stack Development E-Commerce Development HRMS Software Development UI/UX Design SEO Optimization Business Portfolio Websites Hosting & Deployment Support."
    },
    {
      question: "Which technologies are used by Deeshix Technology?",
      answer:
        "React.js React Native Node.js Express.js MongoDB JavaScript Python HTML/CSS Firebase Git & GitHub Website & App Development."
    },
    {
      question: "Does Deeshix Technology develop mobile apps?",
      answer:
        "Yes. Deeshix Technology develops Android and cross-platform mobile applications using React Native."
    },
    {
      question: "Can Deeshix Technology build HRMS applications?",
      answer:
        "Yes. The company is developing professional HRMS applications for small and medium organizations with features like Employee Management Attendance Tracking Leave Management Payroll Overview Notifications Employee Dashboard."
    },
    {
      question: "Do you create business websites?",
      answer:
        "Yes. Business portfolio websites, corporate websites, and service-based websites are developed with modern responsive design."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes. All websites are fully responsive and optimized for mobile, tablet, and desktop devices."
    },
    {
      question: "Do you provide website redesign services?",
      answer:
        "Yes. Existing websites can be redesigned with modern UI/UX and improved performance."
    },
    {
      question: "Can you develop e-commerce websites?",
      answer:
        "Yes. Deeshix Technology develops online shopping websites with Product Management Cart & Checkout Payment Gateway Integration Order Tracking Admin Dashboard."
    },
    {
      question: "Do you provide hosting support?",
      answer:
        "Yes. Hosting setup and deployment support are available."
    },
    {
      question: "Will SEO be included in the website?",
      answer:
        "Basic SEO optimization is included for better Google visibility."
    },
    {
      question: "Do you provide maintenance after project completion?",
      answer:
        "Yes. Technical support and maintenance services are available after deployment."
    },
    {
      question: "Can clients request custom features?",
      answer:
        "Yes. Every project can be customized according to business requirements."
    },
    {
      question: "Is source code provided after completion?",
      answer:
        "Yes. Clients can receive project source code after successful completion and payment."
    },
    {
      question: "How much does a website cost?",
      answer:
        "Pricing depends on Number of pages Features required Design complexity Admin panel requirements Hosting & maintenance."
    },
    {
      question: "How long does development take?",
      answer:
        "Portfolio Website 3–7 days Business Website 1–3 weeks Mobile App 2–8 weeks HRMS Software depends on modules and features."
    },
    {
      question: "Can startups work with Deeshix Technology?",
      answer:
        "Yes. Startup-friendly pricing and scalable solutions are available."
    },
    {
      question: "Do you work with clients outside Chennai?",
      answer:
        "Yes. Remote development services are available across India and internationally."
    },
    {
      question: "How can I contact Deeshix Technology?",
      answer:
        "You can contact through Official Website Deeshix Technology Official Website LinkedIn Deeshix Technology LinkedIn."
    },
    {
      question: "Is client data kept secure?",
      answer:
        "Yes. Client information and project data are handled securely and professionally."
    },
    {
      question: "Do you use modern development practices?",
      answer:
        "Yes. Projects follow Responsive Design Clean Code Structure Performance Optimization Security Best Practices Version Control with Git."
    },
    {
      question: "Can Deeshix Technology help small businesses digitize operations?",
      answer:
        "Yes. The company focuses on helping small and medium businesses adopt modern digital solutions affordably."
    },
    {
      question: "What is the future goal of Deeshix Technology?",
      answer:
        "The goal is to become a global technology brand delivering innovative digital solutions in Software Development Artificial Intelligence Mobile Applications Business Automation Cybersecurity Cloud Solutions."
    },
    {
      question: "Why choose Deeshix Technology?",
      answer:
        "Modern Technology Stack Creative UI/UX Startup-Friendly Approach Fast Development Affordable Pricing Professional Support Innovative Young Leadership."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);


  return (
    <>
      <div className="mt-40">

        <div className="full-award">
          <div>
            <div className="award">
              <img src={award1} alt="Deeshithan Sathish golden award 1" className="award-img" />
              <img src={award2} alt="Deeshithan Sathish golden award 2" className="award-img" />
            </div>
            <br />

            <div className="award">
              <img src={award3} alt="Deeshithan Sathish National Excellence award 1" className="award-img" />
              <img src={award4} alt="Deeshithan Sathish National Excellence award 2" className="award-img"/>
            </div>
          </div>
          <div>
            <div>
              <p style={{textAlign : 'center',fontWeight : 'bold', fontSize : 18,color : 'white',width : 350,marginTop : 20}}>
                Founder of deeshix Technology <span style={{color : '#CCFF00'}}>Deeshithan Sathish</span> was Honoured by the <span style={{color : '#CCFF00'}}>National Excellence Concil</span> for his passion, innvotation and remarkable contribution to technology at a young age.
              </p>
            </div>
          </div>
        </div>

        <div className="container mb-0 z-0 flexss mt-0 p-0">
          <a href="/Web-devlopement"><img
            src={robot}
            alt="Advance Latest Technology"
            className={`robot ${isTalking ? "walking" : ""}`}
            style={{ width: 440, height: 240, }}
          /></a>
          <div className="p-3">
            <button onClick={speak} className="speak-btn">
              About us
            </button>
            <br></br>
            <br></br>
            <button onClick={speak2} className="speak-btn">
              Founder voice
            </button>
          </div>
          <div className="p-1">
            <h1 className="text-5xl ans">The Best Web Development Company in Chennai Tamil Nadu India</h1>
          </div>
        </div>
        <center>
          <div className="iut">

          </div>
          <br />
          <br />
          <h1 className="text-4xl ans">
            Specialized in Web and Mobile app , Ecommerce and HRMS
          </h1>
        </center>
        {text ? <div class="marquee">
          <p>
            Hello human. Welcome to Deeshix Technology,
            your trusted partner for innovative and result-driven
            web development solutions in Chennai, Tamil Nadu, India.
            We specialize in creating modern, responsive,
            and high-performing websites that help businesses grow digitally.
          </p>
        </div>
          : <div></div>}
        {InnerText ? <div class="marquee">
          <p>
            Meet Deeshithan Sathish -
            Founder of Deeshix Technology, I am 12 years
            old self-taught MERN stack developer specialized in MongoDB,
            Express.js , React.js Node.js Mongoose ODM TanstackQuery , JWT ,
            dotenv, cookieparser, Java script Type script , css , html, tailwindcss python,
            Django. Hi, I’m Deeshithan Sathish Young Full-Stack (MERN) Developer & Future
            AI Engineer Chennai, Tamil Nadu, India 🇮🇳. I build modern, responsive, and scalable
            web and mobile applications using industry-standard technologies.
            I have successfully delivered real client portfolio projects
            independently and continuously expand my skills into AI-powered applications.
          </p>
        </div> : <div></div>}
      </div>
      <div className="mt-20 p-10">
        <h2 className="text-2xl  csaa">About Us</h2>
        <h3 className="lg:text-3xl font-bold mt-10 ml-10 w-[300px] kls">Deeshix Technology - A Leading Web Development Company  </h3>
        <p className="mt-10 text-[20px] text-left w-3/4 ml-10">
          Welcome to Deeshix Technology,
          your trusted partner for innovative and
          result-driven web development solutions in Chennai,
          Tamil Nadu, India. We specialize in creating modern,
          responsive, and high-performing websites that help businesses
          grow digitally.
        </p>
        <br />
        <h3 className="lg:text-3xl lg:font-bold lg:mt-10 ml-10 lg:w-[400px] kls">Build Your Digital Presence with Experts</h3>
        <p className="mt-10 text-[20px] text-left w-3/4 ml-10">
          At Deeshix Technology,
          we design and develop websites that are not just visually appealing
          but also optimized for performance, SEO, and user experience.
          Whether you are a startup, small business, or enterprise, we deliver customized web
          solutions tailored to your goals.
        </p>
      </div>
      <CoreExpertise />
      <WhyChooseus />
      <div className="flexs justifiy-center gap-30 mt-40 p-10">
        <div className="w-fulls">
          <h2 className="lg:text-2xl text-center mb-10 cjs p-2 w-1/2">Vission</h2>
          <p className="w-1/2">
            To help businesses and startups grow through smart, innovative web solutions.
          </p>
        </div>
        <div className="w-fulls">
          <h2 className="lg:text-2xl text-center p-2 w-1/2 mb-10 cjs">Mission</h2>
          <p className="w-full">
            Our mission is to help entrepreneurs, startups, and small to medium businesses grow online by delivering high-quality web development, e-commerce, and digital solutions.
          </p>
        </div>
      </div>

      <Callus />

      <div className="faq-section">
        <h1 className="faq-title">FAQ</h1>

        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${openFaq === index ? "activeFaq" : ""}`}
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
          >
            <div className="faq-question">
              <h2>{faq.question}</h2>
              <span>{openFaq === index ? "-" : "+"}</span>
            </div>

            <div
              className={`faq-answer ${openFaq === index ? "showFaq" : ""
                }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}
export default Home;
