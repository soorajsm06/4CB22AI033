import { useState } from "react";

function App() {
  const [page, setPage] = useState("feed");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-4">SocialApp</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPage("feed")}
          className={`px-4 py-2 rounded ${
            page === "feed" ? "bg-blue-600 text-white" : "bg-white border border-gray-300"
          }`}
        >
          Feed
        </button>
        <button
          onClick={() => setPage("users")}
          className={`px-4 py-2 rounded ${
            page === "users" ? "bg-blue-600 text-white" : "bg-white border border-gray-300"
          }`}
        >
          Top Users
        </button>
        <button
          onClick={() => setPage("trending")}
          className={`px-4 py-2 rounded ${
            page === "trending" ? "bg-blue-600 text-white" : "bg-white border border-gray-300"
          }`}
        >
          Trending
        </button>
      </div>

      {page === "feed" && <Feed />}
      {page === "users" && <TopUsers />}
      {page === "trending" && <Trending />}
    </div>
  );
}

function Feed() {
  return <div className="text-xl font-medium">Welcome to the Feed Page 📜</div>;
}

function TopUsers() {
  const users = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Top Users</h2>
      {users.map((user, i) => (
        <div key={i} className="mb-4 p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">{user}</h3>
          <p>Top contributor of the week!</p>
        </div>
      ))}
    </div>
  );
}

function Trending() {
  return <div className="text-xl font-medium">🔥 Trending Posts Page</div>;
}

export default App;
