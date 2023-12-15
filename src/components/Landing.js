import React, { useState } from "react";
import Layout from "./Layout";
import Display from "./Display";
import Form from "./Form";
import Thanks from "./Thanks";

const log = console.log;

const Landing = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [formDisplay, setFormDisplay] = useState(false);
  const [thanks, setThanks] = useState(false);

  const handleSubscribe = () => {
    // console.log('this button works!');
    setSubscribe(!subscribe);
    setFormDisplay(!formDisplay);
  };

  const handleThanks = (event) => {
    event.preventDefault();
    console.log("working on thanks");
    setFormDisplay(formDisplay);
    setThanks(!thanks);
  };

  return (
    <Layout>
      {/* onSubscribe has an inverse relationship with subscribe: when onSubscribe is true, subscribe is false, when onSubscribe is false, subscribe is true. */}
      <Display onSubscribe={subscribe} onHandleSubscribe={handleSubscribe} />
      <Form
        onFormDisplay={formDisplay}
        onHandleSubscribe={handleSubscribe}
        onHandleThanks={handleThanks}
      />
      <Thanks onThanks={thanks} onHandleThanks={handleThanks} />
    </Layout>
  );
};

export default Landing;
