// one function for all the form fields - one function to rule them all

function showError(input, message) {
  const formControll = input.parentElement;
  formControll.className = "formControll error";
  const small = formControll.querySelector("small");
  small.innerText = message;
}

// one function for all the form fields- one function to rule them all

function showSuccess(input) {
  const formControll = input.parentElement;
  formControll.className = "formControll success";
}

function validate() {
  const Name = document.querySelector("#name");
  const lastName = document.querySelector("#lastName");
  const Email = document.querySelector("#email");
  const Message = document.querySelector("#input-message");

  if (Name.value == "") {
    showError(Name, "please enter your name");
    return false;
  } else {
    showSuccess(Name);
  }
  if (lastName.value == "") {
    showError(lastName, "please enter your lastname");
    return false;
  } else {
    showSuccess(lastName);
  }

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (Email.value.match(validRegex)) {
    showSuccess(Email);
  } else {
    showError(Email, "please enter a valid email");
    return false;
  }

  if (Message.value == "") {
    showError(Message, "please enter a message");
    return false;
  } else {
    showSuccess(Message);
  }

  return true;
}
function handleSubmit() {
  if (!validate()) {
    return false;
  } else {
    const form = document.querySelector("#myForm");
    form.reset();
    alert("form submitted");

    return false;
  }
}
