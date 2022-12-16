import React from "react";
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <nav class="bg-[#a3b18a] shadow">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 justify-between">        
              {/* sign in class */}
              <div class="
                  absolute
                  inset-y-0
                  right-50
                  flex
                  items-center
                  pr-2
                  sm:static sm:inset-auto sm:ml-6 sm:pr-0
                  
                ">
                   <a href="/" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">James Esil Holder</a>
                    <a href="projects" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">projects</a>
                  <a href="blog" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Blog</a>
                  <a href="contacts" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Contact</a>
                    <a href="contacts" class="
                      items-center
                      inline-flex
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Sign In</a>
                </div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}

          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 pt-2 pb-4">

              {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}

              <a href="/projects" class="
                  block
                  border-l-4 border-indigo-500
                  bg-indigo-50
                  py-2
                  pl-3
                  pr-4
                  text-base
                  font-medium
                  text-indigo-700
                ">Projects</a>
              <a href="#" class="
                  block
                  border-l-4 border-transparent
                  py-2
                  pl-3
                  pr-4
                  text-base
                  font-medium
                  text-gray-500
                  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                ">Blog</a>
              <a href="#" class="
                  block
                  border-l-4 border-transparent
                  py-2
                  pl-3
                  pr-4
                  text-base
                  font-medium
                  text-gray-500
                  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                ">Contact</a>
            </div>
          </div>
        </nav>

       
      </div>
    </>
  );
}




// https://rishi.app/blog/how-to-build-your-own-likes-and-comments-system-with-firebase-and-react