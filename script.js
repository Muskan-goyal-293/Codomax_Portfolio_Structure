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
