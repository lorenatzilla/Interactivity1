// Interactivity demo 2
//zoom in and out
var trigger = document.querySelector ('.trigger')
var body = document.querySelector ('body')

trigger.addEventListener ('click', zoom)

//Caps can change the whole code//

function zoom() {
	console.log ('it works')

	if (body.id != 'zoom') {
		body.id = 'zoom'
    } else {
    	body.id = ''
	}
}
// use == to equal
//parital eclpse on hover
var moon = document.querySelector('.moon')
moon.addEventListener('mouseenter', showShadow)
moon.addEventListener('mouseleave', hideShadow)

function showShadow() {
	moon.classList.add('eclipse')
}

function hideShadow() {
	moon.classList.remove('eclipse')
}