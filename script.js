 storyElement = document.getElementById('story');
 choicesElement = document.getElementById('choices');

 currentStage = 0;

 storyData = {
    0: {
        text: "Você chegou a um castelo abandonado. O que você faz?",
        choices: [
            { text: "Entrar no castelo", nextStage: 1 },
            { text: "Ficar do lado de fora e explorar", nextStage: 2 }
        ]
    },
    1: {
        text: "Você entrou no castelo e encontrou duas portas. Qual delas você escolhe?",
        choices: [
            { text: "Porta à esquerda", nextStage: 3 },
            { text: "Porta à direita", nextStage: 4 }
        ]
    },
    2: {
        text: "Você encontrou um terreno estranho ao redor do castelo, mas nada de interessante acontece. O que você faz?",
        choices: [
            { text: "Voltar para casa", nextStage: 5 },
            { text: "Tentar entrar no castelo novamente", nextStage: 1 }
        ]
    },
    3: {
        text: "A porta à esquerda leva você a uma sala cheia de armaduras antigas. De repente, uma delas começa a se mover!",
        choices: [
            { text: "Lutar contra a armadura", nextStage: 6 },
            { text: "Fugir para a saída", nextStage: 7 }
        ]
    },
    4: {
        text: "A porta à direita leva a um corredor escuro. Você escuta ruídos estranhos à distância. O que você faz?",
        choices: [
            { text: "Seguir os ruídos", nextStage: 8 },
            { text: "Retornar para a sala anterior", nextStage: 1 }
        ]
    },
    5: {
        text: "Você volta para casa e acaba sua jornada. Fim da aventura.",
        choices: []
    },
    6: {
        text: "Você derrotou a armadura, mas agora o castelo começa a desmoronar! Corra!",
        choices: [
            { text: "Correr para a saída", nextStage: 9 },
            { text: "Tentar escapar por outra porta", nextStage: 10 }
        ]
    },
    7: {
        text: "Você saiu do castelo com segurança. Fim da aventura.",
        choices: []
    },
    8: {
        text: "Você encontra uma criatura mística no corredor. Ela lhe oferece um segredo em troca de sua alma.",
        choices: [
            { text: "Aceitar o segredo", nextStage: 11 },
            { text: "Recusar e fugir", nextStage: 7 }
        ]
    },
    9: {
        text: "Você conseguiu escapar do castelo a tempo! Fim da aventura.",
        choices: []
    },
    10: {
        text: "Você se perde no labirinto do castelo e nunca mais é visto. Fim da aventura.",
        choices: []
    },
    11: {
        text: "Você obteve o segredo, mas foi amaldiçoado a viver no castelo para sempre. Fim da aventura.",
        choices: []
    }
};

function updateStory() {
    const stage = storyData[currentStage];
    storyElement.textContent = stage.text;
    choicesElement.innerHTML = '';
    stage.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => choose(choice.nextStage);
        choicesElement.appendChild(button);
    });
}

function choose(stage) {
    currentStage = stage;
    updateStory();
}

updateStory();
