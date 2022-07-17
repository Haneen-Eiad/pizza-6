var welTitle = document.getElementById("welTitle");
var wel_firstPara =document.getElementById("wel_firstPara")
var wel_secPara = document.getElementById("wel_secPara");
var offersImg =document.getElementById("offersImg");
var GiftsImg =document.getElementById("GiftsImg");
var wel_desc_data=document.getElementById("wel_desc_data");
var inputGroup = document.getElementsByClassName("form-control");
var deleteAllBtn = document.getElementById("deleteAllBtn");
var currentIndex=0;
let upoffersImg =document.getElementById("upoffersImg");
var src;
mainalert = document.getElementById("mainalert");
firstParaAlert = document.getElementById("firstParaAlert");
secParaalert = document.getElementById("secParaalert");
test5= document.getElementById("test5");
var addBtn = document.getElementById("addBtn");

//  welcome section 

// add function 
var welSec_info = [];
if(localStorage.getItem("welcomeSec")==null){
    welSec_info = [];
}
else{
     var welSec_info = JSON.parse(localStorage.getItem("welcomeSec"));
    displayData();
}

deleteAllBtn.onclick=function(){
    
    Swal.fire({
      title: 'Are you sure you will delete all of your Records?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("welcomeSec");
         welSec_info=[];
          wel_desc_data.innerHTML="";
        Swal.fire(
          'Deleted!',
          ' all of Your records has been deleted.',
          'success'
        )
      }
    })
}

addBtn.onclick = function(){
    if(addBtn.innerHTML=="Add")
    {
        addwelcomeInfo();
        //حطيتهم عشان الكرد لما كنت اعمل ادد ما كان يرضى يشيل الصح تبع الفاليد وكانت الادد ضل شغالة 
        this.setAttribute("disabled","true");
       welTitle.classList.remove("is-valid");
       wel_firstPara.classList.remove("is-valid");
       wel_secPara.classList.remove("is-valid");
        

    }
   else{
    updateData();
   }
    displayData();
    clearForm();
   
   
}

//add function 
function addwelcomeInfo(){
    var wel_sec = {
        welcomeTitle:welTitle.value,
        welcomeFirstpara:wel_firstPara.value,
        welcomeSeconedpara:wel_secPara.value,
        offring:src,
      
 
     }
    welSec_info.push(wel_sec);
    localStorage.setItem("welcomeSec",JSON.stringify(welSec_info));
    
}

//display function
function displayData(){
    var result= "";
    for(var i =0;i<welSec_info.length;i++){
        result +=  `<tr>
        <td>${i}</td>
        <td>${welSec_info[i].welcomeTitle}</td>
        <td>${welSec_info[i].welcomeFirstpara}</td>
        <td>${welSec_info[i].welcomeSeconedpara}</td>
        <td ><img src="${welSec_info[i].offring}" style="width:80px ; height:60px"  ></td>
       
        <td><button class="btn btn-primary" onclick=getwelData(${i})>Update</button> </td>
         <td> <button class="btn btn-danger" onclick="deletItem(${i})"> Delete</button> </td>
          </tr>`;
}
wel_desc_data.innerHTML=result;
console.log(wel_desc_data);
}

//clear fun 
function clearForm(){

    for(var i=0;i<inputGroup.length;i++){
        inputGroup[i].value="";
    }
   
    src= "";
    upoffersImg.src="https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
    addBtn.innerHTML="Add";
}
function deletItem(index){
  
  
   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      welSec_info.splice(index,1);
      localStorage.setItem("welcomeSec",JSON.stringify(welSec_info));
      displayData();
      Swal.fire(
        'Deleted!',
        'Your informations has been deleted.',
        'success'
      )
    }
  })
}
//search fun 
function search(name){
    var result= "";
    for(var i =0;i<welSec_info.length;i++){
       if(welSec_info[i].welcomeTitle.toLowerCase().includes(name.toLowerCase())){
        result+=  `<tr>
        <td>${i}</td>
        <td>${welSec_info[i].welcomeTitle}</td>
        <td>${welSec_info[i].welcomeFirstpara}</td>
        <td>${welSec_info[i].welcomeSeconedpara}</td>
        <td ><img src="${welSec_info[i].offring}" style="width:80px ; height:60px"  ></td>
       
        <td><button class="btn btn-primary" >Update</button> </td>
         <td> <button class="btn btn-danger" onclick="deletItem(${i})"> Delete</button> </td>
          </tr>`;
       }
           
        }
        

wel_desc_data.innerHTML=result;
}

// update fun 
function getwelData(index){
    var update = welSec_info[index];
    console.log(update);
    welTitle.value=update.welcomeTitle;
    wel_firstPara.value=update.welcomeFirstpara;
     wel_secPara.value=update.welcomeSeconedpara;
    //  offersImg.value=update.offring;
     src = welSec_info[index].offring;
    
    // GiftsImg.value=update.Gifts;
    addBtn.innerHTML="Update Data";
    currentIndex=index;
   
}
// update funimage.png
function updateData(){
    var wel_sec = {
        welcomeTitle:welTitle.value,
        welcomeFirstpara:wel_firstPara.value,
        welcomeSeconedpara:wel_secPara.value,
        offring:src,
      
 
     };
     welSec_info[currentIndex].welcomeTitle=wel_sec.welcomeTitle;
     welSec_info[currentIndex].welcomeFirstpara=wel_sec.welcomeFirstpara;
     welSec_info[currentIndex].welcomeSeconedpara=wel_sec.welcomeSeconedpara;
    //  welSec_info[currentIndex].offring=wel_sec.offring;
     welSec_info[currentIndex].offring = wel_sec.offring;
   
    //  welSec_info[currentIndex].Gifts=wel_sec.Gifts;

    localStorage.setItem("welcomeSec",JSON.stringify(welSec_info));
     

}

//img
function readURL(input) {

    var img = input.files[0];
  console.log(img);
    if (img.type == "image/jpeg" || img.type == "image/jpg" || img.type == "image/gif" || img.type == "image/png" || img.type == "image/webp") {
  
      if (input.files && img) {
  
        var reader = new FileReader();
  
        reader.addEventListener(
          "load",
          function () {
            
            src = reader.result;
            console.log(input.files[0].welcomeTitle);
            upoffersImg.src = src;
            console.log(reader);
            test5.setAttribute("src","offring");
            
           
          },
          false
        );
        reader.readAsDataURL(input.files[0]);
      }
      
    } else {
      alert("this is not image");
    }
    
  }
  
//validation 

// wel_firstPara.onkeyup=function(){
//   var mainTitlePttern = /[a-zA-Z]/;
//   if(mainTitlePttern.test(wel_firstPara.value) ){
//     addBtn.removeAttribute("disabled");
//   }else  {
//     addBtn.disabled="true";
//   }
// }

// wel_firstPara.onkeyup=function(){
//   var mainTitlePttern = /[a-zA-Z]/;
//   if(mainTitlePttern.test(wel_firstPara.value) ){
//     addBtn.removeAttribute("disabled");
//   }else{
//     addBtn.disabled="true";
//   }
// }

// wel_firstPara.onkeyup=function(){
//   var mainTitlePttern = /[a-zA-Z]/;
//   if(mainTitlePttern.test(wel_firstPara.value) ){
//     addBtn.removeAttribute("disabled");
//   }else{
//     addBtn.disabled="true";
//   }
// }

  welTitle.onkeyup=function(){
    var mainTitlePttern = /[a-zA-Z]/;
    if(mainTitlePttern.test(welTitle.value) ){
      addBtn.removeAttribute("disabled");
      welTitle.classList.add("is-valid");
      welTitle.classList.remove("is-invalid");
      mainalert.classList.add("d-none");
      
  
    }
    else if(welTitle.value ==""){
     addBtn.setAttribute("disabled","true");
      welTitle.classList.remove("is-invalid");
      welTitle.classList.remove("is-valid");
      mainalert.classList.add("d-none");
      
      
    }
    else {
      addBtn.disabled="true";
      welTitle.classList.add("is-invalid");
      welTitle.classList.remove("is-valid");
      mainalert.classList.remove("d-none");
  
    }
   
  
  }
  wel_firstPara.onkeyup=function(){
    var mainTitlePttern = /[a-zA-Z]/;
    if(mainTitlePttern.test(wel_firstPara.value) ){
      addBtn.removeAttribute("disabled");
      wel_firstPara.classList.add("is-valid");
      wel_firstPara.classList.remove("is-invalid");
      firstParaAlert.classList.add("d-none");
    }
    else if(wel_firstPara.value ==""){
      addBtn.setAttribute("disabled","true");
      wel_firstPara.classList.remove("is-invalid");
      wel_firstPara.classList.remove("is-valid");
      firstParaAlert.classList.add("d-none");
  
     
    }
    else {
      addBtn.disabled="true";
      wel_firstPara.classList.add("is-invalid");
      wel_firstPara.classList.remove("is-valid");
      firstParaAlert.classList.remove("d-none");
  
    }
   
  
  }
  wel_secPara.onkeyup=function(){
    var mainTitlePttern = /[a-zA-Z]/;
    if(mainTitlePttern.test(wel_secPara.value) ){
      addBtn.removeAttribute("disabled");
      wel_secPara.classList.add("is-valid");
      wel_secPara.classList.remove("is-invalid");
      secParaalert.classList.add("d-none");
    }
    else if(wel_secPara.value ==""){
      addBtn.setAttribute("disabled","true");
      wel_secPara.classList.remove("is-invalid");
      wel_secPara.classList.remove("is-valid");
      secParaalert.classList.add("d-none");
    }
    else {
      addBtn.disabled="true";
      wel_secPara.classList.add("is-invalid");
      wel_secPara.classList.remove("is-valid");
      secParaalert.classList.remove("d-none");
  
    }
   
  
  }

//alert

// function hi(){
//   offersImg.getAttribute("width");
//   localStorage.setItem("welcomeSec",JSON.stringify(welSec_info));
// }
// console.log(hi);



