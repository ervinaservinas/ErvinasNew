// CONST
const newCard = document.querySelector(".newCard")
const generateTextCardDogs = document.querySelector(".addText")
const generateTextCardCats = document.querySelector(".addCats")
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")
const serverMsg = document.querySelector(".serverMsg")
const color = document.querySelector(".color")
const changeSize = document.querySelector(".size")
const styleButton = document.querySelector(".styleButton")
const input1 = document.querySelector(".input1")
const savedCard = document.querySelector(".savedCard")
const addText = document.querySelector(".addText")
const changeStyle = document.querySelector(".changeStyle")
const saveIt = document.querySelector(".saveIt")

appendDataCats()
// GENERATE CARD FUNCTION

styleButton.addEventListener("click", AddNew)

function AddNew() {
    appendDataDogs()

    let newElement = document.createElement('div')
    newElement.classList.add('generateCard', "color")
    document.getElementById("generatedCard").appendChild(newElement)
    console.dir(newElement)
    console.log("add")
    addText.onclick = () => {
        fetch("http://167.99.138.67:8281/random/animal/dog")
            .then(res => res.json())
            .then(data1 => {
                console.log(data1)
                newElement.innerHTML += `

            <p> ${data1.item}</p>

            `
            })
    }

    // COLORS
    button1.onclick = () => {
        newElement.style.backgroundColor = "red"
    }

    button2.onclick = () => {
        newElement.style.backgroundColor = "green"

    }
    button3.onclick = () => {
        newElement.style.backgroundColor = "blue"

    }
    button4.onclick = () => {
        newElement.style.backgroundColor = "violet"

    }

    changeStyle.onclick = () => {
        let inputBorderRadius = document.getElementById("input6").value
        newElement.style.borderRadius = inputBorderRadius + "%"
        let inputPadding = document.getElementById("input7").value
        newElement.style.padding = inputPadding + "px"
        let inputMargin = document.getElementById("input8").value
        newElement.style.margin = inputMargin + "px"
        let inputHeight = document.getElementById("input1").value
        let inputWidth = document.getElementById("input2").value
        newElement.style.height = inputHeight + "px"
        newElement.style.width = inputWidth + "px"
        let inputBorderSize = document.getElementById("input3").value
        let inputBorderStyle = document.getElementById("input4").value
        let inputBorderColor = document.getElementById("input5").value
        newElement.style.borderWidth = inputBorderSize + "px"
        newElement.style.borderStyle = inputBorderStyle
        newElement.style.borderColor = inputBorderColor
        console.log("Style changed")
    }
}

/*FETCH*/
finalCard()

function finalCard() {
    fetch("http://167.99.138.67:8281/random/animal/cat")
        .then(res => res.json())
        .then(data => {
            if (data.true) {
                console.log("yes")
            } else {
                console.log('no')
                serverMsg.innerHTML = `
            <p>Server Message: Connected <p>
            `
            }
            console.log(data)


        })
}

function appendDataDogs() {
    generateTextCardDogs.onclick = () => {
        fetch("http://167.99.138.67:8281/random/animal/dog")
            .then(res => res.json())
            .then(data1 => {
                console.log(data1)
                newElement.innerHTML += `

            <p> ${data1.item}</p>

            `
            })
    }

}

function appendDataCats() {
    generateTextCardCats.onclick = () => {
        fetch("http://167.99.138.67:8281/random/image/cats")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                color.innerHTML += `
<div>
            <img src="${data.item}">
</div>
            `
            })
    }
}



saveIt.onclick = () => {

    console.log("Card saved")
    document.getElementById('generatedCard').appendChild(
        document.getElementById('savedCard')
    )
}
