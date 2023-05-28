
import './App.css';
import { BrowserRouter as Routes, Router, Route } from 'react-router-dom';
import AdminLogin from './components/admin/adminlogin';
import AdminDashboard from './components/admin/admindashboard';
import QuestionForm from './components/admin/questionform';
import QuestionList from './components/admin/questionlist';
import QuestionEdit from './components/admin/questionedit';
import StudentLogin from './components/student/studentlogin';
import Exam from './components/student/exam';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/questions" element={<QuestionList />} />
          <Route path="/admin/questions/new" element={<QuestionForm />} />
          <Route path="/admin/questions/edit/:id" element={<QuestionEdit />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/exam" element={<Exam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
