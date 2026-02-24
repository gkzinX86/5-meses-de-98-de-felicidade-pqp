/* =========================
   TYPEWRITER
========================= */
const texto = "Há 5 meses... você virou meu sol.";
let i = 0;

function typeWriter() {
  if (i < texto.length) {
    document.getElementById("typewriter").textContent += texto.charAt(i);
    i++;
    setTimeout(typeWriter, 55);
  }
}

typeWriter();

/* =========================
   SENHA
========================= */
function verificarSenha() {
  const senha = document.getElementById("senha").value;

  if (senha === "2111") {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");

    criarPetalas();

    const musica = document.getElementById("musica");
    musica.volume = 0.5;
    musica.play().catch(() => {});
  } else {
    const wrap = document.querySelector(".form-wrap");
    wrap.classList.remove("shake");
    void wrap.offsetWidth;
    wrap.classList.add("shake");
  }
}

document.getElementById("senha").addEventListener("keydown", (e) => {
  if (e.key === "Enter") verificarSenha();
});

/* =========================
   MÚSICA
========================= */
let tocando = true;

function toggleMusica() {
  const musica = document.getElementById("musica");
  const icon = document.getElementById("musicIcon");

  if (musica.paused) {
    musica.play();
    tocando = true;
    icon.textContent = "⏸";
  } else {
    musica.pause();
    tocando = false;
    icon.textContent = "▶";
  }
}

/* =========================
   MENSAGENS (COMPLETAS)
========================= */
const mensagens = [
  {
    texto: "O começo de tudo... como tudo começou amor? com alguém fazendo desenhos em meu braço, e depois? alguém me dando conselhos 3h da manhã sobre eu terminar um relacionamento que tava fudendo meu psicológico. é amor, o começo foi muito bom, dois idiota louco, carente, e bobinhos... quero te dizer que eu lembro de bastante coisa que aconteceu no começo, como o bgl dos pincel lembra? KAKAKAKKA PORRA AMOR, foi louco esses dias vsfd, ou quando vc desenhou no braço do alex so pra bruna não ficar brava cmg, aí é triste só que ao mesmo tempo engraçado, sei lá, só sei que o começo foi muito top."
  },
  {
    texto: "Nosso momento mais engraçado: Porra amor, temos vários, mas o que a gente mais riu foi o da velha KAKAKAKKKA mano eu inverti tudooo KAKAKKKAK falei que ia dormir na casa da véia man pqp, pra mim esse foi o mais engraçado (não sei vc)."
  },
  {
    texto: "Você é a melhor desenhista que eu já vi... pqp amor, seus desenhos são fodas pra caralhooooooooooooo, eu amei o pato com sapato de porco pqp e aquele do dragão??????? MAAAANO como que desenha um diabo daqueles? pqp, eu não tenho cabeça pra tudo aquilo de informação de uma só vez não, só de pensar no trabalho, nas noites que vc ficou sem mim já me dá desespero pqp. Aliás, eu amo cada um deles, quando eu comprar minha capinha vou deixar os que eu mais gosto atrás dela hehehe, muito obrigado viu, pelos desenhos, textinhos e as cartinhas... às vezes quando me bate a saudade eu fico lendo elas, alguns textinhos que vc me fez e os desenhos que vc me entregou... e às vezes, bem raro mas acontece, eu fico vendo alguns de nossos vídeos KAKAKAKKA, eu te amo, e quero que vc saiba que eu vou te amar bem alto!!"
  },
  {
    texto: "Seu sorriso é meu ponto fraco, não tenho o que escrever pra esse bloco, mais pqp, que sorriso ana julia, que sorriso...."
  },
  {
    texto: "Sobre a sua beleza Vincent Van Gogh ficaria fascinado pela sua beleza... Você tem um campo de girassóis em seus olhos, o céu estrelado em seu sorriso e a sua voz me lembra uma sonata de Beethoven, um suave e calmo. nenhuma palavra descrita no dicionário poderia descrever meu amor por você. (tem um breve poema no próximo bloco...)"
  },
  {
    texto: "Poema: Sua beleza encanta como flores brancas. No campo és a mais linda, a mais pura, a mais rica. Não falo de dinheiro, falo de beleza. Quando você chega as flores brotam. És tão linda que as flores do campo se erguem para te ver. És tão linda que me faltam palavras para te descrever. Poderia eu te sentir, te amar, seria prazer em cada batida do meu coração, mas como um homem tão falho, ou melhor, um garoto, poderia ter a chance de observar seu lindo rosto, como eu poderia ter a chance de sentir seu cheiro único. E se eu não puder te ter, que ao menos o vento me traga o rastro do teu cheiro. É a certeza de que te admirarei em silêncio. Sou apenas um garoto falho, mas meu sentimento é inteiro. E se o amor pede coragem, eu começo te querendo em silêncio..."
  },
  {
    texto: "Agora, acabou meus argumentos sobre tudo, eu poderia dizer sobre vc, sobre tudo que eu gosto em vc, sobre seus traços, sobre seu corpo, sobre sua beleza, sobre seus olhos, sobre sua voz, sobre seu sorriso, sobre sua personalidade... tudo que eu gosto de vc é perfeito e eu amo cada pedacinho disso. eu quero que vc saiba que eu vou te amar pra sempre, não só hoje, não amanhã, não depois, mas sim sempre! Queria que você pudesse enxergar de fato o tanto que eu te amo, te quero, te desejo, e tenho dentro de mim uma eterna e sincera disposição em te fazer tão bem, a ponto de você nem se recordar de existir algo diferente disso. te tratar e te fazer sentir como vc realmente merece, simplesmente te ver sorrir e alegrar mais os seus dias, tudo isso me deixa mais alegre, feliz, pqp me deixa o homem mais louco de amor possível. saber que vc vive em mim me faz viver melhor ainda, saber que eu posso ser alguém acrescentar na sua vida, a ponto de vc nem precisar buscar se alguém realmente te ama, pq eu vou te deixar claro isso, todos os dias. aaaah se vc pudesse ao menos sentir tudo oq eu sinto aqui dentro de mim, quero sempre buscar ao máximo te transmitir o tanto que eu tenho pra entregar pra ti. eu te amo amor, muito. vc sempre vai ser a minha pequena!!"
  }
];

let petalaAtual = 0;

/* =========================
   GIRASSOL / PÉTALAS
========================= */
function atualizarProgresso() {
  document.getElementById("progressLabel").textContent =
    `${petalaAtual} / ${mensagens.length}`;
}

function criarPetalas() {
  const sunflower = document.getElementById("sunflower");
  sunflower.innerHTML = "";
  petalaAtual = 0;
  atualizarProgresso();

  mensagens.forEach((_, index) => {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.transform = `rotate(${index * (360 / mensagens.length)}deg)`;

    if (index === 0) petal.classList.add("active");

    petal.addEventListener("click", () => clicarPetala(index, petal));
    sunflower.appendChild(petal);
  });
}

function clicarPetala(index, petal) {
  if (index !== petalaAtual) return;

  petal.classList.remove("active");
  petal.classList.add("done");

  abrirModal(mensagens[index]);

  petalaAtual++;
  atualizarProgresso();

  const petalas = document.querySelectorAll(".petal");
  if (petalas[petalaAtual]) {
    petalas[petalaAtual].classList.add("active");
  }
}

/* =========================
   MODAL
========================= */
function abrirModal(dado) {
  document.getElementById("modal-text").textContent = dado.texto;
  document.getElementById("modal").classList.add("show");
}

function fecharModal() {
  document.getElementById("modal").classList.remove("show");
}

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") fecharModal();
});