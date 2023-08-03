
const fullstack=document.getElementsByClassName('FULLSTACK')[0]
const projects=document.getElementsByClassName('projects')
const work=document.getElementsByClassName('work')[0];

  
/*  DECIDED TO USE BOOTSTRAP CAROUSEL


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
})*/
// Full View
const CAROUSEL=()=>{
  work.children[0].style.display='none'
  work.children[1].style.display='none'
  work.children[2].style.display='block' 
}
fullstack.addEventListener('click',CAROUSEL)
fullstack.addEventListener('tap',CAROUSEL)

for(let i=0;i<projects.length;i++){
  projects[i].addEventListener('click', CAROUSEL);
  projects[i].addEventListener('tap', CAROUSEL);
}

window.addEventListener('keydown',function(event){
  if(event.key==='Escape'){
for(let i=0;i<work.children.length;i++){
      work.children[i].style.display='';
    }
  }
})

//Change innerHtml of phone number and email when you click
  const phoneNum=document.getElementById('phoneNum');
  const email=document.getElementById('email')

  phoneNum.addEventListener('click',function(){
    phoneNum.innerHTML='718-724-9000';
  })

  email.addEventListener('click',function(){
    email.innerHTML='morgandamion5680@gmail.com'
  })


  

