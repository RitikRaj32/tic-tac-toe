let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let smgTop = document.querySelector(".topcontaineer");
let newbtn = document.querySelector("#newgame")
let smgg = document.querySelector("#smg")

let turnx = true; // player x ,player o

const winnum = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click");
        if (turnx) {
            box.innerText = "X";
            turnx = false;


        }
        else {
            box.innerText = "o";
            turnx = true;
        }
        box.disabled = true;
        checkWiner();
    });

});


const checkWiner = () => {
    for (winer of winnum) {
        let position1 = boxes[winer[0]].innerText;
        let position2 = boxes[winer[1]].innerText;
        let position3 = boxes[winer[2]].innerText;


        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                console.log("winner", position1);

                printwinner(position1);
                disabled();
            }

        }
    }

}

const printwinner = (winner) => {
    smgg.innerText = `congratulations winner is ${winner}`;
    smgTop.classList.remove("hide");
}

const disabled = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
}


const enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        smgTop.classList.add("hide");

    }
}

const resetgame = () => {
    turnx = true;
    enable();

}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);



