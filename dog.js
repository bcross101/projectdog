//dogs array
const dogs = [
    {
        name: 'german shepherd',
        size: 'big',
        activityLevel: 'very active',
        friendliness: 'very friendly',
        intelligence: 'extremely intelligent'
    },
    {
        name: 'golden retriever',
        size: 'big',
        activityLevel: 'very active',
        friendliness: 'very friendly',
        intelligence: 'extremely intelligent'
    },
    {
        name: 'beagle',
        size: 'small',
        activityLevel: 'somewhat active',
        friendliness: 'very friendly',
        intelligence: ' moderately intelligent'
    },
    {
        name: 'Boston Terrier',
        size: 'small',
        energyLevel: 'not very active',
        friendliness: 'very friendly',
        intelligence: ' moderately intelligent'
    },
    {
        name: 'Bulldog',
        size: 'medium',
        energyLevel: 'not very active',
        friendliness: 'very friendly',
        intelligence: 'moderately intelligent'
    },
    {
        name: 'Yorkshire Terrier',
        size: 'small',
        energyLevel: 'not very active',
        friendliness: 'somewhat friendly',
        intelligence: 'moderately intelligent'
    },
    {
        name: 'Boxer',
        size: 'medium',
        energyLevel: 'very active',
        friendliness: 'somewhat friendly',
        intelligence: 'moderately intelligent'
    },
    {
        name: 'Mastiff',
        size: 'big',
        energyLevel: 'somewhat active',
        friendliness: 'not as friendly',
        intelligence: 'moderately intelligent'
    },
    {
        name: 'Bulldog',
        size: 'medium',
        energyLevel: 'not very active',
        friendliness: 'very friendly',
        intelligence: 'moderately intelligent'
    }
]




//get user input
const questions = [
    'Do you prefer animals that are small, medium or big?',
    'Is your activity level very active, somewhat active, or not very active?',
    'Do you consider yourself very friendly, somewhat friendly, or not as friendly?',
    'Do you consider yourself extremely intelligent or moderately intelligent?'

]


//function to get user input object
function getUserInput() {
    const userTraits = {};

    for (const question of questions) {
        const answer = prompt(question);

        switch (questions.indexOf(question)) {
            case question[0]:
                userTraits.size = answer;
                break;
            case question[1]:
                userTraits.activityLevel = answer;
                break;
            case question[2]:
                userTraits.friendliness = answer;
                break;
            case question[3]:
                userTraits.intelligence = answer;
        }
    }

    return userTraits;

}   

//compare user traits to dog traits
function findDogMatch (userTraits) {
    let bestMatch =null;
    let maxMatches = 0;

    for (const dog of dogs) {
        const matches = Object.keys(userTraits).reduce((count, trait) => {
            if (userTraits[trait] === dog[trait]){
                return count + 1;
            }
            return count;
        }, 0);
    

    if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = dog;
    }
    }
    return bestMatch;


}



