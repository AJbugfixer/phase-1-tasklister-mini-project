document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', e => {
    e.preventDefault()
    buildToDo(e.target['new-task-description'].value)
    form.reset()
  });
});

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = ` ${todo} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
  //document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
