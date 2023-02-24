import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar_Stu from './Components/Navbar_Stu'
import Landing from './Components/Landing';
import Department from './Components/Department';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import College from './Components/College';
import StudentInfo from './Components/StudentInfo';

function App() {
 

  return (
    <div>
      <Router>
      <Navbar_Stu />
      <Routes>
          
          <Route path='/' element= { <Landing /> } />
          {/* <Route path='/' element= { <Dashboard /> } /> */}
          <Route path='/college' element= { <College /> } />
          <Route path='/department' element= { <Department /> } />
          <Route path='/StudentInfo' element= { <StudentInfo /> } />
          {/* <Route path='/login' element= { <Login /> } /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App