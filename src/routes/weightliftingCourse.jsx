import NavBar from '../components/NavBar';
import NutritionCourseBanner from '../components/NutritionCourseBanner';
import WeightliftingCourseAccordion from '../components/WeightliftingCourseAccordion';
import NutritionCourseAccordion from '../components/NutritionCourseAccordion';
import Footer from '../components/Footer';


function WeightliftingCourse() {

  return ( 
    <div>
     
        <NavBar />
      
        <NutritionCourseBanner />
        
        <WeightliftingCourseAccordion />

        <NutritionCourseAccordion />

        <div style={{ marginBottom: "15vh" }}></div>

        <Footer />

    </div>
  );
}

export default WeightliftingCourse;