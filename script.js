
document.querySelector('.cross').style.display='none';
document.querySelector(".hamburger").addEventListener('click',()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        setTimeout(()=>{ document.querySelector('.ham').style.display='inline'},300);
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.ham').style.display='none';
        setTimeout(()=>{document.querySelector('.cross').style.display='inline'},300);
    }
})

let t= new Typed(".name",{
    strings:["Jyoti Prakash Samal","A Student","A Learner","A Movie Lover❣️✨ too...😉"],
    typeSpeed:60,
    loop:true,
    backDelay:800,
    backSpeed:40,
})

let i=document.getElementById("icon");
i.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        i.src="images/sun.png";
    }
    else{
        i.src="images/moon.png"
    }
})

