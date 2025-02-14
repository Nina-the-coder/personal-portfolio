document.querySelectorAll('li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        const sectionId = link.getAttribute('href'); 
        const section = document.querySelector(sectionId); 
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelectorAll('.navbar ul li').forEach((link) => {
    link.addEventListener("click", () => {
        const anchor = link.querySelector('a');
        anchor.click();
    });
})

const ctaBtn = document.getElementById("cta-btn");

ctaBtn.addEventListener("click", () => {
    const contactSection = document.querySelector('#contact'); 
    contactSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
    });
})