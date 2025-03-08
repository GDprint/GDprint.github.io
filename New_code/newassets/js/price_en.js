//Լայնաֆորմատ տպագրություն Calculator functionality
document.getElementById('width').addEventListener('input', calculateCost);
document.getElementById('height').addEventListener('input', calculateCost);
document.getElementById('servicePackage').addEventListener('change', calculateCost);

function calculateCost() {
	const width = parseFloat(document.getElementById('width').value);
	const height = parseFloat(document.getElementById('height').value);
	const packageCost = parseFloat(document.getElementById('servicePackage').value);

	if (!width || !height || !packageCost || width <= 0 || height <= 0) {
		document.getElementById('totalCost').innerText = `Price:  0 AMD`;
		return;
	}

	const area = width * height;
	const totalCost = packageCost * area;

	document.getElementById('totalCost').innerText = `Price: ${totalCost.toFixed(0)} AMD`;
}

//Լուսանկարների տպագրություն Calculator functionality
function photoCount() {
	const sizeCost = parseFloat(document.getElementById('size').value);
	const qanak = parseInt(document.getElementById('qanak').value);

	// Check if both values are valid
	if (!sizeCost || !qanak || qanak <= 0) {
		document.getElementById('totalphCost').innerText = `Price: 0 AMD `;
		return;
	}

	// Calculate total cost
	const totalphCost = sizeCost * qanak;
	document.getElementById('totalphCost').innerText = `Price:  ${totalphCost} AMD`;
}


//Այցեքարտերի տպագրություն Calculator functionality
document.getElementById('quantity').addEventListener('input', calculateBCCost);

function calculateBCCost() {
	const quantity = parseInt(document.getElementById('quantity').value);
	const pricePerCard = 8; // Price of 1 card is 8 AMD
	let totalBCCost = 0;

	if (quantity >= 1000) {
		totalBCCost = quantity * pricePerCard; // Calculate total cost for entered quantity
	}

	document.getElementById('totalBCCost').innerText = `Price: ${totalBCCost} AMD `;
}

//Ձևաթխտերի տպագրություն Calculator function
// Calculator function
function blankForms() {
	const printTypeCost = parseFloat(document.getElementById('printType').value);
	const blank = parseInt(document.getElementById('blank').value);

	// Check if both values are valid
	if (!printTypeCost || !blank || blank <= 0) {
		document.getElementById('totalbkCost').innerText = `Price: 0 AMD`;
		return;
	}

	// Calculate total cost
	const totalbkCost = printTypeCost * blank;
	document.getElementById('totalbkCost').innerText = `Price: ${totalbkCost} AMD `;
}

//Բաժակների տպագրություն Calculator function
function SarphForms() {
        const regularPrice = 2000; // Price for 1 piece if quantity is 50 or less
        const discountedPrice = 1900; // Price for 1 piece if quantity is more than 50
        const Sarph = parseInt(document.getElementById('Sarph').value);

        // Check if quantity is valid
        if (!quantity || quantity <= 0) {
            document.getElementById('totalcupCost').innerText = `Price: 0 AMD`;
            return;
        }

        // Determine the applicable price
        const pricePerPiece = Sarph > 50 ? discountedPrice : regularPrice;

        // Calculate total cost
        const totalcupCost = pricePerPiece * Sarph;

        document.getElementById('totalcupCost').innerText = `Price: ${totalcupCost} AMD`;
    }


//Լայնաֆորմատ տպագրությ տեղադրում/փակցնում Calculator function
function PostForms() {
	const pricePerSquareMeter = 4200;
	const squareMeters = parseFloat(document.getElementById('squareMeters').value);
	//    const post = parseInt(document.getElementById('post').value);

	// Check if values are valid
	if (!squareMeters || squareMeters <= 0) {
		document.getElementById('totalptCost').innerText = `Price:  0 AMD`;
		return;
	}

	// Calculate total cost
	const totalptCost = pricePerSquareMeter * squareMeters;
	document.getElementById('totalptCost').innerText = `Price: ${totalptCost} AMD `;
}

function notificate() {
	alert("Այս պահին քննական թեստի ֆունկցիան ժամանակավորապես անհասանելի է և գտնվում է մշակման փուլում։");
	return;
}
