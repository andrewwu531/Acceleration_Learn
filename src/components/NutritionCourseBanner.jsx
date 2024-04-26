import WeightliftingBanner2 from "../images/weightliftingBanner2.png";

export default function NutritionCourseBanner() {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <div
        className="flex justify-center mx-auto text-2xl font-semibold text-center underline xl:text-3xl"
        style={{ marginTop: "12vh" }}
      >
        The Only Nutrition & Weightlifting Programme You Will Ever Need!
      </div>

      <img
        src={WeightliftingBanner2}
        alt="WeightliftingBanner2"
        style={{
          marginTop: "6vh",
          marginBottom: "8vh",
          height: "40vh",
          width: "80vh",
        }}
        className="flex justify-center mx-auto rounded-2xl"
      />
    </div>
  );
}
