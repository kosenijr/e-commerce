const Form = ({ onFormDisplay, onHandleSubmit, onSubmit }) => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    // ... other fields
  });

  const handleInputChange = (fieldName, isError) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: isError,
    }));
  };

  // ...

  
  return (
    <div className={`${styles["form-container"]} ${styles[onFormDisplay ? "form-on" : "form-off"]} ${styles[onSubmit ? "form-off" : "form-on"]}`}>
      <form className={styles["user-form"]}>
        {/* form fields */}

        <FormInput
          name="First Name"
          placeholder="John"
          value="firstName"
          setError={(isError) => handleInputChange("firstName", isError)}
          error={errors.firstName}
        />

        {/* Repeat for other fields */}

        {/* button */}
        <button className={styles["submit-button"]} type="submit" onClick={onHandleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
