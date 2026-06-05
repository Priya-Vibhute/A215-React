import React from "react";
import { useForm } from "react-hook-form";

function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className="container m-3 p-3 border border-dark"
        onSubmit={handleSubmit(submitHandler)}
      >


        {/* email address */}
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        {/* password */}
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="enter password here"
            {...register("password", {
              required: "password is required",
              pattern: {
                value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                message:
                  "Password should contain one uppercase 1 lowercase and 1 number more than 6 characters are required",
              },
            })}
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        {/* age */}

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            age
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="enter age here  example:16"
            {...register("age", {
              required: "age is required",
              min: { value: 12, message: "Minimum age 10 is required" },
              max: { value: 100, message: "age limit is 100" },
            })}
          />
          {errors.age && (
            <small className="text-danger">{errors.age.message}</small>
          )}
        </div>

        {/* submit */}
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form2;
