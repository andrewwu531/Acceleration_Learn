import Courses from '../components/Courses';
import NavBar from '../components/NavBar';
import CoursesTablev2 from '../components/CoursesTablev2';
import CoachPic1 from '../components/CoachPic1';
import Footer from '../components/Footer';

function Root() {

  return ( 
    <div>
     
        <NavBar />
    
        <Courses />

        <CoachPic1 />

        <CoursesTablev2 />      

        <Footer />

    </div>
  );
}

export default Root;