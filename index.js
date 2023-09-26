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


  document.addEventListener("DOMContentLoaded",()=> {
     start()
     startPeople()
          // clearTimeout(timeout);
  })
  var timeout = null; // Timeout
  var timeoutPeople = null; // Timeout
  
  var listTime = [
      {
          id:"time-1",
          h:"00",
          m:"40",
          s:"35",
      },
    ]

    var peopleIncreaseDefault = 2133;
    var peopleDecreaseDefault = 3105;
    var peopleUnchangedDefault = 1002;
    var increaseDefault = 57;
    var decreaseDefault = 93;
    var unchangedDefault = 30;
  
  function start()
  {
      listTime.forEach(e => {
       
          /*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
          // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
          //  - giảm số phút xuống 1 đơn vị
          //  - thiết lập số giây lại 59
          if (e.s === -1){
              e.m -= 1;
              e.s = 59;
          }
       
          // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
          //  - giảm số giờ xuống 1 đơn vị
          //  - thiết lập số phút lại 59
          if (e.m === -1){
              e.h -= 1;
              e.m = 59;
          }
       
          // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
          //  - Dừng chương trình
          if (e.h == -1){
              
              document.getElementById(e.id).innerText='Time out';
              return false;
          }
       
          /*BƯỚC 1: HIỂN THỊ ĐỒNG HỒ*/
  
          let hour = e.h.toString().length===1?"0"+e.h.toString():e.h.toString()
          let min = e.m.toString().length===1?"0"+e.m.toString():e.m.toString()
          let sec = e.s.toString().length===1?"0"+e.s.toString():e.s.toString()
  
          document.getElementById(e.id).innerText = hour+":"+min+":"+sec;
       
          /*BƯỚC 1: GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
          
      });
      if(listTime[0].h==-1){
          clearTimeout(timeout);
      }
      timeout = setTimeout(function(){
          listTime.forEach(e => {
              e.s--
          })
          start();
      }, 1000);
      /*BƯỚC 1: LẤY GIÁ TRỊ BAN ĐẦU*/
  }

  function startPeople() {
    let peopleIncrease = 1 + Math.floor(Math.random() * 10);
    let peopleDecrease = 1 + Math.floor(Math.random() * 10);
    let peopleUnchanged = 1 + Math.floor(Math.random() * 10);
    let increase = 1 + Math.floor(Math.random() * 10);
    let decrease = 1 + Math.floor(Math.random() * 10);
    let unchanged = 1 + Math.floor(Math.random() * 10);
    
    document.getElementById("people").innerText = (peopleDecreaseDefault+peopleIncreaseDefault+peopleUnchangedDefault).toString()+" People";
    document.getElementById("increase").innerText = `Increase: ${increaseDefault} $ETH / ${peopleIncreaseDefault} People`;
    document.getElementById("decrease").innerText = `Decrease: ${decreaseDefault} $ETH / ${peopleDecreaseDefault} People`;
    document.getElementById("unchanged").innerText = `Unchanged: ${unchangedDefault} $ETH / ${peopleUnchangedDefault} People`;
    timeout = setTimeout(function(){
        increaseDefault+=increase
        decreaseDefault+=decrease
unchangedDefault+=unchanged
        peopleDecreaseDefault+=peopleDecrease
        peopleIncreaseDefault+=peopleIncrease
        peopleUnchangedDefault+=peopleUnchanged
        startPeople();
    }, 2500);
  }


  function scrollBet() {
    const element = document.getElementById("section-bet");
element.scrollIntoView({behavior: 'smooth'});
  }
  
  var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("modal-close")[0];


    console.log(modal);
    console.log(span);

  function openModal() {
let walletID = document.getElementById("wallet")
    if (typeof window.ethereum !== "undefined") {
        ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            const account = accounts[0];
            let address = account.slice(0,6)+"..."+account.slice(account.length-5,account.length-1)
            localStorage.setItem("isFirstConnect",true)
            walletID.innerText = `Wallet AD: ${address}`;
          })
          .catch((error) => {
            console.log(error, error.code);
          });
      } else {
          window.open("https://metamask.io/download/", "_blank");
      }
      if(localStorage.getItem("isFirstConnect")){
        var modal = document.getElementById('myModal');
        // Get the <span> element that closes the modal
        modal.style.display = "block";
      }
}

function submit() {
    closeModal()
    toast()
}

// Close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    // Get the <span> element that closes the modal
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}
