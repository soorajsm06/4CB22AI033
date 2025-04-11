import { useEffect, useState } from "react";
import { fetchUsers } from "../api/users";

const TopUsers = () => {
  const [users, setUsers] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const getUsers = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };
    getUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <ul className="space-y-2">
        {Object.entries(users).map(([id, name]) => (
          <li key={id} className="bg-gray-100 p-3 rounded shadow">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;




export default function TopUsers() {
    return (
      <div className="p-4 text-xl">
        Top Users Page
      </div>
    )
  }
  