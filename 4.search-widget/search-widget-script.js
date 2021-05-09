const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    searchInput.focus();
})