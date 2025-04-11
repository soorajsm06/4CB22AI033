export const fetchUsers = async () => {
    const res = await fetch("http://20.244.56.144/evaluation-service/users");
    const data = await res.json();
    return data.users;
  };
  