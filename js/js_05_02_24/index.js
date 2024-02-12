// const playList = {
//     name: 'myPlayList',
//     rating: 10,
//     tracks: ['track-1', 'track-2', 'track-3'],

//     changeName(newName) {
//      return this.name = newName
//     },
//     addTrack(track){
//         this.tracks.push(track)
//     },
//     updateRating(newRating){
//         this.rating =  newRating
//     },
//     getTrackCount(count){
//         this.tracks.length
//     }
// }

// playList.changeName('myPlayList-1')
// playList.addTrack('track-4')
// playList.updateRating(2)
// console.log(playList.getTrackCount());
// console.log(playList);


// console.log(playList.name);   


// const playListName = 'name';

// const person = {
//     name: 'Yehor',
//     age: 16,
//     gender: 'male',

//     getPersonData(form){
//      console.log(`name: ${this.name}
// age: ${this.age} 
// gender: ${this.gender}`)
//     }
// }

// person.getPersonData()

// person.age += 1;
// person.university = 'jfsjfa'

// console.log(person);

const students = [
    {
        name: 'student-1',
        age: 15,
        gender: 'male',
        grade: 9,
    },
    {
        name: 'student-2',
        age: 16,
        gender: 'female',
        grade: 10,
    },
    {name: 'student-3',
    age: 16,
    gender: 'male',
    grade: 8,
},
]



const getAverageGrade = function (students){
    let totalGrade = 0;
    for (let student of students) {
        totalGrade += student.grade
        
        console.log(student);
    }
    
    const averageGrade = totalGrade / students.length;
    return averageGrade;
}

console.log(getAverageGrade(students));
