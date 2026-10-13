# Revisão técnica anterior ao commit

Data: 12/10/2026. Branch: `main`. Base sincronizada: `ef0362d`.

## Escopo e arquitetura

Revisão dos cinco HTMLs, dos cinco CSSs, dos sete JavaScripts locais, do script inline do protótipo, das imagens, das referências locais e do estado do Git.

O projeto é uma landing page estática baseada no Spectral/HTML5 UP. Não possui backend, autenticação, banco de dados, pipeline de build ou testes automatizados preexistentes. Orçamentos são encaminhados ao WhatsApp. Google Fonts e as páginas externas de parceiros exigem internet; as fotos e logos são servidas localmente.

O protótipo usa os estilos existentes e uma folha de sobrescritas isolada. A versão anterior continua disponível em `inovaline.html`. `index.html` permanece como a demonstração Spectral; o protótipo não foi promovido à página inicial.

## Implementações incluídas

- Cabeçalho com logo local, nome maior, transição suave e adaptação para celular.
- Projetos em cards com superfície escura semitransparente, fotos inteiras, categorias e links de orçamento.
- Grade de serviços com última linha centralizada.
- Oito parceiros em cartões, com imagens locais, nomes, links e indicação acessível de abertura em nova aba.
- Fundo fotográfico contínuo no layout móvel e respeito a movimento reduzido nas transições do cabeçalho e do interruptor.
- Fontes dos arquivos de marca documentadas junto às imagens.

## Correções feitas na revisão

- Removidas declarações de CSS substituídas durante as iterações do protótipo.
- Alternância dos projetos baseada na posição das seções, evitando que o cabeçalho adicionado inverta fotos e textos.
- Corrigido o escape de `&` na URL do Google Fonts nas duas páginas Inovaline, sem mudar a URL interpretada pelo navegador.
- Links de orçamento dos projetos integrados à rolagem existente.
- Interruptor sincroniza `aria-pressed`, texto e `aria-hidden` das imagens diurnas/noturnas.
- Menu do protótipo recebe nome acessível no celular e foco visível. O script compartilhado identifica o botão de fechar e habilita fechamento por Escape nas páginas que usam o menu.

## Git e preservação do trabalho

Foi criado um backup dos arquivos locais do protótipo fora do repositório antes da sincronização.

Executados `git fetch origin` e `git pull --ff-only origin main`. O remoto respondeu `Already up to date`; nenhuma atualização precisou ser integrada. Não havia commits divergentes nem entradas de conflito no índice.

Os arquivos revisados ficam preparados no índice. Nenhum commit ou push foi executado.

## Validações

- HTML5: cinco páginas analisadas, sem erros de parsing após os ajustes.
- CSS: cinco folhas analisadas, incluindo declarações e blocos condicionais, sem erros de parsing.
- JavaScript: sete arquivos e um script inline compilados para verificação de sintaxe, sem executá-los no navegador.
- Interruptor: teste em contexto JavaScript isolado com DOM simulado; ligar, desligar, rótulo, atributos acessíveis e ausência dos controles passaram.
- Recursos: 68 referências locais únicas encontradas em HTML/CSS; arquivos presentes.
- HTTP: 71 requisições a um servidor temporário em `127.0.0.1`, cobrindo raiz, páginas Inovaline e recursos locais; todas retornaram HTTP 200 com conteúdo.
- Imagens: 47 arquivos raster abertos e verificados, sem corrupção.
- IDs, âncoras internas, alternativas textuais de imagens e proteção de links em nova aba verificados.
- Verificação final do Git para conflitos e erros de whitespace.

Ferramentas auxiliares de parsing e inspeção de imagem foram instaladas apenas em uma pasta temporária fora do projeto. Não são dependências para executar o site.

## Limites e próximos cuidados

- Não houve navegador conectado para teste visual automatizado ou execução completa do menu com DOM real. A aprovação visual anterior do usuário é a referência; recomenda-se uma conferência final em desktop e celular após estas correções técnicas.
- Os testes do interruptor usam DOM simulado e não comprovam o comportamento visual das animações. Os testes HTTP não comprovam entrega de mensagens pelo WhatsApp.
- Logos do Instagram têm resolução de 100 × 100 e são exibidas em tamanho discreto. A imagem do perfil Kixiki Hair é uma foto do salão, não uma logo. A marca Inovaline foi preservada no enquadramento do perfil; um arquivo oficial maior permitiria melhor reprodução futura.
- O inventário completo de imagens soma aproximadamente 10,36 MiB; esse valor não é o tamanho de uma visita. Conversão para WebP/AVIF e revisão de carregamento podem melhorar o desempenho em conexão móvel, em uma mudança separada.
- jQuery 3.6.0 e os plugins do template foram preservados. Não foi realizada auditoria externa de vulnerabilidades nem atualização de dependências nesta revisão.
- Acessibilidade foi revisada pontualmente; não houve certificação WCAG nem validação completa de navegação com leitor de tela, contraste ou gerenciamento de foco do painel.
- As páginas de exemplo continuam no repositório. Escolher a página inicial, domínio e metadados de publicação é uma etapa posterior.
