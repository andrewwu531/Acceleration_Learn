import Courses from '../components/Courses';
import NavBar from '../components/NavBar';
import CoursesTableOfContents from '../components/CoursesTableOfContents';
import CoachPic1 from '../components/CoachPic1';

function Root() {

  return ( 
    <div>
     
        <NavBar />
    
        <Courses />

        <CoachPic1 />

        <CoursesTableOfContents />      



    </div>
  );
}

export default Root;