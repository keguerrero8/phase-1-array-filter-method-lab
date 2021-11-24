// Code your solution here

function findMatching(drivers, string) {
    let result = drivers.filter(name => name.toUpperCase() === string.toUpperCase())
    return result
}

function fuzzyMatch(drivers, string) {
    let result = drivers.filter(name => name.substr(0,string.length) === string)
    return result
}

function matchName(driversObj, string) {
    return driversObj.filter(element => element.name === string)
}


// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' 
//     },
//     {
//       name: 'Sammy',
//       hometown: 'New York' 
//     } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' 
//     },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' 
//     },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' 
//     }
//   ];

//   expect(matchName(drivers, 'Bobby')).to.eql([
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh'
//     },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay'
//     }
//   ]);


