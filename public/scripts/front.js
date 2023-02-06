let data;

const response = async() =>{
  console.log('Response Function Running');
  console.log(data);
  const res = await fetch('/task/update', 
  {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

const responseAdd = async() =>{
  console.log('Response add Function Running');
  const inp = document.querySelector('.ni');
  let outp = {};
  outp[`${inp.value}`] = false;
  console.log(outp);
  const res = await fetch('/task/set',{
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(outp)
  });
}

const removeScript = (node) =>{
  console.log('removeScript running');
  Object.keys(data).forEach(key=>{
    if(String(key) == String(node.srcElement.innerText)){
      switch(data[key]){
        case false:
          console.log('false');
          data[key] = true;
          console.log(data);
          node.srcElement.classList.remove('removed');
          break;
        case true:
          console.log('true')
          data[key] = false;
          console.log(data);
          node.srcElement.classList.add('removed');
          break;
      }
    }
  })
}

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
      para.appendChild(node);
      para.classList.add('task');
      toDoPanel.appendChild(para);
      const taskArr = document.querySelectorAll('.task');
      taskArr.forEach(task =>{
        task.addEventListener('click', removeScript);
      })
    })
  }
}

const update = document.querySelector('.update');
update.addEventListener('click', response);

const add = document.querySelector('.add');
add.addEventListener('click', responseAdd);

showTask();


