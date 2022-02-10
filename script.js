console.log ("Let's Go!")

document.addEventListener('DOMContentLoaded',()=>{

    //cards options
    const cardArray=[
        {
            names : 'Belle',
            img:'images/Belle.jpg'
        },

        {
            names : 'Belle',
            img:'images/Belle.jpg'
        },

        {
            names : 'Merida',
            img:'images/brave.jpg'
        },

        {
            names : 'Merida',
            img:'images/brave.jpg'
        },

        {
            names : 'Mulan',
            img:'images/Belle.jpg'
        },

        {
            names : 'Mulan',
            img:'images/Belle.jpg'
        },

        {
            names : 'Pocahontas',
            img:'images/Poca.jpg'
        },

        {
            names : 'Pocahontas',
            img:'images/Poca.jpg'
        },

        {
            names : 'Raiponce',
            img:'images/raiponce.jpg'
        },

        {
            names : 'Raiponce',
            img:'images/raiponce.jpg'
        },

        {
            names : 'Raya',
            img:'images/raya.jpg'
        },

        {
            names : 'Raya',
            img:'images/raya.jpg'
        }
    ]

    //create the board
    const grid = document.querySelector('.grid');

    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            let card = document.createElement('img');
            // DEFAULT CARD BEFORE FLIP OVER
            card.setAttribute('src','images/bleu.png');
            // ID from 0 to 11 
            card.setAttribute('data-id', i);
            grid.appendChild(card)
        }
    }

    createBoard()


})