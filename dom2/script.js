let elementoproduto = document.createElement("li");
elementoproduto.innerText ="Fechadura Digital"
elementoproduto.id ="ling-fd"

let listaprodutos= document.querySelector(".lista-produtos");
listaprodutos.appendChild(elementoproduto);
console.log(elementoproduto);

const descricaoprod = document.createElement("div");
descricaoprod.innerHTML = `<h3 class="post-titulo">R$ 379,00</h3>
<p class ="post-texto">
Fechadura Digital de Sobrepor Intelbras FR 101 -<br> Alta Segurança

Garanta a segurança do seu patrimônio com a 
Fechadura Digital FR 101 da Intelbras.<br> Projetada para oferecer tecnologia e comodidade, esta fechadura elimina a necessidade de chaves graças ao seu teclado touch com abertura por senha.
<br>
Principais Características:<br>
Acesso por Senha: Cadastramento de até 4 senhas diferentes, variando de 4 a 12 dígitos, oferecendo controle total sobre quem pode acessar o ambiente.
<br>Teclado Touch: Interface moderna e intuitiva, fácil de usar e altamente responsiva.<br>
Trava Automática: Sensor programável que realiza o travamento automático da porta ao ser fechada, proporcionando maior segurança e praticidade.<br>
Fonte de Alimentação: Funciona com 4 pilhas alcalinas AA, garantindo uma autonomia de até 1 ano. <br>Em caso de esgotamento das pilhas, uma bateria de 9V pode ser usada para acesso emergencial.</p>`;


const produtos =document.querySelector(".produtos");
produtos.appendChild(descricaoprod);