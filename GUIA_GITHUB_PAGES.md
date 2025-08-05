# Guia para Publicar no GitHub Pages

Este guia irá ajudá-lo a publicar seu painel de atendimentos no GitHub Pages para que ele fique disponível online.

## Passo 1: Criar um Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login em sua conta
2. Clique no botão "New" ou "+" no canto superior direito
3. Nomeie seu repositório como `total-geral-de-atendimentos`
4. Marque a opção "Public" (necessário para GitHub Pages gratuito)
5. Clique em "Create repository"

## Passo 2: Fazer Upload dos Arquivos

### Opção A: Via Interface Web do GitHub
1. No seu novo repositório, clique em "uploading an existing file"
2. Arraste e solte todos os arquivos do projeto:
   - `index.html`
   - `estilos.css`
   - `script_reintegrated.js`
   - `README.md`
   - `GUIA_GITHUB_PAGES.md` (este arquivo)
3. Adicione uma mensagem de commit como "Adicionar arquivos do painel de atendimentos"
4. Clique em "Commit changes"

### Opção B: Via Git (linha de comando)
```bash
git clone https://github.com/seu-usuario/total-geral-de-atendimentos.git
cd total-geral-de-atendimentos
# Copie todos os arquivos para esta pasta
git add .
git commit -m "Adicionar arquivos do painel de atendimentos"
git push origin main
```

## Passo 3: Ativar GitHub Pages

1. No seu repositório, vá para a aba "Settings"
2. Role para baixo até encontrar a seção "Pages" no menu lateral
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main" (ou "master" se for o caso)
5. Deixe a pasta como "/ (root)"
6. Clique em "Save"

## Passo 4: Acessar seu Site

Após alguns minutos, seu site estará disponível em:
```
https://seu-usuario.github.io/total-geral-de-atendimentos/
```

O GitHub irá mostrar o link exato na seção Pages das configurações.

## Dicas Importantes

- **Tempo de Deploy**: Pode levar alguns minutos para o site ficar online
- **Atualizações**: Sempre que você fizer mudanças nos arquivos, o site será atualizado automaticamente
- **Domínio Personalizado**: Você pode configurar um domínio próprio nas configurações do Pages
- **HTTPS**: O GitHub Pages fornece HTTPS automaticamente

## Solução de Problemas

- **Site não carrega**: Verifique se o arquivo `index.html` está na raiz do repositório
- **Erro 404**: Confirme se o GitHub Pages está ativado e se a branch correta está selecionada
- **Mudanças não aparecem**: Aguarde alguns minutos ou force a atualização do cache (Ctrl+F5)

## Estrutura Final do Repositório

```
total-geral-de-atendimentos/
├── index.html
├── estilos.css
├── script_reintegrated.js
├── README.md
└── GUIA_GITHUB_PAGES.md
```

Agora seu painel de atendimentos estará disponível online para qualquer pessoa acessar!

