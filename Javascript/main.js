
var myArray = [
    'cong thanh',
    'kashiwa',
    'tria',
    'alo',
];
console.log(myArray[1]);

var myObject = {
    name : 'công thành',
    age : '22',
    adress : 'kashiwa'
  
}
console.log('myObject', myObject);

var thanh1 = 'js js js js js js';
console.log(thanh1.replace(/js/g,'Javascript'));

var thanh2 = 'tôi tên là Nguyễn Công Thành';
console.log(thanh2.indexOf('Công Thành'));


var thanh3 = 'tôi tên là Nguyễn Công Thành';
console.log(thanh3.slice(18));

var thanh4 = 'tôi tên là Nguyễn Công Thành';
console.log(thanh4.toUpperCase());

var thanh5 = 'tôi tên là Nguyễn Công Thành';
console.log(thanh5.toLowerCase());

var thanh6 = '     tôi tên là Nguyễn Công Thành     ';
console.log(thanh6.trim().length);


// LÀM VIÊC VỚI ARRAY
var thanh7 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh7.toString);

var thanh8 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh8.join(', '));

var thanh9 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh9.pop());
console.log(thanh9);
// xóa phần tử cuối mảng và trả về chính phần tử đã xóa

var thanh10 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh10.push('cong thanh','tria'));
console.log(thanh10);
// thêm các phần tử ở cuối mảng và trả về giá trị mới

var thanh11 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh11.shift());
console.log(thanh11.shift());
console.log(thanh11);
// xóa đi giá trị ở đầu mảng

var thanh12 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh12.unshift('My name is:', 'where are you?'));
console.log(thanh12);
// thêm vào giá trị ở đầu mảng

var thanh13 = [
    'hello',
    'how are you',
    'and you'
];
thanh13.splice(1, 2);
// splice(vị trí đặt con trỏ để xóa, số lượng phần tử muốn xóa từ vị trí con trỏ, 'chèn element mới')
console.log(thanh13);

var thanh14 = [
    'nguyen',
    'cong',
    'thanh'
];
console.log(thanh14.concat(thanh12));
// hợp nhất các element của các mảng lại với nhau

var thanh15 = [
    'hello',
    'how are you',
    'and you',
    'alo',
    'konnichiha'
];
console.log(thanh15.slice(1,3));
// cắt 1 hoặc nhiều element của mảng

function thanh16(){
    // alert('Xin chào các bạn');
}
thanh16();

function thanh17(message1,message2){
    console.log(message1);
    console.log(message2);
}
thanh17('tôi tên là thành','tôi ở kashiwa');

function thanh18(){
    console.log(arguments)
}
thanh18('thanh1','thanh2');

function thanh19(){
    for (var vonglap of arguments){
    console.log(vonglap);
    }
}
thanh19('lặp lần 1','lặp lần 2','lặp lần 3');

function thanh20(){
    var myString = '';
    for (var vonglapnoi of arguments){
        myString += `${vonglapnoi} - `
    }
    console.log(myString);
}
thanh20('lặp lần 1','lặp lần 2','lặp lần 3','lặp lần 4','lặp lần 5');

function phepcong(a,b){
    return a + b;
}
var result = phepcong(2,8);
console.log(result);
// return sẽ trả về giá trị của phép toán hoặc biến bên phải nó
// những dòng code sau return sẽ không được thực thi
// return có thể trả về bất cứ kiểu dữ liệu gì ( toString, array .....)