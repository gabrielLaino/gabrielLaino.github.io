const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');
const comunicacao = document.querySelector('#comunicacao');
const trabalho = document.querySelector('#equipe');
const criaP = document.createElement('p');
const criaPCss = document.createElement('p');
const criaPJs = document.createElement('p');
const criapComu = document.createElement('p');
const criapTra = document.createElement('p');
const textoHtml = 'Na minha jornada HTML, estou evoluindo de mais e muito rapido, já consigo fazer um site semantico, responsivo tanto para desktop quanto para mobile, e claro vou continuar evoluindo muito!';
const textoCss = 'A CSS, com certeza a minha maior fraqueza, e onde dedico muito estudo, e melhorei muito desde que começei, aprendendo a utilizar o bootstrap (que ajudou de mais a minha vida), alem de aprender a deixar o site responsivo com o @midia, e sem falar no display flex, que salvou a minha vida para posicionar elementos na tela!';
const textoJs = 'O JavaScript e o que mais amo aprender, e estou me destacando de mais nele, sei adicionar eventos, testar possiveis erros, usar o DOM (utilizado para fazer essas funções), além de muitas outras coisas!';
const textoComu = 'Na Trybe, aprendemos muito sobre SoftSkills, e são muito importantes para o mercado de trabalho, e a comunicação e a minha favorita, estamos aprendendo cade vez mais por exemplo, a comunicação não agressiva.';
const textoTrabalho = 'O trabalho em equipe e umas das pricipais skills que precisa para o mercado de trabalho, afinal como vai realizar qualquer tarefa sem isso. E posso dizer que, e uma skill que tenho muito bem comigo, e estou melhorando cada vez mais.';

html.addEventListener('click', () => {
  criaP.innerHTML = textoHtml;
  html.appendChild(criaP);
})

css.addEventListener('click', () => {
  criaPCss.innerHTML = textoCss;
  css.appendChild(criaPCss);
})

js.addEventListener('click', () => {
  criaPJs.innerHTML = textoJs;
  js.appendChild(criaPJs);
})

comunicacao.addEventListener('click', () => {
  criapComu.innerHTML = textoComu;
  comunicacao.appendChild(criapComu)
})

trabalho.addEventListener('click', () => {
  criapTra.innerHTML = textoTrabalho;
  trabalho.appendChild(criapTra);
})
