// function tile(url, left, bottom, width, height){
//     for(let h = 0; h < height; h++){
//         for(let w = 0; w < width; w++){
//             newImage(url, left + w*100, bottom+h*100)
//         }
//     }
    
// }
// Couldn't understand why the background is ontop of the actual items, referred to the bonus code for this and it caused the background to lay ontop of all the other items/images.





function newImage(source, posLeft, posBottom){
    let object = document.createElement('img')
    object.src = source
    object.style.position = 'fixed'
    object.style.left = posLeft + "px"
    object.style.bottom = posBottom + "px"
    document.body.append(object)
    return object
   
}


newImage('assets/green-character.gif', 100,100)
newImage('assets/pine-tree.png', 450 ,200)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)


function newItem(source,posLeft,posBottom){
    let object = document.createElement('img')
    object.src = source
    object.style.position = 'fixed'
    object.style.left = posLeft + 'px'
    object.style.bottom = posBottom + 'px'
    document.body.append(object)
    object.addEventListener('click', function(){
        object.remove()
    })
    return object
}

// Note to self, it's entirely possible to put a function within a function, after reviewing the solution code. It makes it easier than having to type out the LITERAL exact same code for a different function when you can just use that same function inside of a new function.


newItem('assets/sword.png',500,405)
newItem('assets/shield.png',165,185) // Shield displays image icon but not shield
newItem('assets/staff.png',600,100)

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)


background('assets/grass.png',1000,700)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)
// sword.addEventListener('click', function({
//  sword.remove()
// })

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = './assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)



