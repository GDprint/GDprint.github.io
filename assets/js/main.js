
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
	window.addEventListener('load', toggleScrolled);

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





(function () {
  // --- Արգելող ֆունկցիա ---
  function protectAction(e, text) {
    // Թույլ ենք տալիս input, select, textarea դաշտերում
    const tag = (e.target.tagName || "").toLowerCase();
    if (["input", "textarea", "select"].includes(tag)) return;

    // Թույլ ենք տալիս նաև այն span-ները, որոնք ունեն onclick ֆունկցիա (օրինակ՝ պատճենման կոճակներ)
    if (!e.target.closest("span[onclick]")) {
      e.preventDefault();
      e.stopPropagation();
      console.warn("Արգելված գործողություն:", text);
      return false;
    }
  }

  // --- Արգելել աջ կոճակը ---
  document.addEventListener("contextmenu", (e) =>
    protectAction(e, "Աջ կոճակը արգելված է։")
  );

  // --- Արգելել տեքստի նշումը (բացառությամբ input, select, textarea) ---
  document.addEventListener("selectstart", (e) =>
    protectAction(e, "Տեքստի ընտրությունը արգելված է։")
  );

  // --- Արգելել քաշելը կամ նշելը ---
  document.addEventListener("mousedown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (["input", "textarea", "select"].includes(tag)) return;
    if (!e.target.closest("span[onclick]")) {
      if (e.button === 0 || e.button === 2) {
        protectAction(e, "Քաշելը կամ նշելը արգելված է։");
      }
    }
  });

  // --- Արգելել drag գործողությունը ---
  document.addEventListener("dragstart", (e) =>
    protectAction(e, "Քաշելու գործողությունը արգելված է։")
  );

  // --- Արգելել ստեղնաշարի կոդերը ---
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    // Թույլ ենք տալիս գրել input, textarea, select-ում
    if (["input", "textarea", "select"].includes(tag)) return;

    const key = (e.key || "").toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;

    // Արգելել F1–F12
    if (e.keyCode >= 112 && e.keyCode <= 123) {
      protectAction(e, "F1–F12 կոճակները արգելված են։");
      return false;
    }

    // Արգելել Ctrl + ...
    if (ctrl && ["a", "c", "v", "s", "p"].includes(key)) {
      protectAction(e, `Ctrl + ${key.toUpperCase()} արգելված է։`);
      return false;
    }
  });

  // --- Developer Tools հայտնաբերում ---
  const devDetector = new Image();
  Object.defineProperty(devDetector, "id", {
    get: function () {
      console.warn("🚫 Developer Tools բացվել է։");
    },
  });
  console.log("%c", devDetector);

  // --- Մոբայլ մենյուի բացման թույլտվություն ---
  document.addEventListener("click", (e) => {
    const toggler = e.target.closest(".navbar-toggler");
    if (toggler) {
      const menu = document.querySelector(".navbar-collapse");
      if (menu) menu.classList.toggle("show");
    }
  });
})();

