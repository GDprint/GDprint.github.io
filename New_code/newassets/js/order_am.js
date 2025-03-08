// Simulated order data
const orderData = {
	"148025": {
		title: "Պատվեր #148025 - Գովազդային պաստառի տպագրություն",
		printingMaterial: "Banner",
		orderStage: "Հանձնված պատվեր",
		customerData: {
			name: "Տիգրան Դանելյան",
			email: "tiko_danelyan@bk.ru",
			phone: "093672234"
		},
		description: "Գովազդային պաստառ՝ Սև ֆոնով և կապույտ երանգներով պատկեր է, պարունակում է իր մեջ համակարգչային խաղերի լուսանկարններ առկա տեքստ (GAME ZONE) տառատեսակի անվանումը *PERFORMANCE* ",
		images: [
        "https://github.com/GDprint/GDprint.github.io/blob/Master/assets/img/portfolio/148025.jpg?raw=true"
            ]
	},
		"149026": {
		title: "Պատվեր #149026 - Գովազդային պաստառի տպագրություն",
		printingMaterial: "Banner օղակներով",
		orderStage: "Պատվերը պատրաստ է",
		customerData: {
			name: "Գոհար",
			email: "goharav88@mail.ru",
			phone: "077900940"
		},
		description: "Գովազդային պաստառ՝ նպատակը հողամասը հանձնել վարձակալության կամ վաճառել: Պարունակում է իր մեջ տեքստ (Հողամասը տրվում է վարձով կամ վաճառվում է 043508061 / 093239472) տառատեսակի անվանումը *ArTarumianMHarvats* ",
		images: [
        "https://github.com/GDprint/GDprint.github.io/blob/Master/assets/img/portfolio/149026.jpg?raw=true"
            ]
	},
		"149027": {
		title: "Պատվեր #149027 - Այցեքարտերի տպագրություն",
		printingMaterial: "Այցեքարտերի տպագրություն",
		orderStage: "Պատվերը պատրաստ է դիտարկման",
		customerData: {
			name: "Անահիտ Վարդանյան",
//			email: "goharav88@mail.ru",
			phone: "+37477790893"
		},
		description: "Այցեքարտի տպագրություն նախատեսված կոնտակտային տվյալների փոխանցման համար: Տպաքանակը 1-5 օրինակ ",
		images: [
        "https://github.com/GDprint/GDprint.github.io/blob/Master/assets/img/portfolio/151857.jpg?raw=true"
            ]
	}
};

function searchOrder() {
	const orderNumber = document.getElementById("orderNumber").value.trim();
	const message = document.getElementById("message");
	const orderTitle = document.getElementById("orderTitle");
	const orderInfo = document.getElementById("orderInfo");
	const imageGrid = document.getElementById("imageGrid");

	// Clear previous data
	message.textContent = "";
	orderTitle.textContent = "";
	orderInfo.innerHTML = "";
	imageGrid.innerHTML = "";

	// Check if the order exists
	if (orderData[orderNumber]) {
		const order = orderData[orderNumber];

		// Set order title and detailed information
		orderTitle.textContent = order.title;
		orderInfo.innerHTML = `
                <p><strong>Տպման Նյութի Տեսակը:</strong> ${order.printingMaterial}</p>
                <p><strong>Պատվերի Վիճակը:</strong> ${order.orderStage}</p>
                <p><strong>Հաճախորդի Տվյալներ:</strong></p>
                <ul>
                    <li><strong>Անուն:</strong> ${order.customerData.name}</li>
                    <li><strong>Էլ․ հասցե:</strong> ${order.customerData.email}</li>
                    <li><strong>Հեռախոսահամար:</strong> ${order.customerData.phone}</li>
                </ul>
                <p><strong>Պատվերի Նկարագրություն:</strong> ${order.description}</p>
            `;

		// Display images in a responsive grid with zoom functionality
		order.images.forEach(imageUrl => {
			const colDiv = document.createElement("div");
			colDiv.className = "col";

			const img = document.createElement("img");
			img.src = imageUrl;
			img.alt = "Պատվերի Նկար";
			img.className = "order-image img-fluid";
			img.setAttribute("data-bs-toggle", "modal");
			img.setAttribute("data-bs-target", "#zoomModal");

			// Click event to zoom image
			img.onclick = function () {
				document.getElementById("zoomImage").src = img.src;
			};

			colDiv.appendChild(img);
			imageGrid.appendChild(colDiv);
		});

		// Show the modal
		const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
		orderModal.show();
	} else {
		message.textContent = "Պատվեր չի գտնվել։ Խնդրում ենք մուտքագրել ճիշտ պատվերի համար:";

	}
}

// Function to return to the order view
function backToOrder() {
	const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
	orderModal.show();
}
