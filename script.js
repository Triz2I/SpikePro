document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('botao-acessibilidade');
  const panel = document.getElementById('opcoes-acessibilidade');

  if (!btn || !panel) return;

  panel.classList.remove('apresenta-lista');

  panel.setAttribute('hidden', '');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'opcoes-acessibilidade');
  btn.setAttribute('type', 'button');

  const open = () => {
    panel.classList.add('is-open');
    panel.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    panel.classList.remove('is-open');
    panel.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (panel.classList.contains('is-open')) {
      close();
    } else {
      open();
    }
  });

  document.addEventListener('click', function (e) {
    if (panel.classList.contains('is-open') && !panel.contains(e.target) && e.target !== btn) {
      close();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  const inc = document.getElementById('aumentar-fonte');
  const dec = document.getElementById('diminuir-fonte');
  const contrast = document.getElementById('alterna-contraste');
  let fontRem = 1;

  if (inc) inc.addEventListener('click', function () {
    fontRem = Math.min(fontRem + 0.1, 2);
    document.body.style.fontSize = `${fontRem}rem`;
  });

  if (dec) dec.addEventListener('click', function () {
    fontRem = Math.max(fontRem - 0.1, 0.7);
    document.body.style.fontSize = `${fontRem}rem`;
  });

  if (contrast) contrast.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
  });
});

if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal('#inicio', { delay: 300, distance: '40px' });
  ScrollReveal().reveal('#SpikePro', { delay: 300, distance: '40px' });
  ScrollReveal().reveal('#galeria', { delay: 300, distance: '40px' });
  ScrollReveal().reveal('#contato', { delay: 300, distance: '40px' });
}
