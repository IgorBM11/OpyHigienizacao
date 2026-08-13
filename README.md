# Opy Health × Starbridge — Site de apresentação

Site estático (HTML/CSS/JS puro, sem build). Para publicar no GitHub Pages:

## 1. Criar o repositório
1. Acesse [github.com/new](https://github.com/new)
2. Dê um nome ao repositório (ex.: `opy-health-status-projeto`)
3. Deixe como **Public** (necessário para GitHub Pages gratuito) e crie

## 2. Subir os arquivos
Na página do repositório recém-criado:
1. Clique em **"uploading an existing file"** (ou Add file → Upload files)
2. Arraste **o conteúdo** desta pasta — `index.html`, a pasta `css/`, a pasta `js/` e a pasta `assets/` — não o `.zip` em si, e não uma pasta-mãe envolvendo tudo
3. Clique em **Commit changes**

## 3. Ativar o GitHub Pages
1. Vá em **Settings → Pages** (menu lateral)
2. Em "Build and deployment" → **Source**, selecione **Deploy from a branch**
3. Em **Branch**, selecione `main` e a pasta `/ (root)` → **Save**
4. Aguarde ~1 minuto. O link do site aparece no topo da página, no formato:
   `https://<seu-usuário>.github.io/<nome-do-repositório>/`

Pronto — esse link pode ser enviado diretamente ou aberto na hora da apresentação.

## Estrutura
```
index.html      → a página em si (4 seções + fechamento)
css/style.css   → estilos (paleta, tipografia, layout)
js/main.js      → navegação do menu e destaque da seção ativa
assets/         → logos Starbridge e Opy Health
```
