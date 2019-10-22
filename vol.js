var r = prompt('Radius:')

var actual = document.getElementById('actual')

function volume(r){
    var answer = (4/3*Math.PI*r*r*r)
    actual.innerHTML = answer + ' cu units'
    return answer
}

volume(r)