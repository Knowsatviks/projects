function addNewWEField(){

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");
    let weOb = document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
   
    weOb.appendChild(newNode);
}
function addNewProField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("project");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter project");

    let prob=document.getElementById("p");
    prob.appendChild(newNode);
}
function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb= document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.appendChild(newNode);
}
function addskill(){
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("skillfield");
    newNode.classList.add("mt-3");
   newNode.setAttribute("type", "text");
   newNode.setAttribute("placeholder","Enter Skill");

   let skob= document.getElementById("sk");
   skob.appendChild(newNode);
}

//Generating CV
function GenCV(){
   document.getElementById("nameT1").innerHTML=document.getElementById("nameField").value;
   document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value;
    document.getElementById("conT1").innerHTML=document.getElementById("Contact").value;
    document.getElementById("adT1").innerHTML=document.getElementById("Address").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;
    document.getElementById("inT").innerHTML=document.getElementById("Insta").value;
    document.getElementById("linT").innerHTML=document.getElementById("Linked").value;
    
    //setting skills on template
    let sko=document.getElementsByClassName("skillfield");
    let str="";
    for(let x of sko){
        str+=`<li> ${x.value} </li>`;
    }
    document.getElementById("skT").innerHTML=str;
   
    //setting projects on template
    let pros=document.getElementsByClassName("project");
    let str0="";
    for(let b of pros)
    {
        str0+=`<li> ${b.value}</li>`;
    }
    document.getElementById("obT").innerHTML=str0;
  
    //setting Work Experiences on Template
    let wes = document.getElementsByClassName("weField");
    let str1="";

    for( let e of wes){
        str1+= `<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str1;

    //setting Academic Qualification on Template
    let aqs=document.getElementsByClassName("aqField");

    let str2="";
    for(let a of aqs){
        str2+= `<li> ${a.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str2;
    
    //code for setting profile image on the template

    let file=document.getElementById(`image`).files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    //setting image to template
    reader.onloadend = function () {
        document.getElementById("imgT").src= reader.result;
    };

    

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

function download(){
   const page= document.getElementById("cv-template");
   html2pdf().from(page).save();
 document.getElementById("prnt").style.display="none";
   document.getElementById("dwnd").style.display="none";
 
}
function printCV(){
       window.print();
    }



