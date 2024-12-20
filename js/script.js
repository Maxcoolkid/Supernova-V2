let isSnowing = true; // To keep track of snowfall state
let snowContainer;

// Snowfall Effect
function startSnowfall() {
    snowContainer = document.createElement('div');
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '9999';
    document.body.appendChild(snowContainer);

    function createSnowflake() {
        if (!isSnowing) return; // Stop creating snowflakes when snow is toggled off

        const snowflake = document.createElement('div');
        const size = window.innerWidth <= 768 ? 3 + Math.random() * 5 : 5 + Math.random() * 10;

        snowflake.style.position = 'absolute';
        snowflake.style.top = '0';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.backgroundColor = 'white';
        snowflake.style.borderRadius = '50%';
        snowflake.style.opacity = Math.random();
        snowflake.style.animation = `fall ${5 + Math.random() * 5}s linear infinite`;

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }

    setInterval(createSnowflake, 150);

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
}

// Toggle Snowfall
document.getElementById('toggleSnowButton').addEventListener('click', () => {
    isSnowing = !isSnowing;

    if (isSnowing) {
        startSnowfall();
    } else {
        snowContainer.remove();
    }
});

// Start snowfall on page load
document.addEventListener('DOMContentLoaded', () => {
    startSnowfall();
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