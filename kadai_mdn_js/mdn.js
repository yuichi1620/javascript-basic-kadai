const showToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    
    console.log("今日は" + year + "年" + month + "月" + date + "日です");
}