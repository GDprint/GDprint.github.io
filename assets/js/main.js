
(function () {
	"use strict";

	/**
	 * Apply .scrolled class to the body as the page is scrolled down
	 */
	function toggleScrolled() {
		const selectBody = document.querySelector('body');
		const selectHeader = document.querySelector('#header');
		if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
		window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
	}

	document.addEventListener('scroll', toggleScrolled);
3	window.addEventListener('load', toggleScrolled);

	/**
	 * Mobile nav toggle
	 */
	const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

	function mobileNavToogle() {
		document.querySelector('body').classList.toggle('mobile-nav-active');
		mobileNavToggleBtn.classList.toggle('bi-list');
		mobileNavToggleBtn.classList.toggle('bi-x');
	}
	mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

	/**
	 * Hide mobile nav on same-page/hash links
	 */
	document.querySelectorAll('#navmenu a').forEach(navmenu => {
		navmenu.addEventListener('click', () => {
			if (document.querySelector('.mobile-nav-active')) {
				mobileNavToogle();
			}
		});

	});

	/**
	 * Toggle mobile nav dropdowns
	 */
	document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
		navmenu.addEventListener('click', function (e) {
			e.preventDefault();
			this.parentNode.classList.toggle('active');
			this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
			e.stopImmediatePropagation();
		});
	});

	/**
	 * Preloader
	 */
	const preloader = document.querySelector('#preloader');
	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove();
		});
	}

	/**
	 * Scroll top button
	 */
	let scrollTop = document.querySelector('.scroll-top');

	function toggleScrollTop() {
		if (scrollTop) {
			window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
		}
	}
	scrollTop.addEventListener('click', (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	window.addEventListener('load', toggleScrollTop);
	document.addEventListener('scroll', toggleScrollTop);

	/**
	 * Animation on scroll function and init
	 */
	function aosInit() {
		AOS.init({
			duration: 600,
			easing: 'ease-in-out',
			once: true,
			mirror: false
		});
	}
	window.addEventListener('load', aosInit);

	/**
	 * Init swiper sliders
	 */
	function initSwiper() {
		document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
			let config = JSON.parse(
				swiperElement.querySelector(".swiper-config").innerHTML.trim()
			);

			if (swiperElement.classList.contains("swiper-tab")) {
				initSwiperWithCustomPagination(swiperElement, config);
			} else {
				new Swiper(swiperElement, config);
			}
		});
	}

	window.addEventListener("load", initSwiper);

	/**
	 * Initiate Pure Counter
	 */
	new PureCounter();

	/**
	 * Animate the skills items on reveal
	 */
	let skillsAnimation = document.querySelectorAll('.skills-animation');
	skillsAnimation.forEach((item) => {
		new Waypoint({
			element: item,
			offset: '80%',
			handler: function (direction) {
				let progress = item.querySelectorAll('.progress .progress-bar');
				progress.forEach(el => {
					el.style.width = el.getAttribute('aria-valuenow') + '%';
				});
			}
		});
	});

	/**
	 * Initiate glightbox
	 */
	const glightbox = GLightbox({
		selector: '.glightbox'
	});

	/**
	 * Init isotope layout and filters
	 */
	document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
		let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
		let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
		let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

		let initIsotope;
		imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
			initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
				itemSelector: '.isotope-item',
				layoutMode: layout,
				filter: filter,
				sortBy: sort
			});
		});

		isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
			filters.addEventListener('click', function () {
				isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
				this.classList.add('filter-active');
				initIsotope.arrange({
					filter: this.getAttribute('data-filter')
				});
				if (typeof aosInit === 'function') {
					aosInit();
				}
			}, false);
		});

	});

})();



window.addEventListener('contextmenu', function(e) {
	e.preventDefault();
});

function openModal() {
			document.getElementById('jobModal').style.display = 'block';
		}

		function closeModal() {
			document.getElementById('jobModal').style.display = 'none';
		}
		
		function closeWidget(){
			document.getElementById('job-widget').style.display = 'none';
		}

		function openFormModal() {
			closeModal();
			document.getElementById('formModal').style.display = 'block';
		}

		function closeFormModal() {
			document.getElementById('formModal').style.display = 'none';
		}

		function submitApplication(event) {
			event.preventDefault();
			document.getElementById('successMsg').style.display = 'block';
		}

		window.onclick = function(event) {
			if (event.target == document.getElementById('jobModal')) closeModal();
			if (event.target == document.getElementById('formModal')) closeFormModal();
		}

 const questions = document.querySelectorAll('.question');
    questions.forEach(q => {
      q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        document.querySelectorAll('.answer').forEach(a => a.style.display = 'none');
        answer.style.display = isVisible ? 'none' : 'block';
      });
    });
: "30px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(2px)"
  });

  // Card (centered horizontally, near top)
  const card = document.createElement("div");
  Object.assign(card.style, {
    width: "92%",
    maxWidth: "560px",
    background: "#fff",
    borderRadius: "10px",
    padding: "16px 18px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
    textAlign: "center",
    transform: "translateY(0)",
    animation: "slideDownModal 0.45s ease"
  });

  // Add icon, title, reason, info, button
  const icon = document.createElement("div");
  icon.textContent = "⛔";
  Object.assign(icon.style, { fontSize: "44px", color: "#b33", marginBottom: "8px" });

  const title = document.createElement("h3");
  title.textContent = "Գործողությունը արգելված է";
  Object.assign(title.style, { margin: "0 0 6px 0", color: "#b33", fontSize: "18px" });

  const reason = document.createElement("div");
  reason.id = "protectReason";
  Object.assign(reason.style, { fontWeight: 600, marginBottom: "8px", color: "#333" });

  const info = document.createElement("div");
  info.id = "protectInfo";
  Object.assign(info.style, { fontSize: "14px", color: "#444", lineHeight: "1.4", marginBottom: "10px" });
  info.innerHTML = '<i>Տեղը ճշտվում է (GPS)...</i>';

  const okBtn = document.createElement("button");
  okBtn.textContent = "Հասկացա";
  Object.assign(okBtn.style, {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600
  });

  okBtn.addEventListener("click", () => {
    modal.style.display = "none";
    try { audio.pause(); audio.currentTime = 0; } catch(e){}
  });

  card.append(icon, title, reason, info, okBtn);
  modal.appendChild(card);
  document.body.appendChild(modal);

  // Add simple slideDown keyframes
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideDownModal {
      from { transform: translateY(-18px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // ========================
  // show modal + try GPS and display results
  // ========================
  async function showProtectModalWithGPS(text) {
    reason.textContent = text || "Արգելված գործողություն";
    info.innerHTML = "<i>Տեղը ճշտվում է (GPS) — խնդրում ենք թույլատրել տեղորոշման հարցումը...</i>";

    
