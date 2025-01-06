// The Document Object Model (DOM) is an Application Programming interface(API). The DOM tree is the structure of our Html 
// document , as represented by the DOM API. As stated, this API then gives us many methods and properties that we can use to manipulate 
// the tree, and therefore , by extention the document. 

// Here is a types of nodes in js. 
// Element Nodes:- An Html tag , the tree building blocks. 

// Text Node:- In the dom tree, text content , including new lines , spaces , and tabs , is treated as text node. 

// Attribute Node:- An attribute of an element. 

// Comment Node:- Represent comment within the html document. 

// Processing instruction node:- A Processing instruction node, such as <? xml-stylesheet - ?>. 

// Document node :- A document node. 

// Document type node:- A document type node such as <! DOCTYPE html>. 

// DOM Properties and Method:-  

/* Dom Properties 
- document 
- getElementById(id)
- getElementByClassName(className) 
- getElementByTagName(tagname) 
- querySelector(selector) 
- querySelectorAll(selector) 
- innerHTML 
- textContent 
- style
 */

/* Dom Methods 
- createElement(tagName) 
- appendChild(node) 
- removeChild(node)  
- addEventListener(event,function) 
- removeEventListener(event,function) 
- setAttribute(name, value) 
- getAttrbute(name) 
- parentNode/ parentElement 
- childNodes/ children  
- firstChild / firstElementChild 
- lastChild / lastElementChild  
- nextElement/ nextElementSibling 
- nextSibling/ nextElementSibling  
- previousSibling/ previousElementSibling 
- closest(selector) 
- forEach(Array,from)
*/   

// DOM Navigation 

/* 
- Document represent the entire document. 
- console.log(document); 

- Document.documentElement returns the element that is the root element of the docuement (for example:- the <html> element for 
html document. 

- parentNode/parentElement:- Navigate to the parent element and node.
- Navigate to the parent node and element.

- Document and DocumentFragement nodes can never have a parent , so parentNode will always return null, It also return null
  if the node has just been created and is not yet attached to the tree. 

- childNodes/children:-  
- Navigate to child node and element. 

- childNodes is a property that returns a Nodelist containing all child nodes of a given element , including text nodes and 
  comment nodes. 

- firstChild / firstElementChild  
- Navigate to the first child node or element.

- lastChild / lastElementChild   
- Navigate to the last child node or element. 

- nextSibling/ nextElementSibling  
- Navigate to the next sibling node or element. 

- previousSibling/ previousElementSibling 
- Navigate to the previous sibling node or element. 

- closest(selector):
- find the closest ancestor of the current element that matches a given selector.
*/ 

//  DOM Filtering:-  

/* 
- chidlNodes/children 
  Get a nodeList or HTMLCollection and filter based on your criteria. 

- Filtering Sibling
- nextSibling/ nextElementSibling  
- previousSibling/ previousElementSibling  

- closest(selector):
- find the closest ancestor of the current element that matches a given selector. 
- The closest selector method is udes to find the closest ancestor of an element that matches a specified selector. This method  
  traverses up the Dom tree. Starting from the current element , and returns the first ancestor that matches the provided selector. 
  If no matching ancestor is found, it returns null. 

*/ 

// DOM Searching 

/* 
- getElementById(id):- find an element by its ID.  
- getElementByIdClassName(className):- find elements with the specific class name. 
- getElementByTagName(tagName):- find element with a specific tagName. 
- querySelector(selector):- find the first element that matches the specifid css selectors. 
- querySelectorAll(selector):- Find all element that match the specified css selector.

*/

// DOM CRUD(Create,Read,update,delete)

/* 
- createElement(tagName):- Create a new Html element. 
- appendChild(node):- Append a node as the last child of a parent node. 
- removeChild(node) :- Remove a child node from its parent. 
- addEventListener(event,function) :- Create an event listener to handle events. 
- removeEvenListener(event,fucntion) :- Remove an even listener. 
- setAttribute(name,value):- set the value of an attribute on an element. 
- getAttribute(name):- Get the value of a specific attribute on an element. 
- innerHTML :- Read or update the HTML content of an element. 
- textContent :- Read or update the text content of an element.
*/ 

// DOM Filtering:- 
/*Iteration: 
- forEach(Array.from):- Iterate through nodeList or convert to an array for more flexible manipulations.  
*/
