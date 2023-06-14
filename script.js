let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal', 'An Usbekistan', 'A USA'];

let articleIndex = [];

let withoutArticles = [];

for(let x in touristSpots){
	let cur = touristSpots[x];
    //console.log(cur);

    
    let lo = cur.toLocaleLowerCase();

    let splitted = lo.split(" ");

    if(splitted[0] === 'the' ||splitted[0] === 'a' || splitted[0] === 'an' ){
        articleIndex.push(x);
    }else{
        withoutArticles.push(cur);
    }
}

console.log(articleIndex);
console.log(withoutArticles);

withoutArticles.sort();

for(let x of articleIndex){
    withoutArticles.push(touristSpots[x]);
}

console.log(withoutArticles);
let unorderedList = document.getElementById("band");

for(let i = 0; i < withoutArticles.length; i++){
    let list = document.createElement("li");
    list.textContent = withoutArticles[i];
    unorderedList.appendChild(list);
}

