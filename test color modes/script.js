document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggle-theme');
    
    toggleThemeBtn.addEventListener('click', () => {
      if (document.documentElement.classList.contains('light-mode')) {
        document.documentElement.classList.remove('light-mode');
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
      }
    });
  });
  