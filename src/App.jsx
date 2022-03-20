import { useCallback, useEffect, useState } from "react";

import Form from "./components/Form";
import Heading from "./components/Heading";
import Users from "./components/Users";

import "./App.scss";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  // states
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isedit, setIsedit] = useState(false);

  useEffect(() => {
    // add local storage content to users
    if (localStorage.getItem("users")) {
      setUsers(JSON.parse(window.localStorage.getItem("users")));
    }
  }, []);

  useEffect(() => {
    // add to local storage
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  let navigate = useNavigate();

  // handle username
  let handleName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  // handle useemail
  let handleEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  // handle add function
  let addUser = useCallback(
    (e) => {
      e.preventDefault();
      // create new user
      let new_user = { name, email, id: users.length + 1 };
      // set state
      setUsers([...users, new_user]);
      // redirect to users page
      navigate("/");
    },
    [name, email, users, navigate]
  );

  // handle delete function
  let deleteUser = useCallback(
    (id) => {
      // clone , edit
      let new_users = users.filter((user) => user.id !== id);
      // setstate
      setUsers(new_users);
    },
    [users]
  );

  // handle edit function
  let editUser = useCallback(
    (id) => {
      let user = users.filter((user) => user.id === id)[0];
      setName(user.name);
      setEmail(user.email);
      navigate("/add");
      setIsedit(true);
      return false;
    },
    [users, navigate]
  );

  return (
    <div className="App container">
      <Heading />

      <Routes>
        <Route
          path="/"
          element={
            <Users users={users} deleteUser={deleteUser} editUser={editUser} />
          }
        />

        <Route
          path="/add"
          element={
            <Form
              name={name}
              email={email}
              isedit={isedit}
              handleName={handleName}
              handleEmail={handleEmail}
              addUser={addUser}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
