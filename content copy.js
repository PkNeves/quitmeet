

/*
const interval = setInterval(() => {
    const header = document.querySelector("._2O84H")
    if (header) {
        console.log(header)
        clearInterval(interval)
        const button = document.createElement('button')
        let velocidade = 1
        button.innerHTML = `${velocidade}x`
        
        button.classList.add('button2x')

        button.addEventListener('click', ()=> {
            if (velocidade >= 2) {
                velocidade = 1
            } else {
                velocidade += 0.5
            }
            button.innerHTML = `${velocidade}x`
            const audios = document.querySelectorAll('audio')
            audios.forEach((audio)=> {
                audio.playbackRate = velocidade
            })
        })

        header.appendChild(button)
    }

    
}, 2000)
*/

function endCall(interval) {
    let button = document.querySelector('[jsname="CQylAd"]')
    clearInterval(interval)
    button.click()
}

function sendMessage(msg) {
    let text_area = document.querySelector('[jsname="YPqjbf"]')
    let send_message = document.querySelector('[jsname="SoqoBf"]')
    text_area.setAttribute('data-initial-value', 'Tchau, até mais')
    text_area.setAttribute("dir","ltr")
    text_area.value = 'Tchau, até mais'
    send_message.classList.remove('RDPZE')
    send_message.setAttribute("tabindex","0")
    send_message.removeAttribute("aria-disabled")
    console.log('vou mandar')
    send_message.click()
}

function verifyPeople() {
    const interval = setInterval(() => {
        const on = document.querySelector('[pk-on]')
        const is_on = on.getAttribute('pk-on')
        if (is_on == 'true') {
            const n_peoples = document.querySelector('[jscontroller=FTBAv]')
            let min_people = document.querySelector('[pk-n-people]').value
            if (n_peoples && parseInt(min_people)) {
                
                console.log('n_peoples ', parseInt(n_peoples.innerHTML))
                if (parseInt(n_peoples.innerHTML) <= parseInt(min_people)) {
                    console.log("endcall")
                    sendMessage('as')
                    endCall(interval)
                }
            
            } 
            console.log('waiting2')
            console.log('min_pople ', min_people)
        }
    }, 1500)
}

function toggleReach() {
    const on = document.querySelector('[pk-on]')
    const is_on = on.getAttribute('pk-on')
    if (is_on == 'true') {
        on.setAttribute('pk-on', 'false')
        on.classList.remove('active')
        on.classList.add('inative')
    } else {
        on.setAttribute('pk-on', 'true')
        on.classList.remove('inative')
        on.classList.add('active')
    }
}

function createElements() {
    const div_manager = document.querySelector('.f0WtFf')
    let button = document.createElement('button')
    let min_people = document.createElement('input')
   

    button.innerHTML = 'QuitMeet'
    button.classList.add('pk')
    button.classList.add('elem')
    button.setAttribute('pk-on', 'false')
    button.classList.add('inative')
    button.addEventListener('click', toggleReach, false)
   
    min_people.setAttribute('min', 10)
    min_people.classList.add('pk')
    min_people.classList.add('elem')
    min_people.setAttribute('pk-n-people', null)
    min_people.setAttribute('type', 'text')
    min_people.setAttribute('size', '1')
    
    div_manager.appendChild(button)
    div_manager.appendChild(min_people)
}

function removeElements() {
    const elements_created = document.querySelectorAll('.pk')
    elements_created.forEach(function(el) {
        el.remove()
    })
}

const interval = setInterval(() => {
    console.log('waiting')
    const n_peoples = document.querySelector('[jscontroller=FTBAv]')
    const div_manager = document.querySelector('.f0WtFf')
    if (n_peoples && div_manager) {
        console.log('ready')
        clearInterval(interval)
        createElements()
        verifyPeople()
    }
}, 1500)


// clicou, fica observando
// clicou de novo, desliga