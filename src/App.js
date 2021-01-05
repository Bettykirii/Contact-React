import React from "react";
import Header from "./header/Header";
import "./styles.css";
import ContactForm from './components/ContactForm';


export default function App() {
  return (
    <div className="App">
      <Header />
      <ContactForm/>
    </div>
  );
}