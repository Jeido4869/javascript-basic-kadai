//HTML要素のID属性のTEXTを取得し定数に代入
const text = document.getElementById('text');
//HTML要素のID属性のbtnを取得し定数に代入
const  btn = document.getElementById('btn');
//ボタンをクリックしたら中の処理を実行
btn.addEventListener('click',()=>{
 //2000ミリ秒後（2秒後）中の内容を実行
  setTimeout(() =>{
    text.textContent='ボタンをクリックしました'
  },2000);
});