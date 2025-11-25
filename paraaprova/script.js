const btn = document.getElementById("btnCalcular");
const mensagem = document.getElementById("mensagem");


function calcularMedia() {
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);

    let notas = [n1, n2, n3];

    
    if (notas.includes(0) || notas.includes("")) {
        mensagem.innerText = "Preencha todas as notas corretamente!";
        return;
    }

   
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    let media = soma / notas.length;

        if (media >= 7) {
        mensagem.innerHTML = `Média: <strong>${media.toFixed(2)}</strong><br>Você está <strong style="color:green">APROVADO!</strong>`;
    } else {
        mensagem.innerHTML = `Média: <strong>${media.toFixed(2)}</strong><br>Você está <strong style="color:red">REPROVADO!</strong>`;
    }
}


btn.addEventListener("click", calcularMedia);

