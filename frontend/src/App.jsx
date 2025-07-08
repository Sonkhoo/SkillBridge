// // src/App.js

// import './App.css'
// import Landing from './components/landing';
// import Navbar from './components/navbar';
// import Login from './components/login';
// import Dashboard from './components/dashboard';
// import Test from './components/test';
// import Suggestions from './components/suggestions';
// import Blockchain from './components/bloackchain';
// import Jobboard from './components/jobboard';
// import Detail from './components/details';


// export default function App() {
//   return (
//     <div className="w-screen h-screen">
//       <Navbar/>
//       <Detail />
//     </div>
//   );

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing/landing';
import Login from './pages/auth/login';
import Test from './pages/test';
import Dashboard from './pages/dashboard/dashboard';
import Blockchain from './pages/certificates/blockchain';
import Suggestions from './pages/courses/suggestions';
import Jobboard from './pages/jobboard';   

function App() {
  return (
    <Router>
      <div className="w-full h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blockchain" element={<Blockchain />} />  
          <Route path="/suggestions" element={<Suggestions />} />      
          <Route path="/jobboard" element={<Jobboard />} />            
        </Routes>
      </div>
    </Router>
  );
}

export default App;







