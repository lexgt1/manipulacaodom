// Capturando os elementos
const h1 = document.querySelector('#titulo');
const ul = document.querySelector('ul');
const a = document.querySelector('a');
const ol = document.querySelector('#lista-ordenada');


h1.innerText = 'Página Projeto';
a.innerText = 'Visite o Prozeducacao';


// Adicionando itens à lista não ordenada
ul.innerHTML = `
    <li>Item da lista não ordenada 1</li>
    <li>Item da lista não ordenada 2</li>
    <li>Item da lista não ordenada 3</li>
`;

// Adicionando itens com links à lista ordenada
ol.innerHTML = `
    <li><a href="https://www.crazygames.com.br/" target="_blank">Crazygames</a></li>
    <li><a href="https://www.globo.com/" target="_blank">Globo</a></li>
    <li><a href="https://www.ig.com.br/" target="_blank">Ig</a></li>
`;
