let data;

const showTask = async() =>{
  
await fetch('/data/json')
.then((response) => response.json())
.then((rr) => data = rr);
console.log('Ok??')

console.log('data');
  console.log('probably first')
  if(data === null){
    data = {};
  }else{
    const toDoPanel = document.querySelector('#ToDoPanel');
    toDoPanel.innerHTML = '';
    Object.keys(data).forEach(key => {
      const para = document.createElement("div");
      const node = document.createTextNode(key);
      const checkbox = document.createElement("INPUT");
      checkbox.setAttribute("type", "checkbox");
      para.appendChild(node);
      para.appendChild(checkbox);
      para.classList.add('task');
      toDoPanel.appendChild(para);
    })
  }
}

showTask();
