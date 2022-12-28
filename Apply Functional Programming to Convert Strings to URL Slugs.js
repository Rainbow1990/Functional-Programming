// Only change code below this line
function urlSlug(title) {
    return title
        .split(" ")
        .filter(word => { if (word != "") return word;})
        .join("-")
        .toLowerCase();
    
    }
    // Only change code above this line
    console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));