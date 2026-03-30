const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// 1. Verifica se o usuário já tem uma preferência salva no navegador
const savedTheme = localStorage.getItem('theme');

// 2. Verifica a preferência do sistema operacional do usuário
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 3. Aplica o tema inicial baseado no salvamento ou no sistema
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    rootElement.setAttribute('data-theme', 'dark');
}

// 4. Lógica do botão para alternar os temas
themeToggleBtn.addEventListener('click', () => {
    // Verifica qual tema está ativo agora
    const currentTheme = rootElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Se está escuro, muda para claro e salva
        rootElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        // Se está claro, muda para escuro e salva
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});