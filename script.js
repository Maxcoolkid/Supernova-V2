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

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.style.position = 'absolute';
        snowflake.style.top = '0';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.width = `${5 + Math.random() * 10}px`;
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

    setInterval(createSnowflake, 100);

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
    iframe.setAttribute('allowfullscreen', '');
    document.body.appendChild(iframe);

    iframe.onclick = () => {
        iframe.remove(); // Closes the iframe when clicked
    };
}
