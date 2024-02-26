import React from 'react';
import './Navigation.css';
import { IoIosArrowDown } from "react-icons/io";


function Navigation() {
    return (
        <div className="Navigation">
            <nav className='flex items-center bg-white p-4 shadow-lg'>
                 <img src="/images/molitics_logo.png" className='h-10  ml-2' alt="Molitics Logo"/>


               
                 <input id="search" name="search" class="bg-gray-100 ml-10 rounded-md text pl-4 pb-1 pt-1" placeholder="Search..." type="search"></input>
                

                <ul className='flex space-x-9 mx-auto '>
               
               <div>
            <a href=""> <img src="/images/icons/Home.svg" className='ml-2' alt="" /> </a>
                 <li><a href="#" className='font-medium hover:underline'>Home</a> </li>
                 </div>

                <div>
             <a href="">   <img src="/images/icons/Article.svg" className='ml-3' alt="" /> </a>
                 <li><a href="#" className='font-medium hover:underline'>Articles</a> </li>
                 </div>

                 <div>
              <a href="">   <img src="/images/icons/Leaders.svg" alt="" className='ml-4'/> </a>
                 <li><a href="#" className='font-medium hover:underline'>Leaders</a> </li>
                 </div> 

                 <div>
                <a href=""> <img src="/images/icons/Election Results.svg" alt="" className='ml-8'/> </a>
                 <li><a href="#" className='font-medium hover:underline'>Election Result</a> </li>
                 </div>

                 <div>
                <a href=""> <img src="/images/icons/Caricatures.svg" alt="" className='ml-7'/> </a>
                 <li><a href="#" className='font-medium hover:underline'>Caricatures</a> </li>
                 </div>

                 <div>
                <a href=""> <img src="/images/icons/Videos.svg" alt="" className='h-6 ml-3'/> </a>
                 <li><a href="#" className='font-medium hover:underline'>Videos</a> </li>
                 </div>

                </ul>
                <a href=""> <img src="/images/modi.png" className='h-12 mr-3' alt="" /></a>
                <a href=""> <IoIosArrowDown className='text-md' /> </a>
                {/* <button className='bg-blue-600 rounded hover:bg-blue-500 text-white font-bold p-2'>Sign In</button> */}
            </nav>
        </div>
    );
}

export default Navigation;
