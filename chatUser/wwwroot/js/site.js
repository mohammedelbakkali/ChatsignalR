// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

//This method receive the message and Append to our list  
connection.on("ReceiveMessage", (user, message) => {
    debugger
    const msg = message.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
    const encodedMsg = user + " :: " + msg;
    const li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
});

connection.start().catch(err => console.error(err.toString()));

//Send the message  

document.getElementById("sendMessage").addEventListener("click", event => {
    debugger
    const user = document.getElementById("userName").value;
    const message = document.getElementById("userMessage").value;
    connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
    event.preventDefault();
});  