var homeClass=document.getElementsByClassName("home")[0];
var aboutClass=document.getElementsByClassName("about-us")[0];
var jobClass=document.getElementsByClassName("jobs")[0];
var employeeClass=document.getElementsByClassName('employees')[0];

var homeId=document.getElementById("home");
var aboutId=document.getElementById("about");
var jobId=document.getElementById("jobs");
var peopleId=document.getElementById("people");




var home='  <div class="home-div"><div class="nav2"><h3>Posts</h3><table class="nav2-table"><tr><td> <div class="grey-btn" id="all"><a href="#">All</a></div></td><td><div class="grey-btn" id="images"><a href="#">Images</a></div></td><td><div class="grey-btn" id="videos"><a href="#">Videos</a></div></td><td><div class="grey-btn" id="documents"><a href="#">Documents</a></div></td></tr></table></div><div class="home-content"><div class="all"></div><div class="images text-align-center"></div><div class="videos text-align-center"></div><div class="documents text-align-center"></div></div></div>';

var all ='<div class="post1"><table class="post-table"><tr><td><img src="Yaarme-logo.png" alt="" width="45px" height="45px" style="border-radius: 50%"></td><td><div class="small-letter change-to-grey"><p><span style="font-weight: bold">YaarMe</span><br>101 followers <br>2mo . </p></div></td></tr></table><div class="post-content text-align-left"><p>We have just started working to develop a social media platform which aim to connect you with your friends and family in most convenient way.Your comments and suggestions would be greatly appreciated.</p></div><div class="post-img text-align-center"><img src="Yaarme-logo.png" alt="" width="250px" height="250px"  style="border-radius: 50%"></div></div> ';

var videos='<div class="change-to-grey"><h2>NO POSTS YET</h2></div> ';

var images='<div class="change-to-grey"><h2>NO POSTS YET</h2></div>';

var documents='<div class="change-to-grey"><h2>NO POSTS YET</h2></div>';



var aboutUs='<div class="about-us-div"><h2>About Us</h2><p>Connecting you to the people and community you love.</p><table class="about-table"><tr><td class="heading"><b>Website</b></td><td><a href="https://yaarme.com" style="color:  #07689f; font-weight: bold">https://yaarme.com</a></td></tr><tr><td class="heading"><b>Industries</b></td><td>Information Services</td></tr><tr><td class="heading"><b>Company size</b></td><td>11-50 employees</td></tr><tr><td class="heading"><b>Headquarters</b></td><td>Raipur, Chhattisgarh</td></tr><tr><td class="heading"><b>Type</b></td><td>Privately Held</td></tr><tr><td class="heading"><b>Founded</b></td><td>2020</td></tr></table><section class="location"><div class="location-div text-align-left"><h2>Location</h2><span style="background-color: #DDDDDD; font-size: 13px; margin-bottom: 0;font-weight: bold; padding: 2px">Primary</span><p class="" style="margin-top: 0">NIT Raipur </p><p class="">Raipur, Chhattisgarh, IN </p><p class="">  Get directions</p></div></section></div>';

var job='<div class="jobs-div text-align-center change-to-grey"><h2>There are no JOBS available</h2><h3>Check back later</h3></div>';

var employees='<div class="employees-div"><h2>Employees at YaarMe</h2><div class="employee employee1"><h3>Akash Ranjan Verma</h3><p>Developing world\'s most luxurious social media platform | web, app and database developer | NIT Rajpur</p></div><div class="employee employee2"><h3>Sunny Bharadwaj</h3><p>Android app developer trainee at Internshala/ Java / C / Kotlin / XML</p></div><div class="btn see-all btn-original"><a href="#">See All</a></div></div>';



homeId.addEventListener("click",addHomeContent);
addHomeContent();



function changeToGrey(select){
  select.style.backgroundColor="#797a7e";
  select.style.color="white";
}

function changeTooriginal(select){
  select.style.backgroundColor="#e8e8e8";
  select.style.color="black";
}

function addHomeContent(){
  changeToNormal(peopleId);
  changeToNormal(aboutId);
  changeToHoverColor(homeId);
  changeToNormal(jobId);
  jobClass.innerHTML='';
  employeeClass.innerHTML='';
  aboutClass.innerHTML='';
  homeClass.innerHTML=home;
  var allId=document.getElementById("all");
  var imgId=document.getElementById("images");
  var videosId=document.getElementById("videos");
  var documentsId=document.getElementById("documents");

  var allClass=document.getElementsByClassName("all")[0];
  var imgClass=document.getElementsByClassName("images")[0];
  var videosClass=document.getElementsByClassName("videos")[0];
  var documentsClass=document.getElementsByClassName("documents")[0];
  allId.addEventListener("click",addallContent);
  imgId.addEventListener("click",addimgContent);
  videosId.addEventListener("click",addvideosContent);
  documentsId.addEventListener("click",adddocsContent);
  addallContent();
  function addallContent(){
    changeToGrey(allId);
    changeTooriginal(imgId);
    changeTooriginal(videosId);
    changeTooriginal(documentsId);
    allClass.innerHTML=all;
    imgClass.innerHTML="";
    videosClass.innerHTML="";
    documentsClass.innerHTML="";

  }

  function addimgContent(){
    changeTooriginal(allId);
    changeToGrey(imgId);
    changeTooriginal(videosId);
    changeTooriginal(documentsId);

    allClass.innerHTML="";
    imgClass.innerHTML=images;
    videosClass.innerHTML="";
    documentsClass.innerHTML="";
  }

  function addvideosContent(){
    changeTooriginal(allId);
    changeTooriginal(imgId);
    changeToGrey(videosId);
    changeTooriginal(documentsId);

    allClass.innerHTML="";
    imgClass.innerHTML="";
    videosClass.innerHTML=videos;
    documentsClass.innerHTML="";
  }

  function adddocsContent(){
    changeTooriginal(allId);
    changeTooriginal(imgId);
    changeTooriginal(videosId);
    changeToGrey(documentsId);

    allClass.innerHTML="";
    imgClass.innerHTML="";
    videosClass.innerHTML="";
    documentsClass.innerHTML=documents;
  }

  addallContent();

}

aboutId.addEventListener("click",addAboutContent);

function addAboutContent(){
  changeToNormal(peopleId);
  changeToNormal(homeId);
  changeToHoverColor(aboutId);
  changeToNormal(jobId);
  jobClass.innerHTML='';
  homeClass.innerHTML='';
  employeeClass.innerHTML='';
  aboutClass.innerHTML=aboutUs;

}

jobId.addEventListener("click", addJobContent);
function addJobContent() {
  aboutClass.innerHTML='';
  homeClass.innerHTML='';
  employeeClass.innerHTML='';
  changeToNormal(peopleId);
  changeToNormal(aboutId);
  changeToNormal(homeId);
  changeToHoverColor(jobId);
  jobClass.innerHTML=job;
}

peopleId.addEventListener("click", addEmployeeContent);

function addEmployeeContent() {
  aboutClass.innerHTML='';
  homeClass.innerHTML='';
  changeToNormal(jobId);
  jobClass.innerHTML='';
  changeToNormal(aboutId);
  changeToNormal(homeId);
  changeToHoverColor(peopleId);
  employeeClass.innerHTML=employees;

}

function changeToNormal(select){

  select.style.borderBottom="0px";
}

function changeToHoverColor( select ){

  select.style.borderBottom="2px solid  #07689f";
}
