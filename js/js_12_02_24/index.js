// const feedback = {
//     good: 5,
//     neutral:10,
//     bad: 3,
// }

// feedback.good
// // feedback[good]
// feedback['good']

// const keys = Object.keys(feedback)
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     feedback['key']
// }

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//     ];


//     // console.table(friends);

//     for(const friend of friends) {
//         console.log(friend.name);
//         friend.property = 10;
//     }




// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//     ];
    
//     const findFriendByName = function (friends , name){
//         for (let friend of friends) {
//             console.log(friend.name);

//             if(friend.name === name){
//                 console.log(`friend ${name} is find`);
//             }else{
//                 console.log(`friend ${name} is not find`);
//             }
//         }
//     }


    const friends = [
        { name: 'Mango', online: false },
        { name: 'Kiwi', online: true },
        { name: 'Poly', online: false },
        { name: 'Ajax', online: false },
        ];
        


        
        const getFriendsByStatus = function (friends){
            const friendByStatus = {
                onlineFriends:[],
                offlineFriends:[]
            }

            for (let friend of friends) {
                if(friend.online) {
                    friendByStatus.onlineFriends.push(friend.name)
                } else {
                    friendByStatus.offlineFriends.push(friend.name)
                }
            }
                
            return friendByStatus;
        };
    
        console.log(getFriendsByStatus(friends));