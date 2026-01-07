import { useState } from "react";
import Card from "./assets/components/cards/card";
import Nav from "./assets/components/navigation/Nav";
import "./App.css";
import Main from "./assets/components/main/main";
import Features from "./assets/components/features/Features";
import Extensions from "./assets/components/extensions/Extension";
import chromeIcon from "./assets/images/logo-chrome.svg";
import firefoxIcon from "./assets/images/logo-firefox.svg";
import opearaIcon from "./assets/images/logo-opera.svg";
import Faq from "./assets/components/faq/faq";
import Join from "./assets/components/Footers/Join";
import Footer from "./assets/components/Footers/footer";

function App() {
  const quesions = [
    {
      quesion: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.",
    },
    {
      quesion: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor.",
    },
    {
      quesion: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa.",
    },
    {
      quesion: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus.",
    },
  ];

  const cardsData = [
    {
      icon: chromeIcon,
      header: "Add to Chrome",
      title: "Minimum version 62",
    },
    {
      icon: firefoxIcon,
      header: "Add to Firefox",
      title: "Minimum version 55",
    },
    {
      icon: opearaIcon,
      header: "Add to Opera",
      title: "Minimum version 43",
    },
  ];

  return (
    <>
      <Nav />
      <Main />
      <Features />
      <Extensions />
      <section className="extensions-section">
        <div className="container cards-grid">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              iconOne={card.icon}
              header={card.header}
              title={card.title}
            />
          ))}
        </div>
      </section>

      <Faq quesions={quesions} />
      <Join/>
      <Footer/>
    </>
  );
}
export default App;