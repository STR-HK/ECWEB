let dateleftviewer = document.getElementById('dateleft')
let leftviwer = document.getElementById('left')
let changebtn = document.getElementById('change')

let fd, fH, fM, fS = 0
let d, H, M, S = 0

let exam = Date.parse('2021-10-12 09:00:00')

function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}

function calc() {
    now = Date.now()
    var calculated = exam - now
    dateleft = Math.floor(calculated / (24 * 60 * 60 * 1000))

    dateleftviewer.innerHTML = `${dateleft} Days Left`
    
    fS = calculated / (1000)
    fM = calculated / (1000 * 60)
    fH = calculated / (1000 * 60 * 60)
    fd = calculated / (1000 * 60 * 60 * 24)

    d = Math.floor(fd)
    H = Math.floor(fH) - ( d * 24 )
    M = Math.floor(fM) - ( d * 24 * 60 ) - ( H * 60 )
    S = Math.floor(fS) - ( d * 24 * 60 * 60 ) - ( H * 60 * 60 ) - ( M * 60 )

    H = zeroFill(H, 2)
    M = zeroFill(M, 2)
    S = zeroFill(S, 2)

    left = `${d} : ${H} : ${M} : ${S}`
    leftviwer.innerText = left
}

calc()

function change() {
    if (dateleftviewer.style.display != 'none') {
        dateleftviewer.style.display = 'none'
        leftviwer.style.display = 'block'
        changebtn.style.boxShadow = 'inset 0 0 16px 0 rgb(19 19 19)'
    } else {
        dateleftviewer.style.display = 'block'
        leftviwer.style.display = 'none'
        changebtn.style.boxShadow = '0 0 16px 0px rgb(19 19 19)'
    }
}

setInterval(calc, 1000)