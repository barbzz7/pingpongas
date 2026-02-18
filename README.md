# 🏓 Jogo Pong – JavaScript com Canvas

Projeto desenvolvido em **JavaScript** utilizando o elemento **HTML Canvas**, com o objetivo de praticar lógica de programação, animações, eventos de teclado e detecção de colisões.

O jogo consiste em controlar uma **raquete** e rebater a **bola** para marcar pontos. O jogo termina quando a bola ultrapassa o limite esquerdo da tela.

---

## 🎯 Objetivo do Jogo

- Controlar a raquete usando o teclado
- Rebater a bola para não deixá-la sair da tela
- Acumular o maior número de pontos possível
- Praticar lógica e conceitos básicos de desenvolvimento de jogos

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **JavaScript**
- **Canvas API**
- Manipulação de eventos do teclado

---

## 📂 Estrutura Básica


---

## 🎮 Controles do Jogo

- **⬆️ Seta para cima:** move a raquete para cima  
- **⬇️ Seta para baixo:** move a raquete para baixo  

---

## ⚙️ Como o Jogo Funciona

1. O canvas é criado e utilizado como área do jogo.
2. O jogador controla uma raquete posicionada no lado esquerdo da tela.
3. A bola se move automaticamente e rebate nas paredes.
4. Quando a bola encosta na raquete:
   - Ela muda de direção
   - A pontuação aumenta
5. Se a bola sair pela esquerda da tela:
   - O jogo termina
   - A pontuação final é exibida
   - A página é recarregada para reiniciar o jogo

---

## 📌 Principais Elementos do Código

### 🏓 Raquete
- Controlada pelo teclado
- Possui posição, tamanho e velocidade

### ⚪ Bola
- Movimento automático
- Rebote nas paredes e na raquete
- Detecta colisões

### 📊 Pontuação
- Incrementada a cada colisão da bola com a raquete
- Exibida em tempo real na tela

---

## 🔁 Loop do Jogo

O jogo utiliza `requestAnimationFrame()` para:
- Atualizar a lógica do jogo
- Desenhar os elementos no canvas
- Criar uma animação fluida

---

## 🛑 Condição de Fim de Jogo

- O jogo termina quando a bola ultrapassa o limite esquerdo do canvas
- Um alerta mostra a pontuação final
- A página é recarregada automaticamente

---

## 📊 Status do Projeto

✅ Concluído  
🎓 Projeto educacional para prática de JavaScript e lógica de jogos

---

## 👩‍💻 Autora

**Érica Barbosa**  
Estudante de Desenvolvimento de Sistemas  
GitHub: [barbzz7](https://github.com/barbzz7)

---

## 📚 Observações

Este projeto foi desenvolvido com fins acadêmicos, focando no aprendizado de:
- Canvas API
- Eventos de teclado
- Animações
- Lógica de colisão
- Estrutura básica de jogos 2D
