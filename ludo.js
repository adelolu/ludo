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
let ree = document.getElementsByClassName('red_child')
let geen = document.getElementsByClassName('green_child')
let yell = document.getElementsByClassName('yellow_child')
let bue = document.getElementsByClassName('blue_child')
let out = document.getElementsByClassName('oside')
let hose = document.getElementById('red_house')
let hoge = document.getElementById('green_house')
let lgr = 'linear-gradient(to right, rgba(255, 0, 0, 0.644)  , rgba(4, 170, 4, 0.589))'
let lgy = 'linear-gradient(to right,rgba(4, 4, 139, 0.603),rgba(226, 226, 4, 0.616))'
let a
let b
let move
let rdrop = document.getElementById('rdrop')



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
function rollD() {
    a = randiceA()
    b = randiceB()
    console.log(a);
    console.log(b);
    dice.style.display = 'none';
    diceDisp.style.display = 'block'
    img()
    diceDisp.innerText = `${a}:${b}`
    setTimeout(() => {
        loopPlayer()
    }, 1500);

}
function randiceA() {
    return Math.ceil(Math.random() * 6)
}
function randiceB() {
    return Math.ceil(Math.random() * 6)
}
function loopPlayer() {
    none()
    var glg = JSON.parse(localStorage.getItem('img'))
    rea = glg.indexOf(226)

    // a = 6
    // var b = randiceB()
    var chil = hose.children.length
    var child = hoge.children.length
    if (rea >= 0) {
        if (a == 6 || b == 6) {
            sixgame()
            specRed()
        }
        if ((a == 6 || b == 6) && (chil == 4 && child == 4)) {

            sixgame()
            specRed()
        } else if ((chil == 4 && child == 4) && (a < 6 || b < 6)) {

            console.log('roll again')
            startGame()
        } else if (chil < 4 || child < 4) {
            if (a < 6 && b < 6) {
                console.log('less');
                add2()

            }
        }


    } else {
        startGame()
    }

}
function specRed() {
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.add('spec')
        geen[i].classList.add('spec')
    }
}
function specRedR() {
    for (let i = 0; i < ree.length; i++) {
        ree[i].classList.remove('spec')
        geen[i].classList.remove('spec')
    }
}
function specYellow() {
    for (let i = 0; i < yell.length; i++) {
        yell[i].classList.add('spec')
        bue[i].classList.add('spec')
    }
}
function sixgame() {
    add()
}
function add2() {
    var chil = document.getElementsByClassName('sing')
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

    if (currentPosition() == 0 || currentPosition() == 13) {
        position = ''
    } else if (currentPosition() == undefined) {
        position = event.target.parentElement.dataset.place

    }


    // console.log(currentPosition());

    if (letter == 'r') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        var gud2 = event.target.classList;

        if (realMove == 0) {
            mainMove(realMove, gud2)

        }

    } else if (letter == 'g') {
        event.currentTarget.remove()
        realMove = firstMove(position)

        var gud2 = event.target.classList;

        if (realMove == 13) {
            mainMove(realMove, gud2)
        }
    } else {
        var gud2 = event.target.classList;

        console.log('chiiii');
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
    console.log(realMove);
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
    seed = `<div class="${gud2} sing" style = "position: absolute; " ></div>`
    bb = (b + a) + realMove
    
    var move = setInterval(() => {
        main = $(`[data-place=${realMove}] div`).last().detach()
        realMove++
        console.log(realMove);
        $(`[data-place=${realMove}]`).append(main)
        if (realMove == bb) {
            stop(move)
        }
    }, 1000);
}





function seven() {
    for (let i = 0; i < out.length; i++) {
        out[i].addEventListener('click', moreMove)
        out[i].classList.add('spec')
    }
}
let position
let movedPosition
function moreMove(event) {
    console.log(event);

    position = event.target.parentElement.dataset.place
    console.log(ind);
    var element = $(`td:eq(${ind}) div`).detach();
    $('td:eq(30)').append(element);

}