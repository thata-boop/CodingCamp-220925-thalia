welcomeMassage();

function welcomeMassage(){
    let username = prompt("Enter your name: ");
    if(username){
        document.getElementById("username").innerText = username;
    } else {
        alert("You didn't enter your name. Defaulting to 'Guest'.");
        document.getElementById("username").innerText = "Guest";
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log(name, email, message);
    if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for your message, " + name + "!");
    }
    var submittedMessages = document.getElementById('submitted-messages');
    var newMessage = document.createElement('div');
    newMessage.className = "mb-2 p-2 border-b";
    newMessage.innerHTML = `<strong>${name}</strong> (${email}):<br>${message}`;
    submittedMessages.appendChild(newMessage);

    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
