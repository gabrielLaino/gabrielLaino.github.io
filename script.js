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
const textoHtml = 'Minha evolução na jornada HTML está sendo rápida, já que consigo criar sites semânticos e responsivos para desktop e mobile. E ainda tenho muito para aprender e evoluir!';
const textoCss = 'Minha Dedicação ao CSS Sem dúvida, meu estudo mais intenso tem sido em CSS, e desde que comecei, tenho melhorado a cada dia. Aprendi a utilizar o Bootstrap (que foi uma grande ajuda), a tornar meu site responsivo com @media, e ainda mais importante, a utilizar o display flex para posicionar elementos na tela.';
const textoJs = 'Paixão por Aprender JavaScript! O meu amor por aprender a programar em JavaScript só cresce, e estou me destacando cada vez mais nesta linguagem. Atualmente, tenho habilidades em adicionar eventos, testar possíveis erros, usar o DOM, além de muitas outras coisas que a tornam uma das minhas áreas de maior destaque.';
const textoComu = 'A habilidade de se comunicar de forma não-agressiva é essencial para uma interação efetiva com os outros, tanto no ambiente profissional quanto pessoal. Na Trybe, reconhecemos a importância de expressar nossas opiniões e sentimentos de maneira respeitosa e empática, sem atacar ou desrespeitar a outra pessoa. Essa abordagem não apenas melhora a qualidade das nossas relações, mas também ajuda a evitar conflitos desnecessários. Além disso, na Trybe, aprendemos a nos comunicar de forma clara e objetiva, evitando ambiguidades e mal-entendidos, o que é fundamental para o sucesso em qualquer carreira.';
const textoTrabalho = 'A habilidade de trabalhar em equipe é uma das principais competências necessárias no mercado de trabalho. Afinal, como realizar qualquer tarefa sem ela? Felizmente, essa é uma habilidade que possuo e estou sempre buscando aprimorar.';

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
