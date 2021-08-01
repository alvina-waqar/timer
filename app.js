var start = document.getElementById('start')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')

var m = document.getElementById('displayMin')
var s = document.getElementById('displaySec')
var mili = document.getElementById('displaymiliSec')

var starttimer = null

function timer(){
    if(mili.value == 0 && s.value == 0 && m.value == 0){
        m.value = 0
        s.value = 0
        mili.value = 0
    }
    else if(mili.value != 0){
        mili.value--
    }
    else if(s.value != 0 && mili.value == 0){
        mili.value = 999
        s.value--
    }
    else if(m.value != 0 && s.value == 0){
        s.value = 60
        m.value--
    }
    return
}

function stoptimer(){
    clearInterval(starttimer)
}

function startInterval(){
    starttimer = setInterval(function(){timer()},10)
}
// function pause(){
//     clearInterval(startInterval)
// }

reset.addEventListener('click',function(){
    m.value = 0
    s.value = 0
    mili.value = 0
    stoptimer()
})

// function reset(){
//     pause()
//     mili.value= 0 
//     s.value = 0
//     m.value = 0
//     mili.innerHTML = mili.value
//     s.innerHTML = s.value
//     m.innerHTML = m.value
// }

