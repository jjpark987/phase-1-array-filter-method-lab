function findMatching(listOfNames, name) {
//    const newListOfNames = [];

//     for(const element of listOfNames) {
//         if(element.toLowerCase() === name.toLowerCase()) {
//             newListOfNames.push(element);
//         }
//     }

//     return newListOfNames;
   
    const newListOfNames = listOfNames.filter(function(element) {
        return element.toLowerCase() === name.toLowerCase();
    });
    
    return newListOfNames;
}

function fuzzyMatch(listOfNames, name) {
    const newListOfNames = listOfNames.filter(function(element) {
        return element[0] === name[0];
    });

    return newListOfNames;
}

function matchName(driversInfo, matchingString) {
    const list = driversInfo.filter(function(element) {
        return element.name === matchingString;
    });

    return list;
}