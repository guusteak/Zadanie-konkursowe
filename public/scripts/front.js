let data;
let flag = false;
const response = async () => {
  console.log("Response Function Running");
  console.log(data);
  const res = await fetch("/task/update", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const responseAdd = async () => {
  console.log("Response add Function Running");
  const inp = document.querySelector(".ni");
  let outp = {};
  outp[`${inp.value}`] = false;
  console.log(outp);
  const res = await fetch("/task/set", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(outp),
  });
  await showTask();

};

const removeScript = (node) => {
  console.log("removeScript running");
  Object.keys(data).forEach((key) => {
    if (String(key) == String(node.srcElement.innerText)) {
      switch (data[key]) {
        case false:
          console.log("false <-BEFORE");
          data[key] = true;
          console.log(data);
          node.srcElement.classList.remove("removed");
          break;
        case true:
          console.log("true <-BEFORE");
          data[key] = false;
          flag = false;
          console.log(data);
          node.srcElement.classList.add("removed");
          break;
      }
    }
  });
};
const removeFin = async () => {
  const taskArr = document.querySelectorAll(".task");
  let outputObject = {}
  Object.keys(data).forEach((key) => {
    taskArr.forEach(async (val) => {
      if (data[key] === true) {
        if (String(key) === String(val.innerText)) {
          outputObject[`${key}`] = true;
          
        }
      } else{
        if(data[key] === false){
          console.log(`Powinno byc nazwa i wartosc${key}, ${data[key]}`)
          if(String(key) === String(val.innerText)){
          val.classList.add('none');
          delete data[key];
        }}
      }
    }
    );
  });
          console.log("Response Function Running");
          console.log(data);
          const res = await fetch("/task/update", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
};

const showTask = async () => {
  await fetch("/data/json")
    .then((response) => response.json())
    .then((rr) => (data = rr));
  console.log("Ok??");

  console.log("data");
  console.log("probably first");
  if (data === null) {
    data = {};
  } else {
    const toDoPanel = document.querySelector("#ToDoPanel");
    toDoPanel.innerHTML = "";
    Object.keys(data).forEach((key) => {
      const para = document.createElement("div");
      const node = document.createTextNode(key);
      para.appendChild(node);
      para.classList.add("task");
      toDoPanel.appendChild(para);
      const taskArr = document.querySelectorAll(".task");
      taskArr.forEach((task) => {
        task.addEventListener("click", removeScript);
      });
    });
  }
};

const update = document.querySelector(".update");
update.addEventListener("click", response);

const add = document.querySelector(".add");
add.addEventListener("click", responseAdd);

const removeFinished = document.querySelector(".remove");
removeFinished.addEventListener("click", removeFin);

showTask();
