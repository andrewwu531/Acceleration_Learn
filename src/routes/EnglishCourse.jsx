import NavBar from '../components/NavBar';
import SocialCourseAccordion from '../components/SocialCourseAccordion';
import SpeakingCourseAccordion from '../components/SpeakingCourseAccordion';
import WritingCourseAccordion from '../components/WritingCourseAccordion';
import BusinessCourseAccordion from '../components/BusinessCourseAccordion';
import PsychologyCourseAccordion from '../components/PsychologyCourseAccordion';
import Footer from '../components/Footer';


function EnglishCourse() {

  return ( 
    <div>
     
        <NavBar />
      
        <SocialCourseAccordion />

        <SpeakingCourseAccordion />

        <WritingCourseAccordion />

        <BusinessCourseAccordion />

        <PsychologyCourseAccordion />
        
        <Footer />

    </div>
  );
}

export default EnglishCourse;