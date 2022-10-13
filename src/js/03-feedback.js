const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const submitionButoon = document.querySelector('button');
const data = { email: '', message: '' };

email.addEventListener('input', addData);
message.addEventListener('input', addData);
submitionButoon.addEventListener('click', sendData);

checkData();

function checkData() {
  const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData) {
    email.value = localData.email;
    message.value = localData.message;
    data.email = localData.email;
    data.message = localData.message;
  }
}

const saveData = throttle(function () {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

function addData(event) {
  data[this.name] = event.target.value;
  saveData();
}

function sendData(event) {
  event.preventDefault();
  const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!email.value || !message.value) {
    console.log('error: Not all fields are filled');
    alert('Please check if all fields are filled');
  } else {
    console.log(localData);
    localStorage.removeItem('feedback-form-state');
    data.email = '';
    data.message = '';
    form.reset();
  }
}
