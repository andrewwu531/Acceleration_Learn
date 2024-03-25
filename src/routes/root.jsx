import NavBar from '../components/NavBar';
import SixCourses from '../components/SixCourses';
import WeightliftingCourseAccordion1  from '../components/WeightliftingCourseAccordion1';
import CoachPic1 from '../components/CoachPic1';
import Footer from '../components/Footer';


// Issues 
// 1. Firebase Hosting
// 2. Auto indentation and code suggestions cannot be applied
// 3. Add Excel Doc Link in homepage
// 4. Design personalised photos & videos once you have implemented everything

function Root() {

  return ( 
    <div>

        <NavBar />
    
        <SixCourses />

        <CoachPic1 />

        {/* <FiveCoursesTab />       */}

        <WeightliftingCourseAccordion1 />

        <Footer />

    </div>
  );
}

export default Root;