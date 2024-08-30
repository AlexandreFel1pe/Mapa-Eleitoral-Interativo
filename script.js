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


function adicionaEventoInput() {
    const botaoTurno = document.querySelectorAll(".menu-lateral .turno input");

    botaoTurno.forEach(input => {
        input.addEventListener("click", (evento) => {
            turno = evento.target.id
            mostrarCandidatos();
            criaDivComOsDadosDosEstados();
        });
    })

    const botaoAno = document.querySelectorAll(".menu-lateral .ano-eleicao input");

    botaoAno.forEach(input => {
        input.addEventListener("click", (evento) => {
            ano = evento.target.id
            mostrarCandidatos();
            criaDivComOsDadosDosEstados();
        });
    })
}

adicionaEventoInput();

async function criaDivComOsDadosDosEstados() {
    const divResultado = document.querySelector(".resultadoEstado");

    resultado = await fetch(url).then(resposta => resposta.json());

    var estado = {};

    for (var i = 0; i < resultado.eleicoes.length; i++) {
        for (var j = 0; j < resultado.eleicoes[i].turno.length; j++) {
            if ((resultado.eleicoes[i].ano === ano) && (resultado.eleicoes[i].turno[j].turno === turno)) {
                estado = resultado.eleicoes[i].turno[j].estado;
            }
        }
    }

    divResultado.innerHTML = null;

    divResultado.innerHTML = `
        <area onmouseover="Tip('${criaDiv("Acre", estado[0].candidato[0].candidato, estado[0].candidato[1].candidato, estado[0].candidato[0].votos, estado[0].candidato[1].votos, estado[0].candidato[0].porcentagem, estado[0].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Acre" title="Acre" href="" coords="17,137,32,144,52,149,68,157,83,162,88,165,83,171,75,177,68,180,58,179,49,178,51,162,41,167,32,169,23,161,16,145" shape="poly">
        <area onmouseover="Tip('${criaDiv("Alagoas", estado[1].candidato[0].candidato, estado[1].candidato[1].candidato, estado[1].candidato[0].votos, estado[1].candidato[1].votos, estado[1].candidato[0].porcentagem, estado[1].candidato[1].porcentagem)}')" onmouseout="UnTip()" href="" shape="poly" coords="421, 157, 413, 159, 405, 162, 395, 159, 388, 161, 398, 166, 404, 172, 407, 176, 412, 168, 418, 161" />
        <area onmouseover="Tip('${criaDiv("Amapa", estado[2].candidato[0].candidato, estado[2].candidato[1].candidato, estado[2].candidato[0].votos, estado[2].candidato[1].votos, estado[2].candidato[0].porcentagem, estado[2].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Amapa" title="Amapa" href="" coords="244,74,251,64,260,54,266,43,260,36,253,28,250,14,242,22,237,33,228,35,216,34,226,43,231,47,232,56,236,63" shape="poly">
        <area onmouseover="Tip('${criaDiv("Amazonas", estado[3].candidato[0].candidato, estado[3].candidato[1].candidato, estado[3].candidato[0].votos, estado[3].candidato[1].votos, estado[3].candidato[0].porcentagem, estado[3].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Amazonas" title="Amazonas" href="" coords="90,164,97,163,104,163,112,155,121,147,133,149,147,156,157,156,171,154,176,145,176,136,181,122,189,102,194,93,199,84,189,80,180,72,173,66,171,56,164,56,157,59,156,69,150,65,144,72,146,79,137,71,137,62,133,49,131,42,124,36,117,40,109,46,99,50,92,52,87,47,83,39,72,41,65,40,60,41,62,52,56,53,56,62,61,67,60,74,58,86,56,101,54,108,41,108,32,115,24,119,22,125,17,133,16,140,28,143,54,149,68,156,76,161,83,164" shape="poly">
        <area onmouseover="Tip('${criaDiv("Bahia", estado[4].candidato[0].candidato, estado[4].candidato[1].candidato, estado[4].candidato[0].votos, estado[4].candidato[1].votos, estado[4].candidato[0].porcentagem, estado[4].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Bahia" title="Bahia" href="" coords="312,171,304,179,305,187,305,196,306,207,308,215,308,222,316,218,326,214,332,220,339,220,352,223,357,228,368,232,364,240,366,248,371,256,379,254,379,244,381,233,381,224,381,210,383,202,390,199,396,189,390,184,390,178,392,171,387,160,378,155,372,156,364,162,359,156,350,160,344,164,335,163,332,171,327,177,316,179" shape="poly">
        <area onmouseover="Tip('${criaDiv("Ceara", estado[5].candidato[0].candidato, estado[5].candidato[1].candidato, estado[5].candidato[0].votos, estado[5].candidato[1].votos, estado[5].candidato[0].porcentagem, estado[5].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Ceara" title="Ceara" href="" coords="364,140,371,137,376,141,382,140,384,133,386,124,392,118,398,111,391,104,384,97,376,92,369,89,362,91,358,96,359,106,359,114,361,124,361,132" shape="poly">
        <area onmouseover="Tip('${criaDiv("Distrito Federal", estado[6].candidato[0].candidato, estado[6].candidato[1].candidato, estado[6].candidato[0].votos, estado[6].candidato[1].votos, estado[6].candidato[0].porcentagem, estado[6].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Distrito Federal" title="Distrito Federal" href="" coords="285,228,293,229,292,235,284,234" shape="poly">
        <area onmouseover="Tip('${criaDiv("Espirito Santo", estado[7].candidato[0].candidato, estado[7].candidato[1].candidato, estado[7].candidato[0].votos, estado[7].candidato[1].votos, estado[7].candidato[0].porcentagem, estado[7].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Espirito Santo" title="Espirito Santo" href="" coords="360,255,369,255,373,262,369,274,364,284,358,292,352,287,354,280,358,272,359,262" shape="poly">
        <area onmouseover="Tip('${criaDiv("Goias", estado[8].candidato[0].candidato, estado[8].candidato[1].candidato, estado[8].candidato[0].votos, estado[8].candidato[1].votos, estado[8].candidato[0].porcentagem, estado[8].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Goias" title="Goias" href="" coords="294,238,287,236,281,235,280,226,286,224,293,224,300,220,307,215,304,204,299,201,293,204,284,201,279,198,271,201,264,200,256,205,256,212,250,223,244,230,236,240,232,249,233,256,240,264,249,268,258,271,261,261,274,260,281,259,289,259,292,245,297,228" shape="poly">
        <area onmouseover="Tip('${criaDiv("Maranhão", estado[9].candidato[0].candidato, estado[9].candidato[1].candidato, estado[9].candidato[0].votos, estado[9].candidato[1].votos, estado[9].candidato[0].porcentagem, estado[9].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Maranhao" title="Maranhao" href="" coords="306,170,298,167,296,152,300,146,290,144,290,131,290,120,278,117,294,108,301,90,305,77,312,76,325,84,334,87,342,91,347,92,340,103,339,114,338,125,338,132,331,132,320,139,312,143,308,150,306,161" shape="poly">
        <area onmouseover="Tip('${criaDiv("Mato Grosso", estado[10].candidato[0].candidato, estado[10].candidato[1].candidato, estado[10].candidato[0].votos, estado[10].candidato[1].votos, estado[10].candidato[0].porcentagem, estado[10].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Mato Grosso" title="Mato Grosso" href="" coords="180,142,185,151,193,160,212,160,227,166,251,165,260,169,259,179,259,193,257,204,251,220,243,228,233,243,232,253,223,247,215,250,200,245,194,249,186,251,178,247,180,236,172,236,164,237,156,226,156,213,156,207,163,196,161,188,157,178,149,177,145,169,147,158,157,157,171,159,175,148" shape="poly">
        <area onmouseover="Tip('${criaDiv("Mato Grosso do Sul", estado[11].candidato[0].candidato, estado[11].candidato[1].candidato, estado[11].candidato[0].votos, estado[11].candidato[1].votos, estado[11].candidato[0].porcentagem, estado[11].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Mato Grosso do Sul" title="Mato Grosso do Sul" href="" coords="185,254,200,247,220,250,228,253,236,260,250,269,253,277,245,288,238,297,230,308,223,320,216,318,209,320,205,301,196,300,186,301,181,297,183,281,182,268" shape="poly">
        <area onmouseover="Tip('${criaDiv("Minas Gerais", estado[12].candidato[0].candidato, estado[12].candidato[1].candidato, estado[12].candidato[0].votos, estado[12].candidato[1].votos, estado[12].candidato[0].porcentagem, estado[12].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Minas Gerais" title="Minas Gerais" href="" coords="307,307,318,303,332,300,340,298,346,289,352,278,359,273,359,265,360,257,365,249,368,237,363,231,353,225,341,221,331,220,320,218,311,223,303,221,297,226,297,234,293,239,296,245,292,249,293,255,284,259,273,261,263,264,256,271,263,276,272,278,283,277,292,277,297,286,300,293,301,301" shape="poly">
        <area onmouseover="Tip('${criaDiv("Pará", estado[12].candidato[0].candidato, estado[13].candidato[1].candidato, estado[13].candidato[0].votos, estado[13].candidato[1].votos, estado[13].candidato[0].porcentagem, estado[13].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Para" title="Para" href="" coords="176,134,182,145,185,154,192,157,208,161,224,164,250,165,259,168,266,160,272,149,272,138,280,131,284,121,281,116,292,108,300,91,304,78,296,68,282,62,270,57,263,52,259,57,249,66,245,73,236,65,230,52,222,42,214,34,197,37,181,41,174,48,172,58,176,69,188,78,198,81,194,94,187,112,181,123" shape="poly">
        <area onmouseover="Tip('${criaDiv("Paraiba", estado[14].candidato[0].candidato, estado[14].candidato[1].candidato, estado[14].candidato[0].votos, estado[14].candidato[1].votos, estado[14].candidato[0].porcentagem, estado[14].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Paraiba" title="Paraiba" href="" coords="385,129,384,141,392,145,400,138,401,147,414,145,423,141,423,131,410,129,405,134,399,128" shape="poly">
        <area onmouseover="Tip('${criaDiv("Parana", estado[15].candidato[0].candidato, estado[15].candidato[1].candidato, estado[15].candidato[0].votos, estado[15].candidato[1].votos, estado[15].candidato[0].porcentagem, estado[15].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Parana" title="Parana" href="" coords="236,305,248,305,263,309,272,320,274,327,283,333,278,342,268,344,256,344,250,349,240,347,228,343,225,338,218,337,220,325,225,313" shape="poly">
        <area onmouseover="Tip('${criaDiv("Pernambuco", estado[16].candidato[0].candidato, estado[16].candidato[1].candidato, estado[16].candidato[0].votos, estado[16].candidato[1].votos, estado[16].candidato[0].porcentagem, estado[16].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Pernambuco" title="Pernambuco" href="" coords="364,161,358,156,362,148,364,141,372,139,380,143,388,145,400,141,397,147,405,147,416,142,423,142,420,155,411,156,403,161,394,156,386,160,378,154,371,157" shape="poly">
        <area onmouseover="Tip('${criaDiv("Piaui", estado[17].candidato[0].candidato, estado[17].candidato[1].candidato, estado[17].candidato[0].votos, estado[17].candidato[1].votos, estado[17].candidato[0].porcentagem, estado[17].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Piaui" title="Piaui" href="" coords="308,171,308,160,312,145,325,137,338,133,336,117,342,100,352,91,356,104,358,113,362,130,367,137,363,149,354,157,345,161,335,163,328,173,316,178" shape="poly">
        <area onmouseover="Tip('${criaDiv("Rio de Janiero", estado[18].candidato[0].candidato, estado[18].candidato[1].candidato, estado[18].candidato[0].votos, estado[18].candidato[1].votos, estado[18].candidato[0].porcentagem, estado[18].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Rio de Janeiro" title="Rio de Janeiro" href="" coords="348,287,355,291,359,300,351,305,342,309,332,309,324,309,320,304,331,301,339,298,346,293" shape="poly">
        <area onmouseover="Tip('${criaDiv("Rio Grande do Norte", estado[19].candidato[0].candidato, estado[19].candidato[1].candidato, estado[19].candidato[0].votos, estado[19].candidato[1].votos, estado[19].candidato[0].porcentagem, estado[19].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Rio Grande do Norte" title="Rio Grande do Norte" href="" coords="388,129,390,119,397,113,406,117,414,117,420,123,420,130,413,130,405,133,399,133,398,126" shape="poly">
        <area onmouseover="Tip('${criaDiv("Rio Grande do Sul", estado[20].candidato[0].candidato, estado[20].candidato[1].candidato, estado[20].candidato[0].votos, estado[20].candidato[1].votos, estado[20].candidato[0].porcentagem, estado[20].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Rio Grande do Sul" title="Rio Grande do Sul" href="" coords="224,355,236,356,248,361,258,368,267,370,264,378,260,392,251,403,242,405,239,415,231,421,228,411,216,403,209,395,198,389,188,386,198,373,211,365" shape="poly">
        <area onmouseover="Tip('${criaDiv("Rondonia", estado[21].candidato[0].candidato, estado[21].candidato[1].candidato, estado[21].candidato[0].votos, estado[21].candidato[1].votos, estado[21].candidato[0].porcentagem, estado[21].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Rondonia" title="Rondonia" href="" coords="142,159,142,171,144,178,152,179,157,182,159,193,156,201,149,208,139,207,130,200,123,196,116,194,108,186,105,174,92,165,101,162,113,155,122,148,132,149" shape="poly">
        <area onmouseover="Tip('${criaDiv("Roraima", estado[22].candidato[0].candidato, estado[22].candidato[1].candidato, estado[22].candidato[0].votos, estado[22].candidato[1].votos, estado[22].candidato[0].porcentagem, estado[22].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Roraima" title="Roraima" href="" coords="142,76,134,69,136,60,132,42,124,34,120,29,112,14,123,18,133,18,146,11,156,5,158,16,161,25,162,36,168,45,172,53,168,57,160,59,156,70,146,65" shape="poly">
        <area onmouseover="Tip('${criaDiv("Santa Catarina", estado[23].candidato[0].candidato, estado[23].candidato[1].candidato, estado[23].candidato[0].votos, estado[23].candidato[1].votos, estado[23].candidato[0].porcentagem, estado[23].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Santa Catarina" title="Santa Catarina" href="" coords="228,343,240,345,248,349,260,345,273,343,279,344,278,351,278,361,278,370,266,378,257,362,247,360,235,357,225,354" shape="poly">
        <area onmouseover="Tip('${criaDiv("São Paulo", estado[24].candidato[0].candidato, estado[24].candidato[1].candidato, estado[24].candidato[0].votos, estado[24].candidato[1].votos, estado[24].candidato[0].porcentagem, estado[24].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Sao Paulo" title="Sao Paulo" href="" coords="284,333,295,326,307,321,314,317,322,310,318,302,308,305,302,305,301,295,295,289,293,277,283,276,268,277,258,276,250,283,245,291,235,304,243,305,258,305,266,313,272,322,276,327" shape="poly">
        <area onmouseover="Tip('${criaDiv("Sergipe", estado[25].candidato[0].candidato, estado[25].candidato[1].candidato, estado[25].candidato[0].votos, estado[25].candidato[1].votos, estado[25].candidato[0].porcentagem, estado[25].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Sergipe" title="Sergipe" href="" coords="397,187,392,182,392,174,392,165,400,168,407,173" shape="poly">
        <area onmouseover="Tip('${criaDiv("Tocatins", estado[26].candidato[0].candidato, estado[26].candidato[1].candidato, estado[26].candidato[0].votos, estado[26].candidato[1].votos, estado[26].candidato[0].porcentagem, estado[26].candidato[1].porcentagem)}')" onmouseout="UnTip()" target="" alt="Tocantins" title="Tocantins" href="" coords="284,119,292,122,292,132,289,138,294,145,300,147,296,154,298,163,301,169,309,174,304,178,301,183,303,194,301,203,289,202,279,200,271,203,263,201,258,198,261,180,264,168,268,156,271,144,275,136,280,130" shape="poly">
    `
}

function criaDiv(estado, candidatoA, candidatoB, votosA, votosB, porcentagemA, porcentagemB) {
    let div = `<div><h3>${estado}</h3><p>${candidatoA}: ${porcentagemA} | ${votosA}</p><p>${candidatoB}: ${porcentagemB} | ${votosB}</p></div>`;

    return div;
}

criaDivComOsDadosDosEstados();
