import coach4 from "../images/coach4.png";

export default function EnglishCourseBanner() {
  return (
    <div>
      <div
        className="flex justify-center text-2xl font-semibold text-center underline xl:text-3xl"
        style={{ marginTop: "12vh" }}
      >
        You Will Become A Native English Speaker With Acceleration Learn!
      </div>

      <img
        src={coach4}
        alt="coach4"
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
