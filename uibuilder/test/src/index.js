'use strict'
// Send msg to NR
window.fnSendToNR = function fnSendToNR(payload) {
    uibuilder.send({
        'topic': 'msg-from-uiBuilder',
        'paylaod': payload
    })
}

// Listen msg from NR
 uibuilder.onChange('msg', (msg) => {
    const eMsg = $('#msg')
    if(eMsg) eMsg.innerHTML = uibuilder.syntaxHighlight(msg)
})
