const textInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add");
const taskContainer = document.getElementById("container");
const clear = document.getElementById('clear-all');
const dark = document.getElementById("mode-changer");
const root = document.documentElement;
const elementCreater = (ele, data) => {

    const item = document.createElement(ele);
    if (!data) return item;
    item.innerText = data;
    return item;
}


const appendTodoItem = () => {    

    const text = textInput.value;


    if (text === "") {
        alert("enter something");
        return;
    }
    textInput.value ="";

    const li = elementCreater('li')
    const data = elementCreater('div', text);
    const btns = elementCreater('div')
    const edit = elementCreater('button', "Edit");
    const del = elementCreater('button', "Delete");
    del.addEventListener('click', () => {
        li.remove();
    })
    li.appendChild(data);
    li.appendChild(btns);
    btns.appendChild(edit);
    btns.appendChild(del);
    data.classList.add("data-container");
    li.classList.add("todo-item");
    btns.classList.add("btns");
    edit.classList.add("todo-btns");
    del.classList.add("todo-btns");
    taskContainer.appendChild(li);

}

addBtn.addEventListener('click', appendTodoItem);
textInput.addEventListener('keypress', (event)=>{
    if(event.key==='Enter')
    appendTodoItem();

});

clear.addEventListener('click', ()=>{
   const childs = taskContainer.children;
   while(childs[0]) childs[0].remove();
    
    
})
dark.addEventListener('click',()=>{
    const root = document.documentElement;
    if(getComputedStyle(root).getPropertyValue('--blue') ==='#01ADAA')
    {
        root.style.setProperty('--blue','#8A2BE2');
        
    }
    else{
        root.style.setProperty('--blue','#01ADAA');

    }
    document.body.classList.toggle('dark');
    
    dark.classList.toggle('dark-logo');
    document.getElementById('logo').classList.toggle('dark-logo');
})