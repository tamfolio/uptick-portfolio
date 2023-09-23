import { useState } from "react";

function Work() {
  const [selectWork, setSelectWork] = useState("Pennytree")
  const handleOptionClick = (option) => {
    setSelectWork(option);
  };

  const worklist = [
    {
      id: 1,
      name : "Pennytree"
    },
    {
      id: 2,
      name : "Betascratch"
    },
  ]

  const isOptionSelected = (option) => selectWork === option;

  const handleDownload = () => {
    // Create a URL for the document
    const documentUrl = "./assets/TamiloreCv.pdf";

    // Open the URL in a new tab/window to trigger the download
    window.open(documentUrl);
  };

  console.log(selectWork)
  return (
    <div className="w-[100%] h-[100vh] bg-[#fff] flex flex-col md:flex-row items-center justify-between md:gap-[100px] px-[202px] text-[#151515] py-[20px]" id="work">
      <div className="text-center md:text-left">
        <h1 className="text-[35px] font-bold mb-[20px] lg:mb-[106px]">Work Experience</h1>
        <div className="flex  flex-row md:flex-col gap-[10px] md:gap-[46px] text-center">
          {worklist.map((work) => (
              <p key={work.id}  className={`cursor-pointer ${
                isOptionSelected(work.name)
                  ? "text-[#151515] bg-[#151515] bg-opacity-[.05] w-[150px] h-[42x] md:w-[209px] md:h-[62px] flex items-center justify-center font-bold text-[20px]"
                  : "text-[#151515] font-bold text-[20px] w-[150px] h-[42x] md:w-[209px] md:h-[62px] flex items-center justify-center"
              }`} onClick={() => handleOptionClick(work.name)}>{work.name}</p>
          ))}
          
        </div>
      </div>
      <div className="text-center md:text-left">
        <p className="mt-[30px] mb-[30px] lg:mb-[106px] text-[#f86a6a] font-bold cursor-pointer" onClick={handleDownload}>Download CV</p>
        {selectWork === "Pennytree" && 
        <div className="w-[100%] flex flex-col items-center justify-center px-[10px]">
           <p className="text-[18px] font-semibold w-[267px] mb-[13px] text-center md:text-left">Software Engineer @ Penytree Jan 2022 - Present </p>
            <p className="w-[100%] md:w-[442px]">
            <ul className="list-disc">
                <li>Developing highly interactive Web Application.</li>
            </ul>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat praesentium animi qui ad, veritatis voluptates eius! Tempora voluptatum in libero culpa, asperiores architecto ab reprehenderit? Obcaecati, libero labore, nemo cumque placeat debitis, minus fuga veniam modi natus soluta perspiciatis? Iusto rem cum tempore cumque dolorum repellat harum vel sint! 
        </p>
        </div>
        }
        {selectWork === "Betascratch" && 
        <div className="w-[100%] flex flex-col items-center justify-center px-[10px]">
           <p className="text-[18px] font-semibold w-[267px] mb-[13px]">Software Engineer @ Beta Jan 2022 - Present </p>
            <p className="w-[100%] md:w-[442px]">
            <ul className="list-disc">
                <li>Developing highly interactive Web Application.</li>
            </ul>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure aliquam perspiciatis ullam sequi nisi molestias ea voluptate voluptates voluptatum cupiditate dolore, accusamus laboriosam fugit nostrum esse necessitatibus. Ab praesentium, adipisci asperiores at optio distinctio vel unde quia ad! Omnis minus animi nisi aut quae sit alias minima similique fugiat blanditiis!
        </p>
        </div>
        }
      </div>
    </div>
  );
}

export default Work;
