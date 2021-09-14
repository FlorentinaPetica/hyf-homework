// Visual promise ------- One by one
const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

const redX = 20 - parseInt(redBox.style.left)
const redY = 300 - parseInt(redBox.style.top)
const blueX = 400 - parseInt(blueBox.style.left)
const blueY = 300 - parseInt(blueBox.style.top)
const greenX = 400 - parseInt(greenBox.style.left)
const greenY = 20 - parseInt(greenBox.style.top)

async function translateOneByOne() {
    try {
    const moveRed = await moveElement(redBox, {x: redX, y: redY})
    console.log('Red circle moved')
    const moveBlue = await moveElement(blueBox, {x: blueX, y: blueY})
    console.log('Blue circle moved')
    const moveGreen = await moveElement(greenBox, {x: greenX, y: greenY})
    console.log('Green circle moved')
    }
    catch(error) {
        throw error
    }
}
translateOneByOne()

//Visual promise ------- All at one

function translateAllAtOnce() {
    Promise.all([
        moveElement(redBox, {x: redX, y: redY}),
        moveElement(blueBox, {x: blueX, y: blueY}),
        moveElement(greenBox, {x: greenX, y: greenY})
    ])
    .then(() => {
        console.log('All moved at once.')
    })
    .catch((error) => {
        throw error
    })
}
//translateAllAtOnce()