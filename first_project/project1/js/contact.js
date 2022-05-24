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
    console.log("failed Name");
    return false;
  } else {
    showSuccess(Name);
    console.log("success Name");
  }
  if (lastName.value == "") {
    showError(lastName, "please enter your lastname");
    console.log("failed lastName");
    return false;
  } else {
    showSuccess(lastName);
    console.log("success lastName");
  }

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (Email.value.match(validRegex)) {
    console.log("success email");
    showSuccess(Email);
  } else {
    console.log("failed email");
    showError(Email, "please enter a valid email");
    return false;
  }

  if (Message.value == "") {
    console.log("failed message");
    showError(Message, "please enter a message");
    return false;
  } else {
    console.log("success message");
    showSuccess(Message);
  }

  console.log("done validating");
  return true;
}
function handleSubmit() {
  if (!validate()) {
    console.log("failed");
    return false;
  } else {
    console.log("worked");
    const form = document.querySelector("#myForm");
    form.reset();
    alert("form submitted");

    return false;
  }
}
