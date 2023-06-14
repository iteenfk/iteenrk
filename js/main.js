    "use strict"
    
    // 収入と支出を管理するための変数
    let incList = [];
    let expList = [];

    // 収入の追加
    function Ainc() {
      const inc = parseFloat(document.getElementById("inc").value);
      if (!inc) {
        alert("収入が入力されていません。");
        return;
      }
      incList.push(inc);
      Update();
      UpincList();
      document.getElementById("inc").value = ""
    }

    // 支出の追加
    function Aexp() {
      const exp = parseFloat(document.getElementById("exp").value);
      if (!exp) {
        alert("支出が入力されていません。");
        return;
      }
      expList.push(exp);
      Update();
      UpexpList();
      document.getElementById("exp").value = ""
    }

    // 残高の計算と表示更新
    function Update(){

      let totalinc = 0;
      incList.forEach(x =>{
      totalinc += x;
      });
 
      let totalexp = 0;
      expList.forEach(x =>{
      totalexp += x;
      });
 
       const balance = totalinc - totalexp;
       document.getElementById("zan").textContent = balance.toLocaleString();
    }

    // 収入リストの表示更新
    function UpincList() {
      const list = document.getElementById("inc-list");
      list.innerHTML = "";
      for (let i = 0; i < incList.length; i++) {
        const item = document.createElement("li");
        item.textContent = incList[i].toLocaleString();
        list.appendChild(item);
      }
    }

    
    // 支出リストの表示更新
    function UpexpList() {
        const list = document.getElementById("exp-list");
        list.innerHTML = "";
        for (let i = 0; i < expList.length; i++) {
            const item = document.createElement("li");
            item.textContent = expList[i].toLocaleString();
            list.appendChild(item);
        }
    }

    function P(){
      window.print();
    }

    function C(){
      const ulinc = document.getElementById("inc-list");
      while (ulinc.firstChild != null) {
          ulinc.removeChild(ulinc.firstChild);
      }

      const ulexp = document.getElementById("exp-list");
      while (ulexp.firstChild != null){
          ulexp.removeChild(ulexp.firstChild);
      }

      document.getElementById("zan").textContent = 0;

      incList.splice(0);
      expList.splice(0);

    }
    
