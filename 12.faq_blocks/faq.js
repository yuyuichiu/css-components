const faqs = document.querySelectorAll('.faq-title');
const faqToggles = document.querySelectorAll('.faq-expand');

// Toggle active when onclick question or the toggle button
faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.parentNode.classList.toggle('active');
    })
});

faqToggles.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.parentNode.classList.toggle('active');
    })
});