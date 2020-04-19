var a = document.getElementById('area');

let x = 0

let area = document.querySelector('#area')



// area.innerText = "Dont click, it is vairus!"

function clicar() {
  //document.getElementById("Lucas").style.display ="block";
  a.style.background = 'rgb(167, 161, 161)';
  document.getElementById("audio").play();
  a.style.backgroundImage="url('img/corona.jpeg')";
  a.style.backgroundSize = 'cover'
  a.innerText = ''

  x = 1
}

function entrar() 
{
    if(x === 0)  a.innerText = 'Are you sure?';

    // a.style.background = 'gray';
}

function sair() 
{
    if(x === 0) a.innerText = 'Dont click, it is vairus!';
    // a.style.background = '#ffdddd';
}
