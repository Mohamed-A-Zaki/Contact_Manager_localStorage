import React, { memo } from "react";

const Form = ({ name, email, isedit, handleName, handleEmail, addUser }) => {
  let edit = (
    <button
      type="submit"
      className="btn btn-primary"
      onClick={(e) => e.preventDefault()}
    >
      Edit
    </button>
  );

  let add = (
    <button type="submit" className="btn btn-primary" onClick={addUser}>
      Add
    </button>
  );

  return (
    <form className="border-bottom pb-3">
      {/* user name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-bold">
          Name
        </label>
        <input
          type="text"
          className="form-control shadow-none"
          id="name"
          value={name}
          onChange={handleName}
          placeholder="Name"
        />
      </div>
      {/* user email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold">
          Email
        </label>
        <input
          type="email"
          className="form-control shadow-none"
          id="email"
          value={email}
          onChange={handleEmail}
          placeholder="Email"
        />
      </div>
      {/* submit button */}
      {isedit ? edit : add}
    </form>
  );
};

export default memo(Form);
