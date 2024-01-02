//in order to  manipulate a particular 
//element  we need to first  select the element
//DOM Manipulation
//five major ways of selecting the elements

// 1) GetElementById
// const title =document.getElementById('main-heading');
// console.log(title);
//we will place document.getElementById('main-heading'); under a variable so we can manipulate it

// 2) GetElementByClassName()
// const listItem=document.getElementsByClassName('list-items');
//  console.log('list-items');

// 3) getElementByTagName()
// it returns all the elements under that tag in the orderit is present in the html file
// const listItem=document.getElementsByTag('li');
//  console.log('list-items');

// 4)querySelector()
// if you have  to select by using class or id but 
//multiple tags have the same class or id then 
//it will only select the first class id or tag
// const container=document.querySelector('div');
// console.log(container);
// it is only going to select the first div

// 5)querySelectorAll()
// const container=document.querySelectorAll('div');
// console.log(container);
//returns all tags that matches with div

//now we are going to do something real, 
//we will change  the styling of html elements
// styling elements
// lets chnage the heading first, we can use the css elements in javascipt

const title=document.querySelector('#main-heading')

// so to access the css property n js
title.style.color='red'; //inline styling,works only on single element
// the color of favourite movie franchise changed to red
const listItems=document.querySelectorAll('.list-items');

// while doing this css  properties are written 
// using camel case and not the standard snake case
//snake case= font-size used in css
//camel case= fontSize used in js

//if we want it to actually work on list items , we need
//to  list through list items

for(i=0;i<listItems.length;i++){
    listItems[i].style.fontSize='2rem';
    }
