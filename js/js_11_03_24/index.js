// const numbers = [1, 9, 6, 2, 3];
//  numbers.sort() console.log('numbers', numbers);

// const letters = ['A', 'a', 'b', 'B'];

//  letters.sort() console.log('letters', letters);



const players = [
        { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
        { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
        { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
        { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
        { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
        ];


const copyPlayers = [...players]
const sortedBestPlayers = copyPlayers.sort((curEl, nextEl) => {
     curEl.timePlayed - nextEl.timePlayed
})