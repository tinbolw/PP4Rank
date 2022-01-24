document.querySelector('#search').addEventListener('click', async () => {
  user = document.getElementById('user').value;
  search(user);
})

document.querySelector('#user').addEventListener('change', () => {
  textBox = document.getElementById('user');
  if (textBox.value != '') {
    document.getElementById('search').disabled = false;
  } else {
    document.getElementById('search').disabled = true;
  }
})