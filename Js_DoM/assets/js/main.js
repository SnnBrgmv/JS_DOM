var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');
var image3 = document.querySelector('.img3');
var image4 = document.querySelector('.img4');
var image5 = document.querySelector('.img5');

image2.addEventListener('click', function() {
    image1.src = 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80';
});

image3.addEventListener('click', function() {
    image1.src = 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80';
});

image4.addEventListener('click', function() {
    image1.src = 'https://www.tngholidays.com/uploads/0000/1/2021/02/16/img-park-2.jpg';
});

image5.addEventListener('click', function() {
    image1.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
});



let numbers = [12,25,57,89];
let newArr=[];
for (let i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i]*10)
}
console.log(newArr)