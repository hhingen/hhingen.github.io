 document.addEventListener("click",function (e){
	console.log(e.target.classList);
   if(e.target.classList.contains("img-fluid2")){
   	  const src = e.target.getAttribute("srci");
   	  document.querySelector(".modal-img").src = src;
   	  const myModal = new bootstrap.Modal(document.getElementById('portfolioModal1'));
   	  myModal.show();
   }else{
	document.querySelector(".modal-img").src = '';
   }
 })
