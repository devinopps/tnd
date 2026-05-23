const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
	nav.classList.toggle('active');
});
document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', () => {
		nav.classList.remove('active');
	});
});


const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
	const header = item.querySelector('.accordion-header');
	header.addEventListener('click', () => {
		accordionItems.forEach(el => {
			if (el !== item) {
				el.classList.remove('active');
			}
		});
		item.classList.toggle('active');
	});
});


const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
form.addEventListener('submit', (e) => {
	e.preventDefault();
	let valid = true;
	[nameInput, emailInput].forEach(input => {
		input.classList.remove('error');
	});
	if (nameInput.value.trim() === '') {
		nameInput.classList.add('error');
		valid = false;
	}
	if (!validateEmail(emailInput.value)) {
		emailInput.classList.add('error');
		valid = false;
	}
	if (valid) {
		setTimeout(() => {
			successMessage.style.display = 'block';
			form.reset();
			setTimeout(() => {
				successMessage.style.display = 'none';
			}, 4000);
		}, 500);
	}
});
const reveals = document.querySelectorAll('.reveal');



function revealOnScroll() {
	const trigger = window.innerHeight * 0.85;
	reveals.forEach(item => {
		const top = item.getBoundingClientRect().top;
		if (top < trigger) {
			item.classList.add('active');
		}
	});
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll