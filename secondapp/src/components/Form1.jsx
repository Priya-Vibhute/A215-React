import React, { useState } from "react";

function Form1() {
  const [formData, setFormData] = useState({
    username: "Anisha",
    password: "1234",
    age: 20,
  });

  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    //
    setFormData({ ...formData, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.username)
       newErrors.username = "username is required";

    if (!formData.password) 
      newErrors.password = "password is required";

    if (!formData.age) 
      newErrors.age = "age is required";

    console.log(newErrors);
    setErrors(newErrors);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="">username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={onInputChange}
        />

        {errors.username && <small>{errors.username}</small>}
        <br />

        <label htmlFor="">password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onInputChange}
        />
        {errors.password && <small>{errors.password}</small>}
        <br />

        <label htmlFor="">age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={onInputChange}
        />
        {errors.age && <small>{errors.age}</small>}
        <br />

        <input type="submit" />
      </form>

      <hr />
    </div>
  );
}

export default Form1;
