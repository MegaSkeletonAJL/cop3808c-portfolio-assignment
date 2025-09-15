document.addEventListener('DOMContentLoaded', function () {
    toast.initialize();
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        toast.showToast(`Thanks for reaching out! I'll get back to you soon!`);
    });
});


// call function inside const variable for message output
const toast = {
	initialize() {
		this.hideTimeout = null;
		// Create toast div and append it to body
		this.element = document.createElement('div');
		this.element.className = 'toast';
		document.body.appendChild(this.element);
	},

	showToast(message) {
		clearTimeout(this.hideTimeout);

		this.element.textContent = message;
		this.element.className = 'toast toast-show';
		// remove toast-show class after specified milliseconds
		this.hideTimeout = setTimeout(() => {
			this.element.classList.remove('toast-show');
		}, 4000);
	},
};


