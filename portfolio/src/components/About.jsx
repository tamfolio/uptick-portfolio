const Technologies = [
  "HTML",
  "JAVASCRIPT (ES6+)",
  "REACT JS",
  "TAILWIND CSS",
  "REDUX",
  "TYPESCRIPT",
  "CSS",
  "REST API",
  "UNIT TESTING"
];
function About() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#151515] flex flex-col items-center justify-center px-[30px] lg:px-[202px] text-[#fff]" id="about">
      <h1 className="text-[22px] md:text-[48px] uppercase font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-[100%]">
        <img
          src="./assets/aboutt.png"
          alt=""
          className="w-[300px] h-[200px] lg:w-[500px] lg:h-[600px] object-contain"
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[22px] md:text-[48px] uppercase font-bold mb-[30px]">
            Technologies I Know
          </h1>
          <div className="flex  flex-wrap gap-[50px] w-[350px] lg:w-[600px] items-center justify-center md:item-start md:justify-start">
            {Technologies?.map((tech) => (
              <p key={tech.index} className="w-[150px] font-bold opacity-[.5] text-center md:text-left">{tech}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
