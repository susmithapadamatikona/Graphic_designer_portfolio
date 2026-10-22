export function addFooterSocial() {
  const footer = document.querySelector('.footer');
  if (!footer || footer.querySelector('.footer-social')) return;

  const icons = [
    ['Instagram', '404.html', '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>'],
    ['Behance', '404.html', '<path d="M3 6h5a3 3 0 0 1 0 6H3V6Zm0 6h5a3 3 0 0 1 0 6H3v-6Zm12-6h5M14 14h8c0-6-9-6-9 0s6 6 8 3"/>'],
    ['Dribbble', '404.html', '<circle cx="12" cy="12" r="9"/><path d="M8 4c5 6 7 11 8 16M3 10c7 1 12-1 16-5M5 18c3-6 8-8 16-6"/>'],
    ['LinkedIn', '404.html', '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M11 17v-7m0 3c0-4 6-4 6 0v4"/><circle cx="7" cy="7" r="1" fill="currentColor" stroke="none"/>'],
  ];
  const nav = document.createElement('nav');
  nav.className = 'footer-social';
  nav.setAttribute('aria-label', 'Social media');
  nav.innerHTML = icons.map(([name, url, drawing]) =>
    `<a href="${url}" aria-label="${name} " title="${name}"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawing}</svg></a>`
  ).join('');
  footer.querySelector('.footer-grid > div')?.append(nav);
}
