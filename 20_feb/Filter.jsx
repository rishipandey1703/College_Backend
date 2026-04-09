export default function Filter({ setRoleFilter }) {
  return (
    <select onChange={(e) => setRoleFilter(e.target.value)}>
      <option>All</option>
      <option>Admin</option>
      <option>User</option>
    </select>
  );
}
