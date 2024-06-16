function showGreeting() {
    const alertBox = document.getElementById('alertBox');
    const greetingMessage = document.getElementById('greetingMessage');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingMessage.innerText = `${greeting} The current time is ${timeString}.`;
    alertBox.style.display = 'block';
}

function closeAlert() {
    document.getElementById('alertBox').style.display = 'none';
}
