// const nums = [1, 112, 12, 31, 8]

// const filteredNums = nums.filter((nums) => {
//     return nums <= 10
// })

// console.log(filteredNums);


// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
//     ];


    // const getOnlinePlayers = function(players){
    //     const onlinePlayers = players.filter((player) =>{
    //         return player.online
    //     })

    //     return onlinePlayers
    // }

    // const getOnlinePlayers = function(players){
    //     const onlinePlayers = players.filter((player) =>{
    //         return !player.online
    //     })

    //     return onlinePlayers
    // }

    // console.log(getOnlinePlayers(players));    



    // const hardcorePlayers = players.filter(({timePlayed}) =>{
    //             return timePlayed >  250
    //         })

    //         console.table(hardcorePlayers);




    // const nums = [1, 112, 12, 31, 8];

    // const findNumber = nums.find((num) => { return num === 31 })

    // console.log(findNumber);


    const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
    ];

    const findPlayerById = function(playersArr, playersId){
        return playersArr.find((player) => {
            return player.id === playersId
        } )    
    }

    console.log(findPlayerById(players, 'player-1'));