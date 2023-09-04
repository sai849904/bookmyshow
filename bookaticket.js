
var container=document.querySelector('.container');
var seat=document.querySelectorAll('.row.seat:not(occupied');
var count=document.getElementById('count');
var total=document.getElementById('total');
var movieselect=document.getElementById('movieselect')

var ticketprice=movieselect.value;

// console.log(ticketprice);
function updateselectedcount() {
    let selectedseats = document.querySelectorAll('.row .seat.selected');
// console.log(selectedseats)
    let selectedseatsCount = selectedseats.length;
  
    count.innerHTML = selectedseatsCount;
    total.innerHTML = selectedseatsCount * ticketprice;
    
  }
  movieselect.addEventListener("click",(e)=>{
     
    ticketprice=e.target.value;
    updateselectedcount();

  })

container.addEventListener("click",(e)=>
{
    // console.log(e.target)

if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied'))

{
//   console.log(e.target);
    
     e.target.classList.toggle('selected');
}
updateselectedcount();
})

