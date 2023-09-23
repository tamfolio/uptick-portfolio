import {GoArrowDown} from 'react-icons/go'

function Header() {
  return (
    <div className="w-[100%] h-[80vh] md:h-[100vh] bg-[#fff] flex items-center justify-center md:justify-between relative flex-col md:flex-row px-[50px]" id='home'>
      <div className="w-[100%]  md:w-[90vh]">
        <p className="text-primary text-[22px] font-normal">Hi, I’m Olaniyi Tamilore</p>
        <h1 className=" text-[22px] lg:text-[100px] font-extrabold leading-normal">Software Developer</h1>
        <div className="absolute gap-[10px] items-center justify-center bottom-[30px] hidden md:flex">
            <GoArrowDown/>
            <p>Scroll Down</p>
        </div>
      </div>
      <div className='flex flex-col items-center  md:items-end'>
            <img src="/assets/header.png" alt=""  className='mb-[81px] hidden md:block'/>
            <p className='w-[100%] md:w-[506px] text-[16px] mt-[20px] md:mt-0'>I am a software developer with over five years of experience in developing web and mobile applications. I have a strong background in JavaScript and React. I enjoy working on challenging projects that require creativity and problem-solving skills. I am passionate about learning new technologies and keeping up with the latest trends in the industry. I am also a team player who values collaboration and communication with my colleagues and clients.</p>
      </div>
    </div>
  );
}

export default Header;
