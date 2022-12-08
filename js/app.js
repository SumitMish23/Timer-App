let currentTime = new Date().toLocaleDateString();
const inputs=document.querySelectorAll('input');

document.getElementsByClassName('currentDate')[0].innerHTML=currentTime;
const clock=()=>{
    const end=new Date("2022-12-23");
    const now =new Date();
  const diff=(end - now)/1000;
  inputs[0].value=Math.floor(diff/3600/24);
}
clock();