import './App.css';
import { UserProvider } from './component/usecontext/usecontext';
import UserForm from './component/usecontext/userform';
import UserList from './component/usecontext/userlist';
//import Number from './component/Number/number';
//import StudentForm from './component/student/student';


function App() {
  return (
    <div className="App">
       <UserProvider>
      <UserForm />
      <UserList />
    </UserProvider>
      {/* <Number/> */}
      {/* <h2>Student Details</h2>
      <StudentForm /> */}
    </div>
  );
}

export default App;
