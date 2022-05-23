botao = document.getElementById('botao')
lamp = document.getElementById('lampada')
text = document.getElementById('text')

botao.onclick = function(){
    if(botao.value == 'acender') {
        lamp.src = './imgs/acesa.png'
        botao.value = 'apagar'
        botao.innerHTML = 'Apagar'
        document.body.style.backgroundColor = 'white';
        text.style.color = 'black';
        botao.style.backgroundColor = 'black';
        botao.style.color = 'white';
    } else {
            lamp.src = './imgs/apagada.png'
            botao.value = 'acender'
            botao.innerHTML = 'Acender'
            document.body.style.backgroundColor = 'black';
            text.style.color = 'white';
            botao.style.backgroundColor = 'white';
            botao.style.color = 'black';
    }

}

