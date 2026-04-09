import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((u) =>
        u.id === updatedUser.id ? updatedUser : u
      )
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            users={users}
            deleteUser={deleteUser}
          />
        }
      />

      <Route
        path="/add"
        element={<Add addUser={addUser} />}
      />

      <Route
        path="/edit/:id"
        element={
          <Edit
            users={users}
            updateUser={updateUser}
          />
        }
      />
    </Routes>
  );
}

export default App;