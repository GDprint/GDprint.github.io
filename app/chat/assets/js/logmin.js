document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Correct credentials
    const correctUsername = 'Milena';
    const correctPassword = 'Dinozavr';

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (username === correctUsername && password === correctPassword) {
        window.location.href = "hqwertotyuiopmasde.html";  // Redirect to desired page
    } else {
        document.getElementById('error-message').innerText = "Սխալ օգտանուն կամ գաղտնաբառ";
        document.getElementById('error-message').style.display = 'block';
    }
});
