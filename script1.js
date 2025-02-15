document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#produto-form");
    const tabela = document.querySelector("#tabela-produtos");
    const limparBtn = document.querySelector("#limpar");

    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    function atualizarTabela() {
        tabela.innerHTML = "";
        produtos.forEach((produto, index) => {
            let row = tabela.insertRow();
            row.innerHTML = `
                <td>${produto.codigo}</td>
                <td>${produto.marca}</td>
                <td>${produto.tipo}</td>
                <td>${produto.categoria}</td>
                <td>${produto.preco}</td>
                <td>${produto.custo}</td>
                <td>${produto.obs}</td>
            `;
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let produto = {
            codigo: document.querySelector("#codigo").value.trim(),
            marca: document.querySelector("#marca").value.trim(),
            tipo: document.querySelector("#tipo").value.trim(),
            categoria: document.querySelector("#categoria").value.trim(),
            preco: document.querySelector("#preco").value.trim(),
            custo: document.querySelector("#custo").value.trim(),
            obs: document.querySelector("#obs").value.trim(),
        };

        // A única validação agora é para campos obrigatórios (código, marca, tipo, categoria)
        if (produto.codigo && produto.marca && produto.tipo && produto.categoria) {
            produtos.push(produto);
            localStorage.setItem("produtos", JSON.stringify(produtos));
            atualizarTabela();
            form.reset();
        } else {
            alert("Preencha todos os campos obrigatórios!");
        }
    });

    limparBtn.addEventListener("click", function () {
        localStorage.removeItem("produtos");
        produtos = [];
        atualizarTabela();
    });

    atualizarTabela();
});
