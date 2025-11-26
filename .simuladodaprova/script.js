        let nomes = ["Michele (mãe)", "Alexandre (pai)", "Thiago (irmão)"];
        let momentos = ["Viagem", "Aniversário", "Domingo em família"];

    
        let lista = document.getElementById("listaFamilia");
        for (let i = 0; i < nomes.length; i++) {
            let li = document.createElement("li");
            li.innerText = nomes[i];
            lista.appendChild(li);
        }

        let familiares = [
            ["Michele", null],
            ["Alexandre", null],
            ["Thiago", null]
        ];
        console.log("Matriz da família (idades não informadas):", familiares);

        let pessoa = {
            nome: "Michele",
            hobby: "Cuidar da família"
        };
        console.log("Objeto pessoa:", pessoa);

        let contador = 1;
        while (contador <= 3) {
            console.log("Fato legal nº " + contador);
            contador++;
        }

        function mostrarMensagem() {
            let msg = document.getElementById("msg");
            if (msg.style.display === "none") {
                msg.style.display = "block";
            } else {
                msg.style.display = "none";
            }
        }

        function escolherMensagem() {
            let nome = prompt("Escolha: Michele, Alexandre ou Thiago");

            let texto = "";

            switch (nome) {
                case "Michele":
                    texto = "Michele é a base da família, cheia de amor e dedicação!";
                    break;
                case "Alexandre":
                    texto = "Alexandre é forte, presente e muito importante na família!";
                    break;
                case "Thiago":
                    texto = "Thiago traz alegria e energia para todos os dias!";
                    break;
                default:
                    texto = "Nome não encontrado!";
            }

            document.getElementById("msgFamiliar").innerText = texto;
        }

     
        function trocarTexto() {
            document.getElementById("hoverArea").innerText = "Você passou o mouse! 🌸";
        }

        function voltarTexto() {
            document.getElementById("hoverArea").innerText = "Passe o mouse aqui!";
        }