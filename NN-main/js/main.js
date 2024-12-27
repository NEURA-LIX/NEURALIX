// Main JavaScript file
window.onload = function() {
    // Check if this is a page refresh
    if (performance.navigation.type === 1) {
        // Redirect to index page
        window.location.href = '/index.html';
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for title
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        let text = 'NeuraLix';
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < text.length) {
                let char = text.charAt(charIndex);
                if (charIndex >= 5) {
                    // For 'Lix' part - make it the same green as the header
                    typingText.innerHTML += `<span style="color: var(--neon-green)">${char}</span>`;
                } else {
                    // For 'Neura' part - keep it white
                    typingText.innerHTML += `<span style="color: white">${char}</span>`;
                }
                charIndex++;
                setTimeout(typeText, 150);
            }
        }
        
        setTimeout(typeText, 1000); // Start typing after 1 second
    }

    // Add typing effect to command lines
    const commandLines = document.querySelectorAll('.command-line');
    commandLines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('typing');
        }, 500 + (index * 700));
    });

    // Show buttons after last command line appears
    setTimeout(() => {
        document.querySelectorAll('.action-button').forEach(btn => {
            btn.classList.add('active');
        });
    }, 2600);

    // Button click handlers
    const enterButton = document.querySelector('.action-button.green');
    if (enterButton) {
        enterButton.addEventListener('click', function() {
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = 'main.html';
            }, 1000);
        });
    }
});

// Handle back/forward browser buttons
window.addEventListener('popstate', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.reload();
    }, 100);
}); 