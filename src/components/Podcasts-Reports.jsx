import React from "react";

function Subcomponent(){
    return(
    <>
     <div className="border-t border-gray-200 mb-2 mt-1"></div>
    <div className="mt-1">
    <img src="/images/youtube.WEBP" alt="" />
    <p className="text-center">Podcast news and Reports</p>
    </div>
    </>
    )
}

function PodRep() {
return(
    <>
     <div className="ml-7 mt-4 bg-white w-60 rounded-md">
        <div className="flex p-4">
        <p className="font-bold ">Latest Podcasts / Reports</p> 
        <p className="text-xs text-blue-600 font-bold">See all</p>
     </div>
        <Subcomponent />
        <Subcomponent />
        <Subcomponent />
     </div> 
    </>
)
}
 export default PodRep;