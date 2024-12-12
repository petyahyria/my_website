const projectSection = document.querySelector("#projects");
const myProjectsBtn = document.querySelector("#my-projects-btn");

myProjectsBtn.addEventListener("click", ()=>{
    projectSection.scrollIntoView();
});