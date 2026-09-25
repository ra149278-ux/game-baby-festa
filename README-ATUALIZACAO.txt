MERGE REPRODUTOR — atualização de menu e acessibilidade

Arquivos para substituir na RAIZ do repositório:
- index.html
- manifest.webmanifest
- sw.js

Mantenha a pasta assets/ existente sem apagar.

O que foi adicionado:
- Menu principal antes do gameplay.
- Botões Iniciar jogo, Como jogar, Sobre o MUDI-UEM e Configurações.
- Créditos completos das estudantes.
- Configurações persistentes em localStorage.
- Animações da interface on/off.
- Tamanho de fonte 90–130%.
- Alto contraste.
- Redução de efeitos visuais.
- Efeitos sonoros on/off e controle de volume.
- Reinício com confirmação.
- Botão Menu dentro do gameplay.
- Navegação sem recarregar a página.
- Melhorias de teclado, foco e ARIA.
- Layout responsivo para desktop, tablet e celular em retrato/paisagem.
- Service worker atualizado (cache v3) e inclusão dos MP3 no cache offline.

IMPORTANTE:
Após publicar no GitHub Pages, se o navegador ainda mostrar a versão antiga, feche/reabra o PWA ou atualize a página. O service worker v3 limpa o cache anterior na ativação.
