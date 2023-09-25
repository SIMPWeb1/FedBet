function toast(){
    let toastEle = document.getElementById("toast");
    console.log(toastEle);
    toastEle.classList.add("active-toast");
  
    let timer1 = setTimeout(() => {
          toastEle.classList.remove("active-toast");
          clearTimeout(timer1);
      }, 1500);
    //1s = 1000 milliseconds
  }
