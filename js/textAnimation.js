// Text Animation
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 3000;
const initialDelay = 2000;

document.addEventListener("DOMContentLoaded", function() {
    const typedTextSpans = document.querySelectorAll(".typed-text");

    typedTextSpans.forEach(typedTextSpan => {
        const cursorSpan = typedTextSpan.nextElementSibling;
        const textData = typedTextSpan.getAttribute("data-text").split(",");
        const textArray = textData.map(item => {
            const [text, url] = item.split("|");
            return { text, url };
        });

        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].text.length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                const text = textArray[textArrayIndex].text.charAt(charIndex);
                typedTextSpan.innerHTML = `<a href="${textArray[textArrayIndex].url}" target="_blank">${typedTextSpan.innerText + text}</a>`;
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                if (textArray.length > 1) {
                    setTimeout(erase, newTextDelay);
                }
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                const text = textArray[textArrayIndex].text.substring(0, charIndex - 1);
                typedTextSpan.innerHTML = `<a href="${textArray[textArrayIndex].url}" target="_blank">${text}</a>`;
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }

        if (textArray.length) setTimeout(type, initialDelay);
    });
});
