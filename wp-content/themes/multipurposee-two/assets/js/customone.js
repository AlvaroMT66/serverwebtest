// Selecione todos os elementos <a>
var links = document.querySelectorAll('a');

// Adicione o evento mouseover para cada link
links.forEach(function(link) {
  link.addEventListener('mouseover', function() {
    link.style.fontWeight = 'normal'; // Altere o valor de acordo com o peso desejado
  });

  // Adicione o evento mouseout para cada link
  link.addEventListener('mouseout', function() {
    link.style.fontWeight = 'normal'; // Volta ao valor original
  });
});