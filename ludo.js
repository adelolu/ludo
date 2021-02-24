var play = 'first'
var col = ''
// let aaa = ''
let player = ['Red and Green', 'Yellow and Blue']
let two = document.getElementById('checktwo')
let four = document.getElementById('checkfour')
let frg = document.getElementById('checkrg')
let sby = document.getElementById('checkby')
let dice = document.getElementById('dice')
let disp = document.getElementById('diceDisp')
let roll = document.getElementById('roll')

let out = document.getElementsByClassName('oside')
let hose = document.getElementById('red_house')
let hoge = document.getElementById('green_house')
let hoye = document.getElementById('yellow_house')
let hobl = document.getElementById('blue_house')
let lgr = 'linear-gradient(to right, rgba(255, 0, 0, 0.644)  , rgba(4, 170, 4, 0.589))'
let lgy = 'linear-gradient(to right,rgba(4, 4, 139, 0.603),rgba(226, 226, 4, 0.616))'
let a
let b
let da = 0
let db = 0
let move
// let rdrop = document.getElementById('rdrop')



// document.getElementById('ludo').style.backgroundColor = 'rgba(0,0,0,0.2)'
// document.getElementById('ludo').style.opacity = 0.3;
$("#posi").text(`Choose your ${play} player : ${col}`)
$('.sele_col').on('click', temi)
$('#nxt').on('click', tomi)
$('#next').on('click', tolu)
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
            $('#nxt').text('Start game')

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
        $('#nxt').text('Start game')
        $('#nxt').css({
            'width': '120px',
            'left': '72%',
        })
        if (d == 'Start game' && col === ac) {
            document.getElementById('ludo').style.backgroundColor = 'white'
            document.getElementById('ludo').style.opacity = 1;
            $("#select").hide()
            player.push(ac)
            alert(player)
        }
    }

}
function ct() {
    if (four.checked == true) {
        four.checked = false
        two.checked = true
    } else {
        two.checked = true
    }
}
function cf() {
    if (two.checked == true) {
        two.checked = false
        four.checked = true
    } else {
        four.checked = true
    }
}
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
            console.log(player)
        } else {
            player = []
            player.push(sby.parentElement.innerText, frg.parentElement.innerText)
            console.log(player)
        }
        var aa = $("#nex").text()
        $('#nex').css({
            'width': '120px',
            'left': '72%',
        })
        if (aa == 'Start game' && frg.checked == true || aa == 'Start game' && sby.checked == true) {
            document.getElementById('ludo').style.backgroundColor = 'white'
            document.getElementById('ludo').style.opacity = 1;
            document.getElementById('selectTwo').style.display = 'none';
            startGame()

        } else {
            $("#nex").text('Start game')
            frg.disabled = true
            sby.disabled = true
        }
    }
}
let game = document.getElementById('ludo')
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
        } else {
            ludoFour()
        }
    }, 1000);
}
setTimeout(() => {
    startGame()
}, 1000);
function ludoTwo() {
    block()
    diceDisp.style.display = 'none'
}

function img() {
    //  var lg  = localStorage.setItem('img',JSON.stringify(lgr))
    var glg = JSON.parse(localStorage.getItem('img'))

    if (glg == lgr) {
        diceDisp.style.backgroundImage = glg
        localStorage.setItem('img', JSON.stringify(lgy))
    } else {
        diceDisp.style.backgroundImage = glg
        localStorage.setItem('img', JSON.stringify(lgr))
        var glg = JSON.parse(localStorage.getItem('img'))
    }
}

// rollD() displays the number of the rolled dice.
function rollD() {
    a = randiceA()
    b = randiceB()
    dice.style.display = 'none';
    diceDisp.style.display = 'block'
    img()
    diceDisp.innerText = `${a}:${b}`
    setTimeout(() => {
        loopPlayer()
    }, 1500);

}
// randiceA() generates the first random number.
function randiceA() {
    return Math.ceil(Math.random() * 6)
}

// randiceB() generates the second random number.
function randiceB() {
    return Math.ceil(Math.random() * 6)
}
let outRed = []
let outGreen = []
let outYellow = []
let outBlue = []
function loopPlayer() {
    none()
    var glg = JSON.parse(localStorage.getItem('img'))
    rea = glg.indexOf(226)

    // a = 6

    var chil = hose.children.length
    var child = hoge.children.length
    var chil1 = hoye.children.length
    var child1= hobl.children.length
    if (rea >= 0) {
        if (((a == 6 || b == 6) && (chil == 4 && child == 4)) || ((outGreen > 0 || outRed > 0) && (a == 6 || b == 6))) {
            console.log('after tree');
            sixgame()
            specRed()
            specGreen()

        } else if (((chil <= 4 || child <= 4) && (a < 6 && b < 6)) && (outGreen == 0 && outRed == 0)) {
            console.log('roll again')
            startGame()

        } else if (chil < 4 || child < 4) {
            console.log('less');
            if (a == 6 || b == 6) {
                console.log(outGreen);
                console.log(outRed);
                if (outGreen.length > 0 || outRed.length > 0) {
                    add2()
                    specOut()
                    console.log('mama');
                }
                sixgame()
                specRed()
                specGreen()
                console.log('mine');

                console.log('twoooo');
            } else if ((a <= 6 || b <= 6) || (outGreen > 0 || outRed > 0)) {
                add2()
                specOut()
                console.log('me agin');
            } else {
                console.log('smth is really wrong');
            }
        } else {
            console.log('smth wrong');
        }


    } else {
        if (((a == 6 || b == 6) && (chil1 == 4 && child1 == 4)) || ((outYellow > 0 || outBlue > 0) && (a == 6 || b == 6))) {
            console.log('after tree');
            sixgame()
            specYellow()
            specBlue()

        } else if (((chil1 <= 4 || child1 <= 4) && (a < 6 && b < 6)) && (outYellow == 0 && outBlue == 0)) {
            console.log('roll again')
            startGame()

        } else if (chil1 < 4 || child1 < 4) {
            console.log('less');
            if (a == 6 || b == 6) {
                if (outYellow.length > 0 || outBlue.length > 0) {
                    add2()
                    specOut()
                    console.log('mama');
                }
                sixgame()
                specYellow()
                specBlue()
                console.log('mine');

                console.log('twoooo');
            } else if ((a <= 6 || b <= 6) || (outYellow > 0 || outRed > 0)) {
                add2()
                specOut()
                console.log('me agin');
            } else {
                console.log('smth is really wrong');
            }
        } else {
            console.log('smth wrong');
        }
    }

}
function specRed() {
    let ree = document.getElementsByClassName('red_child')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.add('spec')
    }
}
function specOut() {
    let ree = document.getElementsByClassName('sing')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.add('single')
    }
}
function specGreen() {
    let geen = document.getElementsByClassName('green_child')
    for (let i = 0; i < geen.length; i++) {
        geen[i].classList.add('spec')
    }
}
function specRedR() {
    let ree = document.getElementsByClassName('red_child')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.remove('spec')
    }
}
function specOutR() {
    let ree = document.getElementsByClassName('sing')
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.remove('single')
    }
}
function specGreenR() {
    let geen = document.getElementsByClassName('green_child')
    for (let i = 0; i < geen.length; i++) {
        geen[i].classList.remove('spec')
    }
}
function specBlueR() {
    let bue = document.getElementsByClassName('blue_child')
    for (let i = 0; i < bue.length; i++) {
        bue[i].classList.remove('spec')
    }
}
function specYellow() {
    let yell = document.getElementsByClassName('yellow_child')
    for (let i = 0; i < yell.length; i++) {
        yell[i].classList.add('spec')
    }
}
function specYellowR() {
    let yell = document.getElementsByClassName('yellow_child')
    for (let i = 0; i < yell.length; i++) {
        yell[i].classList.remove('spec')
    }
}
function specBlue() {
    let bue = document.getElementsByClassName('blue_child')
    for (let i = 0; i < bue.length; i++) {
        bue[i].classList.add('spec')
    }
}
function sixgame() {
    add()
}
function add2() {
    var chil1 = document.getElementsByClassName('sing')
    // var child = hoge.children
    for (let s = 0; s < chil.length; s++) {
        hov = chil[s].addEventListener('click', movement)
    }


}
function add() {
    var chil = hose.children
    var child = hoge.children
    for (let s = 0; s < chil.length; s++) {
        hov = chil[s].addEventListener('click', movement)
    }
    for (let j = 0; j < child.length; j++) {
        hove = child[j].addEventListener('click', movement)
    }

}
function reMove() {
    var chil = hose.children
    var child = hoge.children
    for (let s = 0; s < chil.length; s++) {
        hov = chil[s].removeEventListener('click', movement)
    }

    for (let j = 0; j < child.length; j++) {
        hove = child[j].removeEventListener('click', movement)
    }
}
let gud
let gud1
let letter
function currentPosition() {
    if (letter == 'r') {
        return 0
    } else if (letter == 'g') {
        return 13
    } else if (letter == 'y') {
        return 40
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
        console.log(position);
        return position
    }
}
let realMove
function movement(event) {
    gud = event.target.id;
    console.log(gud);
    letter = gud.slice(0, 1)
    gud1 = event.target.classList;
    reMove()
    specRedR()
    specOutR()
    specGreenR()

    if (currentPosition() == 0 || currentPosition() == 13) {
        position = ''
    } else if (currentPosition() == undefined) {
        position = event.target.parentElement.dataset.place

    } else if (currentPosition() == 40 || currentPosition() == 26) {
        return
    }

    if (letter == 'r') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        var gud2 = event.target.classList;

        if (realMove == 0) {
            mainMove(realMove, gud2)
            outRed.push(event.target.id)
            console.log(outRed);
        }

    } else if (letter == 'g') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        var gud2 = event.target.classList;
        outGreen.push(event.target.id)
        console.log(outGreen);

        if (realMove == 13) {
            mainMove(realMove, gud2)
        }
    } else {
        var gud2 = event.target.classList;
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
    seed = `<div class="${gud2} sing" style = "position: absolute; " ></div>`
    $(`[data-place=${realMove}]`).append(seed)
    bb = b + realMove
    aa = a + realMove
    var move = setInterval(() => {
        main = $(`[data-place=${realMove}] div`).last().detach()
        realMove++
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

    }, 1000);


}


function mainMove2(realMove, gud2) {
    realMove = parseInt(realMove)
    a = parseInt(a)
    b = parseInt(b);
    da = parseInt(da);
    db = parseInt(db);
    seed = `<div class="${gud2} sing" style = "position: absolute; " ></div>`;
    bb = (b + a) + realMove + da + db


    // console.log(bb);
    // console.log(gud2[1]);
    var move = setInterval(() => {
        main = $(`[data-place=${realMove}] div`).last().detach()
        if (realMove >= 51 && realMove < 100) {
            bb = bb - 52
            realMove = -1
        }

        realMove++
        if (gud2[1] == 'red_child' && realMove == 51) {
            console.log('house');
            realMove = 101

        } else if (gud2[1] == 'green_child' && realMove == 12) {
            realMove = 111
            bb = (bb - 12) + realMove
            console.log(bb);

        }
        if (realMove == 116 || realMove == 106) {
            console.log('stop');
            if (realMove == 116) {
                outGreen.splice(0, 1)
            } else {
                outRed.splice(0, 1)

            }
            $(`[data-place=${realMove}] div`).last().detach()
            stop(move)
            setTimeout(() => {
                startGame()
            }, 1000);
        }
        $(`[data-place=${realMove}]`).append(main)

        if (realMove == bb) {
            stop(move)
        }

    }, 1000);
}


let position
let movedPosition
function moreMove(event) {
    gud = event.target.id;
    console.log(gud);
    letter = gud.slice(0, 1)
    gud1 = event.target.classList;
    reMove()
    specOutR()
    specBlueR()
    specYellowR()

    if (currentPosition() == 26 || currentPosition() == 40) {
        position = ''
    } else if (currentPosition() == undefined) {
        position = event.target.parentElement.dataset.place

    }else if (currentPosition() == 0 || currentPosition() == 13) {
        
    }

    if (letter == 'y') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        var gud2 = event.target.classList;

        if (realMove == 40) {
            mainMove(realMove, gud2)
            outYellow.push(event.target.id)
        }

    } else if (letter == 'b') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        var gud2 = event.target.classList;
        outBlue.push(event.target.id)

        if (realMove == 26) {
            mainMove(realMove, gud2)
        }
    } else {
        var gud2 = event.target.classList;
        realMove = position
        mainMove2(realMove, gud2)
    }

}