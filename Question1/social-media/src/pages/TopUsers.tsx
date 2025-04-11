function TopUsers() {
    const users = ['Alice', 'Bob', 'Charlie']
  
    return (
      <div>
        <h2 className="text-2xl font-semibold text-blue-300 mb-6">Top Users</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map(user => (
            <li key={user} className="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 transition">
              <h3 className="text-lg font-bold text-white">{user}</h3>
              <p className="text-gray-400">Top contributor of the week!</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default TopUsers
  