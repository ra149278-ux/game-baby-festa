MERGE REPRODUTIVO — PWA

Arquivos:
- index.html: jogo completo
- manifest.webmanifest: instalação como app
- sw.js: cache/offline
- assets/: imagens fornecidas, ícones e vídeo de vitória

Regras implementadas:
- Peças com tamanhos progressivos.
- Duas peças iguais formam a próxima.
- Queda rápida.
- Vitória ao formar “Bebê saudável”.
- Vídeo MP4 de vitória automático.
- 2 chances de recuperação antes do Game Over.
- 1 chacoalhada gratuita, sem perder chance.
- 1 substituição de estrutura por partida.
- Pontos, moedas, som, responsividade e suporte offline.

Para testar corretamente o PWA/service worker, publique a pasta em HTTPS
(por exemplo, GitHub Pages) ou use um servidor local. Abrir index.html diretamente
permite jogar, mas a instalação/offline depende de contexto seguro.

ATUALIZAÇÃO v2:
- Física acelerada: peças caem e se fundem mais rapidamente.
- Botão Libras com apoio visual/instruções do jogo.
- Leitura em voz alta (TTS) em português.
- Alto contraste.
- Aumento de fonte.
- ARIA/live regions para tecnologias assistivas.
- Efeitos visuais adicionais para maior imersão.
