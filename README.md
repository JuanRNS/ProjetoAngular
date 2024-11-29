# ProjetoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

#####################################################################################################################################

# 1. VISÃO GERAL DO PROJETO
O projeto Grupo América se trata de um projeto da disciplina de Front-end, sobre um grupo de postos de gasolina com origem na cidade de Caruaru, Pernambuco, atua no mercado de combustíveis desde 2001, consolidando-se como uma referência em qualidade e atendimento no setor. Com mais de duas décadas de experiência, a empresa se destaca pela confiabilidade de seus serviços e pelo compromisso em atender às necessidades dos seus clientes de maneira eficiente e moderna.

Diante disto, o grupo está se inclinando para o digital, e consequentemente precisa exibir seus produtos e o que seus postos oferecem para os clientes. Foi feita uma página informativa sobre o grupo e seus produtos, sobre suas conveniências próprias e shell select, formulário para trabalhar no grupo e contato direto via e-mail. Também é disponibilizado emails alternativos, página do instagram e telefone.


# 2. TECNOLOGIAS UTILIZADAS

HTML5: Para estruturação semântica do conteúdo.
CSS3: Para estilização e responsividade da interface.
TypeScript: Para melhorar a qualidade do código e garantir um desenvolvimento mais seguro com tipos estáticos.
AngularJS: Para organização do código front-end, criando componentes e controladores.
Leaflet: Biblioteca para exibição de mapas interativos, com geolocalização dos postos de gasolina.
Node.js: Para manipulação dos formulários e envio de dados no programa "Trabalho Conosco".

# ESTRUTURA DE DIRETÓRIOS
/root
│
├── /assets           
│
├── /css                
│
├── /ts                  
│   ├── /angular        
│   └── /leaflet         
│
├── /node_modules
│
├── /server 
│ ├── /controllers 
│ ├── /routes 
│ └── /app.js             
│
└── /templates
│   ├── tela-principal.component.html    
│   ├── pagina-principal.component.html
│   ├── pop-up.component.html
│   ├── promocoes.component.html 
│   ├── mapas.component.html 
│   ├── leaflet-map.component.html 
│   ├── renderiza-mapas.component.html 
│   ├── forms-contato.component.html 
│   ├── forms-trabalhe.component.html 
│   └── footer.component.html    

# 3. FUNCIONALIDADES IMPLEMENTADAS

# 3.1 Pop-ups Explicativos sobre os Tipos de Combustíveis
Foi implementada uma funcionalidade de pop-ups interativos usando TypeScript e AngularJS para fornecer explicações detalhadas sobre os diferentes tipos de combustíveis oferecidos nos postos.
Quando o usuário clicar em um tipo de combustível, um pop-up aparece com informações como composição, benefícios e recomendações de uso.
# Bibliotecas utilizadas:
# AngularJS: Para estruturação do controle e manipulação dos dados.
# CSS3: Para animações suaves dos pop-ups.
# TypeScript: Para garantir a tipagem e maior robustez no controle dos dados exibidos.
# 3.2 Localização dos Postos no Mapa Interativo
Foi implementada uma funcionalidade de mapa interativo utilizando a biblioteca Leaflet. O mapa exibe a localização de todos os postos de gasolina da rede, permitindo ao usuário visualizar onde estão localizados em relação à sua posição atual.
Funcionalidades adicionais:
Marcadores nos postos.
Capacidade de mostrar a distância de um posto até o usuário.
Utilização da geolocalização do navegador para determinar a posição do usuário.
# 3.3 Formulário "Trabalho Conosco"
O formulário foi desenvolvido utilizando HTML5 e CSS3 com validação em front-end e integração com Node.js para envio de dados para o backend.
O formulário coleta informações como nome, e-mail, telefone, experiências profissionais e arquivo do currículo.
Node.js é responsável por receber o formulário e enviar os dados por e-mail para a equipe de recrutamento do grupo de postos.

# 4. FLUXO DE DESENVOLVIMENTO

# 4.1 Preparação do Ambiente e Execução

Instalação de Dependências
Inicialize o projeto instalando todas as dependências necessárias com o npm. Execute o comando:


npm install

Compilação do Código TypeScript
O código TypeScript é automaticamente compilado para JavaScript quando você rodar:

npm run build

Execução do Servidor Local
Para rodar o servidor localmente e visualizar o projeto, use o seguinte comando:


npm run serve

Configuração do Servidor Node.js
Se você estiver usando formulários Node.js, será necessário configurar um servidor Node.js local ou remoto para processar os envios.


# 4.2 Ordem de Produção das Páginas e Componentes

# Estrutura Inicial
Começamos a construção do projeto criando a estrutura básica de layout com HTML5 e CSS3 para as páginas principais:

# Página Principal (pagina-principal.component.html): Esta será a página de entrada do site, com elementos como navegação, banners e links para outras seções do site.

# ooter (footer.component.html): Adicione o rodapé com informações de contato, links para redes sociais, entre outros detalhes importantes.

# Desenvolvimento dos Componentes Interativos
Depois de estabelecer a estrutura básica, desenvolvemos os componentes dinâmicos e interativos, utilizando TypeScript e AngularJS para gerenciamento de dados e interações:

Pop-up (pop-up.component.html): Implementamos os pop-ups informativos que explicam os diferentes tipos de combustíveis. Este componente pode ser ativado por interações do usuário (como cliques ou hover).
Mapas (mapas.component.html): Criamos o componente principal que incluirá a visualização dos mapas interativos.
Leaflet Map (leaflet-map.component.html): Este componente específico foi responsável por renderizar o mapa usando a biblioteca Leaflet, mostrando a localização dos postos de gasolina.
Renderiza Mapas (renderiza-mapas.component.html): Responsável por renderizar os dados no mapa interativo, como a posição exata dos postos e a marcação desses locais.

# Formulários de Contato e Recrutamento
Após os componentes interativos, foque nos formulários de contato:

Formulário de Contato (forms-contato.component.html): Este componente permite que os usuários entrem em contato com a empresa. Pode incluir campos como nome, e-mail e mensagem.

Formulário "Trabalho Conosco" (forms-trabalhe.component.html): Este formulário será usado para os candidatos enviarem informações para se candidatar a vagas. Deve coletar dados como nome, e-mail, telefone, experiências anteriores e CV.

# Integração e Finalização
Após o desenvolvimento dos componentes, foram integrados nas páginas principais de forma a garantir que a navegação entre as seções funcione corretamente. Além disso, verificamos o layout responsivo e a interação entre os componentes.

# 5. CONSIDERAÇÕES FINAIS

# 5.1 Melhorias Futuras

Mapas: Implementar funcionalidade para mostrar o tráfego em tempo real no mapa, trazendo a biblioteca do google maps.
Desempenho: Melhorar a performance no carregamento das páginas, especialmente nas interações com o mapa.
Acessibilidade: Tornar o site mais acessível, implementando controles de teclado para navegação.
Adição de componentes: Adicionar páginas de notícias relacionadas a carros e combustíveis, especialmente referentes aos parceiros do grupo.

# 5.2 Problemas Conhecidos

Em alguns navegadores antigos, a funcionalidade de geolocalização do Leaflet pode não funcionar corretamente. Recomenda-se utilizar navegadores atualizados para uma experiência melhor.

# 5.3 Conclusão

Este projeto, embora tenha sido desenvolvido com base em um conceito real de um grupo de postos de gasolina, é uma aplicação acadêmica criada para fins de apresentação e aprendizado. Ele foi desenvolvido por alunos do 1º período do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de aplicar os conceitos iniciais adquiridos ao longo do semestre, como a utilização de HTML5, CSS3, TypeScript, AngularJS e PHP.
Embora o sistema apresente funcionalidades como exibição de mapas interativos, informações dinâmicas sobre combustíveis e formulários de contato, ele tem o intuito de ser utilizado em produção por uma empresa real. Ao mesmo tempo, foi elaborado como uma ferramenta de aprendizagem, permitindo aos alunos participantes praticar a integração de diversas tecnologias, o desenvolvimento de componentes interativos e o trabalho colaborativo em projetos de software.
O projeto demonstra a capacidade dos alunos de aplicar as tecnologias e boas práticas aprendidas até o momento, mas também serve como um ponto de partida para futuras melhorias e aprofundamento de conhecimentos em estágios mais avançados do curso.


# 6. LICENÇA
Este projeto é licenciado sob a Licença MIT. 