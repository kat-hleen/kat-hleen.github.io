let playerName = ''


const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}


//this function grames the name and stores it in the player name variable and hides the name input ui and then starts the game 
function startGameWithName() {
    const nameInput = document.getElementById('player-name')
    playerName = nameInput.value.trim()

    if(playerName === '') {
        alert("Please enter your name.")
        return
    }

    //hide name input, show game container
    document.getElementById('name-input-container').style.display = 'none'
    document.getElementById('game-container').style.display = 'block'

    startGame()
}








function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text.replace(/{name}/gi, playerName)
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
} 



function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      //  return startGame()
      document.getElementById('name-input-container').style.display = 'block'
      document.getElementById('game-container').style.display = 'none'
      playerName = ''
      return
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}

const textNodes = [
    {
        id: 1,
        text: '{name} wakes up to the sound of a cat calling out. What does {name} do?',
        options: [
            {
                text: 'Pick up cat.',
                setState: { pickupkitty: true },
                nextText: 2
            },
            {
                text: 'Say Hello.',
                nextText: 2
            }
        ]
    },

    {
        id: 2,
        text: '{name} decides to explore the area, an endless sea of grasslands surround them. {name} sees a lone mailbox amist the grass. There is text written on a paper taped to the side of the mailbox. It reads "TRADING PURPOSES ONLY".',
        options: [
            {
                text: 'Place cat in mailbox.',
                requiredState: (currentState) => currentState.pickupkitty,
                setState: { pickupkitty: false, token: true },
                nextText: 3
            },
            {
                text: 'Look inside mailbox.',
                requiredState: (currentState) => currentState.pickupkitty,
                setState: { pickupkitty: false, postcard: true },
                nextText: 3
            },
            {
                text: 'Stare at it without touching it.',
                nextText: 3
            }
        ]  
    },
    {
        id: 3,
        text: 'After inspecting the mailbox, {name} notices the sky begin to darken and trees begin materializing around the lanscape. {name} has grown tired from walking.',
        options: [
            {
                text: 'Find a comfortable tree to sleep on.',
                nextText: 4
            },
            {
                text: 'Keep walking and do not look back.',
                nextText: 5
            },
            {
                text: 'Shout for help.',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You lay down against the tree trunk, you fall into a deep slumber.',
        options: [
            {
                text: 'You are dead.',
                nextText: -1
            }

        ]
    },
    {
        id: 5,
        text: 'You continue walking into the dark forest until you encounter a large creature. It lunges at you.',
        options: [
            {
                text: 'You are dead.',
                nextText: -1
            }
        ]
    },
    {
        id: 6, 
        text: 'You shout and scream until you lose your voice, you feel tired and sat against a tree trunk, falling into a deep slumber.',
        options: [
            {
                text: 'You are dead',
                nextText: -1
            }
        ]
    }
]



startGame()