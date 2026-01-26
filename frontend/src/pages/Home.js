import React, { useState } from "react";
import robot from "../images/Robo.jpg";
import WhyChooseus from "../components/WhyChoose us";
import Callus from "../components/Call-us";
import { FaMicrophone } from "react-icons/fa";
import storage from "../db/Storage";
import Answerstorage from "../db/answerStorage";

const Home = ({sett}) => {
  const [isTalking, setIsTalking] = useState(false);
  const [text,Settext] = useState(false)
  const [mice,Setmice] = useState(true)
  const [InnerText,SetInnerText] = useState(false)
  function aiSpeak(text) { if (!text) return; const utterance = new SpeechSynthesisUtterance(text); const voices = speechSynthesis.getVoices(); utterance.voice = voices.find(v => v.lang === "en-US") || voices[0]; utterance.rate = 0.9; utterance.pitch = 0.1; utterance.volume = 1; speechSynthesis.speak(utterance); }
  const speak = () => {
    window.speechSynthesis.cancel()
    SetInnerText(false)
    const message = new SpeechSynthesisUtterance(
      `Hello human. Welcome to deeshix. Our journey is just beginning 2026 jan 11,
    I am deeshithan sathish 12 years old, I saw a major problem, small businesses were
    being left behind by an increasingly complex digital world. We started deeshix
     to break down those barriers and bring high-end, strategic web development
    within reach for everyone. We aren't just another agency; we’re a dedicated partner
    invested in your long-term success. By combining transparent communication with a
    focus on 'Trust UX' and ethical design, we build more than just websites—we build
    digital experiences where every click feels like a natural conversation.`);
    message.rate = 0.9;
    message.pitch = 0.1;
    message.volume = 1;

    // Start animation
    setIsTalking(true);
    setTimeout(() => {
       Settext(true)
    },2000);

    // Stop animation when speech ends
    message.onend = () => {
      setIsTalking(false);
      Settext(false)
    };

    window.speechSynthesis.speak(message);
  };

  const speak2 = ()=>{
    window.speechSynthesis.cancel()
     Settext(false)
    const message = new SpeechSynthesisUtterance(
      `
      Hi, I’m Deeshithan Sathish, a passionate young developer focused on building modern, high-quality digital solutions. While many people my age consume technology, I choose to create it. I am a self-taught developer who transformed learning time into real-world building by studying and following industry-leading engineers. I specialize in HTML, CSS, JavaScript, Python, and Node.js, with hands-on experience in frameworks and technologies such as React, React Native, Express, MongoDB, Flutter, and Django. My work includes web development, e-commerce platforms, mobile application development, and SEO-focused solutions. I have completed full-stack development projects and successfully deployed them for clients. In January 2026, I founded deeshix to support businesses with custom-built, reliable, and scalable digital products, ensuring long-term growth through clean code, innovation, and high professional standards
`);
    message.rate = 0.9;
    message.pitch = 0.-1;
    message.volume = 1;

    // Start animation
    setIsTalking(true);
    setTimeout(() => {
       SetInnerText(true)
    },3000);

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

function clickmen(){
   Setmice(false)
   recognition.start()
}


  return (
    <>
    <br/>
    <br/>
    <br/>
    <div className="container">
      <img
        src={robot}
        alt="Robot"
        className={`robot ${isTalking ? "walking" : ""}`}
        style={{width:300,height:300, border:'#41C1BA 2px solid'}}
      />
      <div>
      <button onClick={speak} className="speak-btn">
          About us
      </button>
      <br></br>
      <br></br>
      <button onClick={speak2} className="speak-btn">
         Founder voice
      </button>
      <br/>
      <br></br>
      <button className="speak-btn" onClick={clickmen}>{mice ? 'Ask Deeshix' : 'ask again'}</button>
      </div>
    </div>
<br></br>
{text ? <div class="marquee">
  <p>
    Hello human. Welcome to ashdeeinfotech. Our journey is just beginning 2026 jan 11,
    I am deeshithan sathish 12 years old, I saw a major problem, small businesses were
    being left behind by an increasingly complex digital world. We started ASHDEE
    INFOTECH to break down those barriers and bring high-end, strategic web development
    within reach for everyone. We aren't just another agency; we’re a dedicated partner
    invested in your long-term success. By combining transparent communication with a
    focus on 'Trust UX' and ethical design, we build more than just websites—we build
    digital experiences where every click feels like a natural conversation.
  </p>
</div>
 : <div></div>}
{InnerText ? <div class="marquee">
  <p>
Hi, I’m Deeshithan Sathish, a passionate young developer focused on building modern, high-quality digital solutions. While many people my age consume technology, I choose to create it. I am a self-taught developer who transformed learning time into real-world building by studying and following industry-leading engineers. I specialize in HTML, CSS, JavaScript, Python, and Node.js, with hands-on experience in frameworks and technologies such as React, React Native, Express, MongoDB, Flutter, and Django. My work includes web development, e-commerce platforms, mobile application development, and SEO-focused solutions. I have completed full-stack development projects and successfully deployed them for clients. In January 2026, I founded Deeshix to support businesses with custom-built, reliable, and scalable digital products, ensuring long-term growth through clean code, innovation, and high professional standards.</p>
</div> : <div></div>}
<WhyChooseus/>
<Callus/>
    </>
  );
}
export default Home;
