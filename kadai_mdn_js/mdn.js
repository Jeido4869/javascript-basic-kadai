//今日の年月日時のすべてのデータを取得
const today =new Date();

//今日の年代を取得
const year = today.getFullYear();

/*今日の月を取得
　※月は０から始まるため＋１をする*/
const month = today.getMonth() + 1;

//今日の日付を取得
const day = today.getDate();

console.log(year+"年"+month+"月"+day+"日");