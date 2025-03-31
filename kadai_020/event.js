//textのHTML要素を取得し定数に代入
const text =document.getElementById('text');

//btnのHTML要素を取得し定数に代入
const btn =document.getElementById('btn');

//HTML要素がクリックされると中身を実行
btn.addEventListener('click',()=>{
 
  //　id="セレクタ名"の文章を変える場合はtextContentの使用
 text.textContent='ボタンをクリックしました'

});