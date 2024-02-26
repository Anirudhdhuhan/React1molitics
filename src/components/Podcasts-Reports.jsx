import React from "react";

function Subcomponent(){
    return(
    <>
     <div className="border-t border-gray-200 mb-2 mt-1"></div>
    <div className="mt-1">
    <img src="/images/Toonbook.png" alt="" />
    <p className="text-center">dfjknsdhsdnnd</p>
    </div>
    </>
    )
}

function PodRep() {
return(
    <>
     <div className="ml-7 mt-4 bg-white w-60">
        <div className="flex p-4">
        <p className="font-bold ">Latest Podcasts / Reports</p> 
        <p className="text-xs text-blue-600 font-bold">See all</p>
     </div>
     
    
        

        <Subcomponent />
     </div> 
    </>
)
}
 export default PodRep;