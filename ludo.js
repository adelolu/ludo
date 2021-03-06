let play = 'first';
let col = ''
// let aaa = ''
let player = ['Red', 'Yellow', 'Green', "Blue"];
// let player = [];
let two = document.getElementById('checktwo');
let four = document.getElementById('checkfour');
let frg = document.getElementById('checkrg');
let sby = document.getElementById('checkby');
let dice = document.getElementById('dice');
let disp = document.getElementById('diceDisp');
let roll = document.getElementById('roll');
let hose = document.getElementById('red_house');
let hoge = document.getElementById('green_house');
let hoye = document.getElementById('yellow_house');
let hobl = document.getElementById('blue_house');
// let lgr = 'linear-gradient(to right, rgba(255, 0, 0, 0.644), rgba(4, 170, 4, 0.589))';
// let lgy = 'linear-gradient(to right,rgba(4, 4, 139, 0.603),rgba(226, 226, 4, 0.616))';
let a
let b
let da = 0
let db = 0
let move
// let rdrop = document.getElementById('rdrop')
let game = document.getElementById('ludo')

document.getElementById('ludo').style.backgroundColor = 'rgba(0,0,0,0.2)'
document.getElementById('ludo').style.opacity = 0.3;
$("#posi").text(`Choose your ${play} player : ${col}`)
$('.sele_col').on('click', temi)
$('#nxt').on('click', tomi)
$('#next').on('click', tolu)

// selects the houses for a game of fourplayers
function temi(l) {
    aaa = col
    var bb = l.target.parentElement.children.length

    if (bb == 6 && play == 'first' || play == 'second' && bb == 5 || play == 'thrid' && bb == 4) {
        col = l.target.innerText
        player.push(col)
        $("#posi").text(`Choose your ${play} player : ${col}`)
        l.currentTarget.remove()
        $('#nxt').text('Next')
    }
    else {
        if (play == 'four' && bb == 3) {
            col = l.target.innerText
            $("#posi").text(`Choose your ${play} player : ${col}`)
            $('#nxt').text('  Next')

        } else {
            l.currentTarget.style.display = 'block';
        }
    }
    $('#nxt').show()

}
function tomi(l) {

    var bb = l.target.parentElement.children.length
    if (bb == 5) {
        play = 'second'
        $("#posi").text(`Choose your ${play} player : `)
        document.getElementById('select').style.height = '200px'
    } else if (bb == 4) {
        play = 'thrid'
        $("#posi").text(`Choose your ${play} player : `)
        document.getElementById('select').style.height = ' 160px'
    }
    else if (bb == 3) {
        play = 'four'
        $("#posi").text(`Choose your ${play} player : `)
        var d = $('#nxt').text()
        var ac = l.target.parentElement.children[1].innerText
        document.getElementById('select').style.height = ' 120px'
        $('#nxt').text('  Next')
        // $('#nxt').css({
        //     'width': '120px',
        //     'left': '72%',
        // })
        if (d == '  Next' && col === ac) {
            $("#select").hide()
            $("#playfour").show(500)
            player.push(ac)
        }
    }

}
function pickT() {
    if (four.checked == true) {
        four.checked = false
        two.checked = true
    } else {
        two.checked = true
    }
}
function pickfour() {
    if (two.checked == true) {
        two.checked = false
        four.checked = true
    } else {
        four.checked = true
    }
}
// tolu() determines the numbers of players for the game 
function tolu() {
    if (two.checked == true || four.checked == true) {
        document.getElementById('choose').style.display = 'none'
        if (four.checked == true) {
            document.getElementById('select').style.display = 'block'
        }
        else {
            document.getElementById('selectTwo').style.display = 'block';
            $('#choo2').text(`Choose your ${play} player`)
            $("#nex").show()
        }
    }
}

function rg() {
    if (sby.checked == true) {
        sby.checked = false
        frg.checked = true

    } else {
        frg.checked = true
    }
}
function by() {

    if (frg.checked == true) {
        frg.checked = false
        sby.checked = true

    } else {
        sby.checked = true
    }
}

function secondPlay() {
    if (frg.checked == true || sby.checked == true) {
        if (frg.checked == true) {
            player = []
            player.push(frg.parentElement.innerText, sby.parentElement.innerText)
        } else {
            player = []
            player.push(sby.parentElement.innerText, frg.parentElement.innerText)
        }
        var aa = $("#nex").text()
        // $('#nex').css({
        //     'width': '120px',
        //     'left': '72%',
        // })
        if (aa == ' Next' && frg.checked == true || aa == ' Next' && sby.checked == true) {
            // document.getElementById('playtwo').style.display = 'none';
            $("#selectTwo").hide(500)
            $("#playtwo").show(500)
        } else {
            $("#nex").text(' Next')
            frg.disabled = true
            sby.disabled = true
        }
    }
}

function namea() {
    document.getElementById('ludo').style.backgroundColor = 'white'
    document.getElementById('ludo').style.opacity = 1;
    if (player.length == 2) {
        $("#playtwo").hide(500)
    } else if (player.length == 4) {
        $("#playfour").hide(500)
    }
    startGame()
}
function block() {
    game.style.opacity = 0.3;
    roll.style.display = 'block';
    dice.style.display = 'block';
}
function none() {
    game.style.opacity = 1;
    roll.style.display = 'none';
    dice.style.display = 'none';
}
function startGame() {
    setTimeout(() => {
        if (player.length == 2) {
            ludoTwo()
        } else if (player.length == 4) {
            ludoFour()
        }
    }, 1000);
}
function ludoTwo() {
    block()
    diceDisp.style.display = 'none'
    $("#place").hide(500)
}
function ludoFour() {
    block()
    diceDisp.style.display = 'none';
    document.getElementById('place').style.display = 'none';
    document.getElementById('place1').style.display = 'none';

}
let holl
let dere = $("#place").text()
let dere1 = $("#place1").text()

function fourPlayer(dere) {
    name3 = $('#name3').val()
    name4 = $('#name4').val()
    name5 = $('#name5').val()
    name6 = $('#name6').val()

    if (dere == '') {
        dere = player[0]
        if (name3 != '') {
            dere1 = name3
        } else {
            dere1 = 'player 1'
        }
        return `${dere}`
    } else if (dere == player[0]) {
        dere = player[1]
        if (name4 != '') {
            dere1 = name4
        } else {
            dere1 = 'player 2'
        }
        return `${dere}`
    } else if (dere == player[1]) {
        dere = player[2]
        if (name5 != '') {
            dere1 = name5
        } else {
            dere1 = 'player 3'
        }
        return `${dere}`

    } else if (dere == player[2]) {
        dere = player[3]
        if (name6 != '') {
            dere1 = name6
        } else {
            dere1 = 'player 4'
        }
        return `${dere}`

    } else if (dere == player[3]) {
        dere = player[0]
        if (name3 != '') {
            dere1 = name3
        } else {
            dere1 = 'player 1'
        }
        return `${dere}`
    }
}

// setTimeout(() => {
//     startGame()
// }, 500);

function deter(dere) {
    if (dere == 'Red') {
        holl = hose.children
        return holl
    } else if (dere == 'Green') {
        holl = hoge.children
        return holl
    } else if (dere == 'Yellow') {
        holl = hoye.children
        return holl
    } else if (dere == 'Blue') {
        holl = hobl.children
        return holl
    }
}

let arra
function arr(dere) {
    if (dere == 'Red') {
        arra = outRed.length
        return arra
    } else if (dere == 'Green') {
        arra = outGreen.length
        return arra
    } else if (dere == 'Yellow') {
        arra = outYellow.length
        return arra
    } else if (dere == 'Blue') {
        arra = outBlue.length
        return arra
    }
}

let spec
function specC(dere) {
    if (dere == 'Red') {
        spec = specRed()
        return spec
    } else if (dere == 'Green') {
        spec = specGreen()
        return spec
    } else if (dere == 'Yellow') {
        spec = specYellow()
        return spec
    } else if (dere == 'Blue') {
        spec = specBlue()
        return spec
    }
}
let name1
let name2
function img() {

    if (player.length == 2) {
        name1 = $('#name1').val()
        name2 = $('#name2').val()

        if (dere1 == name1) {
            if (name2 == ' ') {
                dere1 = 'player 2'
            } else {
                dere1 = name2
            }
            $("#place").html(`player2: ${dere1}`);

        } else {
            if (name1 == ' ') {
                dere1 = 'player 1'
            } else {
                dere1 = name1
            }
            $("#place").html(`player1: ${dere1}`);

        }
    } else if (player.length == 4) {
        if (hose.children.length == 0 && outRed.length == 0) {
            console.log('yh');
            startGame()
        } else if (hobl.children.length == 0 && outBlue.length == 0) {
            startGame()
        } else if (hoge.children.length == 0 && outGreen.length == 0) {
            startGame()
        } else if (hoye.children.length == 0 && outYellow.length == 0) {
            startGame()
        } else {
            console.log('help me nah!!!!!');
        }
        $('#place').text(`${fourPlayer(dere)}`);
        $("#place1").html(`: ${dere1}`);
    }
}
let backg
let c
let d
let e
// rollD() displays the number of the rolled dice.
function rollD() {
    a = randiceA()
    b = randiceB()
    dice.style.display = 'none';
    diceDisp.style.display = 'block';
    document.getElementById('place').style.display = 'block'
    document.getElementById('place1').style.display = 'block'
    img()
    diceDisp.innerHTML = `${a}:${b}`
    setTimeout(() => {
        loopPlayer()
    }, 1000);
}
// randiceA() generates the first random number.
function randiceA() {
    // return Math.ceil(Math.random() * 6)
    return 6
}

// randiceB() generates the second random number.
function randiceB() {
    return Math.ceil(Math.random() * 6)
}
let outRed = []
let outGreen = []
let outYellow = []
let outBlue = []

function red() {
    var chil = hose.children.length
    var child = hoge.children.length
    if (((a == 6 || b == 6) && (chil == 4 && child == 4)) || ((outGreen > 0 || outRed > 0) && (a == 6 || b == 6))) {
        add()
        specRed()
        specGreen()

    } else if (((chil <= 4 || child <= 4) && (a < 6 && b < 6)) && (outGreen == 0 && outRed == 0)) {
        // alert(`${dere1}: you need a six to leave the house`)
        startGame()

    } else if (chil < 4 || child < 4) {
        if (a == 6 || b == 6) {
            if (outGreen.length > 0 || outRed.length > 0) {
                add2()
                specOut()
            }
            add()
            specRed()
            specGreen()
        } else if ((a <= 6 || b <= 6) || (outGreen > 0 || outRed > 0)) {
            add2()
            specOut()
        }
    }
}

function loopPlayer() {
    none()
    if (player.length == 2) {
        if (player[0].indexOf('Red') >= 0) {
            if (dere1 == name1) {
                red()
            } else {
                yellow()
            }

        } else if (player[0].indexOf('Blue') >= 0) {
            if (dere1 == name1) {
                yellow()
            } else {
                red()
            }
        }
    } else if (player.length == 4) {
        setTimeout(() => {
            fourplay()
        }, 500);
    }

}

function fourplay() {
    c = fourPlayer(dere)
    dere = c
    d = deter(c)
    e = arr(c)
    if ((a == 6 || b == 6) && (d.length == 4) && (e >= 0)) {
        adder(d)
        specC(c)
    } else if (((d.length <= 4) && (a < 6 && b < 6)) && (e == 0)) {
        alert(dere1 + ': you need a six to leave the house')
        startGame()
    } else if (d.length < 4) {
        if (a == 6 || b == 6) {
            adder(d)
            secMove()
            specC(c)
        } else if ((a <= 6 || b <= 6) || (e > 0)) {
            secMove()
            specOut()
        }
    }
}


function yellow() {
    var chil1 = hoye.children.length
    var child1 = hobl.children.length
    if (((a == 6 || b == 6) && (chil1 == 4 && child1 == 4)) || ((outYellow > 0 || outBlue > 0) && (a == 6 || b == 6))) {
        add3()
        specYellow()
        specBlue()

    } else if (((chil1 <= 4 || child1 <= 4) && (a < 6 && b < 6)) && (outYellow == 0 && outBlue == 0)) {
        // alert(`${dere1}: you need a six to leave the house`) 

        startGame()

    } else if (chil1 < 4 || child1 < 4) {
        if (a == 6 || b == 6) {
            if (outYellow.length > 0 || outBlue.length > 0) {
                add4()
                specOut2()
            }
            add3()
            specYellow()
            specBlue()
        } else if ((a <= 6 || b <= 6) || (outYellow > 0 || outRed > 0)) {
            add4()
            specOut2()
        }
    }
}
// adds class name to the moveable seed of house red
function specRed() {
    let ree = document.getElementsByClassName('red_child')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.add('spec')
    }
}
// adds class name to the moveble seed of house green
function specGreen() {
    let geen = document.getElementsByClassName('green_child')
    for (let i = 0; i < geen.length; i++) {
        geen[i].classList.add('spec')
    }
}
// removes class name (spec) form the seeds inside of house red
function specRedR() {
    let ree = document.getElementsByClassName('red_child')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.remove('spec')
    }
}

function specGreenR() {
    let geen = document.getElementsByClassName('green_child')
    for (let i = 0; i < geen.length; i++) {
        geen[i].classList.remove('spec')
    }
}
// adds class name the moveble seed of house red and green that are out of the house
function specOut() {
    let ree = document.getElementsByClassName('sing')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.add('spec')
    }
}
function secMove() {
    let ree = document.getElementsByClassName(c)
    for (let i = 0; i < ree.length; i++) {
        ree[i].addEventListener('click', movement)
    }
}
function secMoveR() {
    let ree = document.getElementsByClassName(c)
    for (let i = 0; i < ree.length; i++) {
        ree[i].removeEventListener('click', movement)
    }
}

function specOutR() {
    let ree = document.getElementsByClassName('sing')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.remove('spec')
    }
}

function specOut2() {
    let ree = document.getElementsByClassName('deal')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.add('spec')
    }
}

function specOutR2() {
    let ree = document.getElementsByClassName('deal')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.remove('spec')
    }
}
// adds class name the moveble seed of house yellow
function specYellow() {
    let yell = document.getElementsByClassName('yellow_child')
    for (let i = 0; i < yell.length; i++) {
        yell[i].classList.add('spec')
    }
}
// remove class name from all seeds of house yellow 
function specYellowR() {
    let yell = document.getElementsByClassName('yellow_child')
    for (let i = 0; i < yell.length; i++) {
        yell[i].classList.remove('spec')
    }
}
// adds class name the moveble seed of house blue
function specBlue() {
    let bue = document.getElementsByClassName('blue_child')
    for (let i = 0; i < bue.length; i++) {
        bue[i].classList.add('spec')
    }
}

function specBlueR() {
    let bue = document.getElementsByClassName('blue_child')
    for (let i = 0; i < bue.length; i++) {
        bue[i].classList.remove('spec')
    }
}
// add() adds eventlistener to the all of seeds of green and red that are in the house 
function add() {
    let chil = hose.children
    let child = hoge.children
    for (let s = 0; s < chil.length; s++) {
        hov = chil[s].addEventListener('click', movement)
    }
    for (let j = 0; j < child.length; j++) {
        hove = child[j].addEventListener('click', movement)
    }
}
// add3() adds eventlistener to the all of seeds of yellow and blue that are in the house 
function add3() {
    var chil1 = hoye.children
    var child1 = hobl.children
    for (let s = 0; s < chil1.length; s++) {
        hov = chil1[s].addEventListener('click', moreMove)
    }
    for (let j = 0; j < child1.length; j++) {
        hove = child1[j].addEventListener('click', moreMove)
    }
}
// add2() adds eventlistener to the all of seeds of green and red that are out of the house 
function add2() {
    let chil = document.getElementsByClassName('sing');
    for (let s = 0; s < chil.length; s++) {
        chil[s].addEventListener('click', movement)
    }
}
// add4() adds eventlistener to the all of seeds of yellow and blue that are out of the house 
function add4() {
    var chil1 = document.getElementsByClassName('deal')
    for (let s = 0; s < chil1.length; s++) {
        chil1[s].addEventListener('click', moreMove)
    }
}

function adder(de) {
    for (let s = 0; s < de.length; s++) {
        de[s].addEventListener('click', movement);
    }
}
// reMover() removes eventlistener from the all of seeds of the current player
function reMover(de) {
    for (let s = 0; s < de.length; s++) {
        de[s].removeEventListener('click', movement)
    }
}
//specR() removes classList 'spec' from all seeds inside the house
function specR(lo) {
    for (let i = 0; i < lo.length; i++) {
        lo[i].classList.remove('spec')
    }
}
// reMove2() removes eventlistener from the all of seeds of yellow and blue.
function reMove2() {
    let chil1 = hobl.children;
    let child1 = hoye.children;
    for (let s = 0; s < chil1.length; s++) {
        chil1[s].removeEventListener('click', moreMove)
    }

    for (let j = 0; j < child1.length; j++) {
        child1[j].removeEventListener('click', moreMove)
    }
}
// reMove() removes eventlistener from the all of seeds of green and red.
function reMove() {
    let chil = hose.children
    let child = hoge.children
    for (let s = 0; s < chil.length; s++) {
        hov = chil[s].removeEventListener('click', movement)
    }

    for (let j = 0; j < child.length; j++) {
        hove = child[j].removeEventListener('click', movement)
    }
}
let gud
let gud1
let gud2
let letter

function currentPosition() {
    if (letter == 'r') {
        return 0
    } else if (letter == 'g') {
        return 13
    } else if (letter == 'y') {
        return 39
    } else if (letter == 'b') {
        return 26
    } else {
        return
    }
}

function firstMove(position) {
    if (position == '') {
        return currentPosition()
    } else {
        return position
    }
}

let realMove

function movement(event) {
    gud = event.target.id;

    letter = gud.slice(0, 1)
    gud1 = event.target.classList;
    if (player.length == 2) {
        reMove()
        specRedR()
        specOutR()
        specGreenR()
        if (currentPosition() == 0 || currentPosition() == 13) {
            position = ''
        } else if (currentPosition() == undefined) {
            position = event.target.parentElement.dataset.place

        } else if (currentPosition() == 40 || currentPosition() == 26) {
        }
    } else if (player.length == 4) {
        reMover(d)
        secMoveR()
        specOutR()
        specOutR2()
        specR(d)

        if (currentPosition() == 0) {
            position = ''
        } else if (currentPosition() == 13) {
            position = ''
        } else if (currentPosition() == 26) {
            position = ''
        } else if (currentPosition() == 39) {
            position = ''
        } else if (currentPosition() == undefined) {
            position = event.target.parentElement.dataset.place
        }
    }

    if (letter == 'r') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        gud2 = event.target.classList;
        if (realMove == 0) {
            mainMove(realMove, gud2)
            outRed.push(event.target.id)
        }

    } else if (letter == 'g') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        gud2 = event.target.classList;
        outGreen.push(event.target.id)

        if (realMove == 13) {
            mainMove(realMove, gud2)
        }
    } else if (letter == 'y') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        gud2 = event.target.classList;
        outGreen.push(event.target.id)

        if (realMove == 39) {
            mainMove(realMove, gud2)
        }
    } else if (letter == 'b') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        gud2 = event.target.classList;
        outGreen.push(event.target.id)

        if (realMove == 26) {
            mainMove(realMove, gud2)
        }
    } else {
        gud2 = event.target.classList;
        realMove = position
        mainMove2(realMove, gud2)
    }


}

function stop(move) {
    clearInterval(move)
    setTimeout(() => {
        startGame()
    }, 1000);
}

function mainMove(realMove, gud2) {
    if (gud2[1] == 'red_child') {
        seed = `<div class="${gud2} sing Red" style = "position: absolute; " ></div>`;
    } else if (gud2[1] == 'yellow_child') {
        seed = `<div class="${gud2} deal Yellow" style = "position: absolute; " ></div>`;
    } else if (gud2[1] == 'blue_child') {
        seed = `<div class="${gud2} deal Blue" style = "position: absolute; " ></div>`;
    } else if (gud2[1] == 'green_child') {
        seed = `<div class="${gud2} sing Green" style = "position: absolute; " ></div>`;
    }
    $(`[data-place=${realMove}]`).append(seed)
    kill(realMove, gud2)
    bb = b + realMove
    aa = a + realMove
    var move = setInterval(() => {
        main = $(`[data-place=${realMove}] div`).last().detach()
        realMove++
        kill(realMove, gud2)

        $(`[data-place=${realMove}]`).append(seed)
        if (a == 6) {

            if (realMove == bb) {
                stop(move)
            }
        } else if (a != 6 && b != 6 && (da == 6 && db == 6)) {
            if (realMove == (6 + aa + b)) {
                stop(move)
            }
        } else if (a == 6 || b == 6 && (da == 6 && db == 6)) {
            if (a == 6) {
                if (realMove == (6 + 6 + bb)) {
                    stop(move)
                }
            } else {
                if (realMove == (6 + 6 + aa)) {
                    stop(move)
                }
            }
        } else {
            if (realMove == aa) {
                stop(move)
            }
        }

    }, 500);


}

function mainMove2(realMove, gud2) {
    realMove = parseInt(realMove)
    a = parseInt(a)
    b = parseInt(b);
    da = parseInt(da);
    db = parseInt(db);
    if (gud2[1] == 'red_child') {
        seed = `<div class="${gud2} sing Red" style = "position: absolute; " ></div>`;
    } else if (gud2[1] == 'yellow_child') {
        seed = `<div class="${gud2} deal Yellow" style = "position: absolute; " ></div>`;
    } else if (gud2[1] == 'blue_child') {
        seed = `<div class="${gud2} deal Blue" style = "position: absolute; " ></div>`;
    } else if (gud2[1] == 'green_child') {
        seed = `<div class="${gud2} sing Green" style = "position: absolute; " ></div>`;
    }
    // bb = (b + a) + realMove + da + db
    bb = (b + a) + 48 + da + db

    var move = setInterval(() => {
        main = $(`[data-place=${realMove}] div`).last().remove()
        if (realMove >= 51 && realMove < 100) {
            bb = bb - 52
            realMove = -1
        }
        // checkWinner()

        realMove++
        kill(realMove, gud2)
        if (gud2[1] == 'red_child' && realMove == 51) {
            realMove = 101;
            bb = (bb - 50) + realMove;
        } else if (gud2[1] == 'green_child' && realMove == 12) {
            realMove = 111
            bb = (bb - 11) + realMove
        } else if (gud2[1] == 'yellow_child' && realMove == 38) {
            realMove = 131
            bb = (bb - 37) + realMove
        } else if (gud2[1] == 'blue_child' && realMove == 25) {
            realMove = 121
            bb = (bb - 24) + realMove

        }
        if (realMove == 116 || realMove == 106 || realMove == 126 || realMove == 136) {

            if (realMove == 116) {
                outGreen.splice(0, 1)
            } else if (realMove == 106) {
                outRed.splice(0, 1)
            } else if (realMove == 126) {
                outBlue.splice(0, 1)
            } else if (realMove == 136) {
                outYellow.splice(0, 1)
            }
            checkWinner()
            $(`[data-place=${realMove}] div`).last().remove()
            stop(move)
            setTimeout(() => {
                startGame()
            }, 1000);
        }
        $(`[data-place=${realMove}]`).append(seed)

        if (realMove == bb) {
            stop(move)
        }

    }, 500);
}

let position
let movedPosition

function moreMove(event) {

    gud = event.target.id;

    letter = gud.slice(0, 1)
    gud1 = event.target.classList;
    reMove2()
    specOutR2()
    specBlueR()
    specYellowR()
    if (currentPosition() == 26 || currentPosition() == 39) {
        position = ''
    } else if (currentPosition() == undefined) {
        position = event.target.parentElement.dataset.place

    } else if (currentPosition() == 0 || currentPosition() == 13) {
    }

    if (letter == 'y') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        gud2 = event.target.classList;

        if (realMove == 39) {
            mainMove(realMove, gud2)
            outYellow.push(event.target.id)
        }

    } else if (letter == 'b') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        gud2 = event.target.classList;
        outBlue.push(event.target.id)

        if (realMove == 26) {
            mainMove(realMove, gud2)
        }
    } else {
        gud2 = event.target.classList;
        realMove = position
        mainMove2(realMove, gud2)
    }

}
function checkWinner() {
    if (player.length == 2) {
        console.log('almost winning');
        if ((hose.children.length == 0 && hoge.children.length == 0) && (outGreen == 0 && outRed == 0)) {
            alert(`${dere1} wins 💥💥🎉🎉🎉😀`)
            setTimeout(() => {
                window.location.reload()
            }, 500);
        } else if ((hobl.children.length == 0 && hoye.children.length == 0) && (outYellow == 0 && outBlue == 0)) {
            alert(`${dere1} wines💥💥🎉🎉🎉😀`)
            setTimeout(() => {
                window.location.reload()
            }, 500);
        }
    } else if (player.length == 4) {
        if (hose.children.length == 0 && outRed.length == 0) {
            alert('player 1 wins 💥💥🎉🎉🎉😀')
        } else if (hobl.children.length == 0 && outBlue.length == 0) {
            alert('player 2 wines💥💥🎉🎉🎉😀')
        } else if (hoge.children.length == 0 && outGreen.length == 0) {
            alert('player 3  wines💥💥🎉🎉🎉😀')
        } else if (outYellow.length == 0 && hoye.children.length == 0) {
            alert('player 4 wines💥💥🎉🎉🎉😀')
        }
    }
}
let len
function kill(realMove, gud2) {
    len = $(`[data-place=${realMove}] div`).length
    if (len >= 1) {
        for (let i = 0; i < len; i++) {
            clas = gud2[1];
            obj = $(`[data-place=${realMove}] div`).attr('class');
            obj1 = obj.split(' ')
            if (player.length == 4) {
                if (clas != obj1[1]) {
                    killed = $(`[data-place=${realMove}] div`).detach()
                    setTimeout(() => {
                        if (obj1[1] == 'red_child') {
                            killed.attr('id', 'red')
                            $("#red_house").append(killed)
                        } else if (obj1[1] == 'yellow_child') {
                            killed.attr('id', 'yellow')
                            $("#yellow_house").append(killed)
                        } else if (obj1[1] == 'blue_child') {
                            killed.attr('id', 'blue')
                            $("#blue_house").append(killed);
                        } else if (obj1[1] == 'green_child') {
                            killed.attr('id', 'green')
                            $("#green_house").append(killed);
                        }
                    }, 50);
                }
            } else if (player.length == 2) {
                if ((clas == 'red_child' || clas == 'green_child') == (obj1[1] == 'yellow_child' || obj1[1] == 'blue_child')) {
                    killed = $(`[data-place=${realMove}] div`).detach()
                    setTimeout(() => {
                        if (obj1[1] == 'yellow_child') {
                            killed.attr('id', 'yellow')
                            $("#yellow_house").append(killed)
                        } else if (obj1[1] == 'blue_child') {
                            killed.attr('id', 'blue')
                            $("#blue_house").append(killed);
                        }
                    }, 50);
                } else if ((clas == 'yellow_child' || clas == 'blue_child') == (obj1[1] == 'red_child' || obj1[1] == 'green_child')) {
                    killed = $(`[data-place=${realMove}] div`).detach()
                    setTimeout(() => {
                        if (obj1[1] == 'red_child') {
                            killed.attr('id', 'red')
                            $("#yellow_house").append(killed)
                        } else if (obj1[1] == 'green_child') {
                            killed.attr('id', 'green')
                            $("#blue_house").append(killed);
                        }
                    }, 50);
                }
            }
        }
    }
}
let killed