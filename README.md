# Inovaline — site e protótipo

Site estático em HTML, CSS e JavaScript. Não requer Node.js, npm, banco de dados ou compilação.

## Executar localmente

No terminal PowerShell do VS Code, dentro da pasta do projeto:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

- Protótipo com o visual revisado: http://localhost:8000/inovaline-prototipo.html
- Página anterior da Inovaline: http://localhost:8000/inovaline.html
- A raiz http://localhost:8000/ ainda abre o `index.html` do template Spectral.

Encerre o servidor com `Ctrl + C`. Após editar estilos, atualize com `Ctrl + F5`.

## Organização

- `inovaline-prototipo.html`: cabeçalho, projetos, serviços, parceiros, FAQ e orçamento do protótipo.
- `assets/css/inovaline-prototipo.css`: ajustes visuais exclusivos do protótipo, carregados após os estilos anteriores.
- `inovaline.html` e `assets/css/inovaline.css`: versão anterior da página da empresa.
- `assets/css/main.css` e `assets/js/`: estilos e bibliotecas do template Spectral.
- `images/inovaline/`: fotos de projetos e imagem de perfil da Inovaline.
- `images/partners/`: imagens locais dos parceiros e registro das fontes.
- `index.html`, `generic.html` e `elements.html`: páginas originais do template.
- `docs/REVISAO.md`: revisão técnica e validações anteriores ao commit.

As fontes Big Shoulders e Archivo são carregadas do Google Fonts; existem fontes alternativas no CSS. Os links de orçamento abrem o WhatsApp. Não existe processamento próprio de pedidos ou formulário com backend.

O protótipo permanece separado. Torná-lo a página inicial deve ser uma alteração posterior e explícita.

## Commit manual

Os arquivos revisados foram adicionados à área de preparação do Git. Confira antes de confirmar:

```powershell
git status
git diff --cached --stat
git diff --cached
git commit -m "Adiciona protótipo visual da Inovaline com marcas parceiras"
```

O histórico e a licença do template permanecem em `README.txt` e `LICENSE.txt`.
