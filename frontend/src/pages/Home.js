import React, { useState } from "react";
import robot from "../images/Robo.png";
import WhyChooseus from "../components/WhyChoose us";
import Callus from "../components/Call-us";
import { FaChartBar, FaMicrophone } from "react-icons/fa";
import { BiChat } from 'react-icons/bi'
import storage from "../db/Storage";
import Answerstorage from "../db/answerStorage";
import BannerVideo from "../components/Banner";
import logobg from '../images/bg.png'
import CoreExpertise from "../components/CoreExpertise";

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


  return (
    <>
      <div className="mt-60">
        <div className="container mb-0 z-0 flexss mt-80 p-4">
          <a href="/Web-devlopement"><img
            src={robot}
            alt="Advance Latest Technology"
            className={`robot ${isTalking ? "walking" : ""}`}
            style={{ width: 440, height: 260, }}
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
          <div className="p-4">
            <h1 className="text-5xl ans">The Best Web Development Company in Chennai Tamil Nadu India</h1>
          </div>
        </div>
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
      <div className="mt-10 p-10">
        <h2 className="text-2xl  csaa">About Us</h2>
        <h3 className="text-3xl font-bold mt-10 ml-10 w-[500px]">Deeshix Technology - Leading Web Development Company in Chennai</h3>
        <p className="mt-10 text-[20px] text-left w-3/4 ml-10">
          Welcome to Deeshix Technology,
          your trusted partner for innovative and
          result-driven web development solutions in Chennai,
          Tamil Nadu, India. We specialize in creating modern,
          responsive, and high-performing websites that help businesses
          grow digitally.
        </p>
        <h3 className="text-3xl font-bold mt-10 ml-10 w-[500px]">Build Your Digital Presence with Experts</h3>
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
          <h2 className="text-2xl text-center mb-10 cjs p-2 w-1/2">Vission</h2>
          <p className="w-1/2">
            To help businesses and startups grow through smart, innovative web solutions.
          </p>
        </div>
        <div className="w-fulls">
          <h2 className="text-2xl text-center p-2 w-1/2 mb-10 cjs">Mission</h2>
          <p className="w-full">
            Our mission is to help entrepreneurs, startups, and small to medium businesses grow online by delivering high-quality web development, e-commerce, and digital solutions.
          </p>
        </div>
      </div>
      <Callus />
    </>
  );
}
export default Home;
