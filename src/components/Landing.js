import React, { useState } from "react";
import Layout from "./Layout";
import Display from "./Display";
import Form from "./Form";
import Thanks from "./Thanks";

const Landing = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [formDisplay, setFormDisplay] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleErrors = (hasErrors) => {
    setHasErrors(hasErrors);
  };

  const handleSubscribe = () => {
    // console.log('this button works!');
    setSubscribe(!subscribe);
    setFormDisplay(!formDisplay);
  };

  const handleSubmit = (e) => {
    // implement preventDefault() to implement submit button properly
    e.preventDefault();
    console.log("Form Submitted!");
    setSubmit(!submit);
  };

  return (
    <Layout>
      {/* onSubscribe has an inverse relationship with subscribe: when onSubscribe is true, subscribe is false, when onSubscribe is false, subscribe is true. */}
      <Display onSubscribe={subscribe} onHandleSubscribe={handleSubscribe} />
      <Form
        onFormDisplay={formDisplay}
        onErrors={hasErrors}
        onHandleErrors={handleErrors}
        onSubmit={submit}
        onHandleSubmit={handleSubmit}
      />
      <Thanks onSubmit={submit} />
    </Layout>
  );
};

export default Landing;
