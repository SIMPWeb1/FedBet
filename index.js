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
    console.log("ádasdas");
     start()
          // clearTimeout(timeout);
  })
  var timeout = null; // Timeout
  
  var listTime = [
      {
          id:"time-1",
          h:"00",
          m:"40",
          s:"35",
      },
    ]
  
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


  function scrollBet() {
    const element = document.getElementById("section-bet");
element.scrollIntoView({behavior: 'smooth'});
  }
  