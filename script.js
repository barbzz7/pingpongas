// Seleciona o canvas da página onde o jogo vai acontecer
const canvas = document.getElementById('game');

// Pega o contexto 2D do canvas para desenhar formas, imagens, etc.
const ctx = canvas.getContext('2d');

// Seleciona o elemento HTML que vai mostrar a pontuação do jogador
const scoreDisplay = document.getElementById('score');

// Objeto que representa a raquete que o jogador controla
const raquete = {
  x: 10,                       // Posição horizontal da raquete (fixa perto da esquerda)
  y: canvas.height / 2 - 40,  // Posição vertical inicial (centralizada na tela)
  largura: 10,                 // Largura da raquete
  altura: 90,                  // Altura da raquete
  velocidade: 18              // Velocidade com que a raquete se move para cima ou para baixo
};

// Objeto que representa a bola do jogo
const bola = {
  x: canvas.width / 2,        // Posição horizontal inicial (no meio do canvas)
  y: canvas.height / 2,       // Posição vertical inicial (no meio do canvas)
  raio: 10,                   // Tamanho da bola (raio do círculo)
  dx: 3,                      // Velocidade e direção horizontal da bola (9 pixels por frame)
  dy: 3                      // Velocidade e direção vertical da bola (9 pixels por frame)
};

// Variável que guarda a pontuação do jogador (começa com 0)
let pontuacao = 0;

// Variável para saber se o jogo acabou (inicialmente falso)
let jogoAcabou = false;

// Objeto que vai guardar se as teclas de seta para cima e para baixo estão sendo pressionadas
const teclas = {
  ArrowUp: false,    // True quando seta para cima está pressionada
  ArrowDown: false   // True quando seta para baixo está pressionada
};

// Adiciona um "ouvinte" para quando uma tecla for pressionada
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'ArrowUp') teclas.ArrowUp = true;      // Marca que seta para cima está pressionada
  if (evento.key === 'ArrowDown') teclas.ArrowDown = true;  // Marca que seta para baixo está pressionada
});

// Adiciona um "ouvinte" para quando uma tecla for solta
document.addEventListener('keyup', (evento) => {
  if (evento.key === 'ArrowUp') teclas.ArrowUp = false;     // Marca que seta para cima foi solta
  if (evento.key === 'ArrowDown') teclas.ArrowDown = false; // Marca que seta para baixo foi solta
});

// Função que atualiza a lógica do jogo em cada frame
function atualizar() {
  if (jogoAcabou) return; // Se o jogo acabou, para a atualização

  // Move a raquete para cima se a tecla seta para cima estiver pressionada
  if (teclas.ArrowUp) raquete.y -= raquete.velocidade;

  // Move a raquete para baixo se a tecla seta para baixo estiver pressionada
  if (teclas.ArrowDown) raquete.y += raquete.velocidade;

  // Impede que a raquete ultrapasse o limite superior da tela
  if (raquete.y < 0) raquete.y = 0;

  // Impede que a raquete ultrapasse o limite inferior da tela
  if (raquete.y + raquete.altura > canvas.height) {
    raquete.y = canvas.height - raquete.altura;
  }

  // Atualiza a posição horizontal da bola somando sua velocidade dx
  bola.x += bola.dx;

  // Atualiza a posição vertical da bola somando sua velocidade dy
  bola.y += bola.dy;

  // Verifica se a bola bateu no topo da tela
  if (bola.y - bola.raio < 0) {
    bola.dy *= -1; // Inverte a direção vertical da bola pra baixo
  }

  // Verifica se a bola bateu na parte inferior da tela
  if (bola.y + bola.raio > canvas.height) {
    bola.dy *= -1; // Inverte a direção vertical da bola para cima
  }

  // Verifica se a bola está colidindo com a raquete
  if (
    bola.x - bola.raio < raquete.x + raquete.largura && // A bola chegou na largura da raquete
    bola.y > raquete.y &&                               // A bola está abaixo do topo da raquete
    bola.y < raquete.y + raquete.altura                 // A bola está acima da base da raquete
  ) {
    bola.dx *= -1;      // Inverte a direção horizontal da bola (rebate para a direita)
    pontuacao++;        // Incrementa a pontuação do jogador
    scoreDisplay.textContent = pontuacao; // Atualiza a pontuação na tela
  }

  // Verifica se a bola saiu pela esquerda da tela (ponto de derrota)
  if (bola.x - bola.raio < 0) {
    jogoAcabou = true;  // Marca que o jogo terminou

    // Espera um pouquinho antes de mostrar o alerta, para evitar travamento
    setTimeout(() => {
      alert('Fim de jogo! perdeu playboy 👎. Sua pontuação é: ' + pontuacao); // Mostra a pontuação final
      document.location.reload(); // Recarrega a página para reiniciar o jogo
    }, 100);
  }

  // Verifica se a bola bateu na parede direita da tela
  if (bola.x + bola.raio > canvas.width) {
    bola.dx *= -1; // Inverte a direção horizontal da bola (rebate para a esquerda)
  }
}

// Função que desenha todos os elementos 
function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa a tela para desenhar o próximo frame

  // Desenha a raquete 
  ctx.fillStyle = 'white';  // Define a cor de preenchimento 
  ctx.fillRect(raquete.x, raquete.y, raquete.largura, raquete.altura);

  // Desenha a bola 
  ctx.beginPath();
  ctx.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

// Função que roda o loop do jogo, chamando atualizar e desenhar a cada frame
function loopDoJogo() {
  atualizar(); // Atualiza a lógica do jogo
  desenhar();  // Desenha os elementos na tela

  // Continua o loop enquanto o jogo não acabou
  if (!jogoAcabou) {
    requestAnimationFrame(loopDoJogo); // Chama o loop novamente no próximo frame
  }
}

// Começa o jogo chamando o loop pela primeira vez
loopDoJogo();