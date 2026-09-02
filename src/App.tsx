import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";


import Home from "./pages/Home";
import StudentClasses from "./pages/StudentClasses";
import ClassLessons from "./pages/ClassLessons";
import Teacher from "./pages/Teacher";
import Safety from "./pages/Safety";


function App(){

 return (

  <BrowserRouter>

    <Routes>


      <Route
        path="/"
        element={<Home />}
      />


      <Route
        path="/student"
        element={<StudentClasses />}
      />
      <Route
        path="/student/class/:classId"
        element={<ClassLessons />}
      />


      <Route
        path="/teacher"
        element={<Teacher />}
      />
      <Route
        path="/student/safety"
        element={<Safety />}
      />


    </Routes>

  </BrowserRouter>

 )

}


export default App;
