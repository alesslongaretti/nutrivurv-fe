import React from "react";
import { useForm } from "react-hook-form";
import OnBoardingImg from "../on-boarding/onBoarding-img";
const GettingPersonal = ({ setStep, handleChange, user }) => {
  const { register, handleSubmit, errors } = useForm({});

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    setStep("ActivityLevel");
  };

  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-5">
        <h1 className="text-center pb-5 font-weight-bolder mt-5">
          Getting Personal
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="mb-0">How old are you?</label>
            <input
              type="number"
              className="rounded p-3 w-100 border border-primary"
              name="age"
              id="age"
              placeholder="Age"
              onChange={handleChange}
              defaultValue={user.age}
              ref={register({
                required: {
                  value: true,
                  message: "required",
                },
                maxLength: {
                  value: 2,
                  message: "Max length is 2",
                },
                min: {
                  value: 15,
                  message: "Must be at least 15 years old",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Use numbers only",
                },
              })}
            />
            {errors.age && (
              <small className="text-danger form-text">
                {errors.age.message}
              </small>
            )}
          </div>
          <div className="form-group">
            <label className="mb-0">How do you identify?</label>
            <select
              className="py-3 px-2 w-100 rounded border border-primary no-arrow"
              id="gender"
              name="gender"
              onChange={handleChange}
              defaultValue={user.gender}
              ref={register({
                required: {
                  value: true,
                  message: "required",
                },
              })}
            >
              {errors.gender && (
                <small className="text-danger form-text">
                  {errors.gender.message}
                </small>
              )}
              <option disabled value="">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <small className="text-danger form-text">
                {errors.gender.message}
              </small>
            )}
          </div>
          <div className="form-group">
            <label className="mb-0">Add your goal weight</label>
            <input
              type="number"
              className="rounded p-3 w-100 border border-primary"
              name="goalWeight"
              id="goalWeight"
              placeholder="lbs"
              onChange={handleChange}
              defaultValue={user.goalWeight}
              ref={register({
                required: {
                  value: true,
                  message: "Please add weight in lbs",
                },
                maxLength: {
                  value: 3,
                  message: "Max length is 3",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Use numbers only, max length is 3",
                },
              })}
            />
            {errors.goalWeight && (
              <small id="passwordHelpBlock" className="text-danger form-text">
                {errors.goalWeight.message}
              </small>
            )}
          </div>
          <button
            type="submit"
            className="btn-primary rounded p-2 w-100 border border-primary"
            onClick={handleSubmit(onSubmit)}
          >
            Continue
          </button>
          <button
            onClick={() => setStep("signUp")}
            className="mt-3 btn-secondary rounded p-2 w-100"
          >
            Back
          </button>
        </form>
      </div>
      <OnBoardingImg />
    </div>
  );
};

export default GettingPersonal;
