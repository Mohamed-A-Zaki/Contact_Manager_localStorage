import React, { memo } from "react";
import img from "../images/149071.png";
import { useNavigate } from "react-router-dom";

const Users = ({ users, deleteUser, editUser }) => {
  let navigate = useNavigate();

  return (
    <div className="users">
      {/* main heading */}
      <div className="heading d-flex justify-content-between py-3">
        <h2 className="m-0">Contact List</h2>
        <button className="btn btn-primary" onClick={() => navigate("/add")}>
          Add User
        </button>
      </div>
      {/* list of users */}
      {users.map(({ id, name, email }) => {
        return (
          <div
            className="user d-flex align-items-center py-3 border-bottom"
            key={id}
          >
            <img src={img} alt="" width="40px" />
            <div className="info ms-3">
              <div className="name">{name}</div>
              <div className="email">{email}</div>
            </div>
            {/* start icons */}
            <div className="icons ms-auto">
              <i
                className="fa-solid fa-pen-to-square edit"
                onClick={() => editUser(id)}
              ></i>
              <i
                className="fa-solid fa-trash-can delete ms-3"
                onClick={() => deleteUser(id)}
              ></i>
            </div>
            {/* end icons */}
          </div>
        );
      })}
    </div>
  );
};

export default memo(Users);
