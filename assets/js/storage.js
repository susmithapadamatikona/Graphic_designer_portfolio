export const read=(key,fallback=[])=>{try{return JSON.parse(localStorage.getItem('pixel-'+key))??fallback}catch{return fallback}};
export const save=(key,value)=>{try{localStorage.setItem('pixel-'+key,JSON.stringify(value));return true}catch{document.dispatchEvent(new CustomEvent('storage-error'));return false}};
export const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),3500)}
