import NavBar from '../components/NavBar';
import SixCourses from '../components/SixCourses';
import WeightliftingCourseAccordion  from '../components/WeightliftingCourseAccordion';
import NutritionCourseAccordion from '../components/NutritionCourseAccordion';
import SocialCourseAccordion from '../components/SocialCourseAccordion';
import SpeakingCourseAccordion from '../components/SpeakingCourseAccordion';
import WritingCourseAccordion from '../components/WritingCourseAccordion';
import BusinessCourseAccordion from '../components/BusinessCourseAccordion';
import PsychologyCourseAccordion from '../components/PsychologyCourseAccordion';
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

        <WeightliftingCourseAccordion />

        <NutritionCourseAccordion />

        <SocialCourseAccordion />

        <SpeakingCourseAccordion />

        <WritingCourseAccordion />

        <BusinessCourseAccordion />

        <PsychologyCourseAccordion />

        <div style={{ marginBottom: "15vh" }}></div>

        <Footer />

    </div>
  );
}

export default Root;