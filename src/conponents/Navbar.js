import React from "react";




export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <nav class="bg-[#217195] rounded shadow">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" >
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
                     text-black-500 rounded
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
                     text-black-500 rounded
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
                     text-black-500 rounded
                      hover:border-gray-300 hover:text-gray-700
                    ">Blog</a>
                <a href="contacts" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium rounded
                     text-black-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Contact</a>
                <a href="account" class="
                      items-center
                      inline-flex
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm rounded
                      font-medium
                     text-black-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Sign In</a>
              </div>
            </div>
          </div>
        </nav>


      </div>
    </>
  );
}




// https://rishi.app/blog/how-to-build-your-own-likes-and-comments-system-with-firebase-and-react