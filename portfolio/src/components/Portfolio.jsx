function Portfolio() {
  return (
    <div className="w-[100%] h-auto md:h-[100vh] bg-[#151515] flex flex-col items-center justify-center px-[202px] text-[#fff] py-[30px]">
      <h1 className="text-[24px] lg:text-[48px] uppercase font-bold">Projects</h1>
      <div className="flex flex-col lg:flex-row w-[100%] items-center justify-between mt-[50px] gap-[20px]">
        <div className="w-[300px] h-[400px] border-[1px] border-white border-solid rounded-[12px] flex flex-col items-center justify-start">
          <img
            src="./assets/binkies1.png"
            alt=""
            className="rounded-t-[12px] h-[180px]"
          />
          <h1 className="mt-[10px] font-bold text-[24px]">Movie App</h1>
          <p className="text-center font-normal text-[14px] mt-[10px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex libero
            accusamus necessitatibus, asperiores consequatur dolorem ipsum quo
            blanditiis mollitia. Excepturi?
          </p>
        </div>
        <div className="w-[300px] h-[400px] border-[1px] border-white border-solid rounded-[12px] flex flex-col items-center justify-start">
          <img
            src="./assets/binkies4.png"
            alt=""
            className="rounded-t-[12px] h-[180px]"
          />
          <h1 className="mt-[10px] font-bold text-[24px]">Adventure App</h1>
          <p className="text-center font-normal text-[14px] mt-[10px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex libero
            accusamus necessitatibus, asperiores consequatur dolorem ipsum quo
            blanditiis mollitia. Excepturi?
          </p>
        </div>
        <div className="w-[300px] h-[400px] border-[1px] border-white border-solid rounded-[12px] flex flex-col items-center justify-start">
          <img
            src="./assets/insurevault.png"
            alt=""
            className="rounded-t-[12px] h-[180px]"
          />
          <h1 className="mt-[10px] font-bold text-[24px]">Insure App</h1>
          <p className="text-center font-normal text-[14px] mt-[10px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex libero
            accusamus necessitatibus, asperiores consequatur dolorem ipsum quo
            blanditiis mollitia. Excepturi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
