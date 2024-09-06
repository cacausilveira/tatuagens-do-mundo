function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa){
      section.innerHTML = "<p style='color: white;'>Nada foi encontrado. Você precisa digitar sua busca.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
      
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultado = "";
    let titulo = "";
    let descricao ="";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Cria uma nova div para cada resultado, formatando-a com as informações do dado
      resultado += `
        <div class="item-resultado">
          <h2 class="item-resultado h2">
            <a target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">${dado.linkTitulo}</a>
        </div>`;
      }  
   
    }
    
    if (!resultado){
      resultado = "<p style='color: white;'>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultado;
  }


// console.log(dados);


