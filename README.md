# Dashboard do Distrito Sanitário Eldorado

Dashboard interativo para análise de dados de atendimentos do Distrito Sanitário Eldorado - 1º Semestre 2025.

## 📊 Sobre o Projeto

Este dashboard foi desenvolvido para visualizar e analisar dados de atendimentos de saúde do Distrito Sanitário Eldorado durante o primeiro semestre de 2025. A aplicação oferece uma interface intuitiva com gráficos interativos e filtros dinâmicos para facilitar a análise dos dados.

### Funcionalidades Principais

- **Visualização de Dados**: Gráficos interativos mostrando distribuição de atendimentos por unidade, mês e categoria profissional (CBO)
- **Filtros Dinâmicos**: Filtros por unidade de saúde, CBO e mês para análises específicas
- **Exportação**: Funcionalidade de download dos dados em formato Excel
- **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **Total Geral**: Exibição do total de atendimentos com atualização automática baseada nos filtros

### Dados Incluídos

- **Período**: Janeiro a Junho de 2025
- **Total de Atendimentos**: 157.449
- **Unidades de Saúde**: 14 unidades diferentes
- **Categorias Profissionais**: 18 CBOs diferentes
- **Tipos de Gráficos**: Barras verticais, barras horizontais e gráfico de rosca

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização com Tailwind CSS
- **JavaScript ES6**: Lógica da aplicação e manipulação de dados
- **Chart.js**: Biblioteca para criação de gráficos interativos
- **XLSX.js**: Biblioteca para exportação de dados em Excel
- **Font Awesome**: Ícones vetoriais

## 📁 Estrutura do Projeto

```
distrito-sanitario-eldorado/
├── index.html              # Página principal
├── styles.css              # Estilos personalizados
├── script.js               # Lógica da aplicação
├── README.md               # Este arquivo
└── GUIA_GITHUB_PAGES.md    # Guia completo de hospedagem
```

## 🌐 Como Hospedar no GitHub Pages

Para hospedar este dashboard no GitHub Pages, siga o guia detalhado disponível no arquivo `GUIA_GITHUB_PAGES.md`. O guia inclui:

1. Preparação do repositório GitHub
2. Upload dos arquivos
3. Configuração do GitHub Pages
4. Teste e verificação
5. Manutenção e atualizações
6. Solução de problemas comuns

## 💻 Como Usar Localmente

1. Faça download dos arquivos do projeto
2. Abra o arquivo `index.html` em um navegador web moderno
3. Explore os dados usando os filtros disponíveis
4. Use o botão "Excel" para exportar dados filtrados

## 📈 Principais Métricas

- **Unidade com Mais Atendimentos**: Jardim Bandeirantes (28.944 atendimentos)
- **CBO com Mais Atendimentos**: Técnico de Enfermagem (62.450 atendimentos)
- **Mês com Mais Atendimentos**: Maio (31.219 atendimentos)

## 🔧 Personalização

Para atualizar os dados ou personalizar o dashboard:

1. Edite o array `dadosOriginais` no arquivo `script.js`
2. Mantenha a estrutura de objetos com propriedades: unidade, cbo, jan, fev, mar, abr, mai, jun
3. Teste localmente antes de fazer upload das alterações

## 📞 Suporte

Para dúvidas sobre hospedagem no GitHub Pages, consulte o arquivo `GUIA_GITHUB_PAGES.md` que contém instruções detalhadas e soluções para problemas comuns.

## 📄 Licença

Este projeto é de domínio público e pode ser usado, modificado e distribuído livremente para fins educacionais e de saúde pública.

---

**Desenvolvido para o Distrito Sanitário Eldorado - 2025**

