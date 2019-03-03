# webpackconfig
![alt text](https://cdn-images-1.medium.com/max/1600/1*BxSBCuP7IRFz4pZCSVBxlQ.png)

Esse repositório conta com uma configuração básica do webpack, para projetos iníciais.

# Configuração
Clonar o repositório com o comando $ git clone https://github.com/rafaelso86/webpackconfig.git
Dentro do diretório do projeto rodar o comando $ npm init -y
Rodar o comando $ npm install para instalar as dependências do projeto

## Dependências do projeto
 - "cross-env": "^5.2.0",
 - "css-loader": "^2.1.0",
 - "file-loader": "^3.0.1",
 - "optimize-css-assets-webpack-plugin": "^5.0.1",
 - "style-loader": "^0.23.1",
 - "uglifyjs-webpack-plugin": "^1.2.4",
 - "webpack": "^4.29.6",
 - "webpack-cli": "^3.2.3",
 - "webpack-dev-server": "^3.2.1"
 - "mini-css-extract-plugin": "^0.5.0",
 - "node-sass": "^4.11.0",
 - "sass-loader": "^7.1.0",
 - "uglify-js": "^3.4.9"

# Executando o projeto
Em modo desenvolvedor executar $ npm start para executar o projeto em localhost:9000
Para executar a versão do projeto em modo de produção. executar o comando $ npm run build. Assim você terá os arquivos css e js minificados na pasta public.
