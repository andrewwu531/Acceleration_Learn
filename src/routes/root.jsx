import NavBar from '../components/NavBar';
import SixCourses from '../components/SixCourses';
import WeightliftingCourseAccordion  from '../components/NutritionCourseAccordion';
import NutritionCourseBanner from '../components/NutritionCourseBanner';
import NutritionCourseAccordion from '../components/WeightliftingCourseAccordion';
import EnglishCourseBanner from '../components/EnglishCourseBanner';
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

// Next Steps
// 3. Add Excel Doc Link section above course accordion in homepage
// 6. Payment Page for all courses > Billing Page (Courses in Cart + Total Price + Login & Card Details + Pay)
// 7. Login functionality + payment confirmation email 
// 8. Personalised account page (courses purchased + courses not purchased) 
// 9. Course contents for each course in personal account
// 4. Design personalised photos & videos once you have implemented everything

function Root() {

  return ( 
    <div>

        <NavBar />
    
        <SixCourses />

        <CoachPic1 />

        {/* ... */}

        <NutritionCourseBanner />

        <NutritionCourseAccordion />

        <WeightliftingCourseAccordion />

        {/* ... */}

        <EnglishCourseBanner />

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