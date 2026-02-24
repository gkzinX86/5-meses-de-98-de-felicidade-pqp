/* ── Typewriter ─────────────────────────────────── */
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

/* ── Senha ──────────────────────────────────────── */
function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "1212") {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    criarPetalas();
    const musica = document.getElementById("musica");
    musica.volume = 0.5;
    musica.play().catch(() => {}); // ignora bloqueio de autoplay
  } else {
    const wrap = document.querySelector(".form-wrap");
    wrap.classList.remove("shake");
    void wrap.offsetWidth; // reflow para reiniciar animação
    wrap.classList.add("shake");
  }
}

// Permitir Enter na senha
document.getElementById("senha").addEventListener("keydown", (e) => {
  if (e.key === "Enter") verificarSenha();
});

/* ── Música ─────────────────────────────────────── */
let tocando = true;

function toggleMusica() {
  const musica = document.getElementById("musica");
  const icon = document.getElementById("musicIcon");
  if (musica.paused) {
    musica.play();
    tocando = true;
    icon.textContent = "♪";
  } else {
    musica.pause();
    tocando = false;
    icon.textContent = "♩";
  }
}

/* ── Mensagens ──────────────────────────────────── */
const mensagens = [
  { texto: "O começo de tudo... como tudo começou amor? com alguem fazendo desenhos em meu braço, e depois? alguem me dando conselhos 3h da manha sobre eu terminar um relacionamento que tava fudendo meu psicologico. é amor, o começo foi muito bom, dois idiota louco, carente, e bobinhos... quero te dizer que eu lembro de bastante coisa que aconteceu no começo, como o bgl dos pincel lembra? KAKAKAKAKKA PORRA AMOR, foi louco esse dias vsfd, ou quando vc desenhou no braço do alex so pra bruna nao ficar brava cmg, ai, é triste so que ao mesmo tempo engraçado, seila, so sei que o começo foi muitoo top.",                             },
  { texto: "Nosso momento mais engraçado: Porra amor, temos varios mais oque a gente mais riu foi o da velha KAKAAAKAKKKA man eu inverti tudooo KAKAKAKKKAK falei que ia dormir na casa da veia man pqp, pra mim esse foi o mais engraçado (não sei vc)..",                  },
  { texto: "Você é a melhor desenhista que eu ja vi... pqp amor, seus desenhos são fodas pra karalhoooooooooooooooo, eu amei o do pato com sapato de porco pqp e aquele do dragão??????? MAAAN como que desenha um diacho daqueles? pqp, eu não tenho cabeça pra tudo aquilo de informação de uma so vez não,só de pensar no trabalho, nas noites que vc ficou sem mimi j'me da dessespero pqp. Alias, eu amo cada um deles, quando eu comprar minha capinha vou deixar os que eu mais gosto atras dela ehehhehe, muito obrigado viu, pelos desenhos, textinhos e as cartinhas... as vezes quando me bate a saudade eu fico lendo elas, alguns textinhos que vc me fez e os desenhos que vc me entregou... e as vezes, bem raro mais acontece, eu fico vendo alguns de nossos videos KAKAKAKAKA, eu te amo, e quero que vc saiba que eu vou te amar bem alto!!",                 },
  { texto: "Seu sorriso é meu ponto fraco, não tenho oque escrever pra esse bloco, mais pqp, que sorriso ana julia, que sorriso...",                    },
  { texto: "Sobre a sua beleza Vicent Van Gogh ficaria fascinado pela sua beleza... Você tem o campo    de girassois em seus olhos, o céu estrelado em seu sorriso e a sua voz me lembra uma sonata de Beethoven, um suave, e calmo. nenhuma palavra descrita no dicionario poderia descrever meu amor por você. (tem um breve poema no proximo bloco...) ",                        },
  { texto: "Poema: Sua beleza encanta como flores brancas. No campo és a mais linda, A mais pura, A mais rica Não falo de dinheiro, falo de beleza. Quando você chega as flores brotam. És tão linda que as flores do campo se erguem para te ver. És tão linda que me faltam palavras para te descrever. Poderia eu te sentir, te amar, seria prazer em cada batida do meu coração, Mas como um homem tão falho, ou melhor, um garoto, poderia ter a chance de observar seu lindo rosto, Como eu poderia ter a chance de sentir seu cheiro único, E se eu não puder te ter, Que ao menos o vento me traga O rastro do teu cheiro, E a certeza de que te admirei em silêncio. Sou apenas um garoto falho, Mas meu sentimento é inteiro; E se o amor pede coragem, Eu começo te querendo em silêncio...",                     }, 
  { texto: "Agora, acabou meus argumentos sobre tudo, eu poderia dizer sobre vc, sobre tudo que eu gosto em vc, sobre seus traços, sobre seu corpo, sobre sua belza, sobre seus olhos, sobre sua voz, sobre seu sorriso, sobre sua personalidade... tudo que eu gosto de vc é perfeito e eu amo cada pedacinho disso... e eu quero que vc saiba que eu vou te amar pra sempre! não so hj, nao amanha, nao dps, mais sim sempre! Queria que você pudesse enxergar de fato o tanto que eu te amo, te quero, te desejo, e tenho dentro de mim uma eterna e sincera disposição em te fazer tão bem, a ponto de você nem se recordar de existir algo diferente disso. te tratar e te fazer sentir como vc realmente merece, simplesmente te ver sorrir e alegrar mais os seus dias, tudo isso me deixa mais alegre, feliz, pqp me deixa o homem mais louco de amor possivel. saber que vc vive bem me faz viver melhor ainda, saber que eu posso ser alguem q acrescenta na sua vida, a ponto de vc nem precisar buscar se alguem realmente te ama, pq eu vou te deixar claro isso, todos os dias. aaaah se vc pudesse ao menos sentir tudo oq eu sinto aq dentro de mim, quero sempre buscar ao maximo te transmitir o tanto q eu tenho pra entregar pra ti. eu te amo amor, muito. vc sempre vai ser a minha oequena!! ", }
];

let petalaAtual = 0;

function atualizarProgresso() {
  document.getElementById("progressLabel").textContent = `${petalaAtual} / ${mensagens.length}`;
}

function criarPetalas() {
  const sunflower = document.getElementById("sunflower");
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

  // Marca como concluída
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

/* ── Modal ──────────────────────────────────────── */
function abrirModal(dado) {
  const overlay = document.getElementById("modal");
  const img = document.getElementById("modal-img");

  document.getElementById("modal-text").textContent = dado.texto;

  if (dado.img) {
    img.src = dado.img;
    img.classList.add("visible");
  } else {
    img.src = "";
    img.classList.remove("visible");
  }

  overlay.classList.add("show");
}

function fecharModal() {
  document.getElementById("modal").classList.remove("show");
}

// Fechar modal clicando fora do card
document.getElementById("modal").addEventListener("click", function(e) {
  if (e.target === this) fecharModal();
});