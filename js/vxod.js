const predefinedEmail = "arinamalina@gmail.com"; // предопределённая почта
const predefinedPassword = "Arina"; // предопределённый пароль
let userName = "Арина"; // имя пользователя

function showLoginForm() {
    document.getElementById("mainContent").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function hideLoginForm() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
}

function loginUser(event) {
    event.preventDefault(); // предотвращаем перезагрузку страницы
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    if (email === predefinedEmail && password === predefinedPassword) {
        // Сохраняем данные пользователя в localStorage
        localStorage.setItem('userName', userName);
        localStorage.setItem('userEmail', email);

        // Перенаправляем на страницу аккаунта
        window.location.href = "account.html";
    } else {
        alert("Ошибка! Неверные учетные данные.");
    }

    return false; // избегаем перезагрузки страницы
}

function logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    window.location.href = "vxod.html"; // Перенаправление на главную страницу
}


