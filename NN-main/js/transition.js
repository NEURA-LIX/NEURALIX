// Handle page transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add fade in effect when page loads
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 10);

    // Handle all navigation clicks
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href], button[onclick*="location"]');
        if (!link) return;

        // Get target URL
        let targetUrl = link.href;
        if (!targetUrl && link.getAttribute('onclick')) {
            const onclickValue = link.getAttribute('onclick');
            const match = onclickValue.match(/window\.location\.href='([^']+)'/);
            if (match) targetUrl = match[1];
        }

        // Handle internal navigation
        if (targetUrl && !targetUrl.startsWith('http')) {
            e.preventDefault();
            
            // Add fade out effect
            document.body.style.opacity = '0';
            
            // Navigate after transition
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        }
    });
}); 