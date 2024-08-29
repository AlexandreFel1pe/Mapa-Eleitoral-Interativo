const url = "/data.json";
let resultado = {};
let ano = "2022";
let turno = "1";

async function mostrarCandidatos() {
    resultado = await fetch(url).then(resposta => resposta.json());

    const candidato = document.querySelector(".candidatos");
    candidato.innerHTML = null;
    for (var i = 0; i < resultado.eleicoes.length; i++) {
        if (resultado.eleicoes[i].ano === ano) {
            for (var k = 0; k < resultado.eleicoes[i].turno.length; k++) {
                if (resultado.eleicoes[i].turno[k].turno === turno) {
                    for (var j = 0; j < resultado.eleicoes[i].turno[k].candidato.length; j++) {
                
                        candidato.innerHTML += `
                                <div class="candidato">
                                    <div>
                                    <img src="images/Bolsonaro.jpg" alt="">
                                </div>
                
                                <div class="nome-partido">
                                    <h2>${resultado.eleicoes[i].turno[k].candidato[j].candidato}</h2>
                
                                    <p>${resultado.eleicoes[i].turno[k].candidato[j].partido}</p>
                
                                    <div class="porcentagem">
                                        <div style="width: ${resultado.eleicoes[i].turno[k].candidato[j].porcentagem}"></div>
                                    </div>
                                </div>
                
                                <div class="resultado">
                                    <strong>
                                    ${resultado.eleicoes[i].turno[k].candidato[j].porcentagem}
                                    </strong>
                
                                    <span>${resultado.eleicoes[i].turno[k].candidato[j].votos}</span>
                
                                    <p>
                                        votos
                                    </p>
                                </div>
                                </div>
                        `
                    }
                }
            }
        }
    }
}

mostrarCandidatos();

console.log(resultado);

function adicionaEventoInput() {
    const botaoTurno = document.querySelectorAll(".menu-lateral .turno input");

    botaoTurno.forEach(input => {
        input.addEventListener("click", (evento) => {
            turno = evento.target.id
            mostrarCandidatos();
        });
    })

    const botaoAno = document.querySelectorAll(".menu-lateral .ano-eleicao input");

    botaoAno.forEach(input => {
        input.addEventListener("click", (evento) => {
            ano = evento.target.id
            mostrarCandidatos();
        });
    })
}

adicionaEventoInput();
