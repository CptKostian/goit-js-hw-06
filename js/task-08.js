const formEl = document.querySelector('.login-form');
let userData = {};
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  userData = {
    [email.name]: `${email.value}`,
    [password.name]: `${password.value}`,
  };
  console.log(userData);
  event.currentTarget.reset();
}
