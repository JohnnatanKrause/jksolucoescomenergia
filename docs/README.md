# JK Soluções

Repositório oficial do site institucional e sistema interno da **JK Soluções Ltda**.

---

## 📂 Estrutura do projeto

### 00 - SITE JK SOLUÇÕES/

- docs/ 
  * Diretrizes do site JK soluções.pdf 
  * README.md 
- site/ (site institucional) 
    * index.html 
    * sobre.html *
    * servicos.html 
    * diretrizes.html  
    * contato.html 
    * partials/ 
        * header-site.html 
        * footer-site.html 
    * assets/ 
        * css/ 
            * site.css 
        * js/ 
            * site.js 
        * img/ 
            * (imagens institucionais) 
* sistema/ (área restrita) 
    * login.html 
    * dashboard.html 
    * forms.html 
    * relatorios.html 
    * propostas.html 
    * laudos.html 
    * partials/ 
        * header-sistema.html 
        * footer-sistema.html 
    * assets/ 
        * css/ 
            * restrita.css 
            * forms.css 
            * relatorios.css 
            * propostas.css 
            * laudos.css 
            * pdf.css 
        * js/ 
            * restrita.js 
            * form.js 
            * relatorios.js 
            * propostas.js 
            * laudos.js 
            * pdf.js 
            * signature.js 
        * img/
        * (imagens internas) 
* assets/ (recursos globais) 
    * css/ 
        * global.css

## 🚀 Funcionalidades

### Site institucional
- Página inicial com slogan e identidade visual.
- Seções: Sobre, Serviços, Diretrizes, Contato.
- Formulário de contato com validação.

### Sistema interno (Área restrita)
- Login e dashboard.
- Formulários técnicos (check-lists).
- Relatórios técnicos em PDF.
- Propostas comerciais em PDF.
- Laudos técnicos.
- Captura de assinatura digital.

---

## 🛠️ Tecnologias
- **HTML5** e **CSS3** (modularizados).
- **JavaScript** (modularizado por responsabilidade).
- **Bibliotecas externas**: `html2pdf.js`, `jspdf`, `signature_pad`.

---

## 📌 Organização
- **site.js** → scripts gerais do institucional.
- **restrita.js** → scripts gerais da área restrita.
- **global.css** → estilos compartilhados entre site e sistema.
- **módulos específicos** → cada funcionalidade tem seu próprio CSS/JS.

---

## 📄 Diretrizes
As diretrizes de propósito, futuro e princípios da JK Soluções estão documentadas em  
`docs/Diretrizes do site JK soluções.pdf`.