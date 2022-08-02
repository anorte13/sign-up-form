function checkPassword() {
   let password1 = document.querySelector('input[name=password1]');
   let password2 = document.querySelector('input[name=confirmPassword]');

    if (password1.value != password2.value) {
        password1.classList.add("error");
        password2.classList.add("error");
        alert('Passwords dont match');
        return false;
    }
    else {
        alert("Passwords Match: Welcome")
        password1.classList.remove("error")
        password2.classList.remove("error");
        return true;
    }
}