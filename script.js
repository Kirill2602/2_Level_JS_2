///////////Задание№ 1 + 2//////////////////
let r = /\B'|'\B/g;
let s = "'qwerty' qwe'r 'nmhkjhjk'"
s = s.replace(r, "\"");
console.log(s);

