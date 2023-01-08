import React from "react";
import { Avatar } from "@mui/material";

export default function AuthorCard({ isActive, setISActive }) {

  function handleActive(e) {
    e.preventDefault();

    setISActive({
      active: true,
      name: e.target.id
    });
  }


  return (
    <>
      {/* <!-- Work --> */}
      <div id="intro" class="bg-bg-[#217195] h-auto my-6 py-8  rounded-lg border-4">
        <div id="avatar" class="flex justify-center py-2">
          <Avatar src="myph.jpg" sx={{ width: 170, height: 170 }} />
        </div>
        
        <div id="content" class="prose lg:prose-xl  px-2">
          <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">James Esil. Holder</h1>
          <small class="text-center block text-md text-gray-800"> Gamer, Game Developer &amp; AI Engineer</small>
          <small class="text-center block text-md text-gray-800"> ☎️ +231770172212 &amp; 📧 holderholderjamese@outlook.com </small>
          <p class="text-center block text-md text-gray-800"><i>Hey! There, itz your developer James, I love Games and I also like to make games, If you dont believe me ask William T. Johnson .Jr, He Can </i></p>

          <div id="hero-nav" className="p-6 w-full mx-auto">

            <ul className="flex items-center justify-center mx-4 gap-4">
              <li className=" border p-2 rounded-lg border-[#dad7cd]">
                <a href="#education" id="education" onClick={handleActive} className={`${isActive.active && isActive.name === "education" && 'font-bold'} font-lato text-xl`}>Education</a>
              </li>

              <li className=" border p-2 rounded-lg border-[#dad7cd]">
                <a href="#work" id="work" onClick={handleActive} className={`${isActive.active && isActive.name === "work" && 'font-bold'}  font-lato text-xl`}>Work</a>
              </li>

              <li className=" border p-2 rounded-lg border-[#dad7cd]">
                <a href="#hobbies" id="hobbies" onClick={handleActive} className={`${isActive.active && isActive.name === "hobbies" && 'font-bold'}  font-lato text-xl`}>Hobbies</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
     
    </>

  );
}