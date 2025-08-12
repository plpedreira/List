const addBtn = document.getElementById('add-btn');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const alertMsg = document.getElementById('alert-msg');

function addItem() {
  const itemText = itemInput.value.trim();
  if (itemText === '') return;

  const li = document.createElement('li');
  li.textContent = itemText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.addEventListener('click', () => {
    li.remove();
    showAlert();
  });

  li.appendChild(removeBtn);
  itemList.appendChild(li);

  itemInput.value = '';
  itemInput.focus();
}

function showAlert() {
  alertMsg.hidden = false;
  setTimeout(() => {
    alertMsg.hidden = true;
  }, 2000);
}

addBtn.addEventListener('click', addItem);

itemInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
