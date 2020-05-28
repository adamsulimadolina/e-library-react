import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function AdminPanel() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //axios.get();
  }, []);
  return (
    <div>
      {users.map((ur) => (
        <h1 key={ur.id}>
          <Link to={`/user/${ur.id}`}>{ur.email}</Link>
        </h1>
      ))}
    </div>
  );
}
export default AdminPanel;
