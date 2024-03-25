import NavBar from '../components/NavBar';
import SixCourses from '../components/SixCourses';
import FiveCoursesTab from '../components/FiveCoursesTab';
import CoachPic1 from '../components/CoachPic1';
import Footer from '../components/Footer';

// Issues 
// 1. Firebase Hosting
// 2. Tab horizontal line
// 3. Auto indentation and code suggestions cannot be applied

function Root() {

  return ( 
    <div>

        <NavBar />
    
        <SixCourses />

        <CoachPic1 />

        <FiveCoursesTab />      

        <Footer />

    </div>
  );
}

export default Root;