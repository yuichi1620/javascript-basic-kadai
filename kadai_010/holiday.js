const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文
// 条件式にlengthプロパティを使用した場合
for (let i = 0; i < holidays.length; i++) {
    console.log(holidays[i]);
}
// 条件式に固定値を使用した場合
for (let i = 0; i < 16; i++) {
    console.log(holidays[i]);
}

// while文
let i = 0;
// 条件式にlengthプロパティを使用した場合
while (i < holidays.length) {
    console.log(holidays[i]);
    i++;
}
// 条件式に固定値を使用した場合
while (i < 16) {
    console.log(holidays[i]);
    i++;
}