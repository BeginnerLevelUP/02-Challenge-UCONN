
const fullstack=document.getElementsByClassName('FULLSTACK')[0]
const projects=document.getElementsByClassName('projects')
const work=document.getElementsByClassName('work')[0];
const workAside=work.children[0]
// Function to get a full view of the project
const fullView=()=>{
    for(let i=0;i<projects.length;i++){
        projects[i].style.display='none'
    }
    workAside.style.display='none'
    fullstack.style.width=`1000px`
    fullstack.style.height=`900px`
    fullstack.style.margin=`0 auto`
}
fullstack.addEventListener('click',fullView)

// Function to reset the styles when the screen width becomes less than or equal to 991 pixels
function resetMediaQuery(width,e) {

  if (width <= 991) {
    for (let i = 0; i < projects.length; i++) {
      projects[i].style.display = 'block'; 
    }
    workAside.style.display = 'block';
    fullstack.style.width = ''; 
    fullstack.style.height = ''; 
    fullstack.style.margin = ''; 
  }

}
resetMediaQuery(window.innerWidth);
window.addEventListener('resize', function () {
  resetMediaQuery(window.innerWidth);
});

window.addEventListener('keydown',function(e){
    if(e.key === "Escape"){
        for (let i = 0; i < projects.length; i++) {
            projects[i].style.display = 'block'; 
          }
          workAside.style.display = 'block';
          fullstack.style.width = ''; 
          fullstack.style.height = ''; 
          fullstack.style.margin = ''; 
    }
})