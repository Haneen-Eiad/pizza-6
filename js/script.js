  /******************************************************************* */
  var welcomehere=document.getElementById("welcomehere");
  var welcoimgs=document.getElementById("welcoimgs");
  console.log(welcoimgs);
  var showarray=JSON.parse(localStorage.getItem("welcomeSec"));
  var imgarray = JSON.parse(localStorage.getItem("welcomeSec"));
  // var trywidth = JSON.parse(localStorage.getItem("welcomeSec"));

    var result1="";
    var result="";
    for(var i=0;i<showarray.length;i++){
        result+=
        ` 
       
      
     <div class="row ">
             <div class="col-md-8 ">
                 <div class="Welcome_to_Pizza_House_info   text-center w-75 pt-4"    >
                    <div class="icon-with-lines d-flex align-items-center  " >
                        <span class="icon_left-line   "></span>
                        <i class=" Welcome_to_Pizza_House_info_icon fa-solid fa-pizza-slice fs-3 "></i>
                        <span class="icon_right_line"></span>
                    </div> 
                  <div >
                    <h2 class="Welcome_to_Pizza_House_info_title pt-4 fs-1 "   > ${showarray[i].welcomeTitle}</h2>
                   
                    
                     <p class="Welcome_to_Pizza_House_info_first_para mt-5 mb-5">${showarray[i].welcomeFirstpara} </p>
                     <p class="Welcome_to_Pizza_House_info_seconed_para mb-5">${showarray[i].welcomeSeconedpara}</p>
                     <a href="#" class="Welcome_to_Pizza_House_info_link">learn more</a>
                  </div>
                    
     
                 </div>
             </div>
             <div class="col-md-4">
                <div class="Welcome_to_Pizza_House_img d-flex align-items-center " id="welcoimgs">
                   <a href="#"> <img src="${imgarray[i].offring}" alt="" class="w-70 pe-4" ></a> 
                  <a href="#">  <img src="img/gift.jpg" alt="" class="w-70"> </a> 
                </div>
             </div>
          </div>    
          </div>

    
     `;
 
    }

    welcomehere.innerHTML=result;
    
    // for(var i=0;i<imgarray.length;i++){
      
    //   result1+=`
    //   <a href="#"> <img src="${imgarray[i].offring}" alt="" class="w-70 pe-4 " ></a> 
    //   <a href="#">  <img src="img/gift.jpg" alt="" class="w-70"> </a> 
     
    //   `
    // }
    // welcoimgs.innerHTML=result1;
    // console.log(welcoimgs);