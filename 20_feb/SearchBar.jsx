export default function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search"
    />
  );
}
