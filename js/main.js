"use script"

let seconds = 0;

function convertTime(){
   let time = document.getElementById("time").value;
   let unit = document.getElementById("unit").value;

   if (unit === "秒") {
    seconds = time;
   } else if (unit === "分") {
    seconds = time * 60;
   } else if (unit === "時間"){
    seconds = time * 60 * 60;
   } else if (unit === "日") {
    seconds = time * 60 * 60 * 24;
   } else if (unit ==="週") {
    seconds = time * 60 * 60 * 24 * 7;
   } else if (unit === "月") {
    seconds = time * 60 * 60 * 24 * 30;
   } else if (unit === "年") {
    seconds = time * 60 * 60 * 24 * 365;
   }


   const minutes = seconds / 60;
   const hours = minutes /60;
   const days = hours / 24;
   const weeks = days / 7;
   const months = days / 30;
   const years = days / 365;


   const secondsHtml = Number(seconds).toFixed(2);
   const minutesHtml = Number(minutes).toFixed(2);
   const hoursHtml = Number(hours).toFixed(2);
   const daysHtml = Number(days).toFixed(2);
   const weeksHtml = Number(weeks).toFixed(2);
   const monthsHtml = Number(months).toFixed(2);
   const yearsHtml = Number(years).toFixed(2);

   const change = document.getElementById("change-box");
   change.innerHTML =`
   <p> 変換結果を表示</p>
   <p>${secondsHtml} 秒</p>
   <p>${minutesHtml} 分</p>
   <p>${hoursHtml} 時間</p>
   <p>${daysHtml} 日</p>
   <p>${weeksHtml} 週</p>
   <p>${monthsHtml} 月</p>
   <p>${yearsHtml} 年</p>
   `;
   
}

