// Snowfall Effect
document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.createElement('div');
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '9999';
    document.body.appendChild(snowContainer);

    // Determine snowflake settings based on screen size
    const isMobile = window.innerWidth <= 768;
    const snowflakeCount = isMobile ? 50 : 100; // Fewer snowflakes on mobile

    function createSnowflake() {
        const snowflake = document.createElement('div');
        const size = isMobile ? 3 + Math.random() * 5 : 5 + Math.random() * 10; // Smaller snowflakes on mobile

        snowflake.style.position = 'absolute';
        snowflake.style.top = '0';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.backgroundColor = 'white';
        snowflake.style.borderRadius = '50%';
        snowflake.style.opacity = Math.random();
        snowflake.style.animation = `fall ${5 + Math.random() * 5}s linear infinite`;

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }

    // Adjust snowflake creation rate for mobile
    setInterval(createSnowflake, isMobile ? 200 : 100);

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            from {
                transform: translateY(-10px) translateX(0);
            }
            to {
                transform: translateY(100vh) translateX(${Math.random() * 50 - 25}px);
            }
        }
    `;
    document.head.appendChild(style);
});

// Fullscreen Game Loader
function openFullscreen(url) {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.className = 'fullscreen';
    iframe.style.transform = 'scale(1)';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.zIndex = '1000';

    document.body.appendChild(iframe);

    iframe.addEventListener('click', () => iframe.remove());
}