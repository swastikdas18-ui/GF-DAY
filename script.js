document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const openBtn = document.getElementById('open-btn');

    openBtn.addEventListener('click', () => {
        // Fade out welcome screen
        welcomeScreen.style.opacity = '0';
        
        setTimeout(() => {
            // Hide welcome completely
            welcomeScreen.classList.remove('active');
            
            // Prepare main content
            mainContent.style.display = 'block'; // Or flex depending on layout
            
            // Small delay to ensure display:block applies before fading in
            setTimeout(() => {
                mainContent.style.opacity = '1';
                // Scroll to top just in case
                window.scrollTo(0, 0);
            }, 50);
            
        }, 800); // Matches the CSS transition time
    });
});
