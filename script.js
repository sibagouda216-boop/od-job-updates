const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const search = document.getElementById('jobSearch');
const filter = document.getElementById('jobFilter');
const cards = [...document.querySelectorAll('.job-card')];
const empty = document.getElementById('emptyState');
function filterJobs() {
  const q = search.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const matchesText = card.textContent.toLowerCase().includes(q);
    const matchesCategory = filter.value === 'all' || card.dataset.category === filter.value;
    const visible = matchesText && matchesCategory;
    card.hidden = !visible;
    if (visible) shown++;
  });
  empty.hidden = shown > 0;
}
search.addEventListener('input', filterJobs);
filter.addEventListener('change', filterJobs);
