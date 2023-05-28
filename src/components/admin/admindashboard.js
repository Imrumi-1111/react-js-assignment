import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Link to="/admin/questions">View Questions</Link>
    </div>
  );
};

export default AdminDashboard;
