
// buy

const buy = () => {

	const buy = document.querySelector('.buy');
	const text = buy.querySelector('.buy-text');
	const links = buy.querySelectorAll('.buy-link');

	links[0].onmouseover = function() {
		text.style.top = ".6rem";
		text.innerHTML = this.getAttribute('data-text');
	}

	links[1].onmouseover = function() {
		text.style.top = "calc(.6rem + 50px)";
		text.innerHTML = this.getAttribute('data-text');
	}

	links[2].onmouseover = function() {
		text.style.top = "calc(.6rem + 100px)";
		text.innerHTML = this.getAttribute('data-text');
	}
}

buy();

// the-end-of-buy



// counter

const counter = () => {

	const counters = document.querySelectorAll('.counter-number');
	var scrollLimit = window.innerHeight || document.documentElement.clientHeight;
	scrollLimit -= 100;

	const isInView = () => {

		const elementTop = counters[0].getBoundingClientRect().top;

		if (elementTop <= scrollLimit) {

			window.removeEventListener('scroll', isInView);	
			for (let i = 0; i < counters.length; i++) { flashCounter(counters[i], "get-from-target", 0, 3, 1) }

		}

	}

	window.addEventListener('scroll', isInView);
	window.addEventListener('load', isInView);	

}

counter();

// the-end-of-counter