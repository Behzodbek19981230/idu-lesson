let root=document.getElementById("root");
const numbers=new Array(10).fill(0).map((_,i)=>i);
root.innerHTML=numbers.map(n=> `<button>${n}</button>`).join("");
