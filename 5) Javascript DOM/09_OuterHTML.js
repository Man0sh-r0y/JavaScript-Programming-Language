// The outerHTML property sets or returns the HTML element, including attributes, start tag, and end tag.

let list = document.querySelector('#unOrderList');
console.log(list.outerHTML);
console.log(list.innerHTML);
// OUTPUT:
// console.log(list.outerHTML):
/*      <ul id="unOrderList">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
        </ul> 
*/

// console.log(list.innerHTML) :
/*      <li><a href="#"> Item 1 </a> </li>
        <li><a href="#"> Item 2 </a> </li>
        <li><a href="#"> Item 3 </a> </li> 
*/