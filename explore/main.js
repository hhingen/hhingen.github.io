 document.addEventListener("click",function (e){
   if(e.target.classList.contains("img-fluid")){
   	  const src = e.target.getAttribute("srci");
   	  document.querySelector(".modal-img").src = src;
   	  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
   	  myModal.show();
   }
 })
