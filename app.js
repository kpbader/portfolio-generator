const profileDataArgs = process.argv.slice(2, process.argv.length - 2);
console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log("================================================")

    // Is the same as this...
    profileDataArr.forEach(profileItem => 
        console.log(profileItem));
    
    
};

printProfileData(profileDataArgs);