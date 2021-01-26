const form = document.querySelector('form');
const input = document.getElementById('item');
const btn_del_submit = document.getElementById('submit');
const btn_del_clear = document.getElementById('clear');
const tbl = document.querySelector('table');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));

const entryMaker = (text) => {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.className = "cell";
  const btn_del = document.createElement('button');
  btn_del.className = "btn btn-outline-primary btnCell";
  const btn_update = document.createElement('button');
  btn_update.className = "btn btn-outline-primary btnCell";
  tr.appendChild(td);

  btn_del.innerHTML = "delete";
  btn_update.innerHTML = "update";
  btn_del.onclick = function(){
    for (let i = 0; i < tbl.rows.length; i++) {
      if (tbl.rows[i] === tr) {
        itemsArray.splice(i,1);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        tbl.removeChild(tr);
      }
    }
  };
  btn_update.onclick = function(){
    if (input.value === "" || input.value[0] === " ") {
      input.value = "";
      return;
    }
    for (let i = 0; i < tbl.rows.length; i++) {
      if (tbl.rows[i] === tr) {
        itemsArray[i] = input.value;
        td.childNodes[2].data = input.value;
        localStorage.setItem('items', JSON.stringify(itemsArray));
        input.value = "";
      }
    }
  }
  td.appendChild(btn_del);
  td.appendChild(btn_update);
  td.appendChild(document.createTextNode(text));
  tbl.appendChild(tr);
}

itemsArray.forEach(item => {
  entryMaker(item);
});

function submitNewEntry(){
  if (input.value === "" || input.value[0] === " ") {
    input.value = "";
    return;
  }
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  entryMaker(input.value);
  input.value = "";
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  submitNewEntry();
});

btn_del_submit.addEventListener('click', function(){
  submitNewEntry();
});

btn_del_clear.addEventListener('click', function () {
  localStorage.clear();
  while (tbl.firstChild) {
    tbl.removeChild(tbl.firstChild);
  }
  itemsArray = [];
});
