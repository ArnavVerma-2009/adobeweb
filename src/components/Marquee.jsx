import React from "react";

export default function Marquee() {
    
// $('#maindiv').width($('#div1').width());

  return (
    <>
      <div className="h-auto pt-12 text-white bg-black backdrop-blur-sm">
        <div id="maindiv">
          <div id="div1">
            &nbsp;Test-1 Test-2 Test-3 Test-4 Test-5 Test-6 Test-7 Test-8 Test-9
            Test-10 Test-11
          </div>
          <div id="div2">
            &nbsp;Test-1 Test-2 Test-3 Test-4 Test-5 Test-6 Test-7 Test-8 Test-9
            Test-10 Test-11
          </div>
        </div>
      </div>
    </>
  );
}
