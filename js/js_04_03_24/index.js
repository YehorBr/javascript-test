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


    // const players = [
    // { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    // { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    // { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    // { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    // { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
    // ];

    // const findPlayerById = function(playersArr, playersId){
    //     return playersArr.find((player) => {
    //         return player.id === playersId
    //     } )    
    // }

    // console.log(findPlayerById(players, 'player-1'));


    // const players = [
    // { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    // { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    // { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    // { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    // { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    // ];

    // const anyHardcorePlayers = players.every((player) =>{
    //     return player.timePlayed > 100
    // })

    // const isAnyOnline = players.some((player) => {
    //     return player.online
    // })

    const tweets = [
        { id: '000', likes: 5, tags: ['js', 'nodejs'] },
        { id: '001', likes: 2, tags: ['html', 'css'] },
        { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
        { id: '003', likes: 8, tags: ['css', 'react'] },
        { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
        ];


    // const arrOfNum =[ 2, 5, 7, 8 ,10];

    // const totalSum = arrOfNum.reduce((acc, number) => {
    //     console.log('num: ', number);
    //     console.log('acc: ', acc);
    //     acc += number
    //     return acc
    // }, 0)

    // const fnA = function(callback, initialValue){
    //     for(num of arrOfNum){
    //         callback(initialValue, num)
    //     }
    // }

    // const salary = {
    //     mango: 100,
    //     poly: 50,
    //     ajax: 150,
    //     };

    //     const totalSalary = Object.values(salary)
    //     const result = totalSalary.reduce((acc, salary) =>{
        
    //         acc += salary
    //         return acc        
    //     }, 0)

    //     console.log(result);
        
    // const allTags = tweets.reduce((allTags, tweet) => {
        
    //     allTags.push(...tweet.tags)
    //     return allTags
    // }, [])
    // console.log(allTags);

    // const players = [
    //     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    //     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    //     { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
    //     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    //     { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
    //     ];

    //     const totalTimeOfAllPlayers = players.reduce((totalTime , {timePlayed}) => {
            
    //         return totalTime += timePlayed
    //     }, 0)

    //     console.log(totalTimeOfAllPlayers);