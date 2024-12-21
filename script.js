// Typing Effect
const typingEffect = document.getElementById('typing-effect');
const words = ['AI Developer', 'Data Scientist', 'Business Analyst'];
let wordIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < words[wordIndex].length) {
        typingEffect.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (letterIndex > 0) {
        typingEffect.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 1000);
    }
}

function toggleDetails(id) {
    const details = document.getElementById(id);
    const isVisible = details.style.display === "block";

    // Hide all other details
    document.querySelectorAll('.details').forEach(detail => {
        detail.style.display = "none";
    });

    // Toggle visibility of the selected details
    details.style.display = isVisible ? "none" : "block";
}


type();

// Open Project
function openProject(link) {
    window.open(link, '_blank');
}

function toggleDetails(id) {
    const details = document.getElementById(id);
    const isVisible = details.style.display === "block";

    // Hide all other details
    document.querySelectorAll('.details').forEach(detail => {
        detail.style.display = "none";
    });

    // Toggle visibility of the selected details
    details.style.display = isVisible ? "none" : "block";
}
