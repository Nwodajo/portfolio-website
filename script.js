// Put current year in footer
document.getElementById('year').textContent = new Data().getFullYear();

// Theme toggle (also modefile  style via Dom)
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// obvison override of a CSS rule  at least once:
const featuresCard = document.getElementById('featured');
featuresCard.style.borderColor = '#7e3eff';