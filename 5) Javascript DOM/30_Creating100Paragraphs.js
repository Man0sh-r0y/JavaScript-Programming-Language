function alertTextContent(event) {
    if(event.target.nodeName === 'P')
    {
        alert(event.target.textContent);
    }
}
// Here event.currentTarget.nodeName = 'DIV' (only talking about elemnt node)
// But event.target.nodeName = 'P' (only talking about elemnt node)

// currentTarget is the element to which the event is attached.
// It will never change.
// But Event.target is the element that triggered the event.

// The Paragraph elements are the part of the ParentDiv element. 
// So whenever clicking over the Paragraph element then event.target.nodeName = 'P'


let parentDiv = document.createElement("div");
parentDiv.addEventListener("click", alertTextContent);

for (let i = 1; i <= 100; i++) {
  let paragraph = document.createElement("p");

  let content = document.createTextNode(`This is ${i} paragraph`);

  paragraph.appendChild(content);
  parentDiv.appendChild(paragraph);
}

document.body.appendChild(parentDiv);
