var CONST_DIV_MANAGER = ".SGP0hd.kunNie"
var CONST_USER_COUNT = ".uGOf1d"
var CONST_END_CALL = "[jsname='CQylAd']"

function endCall() {
    let button = document.querySelector(CONST_END_CALL)
    button.click()
}


function toggleButton() {
    const on = document.querySelector('[pk-on]')
    const is_on = on.getAttribute('pk-on')
    if (is_on == 'true') {
        on.setAttribute('pk-on', 'false')
        on.classList.remove('active')
        on.classList.add('inative')
        stopVerify();
    } else {
        on.setAttribute('pk-on', 'true')
        on.classList.remove('inative')
        on.classList.add('active')
        startVerify();
    }
}


function createElements() {
    const div_manager = document.querySelector(CONST_DIV_MANAGER)
    let div = document.createElement('div')
    let button = document.createElement('button')
    let min_people = document.createElement('input')
   
    div.className = 'margin10'
    button.innerHTML = 'QuitMeet'
    button.classList.add('pk')
    button.classList.add('elem')
    button.setAttribute('pk-on', 'false')
    button.classList.add('inative')
    button.addEventListener('click', toggleButton, false)
   
    min_people.setAttribute('min', 10)
    min_people.classList.add('pk')
    min_people.classList.add('elem')
    min_people.setAttribute('pk-n-people', null)
    min_people.setAttribute('type', 'text')
    min_people.setAttribute('size', '1')
    
    div.appendChild(button)
    div.appendChild(min_people)
    div_manager.appendChild(div)
}


function startVerify() {
    let = n_people = document.querySelector(CONST_USER_COUNT)
    verify.observe(n_people, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
    })
}

function stopVerify() {
    verify.disconnect()
}


let body = document.querySelector('body')

let ready = new MutationObserver(() => {
    let = n_people = document.querySelector(CONST_USER_COUNT)
    if (n_people) {
        createElements()
        ready.disconnect()
    }
})

ready.observe(body, {
    childList: true
})

let verify = new MutationObserver(function() {
    let n_people = document.querySelector(CONST_USER_COUNT).innerHTML
    let min_people = document.querySelector('[pk-n-people]').value
    if (parseInt(n_people) <= parseInt(min_people)) {
        endCall()
    }
})