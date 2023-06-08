# Projeto Tryunfo

O Tryunfo é um projeto desenvolvido em React que permite a criação de cartas de trunfo.

## Funcionalidades

- Criação de cartas de trunfo personalizadas
- Definição de atributos para cada carta
- Comparação de atributos

## Dependências

O projeto utiliza as seguintes dependências:

- `react`: Biblioteca principal para o desenvolvimento de interfaces de usuário em React.
- `react-dom`: Responsável por manipular a árvore de elementos do DOM para renderizar os componentes React.
- `react-scripts`: Conjunto de scripts e configurações predefinidos para criar, desenvolver e executar aplicativos React.
- `@testing-library/jest-dom`: Biblioteca de suporte para testes com Jest, oferecendo funcionalidades extras para asserções DOM.
- `@testing-library/react`: Biblioteca de utilidades para testes unitários de componentes React.
- `@testing-library/user-event`: Biblioteca que fornece funções de simulação de eventos do usuário para testes de integração.

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  }
```

## Scripts

O projeto possui os seguintes scripts:

- `start`: Inicia o aplicativo em ambiente de desenvolvimento.
- `build`: Realiza o build do aplicativo para produção.
- `test`: Executa os testes utilizando o Jest.
- `eject`: Remove a dependência do react-scripts e permite configurar o projeto manualmente.
- `lint:styles`: Executa a verificação de linting nos arquivos CSS utilizando o Stylelint.
- `lint`: Executa a verificação de linting nos arquivos JavaScript e JSX utilizando o ESLint.

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint:styles": "npx stylelint '**/*.css'",
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json . --ext .js,.jsx"
  }
```

## Configuração do ESLint

O projeto utiliza a configuração "react-app" do ESLint, que é uma configuração padrão recomendada para projetos React.

## Browserslist

O projeto possui a seguinte configuração do Browserslist:

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

## Dependências de Desenvolvimento

Além das dependências mencionadas acima, o projeto possui as seguintes dependências de desenvolvimento:

- `@testing-library/dom`: Biblioteca de utilidades para testes DOM.
- `eslint-config-trybe-frontend`: Configuração de linting específica da Trybe para projetos frontend.
- `prop-types`: Biblioteca para checagem de tipos de propriedades em componentes React.
- `stylelint`: Ferramenta de linting para estilos CSS.
- `stylelint-config-standard`: Configuração padrão para o stylelint.
- `stylelint-order`: Plugin para stylelint que impõe uma ordem específica para as propriedades CSS.

```json
"devDependencies": {
    "@testing-library/dom": "^8.17.1",
    "eslint-config-trybe-frontend": "1.3.1",
    "prop-types": "^15.8.1",
    "stylelint": "^14.10.0",
    "stylelint-config-standard": "^27.0.0",
    "stylelint-order": "5.0.0"
  }
```