function openDrawer(){
document.querySelector(".drawer").style.left="0";
document.querySelector(".drawer-overlay").style.display="block";
}

function closeDrawer(){
document.querySelector(".drawer").style.left="-300px";
document.querySelector(".drawer-overlay").style.display="none";
}
const banners =
document.querySelectorAll(".banner-img");

const dots =
document.querySelectorAll(".dot");

let currentBanner = 0;

function showBanner(index){

banners.forEach(banner=>{
banner.classList.remove("active-banner");
});

dots.forEach(dot=>{
dot.classList.remove("active-dot");
});

banners[index]
.classList.add("active-banner");

dots[index]
.classList.add("active-dot");

}

setInterval(()=>{

currentBanner++;

if(currentBanner >= banners.length){
currentBanner = 0;
}

showBanner(currentBanner);

},3000);