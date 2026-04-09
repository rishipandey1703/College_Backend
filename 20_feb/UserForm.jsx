import React, { useState, useEffect } from "react";

export default function UserForm({ addUser, updateUser, editingUser }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "User"
  });

  useEffect(() => {
    if (editingUser) setUser(editingUser);
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editingUser ? updateUser(user) : addUser(user);
    setUser({ name: "", email: "", role: "User" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <select
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
      >
        <option>Admin</option>
        <option>User</option>
      </select>
      <button type="submit">
        {editingUser ? "Update" : "Add"} User
      </button>
    </form>
  );
}
