import React from "react";
import "../styles/Greetings.css";

const Greetings = ({ lang, children }) => {
  const language = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  };
  return <h1 className="helloLanguage">{`${language[lang]} ${children}`}</h1>;
};

export default Greetings;
