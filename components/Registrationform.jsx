import React from 'react';
import { useState } from 'react';
export default function Registrationform() {
  const [values, setvalues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    password: '',
    ConfirmPassowrd: '',
    age: '',
    gender: '',
    interests: [],
    birthDate: '',
  });
  const [errors, setErrors] = useState({});
  const hanldechanges = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  const hanldecheckboxchanges = (e) => {
    const { name, checked } = e.target;
    let updateInterests = values.interests;
    if (checked) {
      updateInterests.push(name);
    } else {
      updateInterests = updateInterests.filter((interest) => interest !== name);
    }
    setvalues({ ...values, interests: updateInterests });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };
  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;

    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };
  const isValidAge = (age) => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };
  const validateFrom = () => {
    let newerrors = {};

    if (!values.firstname) {
      newerrors.firstname = 'First Name is required';
    }
    if (!values.lastname) {
      newerrors.lastname = 'Last Name is required';
    }
    if (!values.email) {
      newerrors.email = 'Email is required';
    } else if (!isValidEmail(values.email)) {
      newerrors.email = 'Invalild email format';
    }
    if (!values.phoneNumber) {
      newerrors.phoneNumber = 'Contract Number is required';
    } else if (!isValidPhoneNumber(values.phoneNumber)) {
      newerrors.phoneNumber = 'Contract Number must be 10 digits';
    }
    if (!values.password) {
      newerrors.password = 'Password is required';
    } else if (!isValidPassword(values.password)) {
      newerrors.password =
        'Password must be 8 character long and contain at least one symbol, one number, one uppercase letter, one lowercase letter';
    }
    if (!values.ConfirmPassowrd) {
      newerrors.ConfirmPassowrd = 'Confirm Password is required';
    } else if (values.ConfirmPassowrd !== values.password) {
      newerrors.ConfirmPassowrd = 'Password must match';
    }
    if (!values.age) {
      newerrors.age = 'Age required';
    } else if (!isValidAge(values.age)) {
      newerrors.age = 'You must be 18 year old and not older then 100 years';
    }
    if (!values.gender) {
      newerrors.gender = 'Gender si required';
    }
    if (values.interests.length === 0) {
      newerrors.interest = 'Select at least one interest';
    }
    if (!values.birthDate) {
      newerrors.birthDate = 'Birth Date is required';
    }
    setErrors(newerrors);
    console.log(newerrors);
    return Object.keys(newerrors).length === 0;
  };
  const handlesumbit = (e) => {
    e.preventDefault();
    const isValid = validateFrom();
    if (isValid) {
      console.log('From sumbited successfully');
      console.log(values);
    } else {
      console.log('Submit fail');
    }
  };
  const resetFun = () => {
    setvalues({
      firstname: '',
      lastname: '',
      email: '',
      phoneNumber: '',
      password: '',
      ConfirmPassowrd: '',
      age: '',
      gender: '',
      interests: [],
      birthDate: '',
    });
  };

  return (
    <div>
      <div className=" row d-flex justify-content-center pt-5">
        <div className="col-4">
          <div className="card bg-light mb-3">
            <div className="card-header text-white bg-info">
              Registration Form
            </div>
            <div className="card-body">
              <form onSubmit={handlesumbit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="firstname"
                    onChange={hanldechanges}
                    value={values.firstname}
                  />
                  {errors.firstname && (
                    <div className="text-danger"> {errors.firstname} </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastname"
                    onChange={hanldechanges}
                    value={values.lastname}
                  />
                  {errors.lastname && (
                    <div className="text-danger"> {errors.lastname} </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={hanldechanges}
                    value={values.email}
                  />
                  {errors.email && (
                    <div className="text-danger"> {errors.email} </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contract Number"
                    name="phoneNumber"
                    onChange={hanldechanges}
                    value={values.phoneNumber}
                  />
                  {errors.phoneNumber && (
                    <div className="text-danger"> {errors.phoneNumber} </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={hanldechanges}
                    value={values.password}
                  />
                  {errors.password && (
                    <div className="text-danger"> {errors.password} </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="ConfirmPassowrd"
                    onChange={hanldechanges}
                    value={values.ConfirmPassowrd}
                  />
                  {errors.ConfirmPassowrd && (
                    <div className="text-danger">
                      {' '}
                      {errors.ConfirmPassowrd}{' '}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Age"
                    name="age"
                    onChange={hanldechanges}
                    value={values.age}
                  />
                  {errors.age && (
                    <div className="text-danger"> {errors.age} </div>
                  )}
                </div>
                <div className="form-group">
                  <select
                    className="custom-select"
                    name="gender"
                    value={values.gender}
                    onChange={hanldechanges}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                  {errors.gender && (
                    <div className="text-danger"> {errors.gender} </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Interests</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="sports"
                      checked={values.interests.includes('sports')}
                      onChange={hanldecheckboxchanges}
                    />
                    <label className="form-check-label" htmlFor="sports">
                      Sports
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="dancing"
                      checked={values.interests.includes('dancing')}
                      onChange={hanldecheckboxchanges}
                    />
                    <label className="form-check-label" htmlFor="dancing">
                      Dancing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="singing"
                      checked={values.interests.includes('singing')}
                      onChange={hanldecheckboxchanges}
                    />
                    <label className="form-check-label" htmlFor="singing">
                      Singing
                    </label>
                  </div>
                  {errors.interest && (
                    <div className="text-danger"> {errors.interest} </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="birthDate">Birth Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="birthDate"
                    onChange={hanldechanges}
                    value={values.birthDate}
                  />
                  {errors.birthDate && (
                    <div className="text-danger"> {errors.birthDate} </div>
                  )}
                </div>
                <div className="form-group float-right">
                  <button
                    type="button"
                    className="btn btn-outline-light mr-2"
                    onClick={resetFun}
                  >
                    Clear
                  </button>
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
