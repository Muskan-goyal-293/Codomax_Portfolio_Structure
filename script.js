const selectTheme = document.querySelector("#selectTheme");
const root = document.documentElement;

const themeColorObj ={
    dark :{
        "bg-color" :"#060606",
        "sec-color" :"#141414",
        "third-color" :"#67686C",
        "four-color":"#B3B3B3"
    },
    brown:{
        "bg-color" :"#571F23",
        "sec-color" :"#926B70",
        "third-color" :"#864C5A",
        "four-color":"#D0A5AE"
    },
    light:{
        "bg-color" :"#9C7962",
        "sec-color" :"#D8D4CC",
        "third-color" :"#B6A18F",
        "four-color":"#DFDAD4"
    },
    purple:{
        "bg-color" :"#AE71A7",
  "sec-color":"#764287",
  "third-color":"#B976B7",
  "four-color":"#AD85B7",
    }
}


let themeValue =  localStorage.getItem("themeColor") || "dark";
 root.style.setProperty("--bg-color" , themeColorObj[themeValue]["bg-color"]);
     root.style.setProperty("--sec-color" , themeColorObj[themeValue]["sec-color"]);
     root.style.setProperty("--third-color" , themeColorObj[themeValue]["third-color"]);
     root.style.setProperty("--four-color" , themeColorObj[themeValue]["four-color"]);
    



function themeColorFunction(){
    selectTheme.addEventListener("change",()=>{
     themeValue = selectTheme.value;
     root.style.setProperty("--bg-color" , themeColorObj[themeValue]["bg-color"]);
     root.style.setProperty("--sec-color" , themeColorObj[themeValue]["sec-color"]);
     root.style.setProperty("--third-color" , themeColorObj[themeValue]["third-color"]);
     root.style.setProperty("--four-color" , themeColorObj[themeValue]["four-color"]);
     localStorage.setItem("themeColor" , selectTheme.value);
    })
}
themeColorFunction()


const projectSection =[
    {
        img :"images/project1.png",
        title :"Productivity-Dashboard",
        des :"Productivity-Dashboard A complete Productivity Dashboard built using Vanilla JavaScript, focused on helping users plan, track, and manage their daily work efficiently with a clean and smooth UI",
        git:"https://github.com/Muskan-goyal-293/TechNova_SmartTodo.git",
        linkedin :"https://www.linkedin.com/in/muskan-goyal-44975735b/"
    },
     {
        img :"images/project2.png",
        title :"Instagram-clone",
        des :"A full-stack Instagram Clone built using MERN Stack , focused on User Registration & Login Authentication ,Create Posts , Create Reels , User Profile Page,Edit Profile ,View User Posts ,Responsive UI Design",
        git:"https://github.com/Muskan-goyal-293/Instagram-clone",
        linkedin :"https://www.linkedin.com/in/muskan-goyal-44975735b/"
    },
     {
        img :"images/project3.png",
        title :"MindRelaxProject",
        des :"MindRelaxProject is a simple and user-friendly mental relaxation web application built using HTML, CSS, and JavaScript. This project is designed to help users relax their mind, reduce stress, and improve mood through calming visuals, positive thoughts, and soothing music.",
        git:"https://github.com/Muskan-goyal-293/MindRelaxProject-2",
        linkedin :"https://www.linkedin.com/in/muskan-goyal-44975735b/"
    },   
]

let sum ='';
const project = document.querySelector(".project");

projectSection.forEach((val , id)=>{
    sum+=`        <div class="projectSectionParent">
          <img src="${val.img}" alt="">
            <h2>${val.title}</h2>
          <p>${val.des}
</p>
          <h3>GitHub</h3>
          <p>
            <a href="${val.git}"
              >${val.git}</a
            >
          </p>
          <h3>LinkedIn</h3>
          <p>
            <a href="${val.linkedin}"
              >${val.linkedin}</a
            >
          </p>
                </div>
`
}
)
project.innerHTML= sum