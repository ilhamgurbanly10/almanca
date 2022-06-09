
// scroll-animation

const pageScrollAnimation = () => {

	const elements = document.querySelectorAll('.page-scroll-animation');
	for (let i = 0; i < elements.length; i++) { flashIsScrolled(elements[i]); }

}

pageScrollAnimation();

// the-end-of-scroll-animation



// skills-list

const skillsList = document.querySelector('.who-we-are-skill-list');
flashIsScrolled(skillsList);

// the-end-of-skills-list