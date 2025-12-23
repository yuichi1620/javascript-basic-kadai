// btnというidを持つHTMLを取得し、定数に代入する
const btn = document.getElementById("btn");
// textというidを持つHTMLを取得し、定数に代入する
const text = document.getElementById("text");

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener("click", () =>{
    // textの内容を書き換える
    text.textContent = "ボタンがクリックされました"
});