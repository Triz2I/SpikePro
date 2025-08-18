document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  if (botaoDeAcessibilidade && opcoesDeAcessibilidade) {
    botaoDeAcessibilidade.addEventListener('click', function () {
      // Alterna exibição das opções
      opcoesDeAcessibilidade.classList.toggle('mostrar');

      // Atualiza estado aria-expanded
      const aberto = opcoesDeAcessibilidade.classList.contains('mostrar');
      botaoDeAcessibilidade.setAttribute('aria-expanded', String(aberto));
    });
  }

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = 1;

  if (aumentaFonteBotao) {
    aumentaFonteBotao.addEventListener('click', function () {
      tamanhoAtualFonte = Math.min(tamanhoAtualFonte + 0.1, 2); // limite máx 200%
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
  }

  if (diminuiFonteBotao) {
    diminuiFonteBotao.addEventListener('click', function () {
      tamanhoAtualFonte = Math.max(tamanhoAtualFonte - 0.1, 0.7); // limite mín 70%
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
  }

  if (alternaContraste) {
    alternaContraste.addEventListener('click', function () {
      document.body.classList.toggle('alto-contraste');
    });
  }
});

// ScrollReveal com seletor único por seção
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal('#inicio', { delay: 300, distance: '40px' });
  ScrollReveal().reveal('#SpikePro', { delay: 300, distance: '40px' });
  ScrollReveal().reveal('#galeria', { delay: 300, distance: '40px' });
  ScrollReveal().reveal('#contato', { delay: 300, distance: '40px' });
}