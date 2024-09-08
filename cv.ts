document.addEventListener("DOMContentLoaded",()=>
  {
const more = document.querySelectorAll<HTMLElement>(".more");
const toggleButton = document.querySelectorAll<HTMLButtonElement>(".toggleButton");
toggleButton.forEach((button,index)=>{
  button.addEventListener("click",()=>{
    const morePoints=more[index];
    if(morePoints.style.display==="none"||morePoints.style.display==="")
    {
      morePoints.style.display="block";
      button.textContent="Show Less"
    }
    else{
      morePoints.style.display="none";
      button.textContent="Show More";
    }

    })
  })
})