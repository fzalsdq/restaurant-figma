import Image from "next/image";

export default function Navbar() {
  return (
<div>
<div className="Navbar flex w-[1320px] h-[87px] mt-[45px] ml-[300px] border-2 relative">
    <span className="foodtuck flex text-orange-400 h-32px w-[109px] ml-[609px] border-2 font-sans: helvetica font-bold text-2xl leading-8 justify-center items-center absolute">
Food <span className="tuck text-white">tuck</span></span> 


    <div className="Menu-items flex"> 
    <ul className="flex flex-row gap-8 mt-8 text-[#FFFFFF]">
    <li>
Home 
    </li>

    <li>
Menu
    </li>
    <li>
Blog 
    </li>
    <li>
Pages 
    </li>
    <li className="downArrow flex">
About <span className="downArrow py-1"> <Image className="dropdown-arrow flex" src="/images/Project Status.png" width={15} height={15} alt="dropdown-arrow"/> </span> 
    </li>
    <li>
Shop 
    </li>
    <li>
Contact 
    </li>
   

    </ul>

    <span className="SearchBox flex h-[54px] w-[310px] ml-[1238px] mt-[47px] border-orange-400 border-2 rounded-2xl"><span className="Search-text relative pl-4 py-4">Search</span><Image className="SearchIcon flex absolute ml-64 py-4" src="/images/Search.png" width={24} height={24} alt="SearchIcon"/> 
     </span>
     <Image className="Handbag flex absolute text-[#FFFFFF] mt-12 ml-[2040px] py-4" src="/images/Handbag.png" width={24} height={24} alt="Handbag"/>
    </div>


    </div>



</div>

  )
}

