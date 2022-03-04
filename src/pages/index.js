 import React from 'react'
 import Layout from '../components/layout'
 import { StaticImage} from 'gatsby-plugin-image';
 import '../styles/Merriweather-Regular.ttf';
 import {Content} from '../components/content'
 
 
 const IndexPage = () => {
   return (
     <div >
  <Layout />
  <Content />
  <div className=' '>
  <div className="flex container mx-auto">
  <div  className="max-w-sm rounded overflow-hidden ml-14 shadow-lg bg-gray-900">
  <StaticImage className="w-full" src="../images/aurora.jpg" alt="Sunset in the mountains" />
  <div className="px-6 py-4 ">
    <div className="font-bold text-xl text-green-300  mb-2">The Coldest Sunset</div>
        <p className="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
       <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">#winter</span>
  </div>
</div>
<div  className="max-w-sm rounded overflow-hidden ml-14 shadow-lg bg-gray-900">
        <StaticImage className="w-full" src="../images/aurora.jpg" alt="Sunset in the mountains" />
  <div className="px-6 py-4 ">
    <div className="font-bold text-xl text-green-300 mb-2">The Coldest Sunset</div>
        <p className="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
       <div className="px-6 pt-4 pb-2">
       <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">#winter</span>
  </div>
</div>
<div  className="max-w-sm rounded overflow-hidden ml-14 shadow-lg bg-gray-900">
        <StaticImage className="w-full" src="../images/moon.jpg" alt="Sunset in the mountains" />
  <div className="px-6 py-4 ">
    <div className="font-bold text-xl text-green-300  mb-2">The Coldest Sunset</div>
        <p className="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
       <div className="px-6 pt-4 pb-2">
       <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">#winter</span>
  </div>
</div>
</div>
</div>

     </div>
   )
 }
 


 export default IndexPage