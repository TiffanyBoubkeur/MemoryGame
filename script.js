console.log ("Let's Go!")

document.addEventListener('DOMContentLoaded',()=>{

    //Cards options
    const cardsArray=[
        {
            name : 'Belle',
            img:'images/Belle.jpg'
        },

        {
            name : 'Belle',
            img:'images/Belle.jpg'
        },

        {
            name : 'Merida',
            img:'images/brave.jpg'
        },

        {
            name : 'Merida',
            img:'images/brave.jpg'
        },

        {
            name : 'Mulan',
            img:'images/Mulan.jpg'
        },

        {
            name : 'Mulan',
            img:'images/Mulan.jpg'
        },

        {
            name : 'Pocahontas',
            img:'images/Poca.jpg'
        },

        {
            name : 'Pocahontas',
            img:'images/Poca.jpg'
        },

        {
            name : 'Raiponce',
            img:'images/raiponce.jpg'
        },

        {
            name : 'Raiponce',
            img:'images/raiponce.jpg'
        },

        {
            name : 'Raya',
            img:'images/raya.jpg'
        },

        {
            name : 'Raya',
            img:'images/raya.jpg'
        }
    ]

    //Create the board
    const grid        = document.querySelector('.grid');

    // CARDS ARRAYS
    let cardsChosen   = [];
    let cardsChosenId = [];
    let cardsWon      = [];
    let resultDisplay = document.querySelector('#result');

    // Random places when refresh the game 
    cardsArray.sort(()=> 0.5 - Math.random());


    function createBoard(){
        // forEach card Create an element
        for(let i=0; i<cardsArray.length; i++){
            let card = document.createElement('img');
            // DEFAULT CARD BEFORE FLIP OVER
            card.setAttribute('src','images/bleu.png');
            // Create img an ID from 0 to 11 
            card.setAttribute('data-id', i);
            // Listen if the cards have been clicked on
            card.addEventListener('click', flipCard);
            //to create the card in the DOM
            grid.appendChild(card);
        }
    }

    // CHECK FOR MATCH

    function checkForMatch(){
        //Select images from the CardsArray
        let cards         = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        // To use both values of cardsChosen & cardsChosenID (we only have 2 option in those arrays!!)


        if(cardsChosen[0] === cardsChosen[1]){
            alert('You find a Match');
            cards[optionOneId].setAttribute('src', 'images/blanc.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blanc.jpg');
            cardsWon.push(cardsChosen);
        } else{
            alert('Nope, Try again');
            cards[optionOneId].setAttribute('src', 'images/bleu.png');
            cards[optionTwoId].setAttribute('src', 'images/bleu.png');
        };


        // Either ways Clear arrays
        cardsChosen   = [];
        cardsChosenId = [];
        // Calculate the result
        resultDisplay.textContent = cardsWon.length;
            // If we got same amount of cards in cardsWon and cardsArray  & 1 point for every match so / 2
        if(cardsWon.length === cardsArray.length/2 ){
            resultDisplay.textContent = 'Congratulation ! You found them all';
        };
    }



    // FLIP CARDS
    function flipCard(){
        // get ID created in createBoard function
        let cardId = this.getAttribute('data-id');
        // once we have the ID we need the name
        cardsChosen.push(cardsArray[cardId].name);
        // need to save the id
        cardsChosenId.push(cardId);
        // put an image based on the cardId it holds
        this.setAttribute('src', cardsArray[cardId].img);
        // we only want 2 cards
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        };
    }


    createBoard()


});



/*
 * *** USEFUL LINKS ***
 * 
 * DOMContentLoaded
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
 * 
 * createElement
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 * 
 * setAttribute
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
 * 
 * appendChild
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/append
 * 
 * getAttribute 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
 * 
 * 
 * array.sort
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * 
*/
