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
//Creating  Elements 
// const ul=document.querySelector('ul');//we selected the ul element in docx
// const li=document.createElement('li');//we created the li element
//adding elements
ul.append(li); // we added li to the ul list using append
//Modyfying the text

// const firstListItem=document.querySelector('.list-items');

// console.log(firstListItem.innerText);//output:Neo the matrix
// console.log(firstListItem.textContent);
//output
//Neo
//The Matrix
// console.log(firstListItem.innerHTML);
//output
//<span>Neo<span>
//The Matrix

//there is danger in using inner html
//because it gives users the access to make changes
//to the code which is not safe

//so we will be using the first one
li.innerText='X-men';

//modifying attributes and classes
//so after we have added li to ul and gave a content to it
//now we wish to give li an id 
//
// li.setAttribute('id','main-heading');

//this will remove the id given to the content
// li.removeAttribute('id')

// const title=document.querySelector('main-heading');
// console.log(title.getAttribute('id'));

//classlist method will help in adding class tot he attribute
 li.classList.add('list-items')
li.classList.remove('list-items');

// to check if a specific class is present in that attribute or not
console.log(li.classList.contains('list-items'));

//method to remove ab element
li.remove();

//how to travese a dom tree
//Parent node traversal
// let ul=document.querySelector('ul');
//now in order to find out the parent of ul we have two options
// console.log(ul.parentNode);
// console.log(ul.parentElement);
//and the ans is div is the parent of ul
// console.log(ul.parentElement.parentElement);//to find the grandparent


// const html=document.documentElement;
// console.log(html.parentNode); //#document
// console.log(html.parentElement);//null
//because the task of parent element is to only give element
//and not node but parentNode also gives document node


//child node traversal
let ul=document.querySelector('ul');
console.log(ul.childNodes);
//nodes even include indentation but elements not

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor='blue';

//now accessing by element and  not node
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//every node ia an element but not all element is a node

//traversing the siblings 
//we know that h1 and ul are siblings
// const div=document.querySelector('div');
// console.log(div.children);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);


//now traversing element over 

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);//if there is no next element then we will get null

