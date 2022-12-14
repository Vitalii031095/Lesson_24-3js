"use sctrict"
alert("Привіт менторе\)\) дякую за перевірку!!!")
// let arr = ['Ваня', 'Иштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);

/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
// let users = ["Ваня", "Иштван",];
// users[1] = "Петя";
// console.log(users);
// let deletes = users.shift();
// console.log(deletes);
// users.splice(0, 0, "Маша","Паша");
// console.log(users);

// let arr = ['Ваня', 'Иштван', 'Оля',];
// let delElement = arr.splice(1,1);
// console.log(delElement)

/* <div data-say-hi="yes">Привет!</div> */
// document.querySelectorAll('[data-item]');
// console.log("g")
// let newDate =document.querySelector('[data-say-hi]');
// console.log(newDate);
// let ionchi =document.querySelector('ul');
// console.log(ionchi);
// let end = ionchi.lastElementChild;;
// console.log(end)
 
// let  likes =document.querySelectorAll('.like');
// console.log(likes)
// const windWidthWithScroll = window.innerWidth;
// console.log(windWidthWithScroll);
// const element = document.documentElement;
// const windWidthWithouthScroll = element.clientWidth;
// console.log(windWidthWithouthScroll);
// const widthScroll = windWidthWithScroll - windWidthWithouthScroll;
// console.log(`Ширина полоси прокрутки ${widthScroll}px`)

// function scrollDown(){
//    window.scrollTo(0,100);
//    const windowScrollTop = window.pageYOffset;
//    console.log(windowScrollTop)
// }
// console.log();
// scrollDown();
// function setScrollBy() {
//    window.scrollBy(0, 100);
//    const windowScrollTop = window.pageYOffset;
//    console.log(windowScrollTop);
//    };
// window.scroll(0, 100);
// setTimeout(функция или код, задержка, параметр, ...параметр);
// function scrollWindow() {
//    window.scrollBy(0, 100);
//  }
//  setTimeout(scrollWindow, 1000);
   //Відео 4 - задача 3
 const list = document.querySelector('.list');
 const listItem = document.querySelectorAll('.list__item');
 const column = document.querySelector('.column');


//координати елемента з класом ('.list__item')
 window.addEventListener("click", coordinate);
 function coordinate(e){
   const targetItem = e.target;
    if(targetItem.closest('.list__item')){
      console.log( targetItem.getBoundingClientRect());
    }
}


 
//координати елемента з класом ('.list_')
 const getCoordinatListItem = list.getBoundingClientRect();
 console.log(getCoordinatListItem);


 //координати елемента з класом ('.list_')
 const coordinatColumn = column.getBoundingClientRect();
 console.log(coordinatColumn);




 