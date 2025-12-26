  (function(){
    // Նյութերի մանրամասն տվյալներ
    const MATERIALS = {
      "office_80": { name: "Office Paper 80 գ/մ²", weight: 80, inkAbsorption: 0.8, recommendedDPI: 300 },
      "office_100": { name: "Office Paper 100 գ/մ²", weight: 100, inkAbsorption: 0.9, recommendedDPI: 600 },
      "office_120": { name: "Office Paper 120 գ/մ²", weight: 120, inkAbsorption: 1.0, recommendedDPI: 600 },
      "photo_120_glossy": { name: "Photo Glossy 115 գ/մ²", weight: 115, inkAbsorption: 0.95, recommendedDPI: 1000 },
      "photo_120_glossy": { name: "Photo Glossy 120 գ/մ²", weight: 120, inkAbsorption: 1.1, recommendedDPI: 1200 },
      "photo_150_glossy": { name: "Photo Glossy 150 գ/մ²", weight: 150, inkAbsorption: 1.1, recommendedDPI: 1200 },
      "photo_180_glossy": { name: "Photo Glossy 180 գ/մ²", weight: 180, inkAbsorption: 1.2, recommendedDPI: 1200 },
      "photo_200_glossy": { name: "Photo Glossy 200 գ/մ²", weight: 200, inkAbsorption: 1.3, recommendedDPI: 1440 },
      "photo_230_matte": { name: "Photo Matte 230 գ/մ²", weight: 230, inkAbsorption: 1.4, recommendedDPI: 1440 },
      "photo_250_silk": { name: "Photo Silk 250 գ/մ²", weight: 250, inkAbsorption: 1.5, recommendedDPI: 2880 },
      "photo_270_glossy": { name: "Photo Glossy 270 գ/մ²", weight: 270, inkAbsorption: 1.6, recommendedDPI: 2880 },
      "photo_300_glossy": { name: "Photo Glossy 300 գ/մ²", weight: 300, inkAbsorption: 1.7, recommendedDPI: 2880 },
      "canvas_320": { name: "Canvas 320 գ/մ²", weight: 320, inkAbsorption: 2.0, recommendedDPI: 720 },
      "canvas_360": { name: "Canvas 360 գ/մ²", weight: 360, inkAbsorption: 2.2, recommendedDPI: 720 },
      "canvas_400": { name: "Canvas 400 գ/մ²", weight: 400, inkAbsorption: 2.5, recommendedDPI: 720 },
      "banner_340": { name: "Banner 340 գ/մ²", weight: 340, inkAbsorption: 1.8, recommendedDPI: 360 },
      "banner_440": { name: "Banner 440 գ/մ²", weight: 440, inkAbsorption: 2.0, recommendedDPI: 360 },
      "banner_510": { name: "Banner 510 գ/մ²", weight: 510, inkAbsorption: 2.2, recommendedDPI: 360 },
      "mesh_420": { name: "Mesh Banner 420 գ/մ²", weight: 420, inkAbsorption: 1.9, recommendedDPI: 360 }
    };

    // Տպիչների տեխնիկական բնութագրեր
    const PRINTERS = {
      "Epson L132": { 
        speed: 0.2,
        colorSpeed: 5, 
        inkCostPerMl: 150,
        technology: "Micro Piezo",
        maxDPI: 5760,
        printTimePerPhoto: 120,
        printTimePerPage: 180
      },
      "Epson L805": { 
        speed: 9.2, 
        colorSpeed: 4.5, 
        inkCostPerMl: 150,
        technology: "PrecisionCore",
        maxDPI: 5760,
        printTimePerPhoto: 45,
        printTimePerPage: 65
      },
      "Epson L1800": { 
        speed: 10.1, 
        colorSpeed: 5.2, 
        inkCostPerMl: 180,
        technology: "PrecisionCore",
        maxDPI: 5760,
        printTimePerPhoto: 35,
        printTimePerPage: 55
      },
      "Epson L1455": { 
        speed: 8.5, 
        colorSpeed: 4.2, 
        inkCostPerMl: 120,
        technology: "Heat-Free",
        maxDPI: 5760,
        printTimePerPhoto: 50,
        printTimePerPage: 70
      },
      "Epson L5190": { 
        speed: 10.5, 
        colorSpeed: 5.0, 
        inkCostPerMl: 130,
        technology: "PrecisionCore",
        maxDPI: 5760,
        printTimePerPhoto: 40,
        printTimePerPage: 60
      },
      "Epson SC-P700": { 
        speed: 12.5, 
        colorSpeed: 6.3, 
        inkCostPerMl: 220,
        technology: "Micro Piezo",
        maxDPI: 5760,
        printTimePerPhoto: 25,
        printTimePerPage: 40
      },
      "Epson SC-P900": { 
        speed: 13.5, 
        colorSpeed: 6.8, 
        inkCostPerMl: 280,
        technology: "Micro Piezo",
        maxDPI: 5760,
        printTimePerPhoto: 20,
        printTimePerPage: 35
      },
      "Epson SC-P5000": { 
        speed: 15.2, 
        colorSpeed: 7.5, 
        inkCostPerMl: 320,
        technology: "PrecisionCore",
        maxDPI: 2400,
        printTimePerPhoto: 15,
        printTimePerPage: 25
      },
      "Epson SC-P7000": { 
        speed: 16.8, 
        colorSpeed: 8.2, 
        inkCostPerMl: 380,
        technology: "PrecisionCore",
        maxDPI: 2400,
        printTimePerPhoto: 12,
        printTimePerPage: 20
      },
      "Epson SureColor P7570": { 
        speed: 18.5, 
        colorSpeed: 9.1, 
        inkCostPerMl: 450,
        technology: "PrecisionCore",
        maxDPI: 2400,
        printTimePerPhoto: 10,
        printTimePerPage: 18
      },
      "Canon PRO-100": { 
        speed: 8.3, 
        colorSpeed: 4.1, 
        inkCostPerMl: 140,
        technology: "FINE",
        maxDPI: 4800,
        printTimePerPhoto: 55,
        printTimePerPage: 75
      },
      "Canon PRO-200": { 
        speed: 9.8, 
        colorSpeed: 4.8, 
        inkCostPerMl: 190,
        technology: "FINE",
        maxDPI: 4800,
        printTimePerPhoto: 42,
        printTimePerPage: 62
      },
      "Canon PRO-300": { 
        speed: 11.2, 
        colorSpeed: 5.5, 
        inkCostPerMl: 240,
        technology: "FINE",
        maxDPI: 4800,
        printTimePerPhoto: 32,
        printTimePerPage: 52
      },
      "Canon PRO-1000": { 
        speed: 13.8, 
        colorSpeed: 6.4, 
        inkCostPerMl: 310,
        technology: "LUCIA PRO",
        maxDPI: 2400,
        printTimePerPhoto: 22,
        printTimePerPage: 38
      },
      "Canon PRO-4000": { 
        speed: 16.2, 
        colorSpeed: 7.2, 
        inkCostPerMl: 380,
        technology: "LUCIA PRO",
        maxDPI: 2400,
        printTimePerPhoto: 18,
        printTimePerPage: 30
      },
      "Canon imagePROGRAF PRO-6000": { 
        speed: 19.1, 
        colorSpeed: 8.5, 
        inkCostPerMl: 420,
        technology: "LUCIA PRO",
        maxDPI: 2400,
        printTimePerPhoto: 14,
        printTimePerPage: 24
      },
      "HP DesignJet T230": { 
        speed: 7.5, 
        colorSpeed: 3.8, 
        inkCostPerMl: 110,
        technology: "Thermal Inkjet",
        maxDPI: 1200,
        printTimePerPhoto: 70,
        printTimePerPage: 90
      },
      "HP DesignJet T730": { 
        speed: 10.8, 
        colorSpeed: 5.2, 
        inkCostPerMl: 160,
        technology: "Thermal Inkjet",
        maxDPI: 2400,
        printTimePerPhoto: 45,
        printTimePerPage: 65
      },
      "HP DesignJet Z9+": { 
        speed: 14.2, 
        colorSpeed: 6.8, 
        inkCostPerMl: 290,
        technology: "PageWide",
        maxDPI: 2400,
        printTimePerPhoto: 28,
        printTimePerPage: 45
      }
    };

    // Թղթի չափսերի բառարան
    const PAPER_SIZES = {
      "A0": { width: 841, height: 1189 },
      "A1": { width: 594, height: 841 },
      "A2": { width: 420, height: 594 },
      "A3": { width: 297, height: 420 },
      "A4": { width: 210, height: 297 },
      "A5": { width: 148.5, height: 210 },
      "A6": { width: 105, height: 148.5 },
      "4x6": { width: 101.6, height: 152.4 },
      "5x7": { width: 127, height: 177.8 },
      "8x10": { width: 203.2, height: 254 },
      "8.5x11": { width: 215.9, height: 279.4 },
      "11x14": { width: 279.4, height: 355.6 },
      "13x19": { width: 330.2, height: 482.6 },
      "16x20": { width: 406.4, height: 508 },
      "18x24": { width: 457.2, height: 609.6 },
      "24x36": { width: 609.6, height: 914.4 }
    };

    // DOM Elements
    const modal = new bootstrap.Modal(document.getElementById('gdpro_modal'));
    const fileInput = document.getElementById('gdpro_file');
    const urlInput = document.getElementById('gdpro_url');
    const previewImg = document.getElementById('gdpro_preview');
    const previewNo = document.getElementById('gdpro_preview_no');
    const colorAnalysis = document.getElementById('gdpro_colorAnalysis');
    const colorCount = document.getElementById('gdpro_colorCount');
    const colorDistribution = document.getElementById('gdpro_colorDistribution');
    const inkUsageEstimate = document.getElementById('gdpro_inkUsageEstimate');
    const paperSizeSelect = document.getElementById('gdpro_paperSize');
    const paperWidthInput = document.getElementById('gdpro_paperWidth');
    const paperHeightInput = document.getElementById('gdpro_paperHeight');
    const printWidthInput = document.getElementById('gdpro_printWidth');
    const printHeightInput = document.getElementById('gdpro_printHeight');
    const materialSelect = document.getElementById('gdpro_material');
    const materialWeightInput = document.getElementById('gdpro_material_weight');
    const calculationMethodSelect = document.getElementById('gdpro_calculation_method');
    const pricePerPieceSection = document.getElementById('gdpro_pricePerPieceSection');
    const pricePerPieceInput = document.getElementById('gdpro_price_per_piece');
    const pricePerSqmSection = document.getElementById('gdpro_pricePerSqmSection');
    const pricePerSqmInput = document.getElementById('gdpro_price_per_sqm');
    const printerSelect = document.getElementById('gdpro_printer');
    const colorsSelect = document.getElementById('gdpro_colors');
    const dpiInput = document.getElementById('gdpro_dpi');
    const coverageInput = document.getElementById('gdpro_coverage');
    const imageCoverageSection = document.getElementById('gdpro_imageCoverageSection');
    const imageCoverageInput = document.getElementById('gdpro_imageCoverage');
    const qtyInput = document.getElementById('gdpro_qty');
    const additionalCostsInput = document.getElementById('gdpro_additional_costs');
    const paperBoxPriceInput = document.getElementById('gdpro_paper_box_price');
    const papersPerBoxInput = document.getElementById('gdpro_papers_per_box');
    const rollPriceInput = document.getElementById('gdpro_roll_price');
    const rollLengthInput = document.getElementById('gdpro_roll_length');
    const paperBoxSection = document.getElementById('gdpro_paperBoxSection');
    const papersPerBoxSection = document.getElementById('gdpro_papersPerBoxSection');
    const rollPriceSection = document.getElementById('gdpro_rollPriceSection');
    const rollLengthSection = document.getElementById('gdpro_rollLengthSection');
    const printerRefillCostInput = document.getElementById('gdpro_printer_refill_cost');
    const calcBtn = document.getElementById('gdpro_calcBtn');
    const resultDiv = document.getElementById('gdpro_result');
    const discountPreview = document.getElementById('gdpro_discountPreview');
    const discountPercent = document.getElementById('gdpro_discountPercent');
    const discountBadge = document.getElementById('gdpro_discountBadge');
    const layoutPreview = document.getElementById('gdpro_layoutPreview');
    const layoutContainer = document.getElementById('gdpro_layoutContainer');
    const layoutEfficiency = document.getElementById('gdpro_layoutEfficiency');
    const layoutInfo = document.getElementById('gdpro_layoutInfo');
    const printCount = document.getElementById('gdpro_printCount');
    const inkDetails = document.getElementById('gdpro_inkDetails');
    const inkBreakdown = document.getElementById('gdpro_inkBreakdown');
    const pdfBtn = document.getElementById('gdpro_pdfBtn');
    const csvBtn = document.getElementById('gdpro_csvBtn');
    const screenshotBtn = document.getElementById('gdpro_screenshotBtn');
    const openBtn = document.getElementById('gdpro_openBtn');
    const closeBtn = document.getElementById('gdpro_closeBtn');
    const canvas = document.getElementById('gdpro_canvas');
    const ctx = canvas.getContext('2d');

    // Info display elements
    const infoModel = document.getElementById('gdpro_info_model');
    const infoArea = document.getElementById('gdpro_info_area');
    const infoQty = document.getElementById('gdpro_info_qty');
    const infoPaperUsage = document.getElementById('gdpro_info_paperUsage');
    const infoImageColors = document.getElementById('gdpro_info_imageColors');

    // Ինքնագնահատված ծածկույթ
    let estimatedCoverage = 100;

    // Իրադարձությունների լսիչներ
    openBtn.addEventListener('click', () => modal.show());
    closeBtn.addEventListener('click', () => modal.hide());

    fileInput.addEventListener('change', handleFileUpload);
    urlInput.addEventListener('change', handleUrlUpload);

    paperSizeSelect.addEventListener('change', updatePaperSize);
    paperWidthInput.addEventListener('input', updateCustomPaperSize);
    paperHeightInput.addEventListener('input', updateCustomPaperSize);
    printWidthInput.addEventListener('input', updateLayout);
    printHeightInput.addEventListener('input', updateLayout);
    
    materialSelect.addEventListener('change', updateMaterialInfo);
    calculationMethodSelect.addEventListener('change', updateCalculationMethod);
    printerSelect.addEventListener('change', updatePrinterInfo);
    colorsSelect.addEventListener('change', updateInkCalculation);
    dpiInput.addEventListener('input', updateInkCalculation);
    coverageInput.addEventListener('input', updateInkCalculation);
    qtyInput.addEventListener('input', updateDiscountPreview);
    
    calcBtn.addEventListener('click', calculateCost);
    pdfBtn.addEventListener('click', generatePDF);
    csvBtn.addEventListener('click', generateCSV);
    screenshotBtn.addEventListener('click', takeScreenshot);

    // Initialize
    updateMaterialInfo();
    updateCalculationMethod();
    updateLayout();

    // Functions
    function handleFileUpload(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          previewImg.src = event.target.result;
          previewImg.style.display = 'block';
          previewNo.style.display = 'none';
          analyzeImage(previewImg);
        };
        reader.readAsDataURL(file);
      }
    }

    function handleUrlUpload(e) {
      const url = e.target.value;
      if (url) {
        previewImg.src = url;
        previewImg.style.display = 'block';
        previewNo.style.display = 'none';
        previewImg.onload = function() {
          analyzeImage(previewImg);
        };
      }
    }

    function analyzeImage(img) {
      const canvasWidth = 200;
      const canvasHeight = 200;
      
      // Set canvas dimensions
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      
      // Draw image on canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
      const data = imageData.data;
      
      // Color analysis
      const colorMap = new Map();
      let totalPixels = canvasWidth * canvasHeight;
      let coloredPixels = 0;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        // Skip transparent pixels
        if (a < 128) continue;
        
        // Check if pixel is not white/light
        if (r < 240 || g < 240 || b < 240) {
          coloredPixels++;
        }
        
        // Create color key
        const colorKey = `${r},${g},${b}`;
        colorMap.set(colorKey, (colorMap.get(colorKey) || 0) + 1);
      }
      
      // Calculate coverage percentage
      estimatedCoverage = Math.round((coloredPixels / totalPixels) * 100);
      
      // Update coverage input
      coverageInput.value = estimatedCoverage;
      imageCoverageInput.value = estimatedCoverage;
      imageCoverageSection.style.display = 'block';
      
      // Sort colors by frequency
      const sortedColors = Array.from(colorMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);
      
      // Display color analysis results
      colorCount.textContent = `Գտնվել է ${colorMap.size} տարբեր գույներ`;
      
      // Create color distribution display
      let distributionHTML = '<div class="d-flex flex-wrap gap-2 mb-2">';
      sortedColors.forEach(([colorKey, count]) => {
        const [r, g, b] = colorKey.split(',').map(Number);
        const percentage = Math.round((count / totalPixels) * 100);
        distributionHTML += `
          <div class="d-flex align-items-center">
            <div class="color-swatch" style="background-color: rgb(${r},${g},${b})"></div>
            <small>${percentage}%</small>
          </div>
        `;
      });
      distributionHTML += '</div>';
      
      colorDistribution.innerHTML = distributionHTML;
      
      // Update ink usage estimate
      const colorComplexity = sortedColors.length > 20 ? 'բարձր' : sortedColors.length > 10 ? 'միջին' : 'ցածր';
      inkUsageEstimate.innerHTML = `
        <div class="small">
          <strong>Գունային բարդություն:</strong> ${colorComplexity}<br>
          <strong>Ծածկույթ:</strong> ${estimatedCoverage}%<br>
          <strong>Խորհուրդ տրված DPI:</strong> ${getRecommendedDPI()}
        </div>
      `;
      
      // Show color analysis section
      colorAnalysis.style.display = 'block';
      
      // Update info display
      infoImageColors.textContent = `${colorMap.size} գույներ, ${estimatedCoverage}% ծածկույթ`;
      
      // Update layout
      updateLayout();
    }

    function getRecommendedDPI() {
      const material = MATERIALS[materialSelect.value];
      return material ? material.recommendedDPI : 300;
    }

    function updatePaperSize() {
      const size = paperSizeSelect.value;
      if (size === 'custom') {
        paperWidthInput.disabled = false;
        paperHeightInput.disabled = false;
      } else {
        const paperSize = PAPER_SIZES[size];
        if (paperSize) {
          paperWidthInput.value = paperSize.width;
          paperHeightInput.value = paperSize.height;
          paperWidthInput.disabled = true;
          paperHeightInput.disabled = true;
          updateLayout();
        }
      }
    }

    function updateCustomPaperSize() {
      if (paperSizeSelect.value === 'custom') {
        updateLayout();
      }
    }

    function updateLayout() {
      const paperWidth = parseFloat(paperWidthInput.value) || 105;
      const paperHeight = parseFloat(paperHeightInput.value) || 148.5;
      const printWidth = parseFloat(printWidthInput.value) || 105;
      const printHeight = parseFloat(printHeightInput.value) || 148.5;
      
      const containerWidth = layoutPreview.clientWidth - 40;
      const containerHeight = layoutPreview.clientHeight - 40;
      
      const scaleX = containerWidth / paperWidth;
      const scaleY = containerHeight / paperHeight;
      const scale = Math.min(scaleX, scaleY);
      
      const scaledPaperWidth = paperWidth * scale;
      const scaledPaperHeight = paperHeight * scale;
      const scaledPrintWidth = printWidth * scale;
      const scaledPrintHeight = printHeight * scale;
      
      // Clear previous layout
      layoutContainer.innerHTML = '';
      
      // Calculate how many prints fit - WITHOUT MARGIN
      const availableWidth = paperWidth;
      const availableHeight = paperHeight;
      
      const cols = Math.floor(availableWidth / printWidth);
      const rows = Math.floor(availableHeight / printHeight);
      const itemsPerPage = cols * rows;
      
      // Update print count
      printCount.textContent = `${itemsPerPage} հատ/էջ`;
      
      // Calculate efficiency
      const printArea = printWidth * printHeight * itemsPerPage;
      const paperArea = paperWidth * paperHeight;
      const efficiency = Math.round((printArea / paperArea) * 100);
      
      layoutEfficiency.textContent = `${efficiency}%`;
      layoutEfficiency.className = `badge efficiency-badge ${efficiency > 80 ? 'bg-success' : efficiency > 60 ? 'bg-warning' : 'bg-danger'}`;
      
      // Create paper background
      const paperDiv = document.createElement('div');
      paperDiv.style.width = `${scaledPaperWidth}px`;
      paperDiv.style.height = `${scaledPaperHeight}px`;
      paperDiv.style.backgroundColor = 'white';
      paperDiv.style.border = '1px solid #ccc';
      paperDiv.style.position = 'relative';
      paperDiv.style.margin = '0 auto';
      
      // Create print items - WITHOUT MARGIN
      let itemCount = 0;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const left = col * scaledPrintWidth;
          const top = row * scaledPrintHeight;
          
          const itemDiv = document.createElement('div');
          itemDiv.className = 'print-item';
          itemDiv.style.width = `${scaledPrintWidth}px`;
          itemDiv.style.height = `${scaledPrintHeight}px`;
          itemDiv.style.left = `${left}px`;
          itemDiv.style.top = `${top}px`;
          itemDiv.style.backgroundColor = 'rgba(70, 130, 180, 0.3)';
          itemDiv.style.border = '1px solid rgba(70, 130, 180, 0.5)';
          itemDiv.title = `Տպվող տարածք ${printWidth}×${printHeight} մմ`;
          
          paperDiv.appendChild(itemDiv);
          itemCount++;
        }
      }
      
      layoutContainer.appendChild(paperDiv);
      
      // Update layout info
      layoutInfo.innerHTML = `
        <div class="row small text-center">
          <div class="col-6">${cols}×${rows}</div>
          <div class="col-6">${itemCount} հատ</div>
        </div>
      `;
      
      // Update info display
      infoArea.textContent = `${printWidth}×${printHeight} մմ`;
      infoPaperUsage.textContent = `${itemsPerPage} հատ/էջ`;
    }

    function updateMaterialInfo() {
      const materialKey = materialSelect.value;
      const material = MATERIALS[materialKey];
      
      if (material) {
        materialWeightInput.value = material.weight;
        
        const materialInfo = document.getElementById('gdpro_materialInfo');
        materialInfo.innerHTML = `
          <strong>${material.name}</strong><br>
          <small>Խորհուրդ տրված DPI: ${material.recommendedDPI} • Ներկի կլանում: ${material.inkAbsorption}x</small>
        `;
        
        // Update DPI recommendation
        if (dpiInput.value < material.recommendedDPI) {
          dpiInput.value = material.recommendedDPI;
        }
      }
    }

    function updateCalculationMethod() {
      const method = calculationMethodSelect.value;
      if (method === 'per_piece') {
        pricePerPieceSection.style.display = 'block';
        pricePerSqmSection.style.display = 'none';
        paperBoxSection.style.display = 'block';
        papersPerBoxSection.style.display = 'block';
        rollPriceSection.style.display = 'none';
        rollLengthSection.style.display = 'none';
      } else {
        pricePerPieceSection.style.display = 'none';
        pricePerSqmSection.style.display = 'block';
        paperBoxSection.style.display = 'none';
        papersPerBoxSection.style.display = 'none';
        rollPriceSection.style.display = 'block';
        rollLengthSection.style.display = 'block';
      }
    }

    function updatePrinterInfo() {
      // Update any printer-specific settings if needed
    }

    function updateInkCalculation() {
      // Recalculate ink usage when parameters change
    }

    function updateDiscountPreview() {
      const quantity = parseInt(qtyInput.value) || 0;
      let discount = 0;
      
      if (quantity >= 2000) discount = 30;
      else if (quantity >= 1000) discount = 20;
      else if (quantity >= 500) discount = 15;
      else if (quantity >= 100) discount = 10;
      
      if (discount > 0) {
        discountPercent.textContent = `${discount}%`;
        discountBadge.textContent = `${discount}%`;
        discountBadge.className = `badge discount-badge ${
          discount >= 30 ? 'bg-danger' : 
          discount >= 15 ? 'bg-success' : 
          discount >= 10 ? 'bg-primary' : 'bg-secondary'
        }`;
        discountPreview.style.display = 'block';
      } else {
        discountPreview.style.display = 'none';
      }
    }

    function calculateCost() {
      // Get input values
      const paperWidth = parseFloat(paperWidthInput.value) || 0;
      const paperHeight = parseFloat(paperHeightInput.value) || 0;
      const printWidth = parseFloat(printWidthInput.value) || 0;
      const printHeight = parseFloat(printHeightInput.value) || 0;
      const materialKey = materialSelect.value;
      const calculationMethod = calculationMethodSelect.value;
      const pricePerPiece = parseFloat(pricePerPieceInput.value) || 0;
      const pricePerSqm = parseFloat(pricePerSqmInput.value) || 0;
      const printerModel = printerSelect.value;
      const colors = parseInt(colorsSelect.value) || 4;
      const dpi = parseInt(dpiInput.value) || 300;
      const coverage = parseInt(coverageInput.value) || 100;
      const quantity = parseInt(qtyInput.value) || 0;
      const additionalCosts = parseFloat(additionalCostsInput.value) || 0;
      const paperBoxPrice = parseFloat(paperBoxPriceInput.value) || 0;
      const papersPerBox = parseInt(papersPerBoxInput.value) || 0;
      const rollPrice = parseFloat(rollPriceInput.value) || 0;
      const rollLength = parseFloat(rollLengthInput.value) || 0;
      const printerRefillCost = parseFloat(printerRefillCostInput.value) || 0;
      
      // Validate inputs
      if (paperWidth <= 0 || paperHeight <= 0) {
        showError('Խնդրում ենք նշել թղթի ճիշտ չափսերը');
        return;
      }
      
      if (printWidth <= 0 || printHeight <= 0) {
        showError('Խնդրում ենք նշել տպվող նկարի ճիշտ չափսերը');
        return;
      }
      
      if (quantity <= 0) {
        showError('Խնդրում ենք նշել տպաքանակը');
        return;
      }
      
      // Calculate paper usage - WITHOUT MARGIN
      const availableWidth = paperWidth;
      const availableHeight = paperHeight;
      
      const cols = Math.floor(availableWidth / printWidth);
      const rows = Math.floor(availableHeight / printHeight);
      const itemsPerPage = cols * rows;
      
      if (itemsPerPage === 0) {
        showError('Տպվող նկարի չափսերը չեն տեղավորվում ընտրված թղթի վրա');
        return;
      }
      
      const pagesNeeded = Math.ceil(quantity / itemsPerPage);
      const paperSheetsNeeded = pagesNeeded;
      
      // Calculate paper costs based on calculation method
      let totalPaperCost = 0;
      let paperUsageText = '';
      
      if (calculationMethod === 'per_piece') {
        // Paper cost from box
        const paperCostPerSheet = paperBoxPrice / papersPerBox;
        totalPaperCost = paperCostPerSheet * paperSheetsNeeded;
        paperUsageText = `${paperSheetsNeeded} թերթ (${Math.ceil(paperSheetsNeeded / papersPerBox * 100)}% տուփից)`;
      } else {
        // Paper cost from roll
        const paperAreaPerSheet = (paperWidth / 1000) * (paperHeight / 1000); // m²
        const totalPaperArea = paperAreaPerSheet * paperSheetsNeeded;
        const rollArea = (paperWidth / 1000) * rollLength; // m²
        const paperCostPerM2 = rollPrice / rollArea;
        totalPaperCost = totalPaperArea * paperCostPerM2;
        paperUsageText = `${totalPaperArea.toFixed(2)} մ² (${Math.ceil(totalPaperArea / rollArea * 100)}% ռուլոնից)`;
      }
      
      // Calculate ink usage
      const printAreaPerItem = (printWidth / 1000) * (printHeight / 1000); // m²
      const totalPrintArea = printAreaPerItem * quantity;
      
      // Ink cost calculation
      const printer = PRINTERS[printerModel] || { inkCostPerMl: 100 };
      const inkCostPerMl = printer.inkCostPerMl;
      
      // Ink usage per square meter (ml/m²)
      const material = MATERIALS[materialKey] || { inkAbsorption: 1.0 };
      const inkUsagePerM2 = (dpi / 300) * (coverage / 100) * colors * 0.1 * material.inkAbsorption;
      const totalInkUsage = totalPrintArea * inkUsagePerM2;
      const totalInkCost = totalInkUsage * inkCostPerMl;
      
      // Calculate printing time
      const printTimePerItem = printer.printTimePerPhoto || 60; // seconds
      const totalPrintTimeSeconds = quantity * printTimePerItem;
      const totalPrintTimeMinutes = Math.ceil(totalPrintTimeSeconds / 60);
      const totalPrintTimeHours = Math.floor(totalPrintTimeMinutes / 60);
      const remainingMinutes = totalPrintTimeMinutes % 60;
      
      // Total cost including printer refill cost
      const totalCost = totalPaperCost + totalInkCost + additionalCosts + printerRefillCost;
      
      // Calculate price and profit
      let totalPrice, profit, profitPerPiece, pricePerPieceFinal, recommendedPrice;
      
      if (calculationMethod === 'per_piece') {
        totalPrice = quantity * pricePerPiece;
        profit = totalPrice - totalCost;
        profitPerPiece = profit / quantity;
        pricePerPieceFinal = pricePerPiece;
        recommendedPrice = Math.ceil((totalCost / quantity) * 1.5); // 50% markup
      } else {
        totalPrice = pricePerSqm * (totalPrintArea / quantity) * quantity;
        profit = totalPrice - totalCost;
        pricePerPieceFinal = totalPrice / quantity;
        profitPerPiece = profit / quantity;
        recommendedPrice = Math.ceil((totalCost / totalPrintArea) * 1.5); // 50% markup per m²
      }
      
      // Apply discount
      let discount = 0;
      if (quantity >= 2000) discount = 0.3;
      else if (quantity >= 1000) discount = 0.20;
      else if (quantity >= 500) discount = 0.15;
      else if (quantity >= 100) discount = 0.1;
      
      const discountAmount = totalPrice * discount;
      const finalPrice = totalPrice - discountAmount;
      const finalProfit = finalPrice - totalCost;
      const finalProfitPerPiece = finalProfit / quantity;
      
      // Update info display
      infoModel.textContent = printerModel || '—';
      infoQty.textContent = quantity;
      
      // Display results
      let resultHTML = `
        <div class="mb-3">
          <h5 class="text-success mb-3"><i class="bi bi-check-circle"></i> Հաշվարկը ավարտված է</h5>
          
          <div class="row g-2 mb-3">
            <div class="col-6">
              <div class="card bg-light">
                <div class="card-body p-2 text-center">
                  <small class="text-muted">Թղթի թերթեր</small>
                  <div class="fw-bold">${paperSheetsNeeded} հատ</div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card bg-light">
                <div class="card-body p-2 text-center">
                  <small class="text-muted">Տպման ժամանակ</small>
                  <div class="fw-bold">${totalPrintTimeHours > 0 ? totalPrintTimeHours + 'ժ ' : ''}${remainingMinutes}ր</div>
                </div>
              </div>
            </div>
          </div>
          
         
          
       
          
          <div class="line"></div>
          
          <h6 class="fw-bold mb-2">Վաճառքի գին</h6>
          <div class="small mb-2">
            ${calculationMethod === 'per_piece' ? `
            <div class="d-flex justify-content-between">
              <span>Մեկ հատի գին:</span>
              <span>${formatCurrency(pricePerPieceFinal)}</span>
            </div>
            ` : `
            <div class="d-flex justify-content-between">
              <span>1 մ² գին:</span>
              <span>${formatCurrency(pricePerSqm)}</span>
            </div>
            `}
            <div class="d-flex justify-content-between">
              <span>Ընդհանուր գին:</span>
              <span>${formatCurrency(totalPrice)}</span>
            </div>
            ${discount > 0 ? `
            <div class="d-flex justify-content-between text-success">
              <span>Զեղչ ${Math.round(discount * 100)}%:</span>
              <span>-${formatCurrency(discountAmount)}</span>
            </div>
            <div class="d-flex justify-content-between fw-bold">
              <span>Վերջնական գին:</span>
              <span class="text-success">${formatCurrency(finalPrice)}</span>
            </div>
            ` : ''}
          </div>
          
          <div class="line"></div>

			   <h6 class="fw-bold mb-2">Ծախսերի հաշվարկ</h6>
          <div class="small mb-2">
            <div class="d-flex justify-content-between">
              <span>Թղթի արժեք:</span>
              <span>${formatCurrency(totalPaperCost)}</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Ներկի արժեք:</span>
              <span>${formatCurrency(totalInkCost)}</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Տպիչի լիցքավորում:</span>
              <span>${formatCurrency(printerRefillCost)}</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Լրացուցիչ ծախսեր:</span>
              <span>${formatCurrency(additionalCosts)}</span>
            </div>
            <div class="d-flex justify-content-between fw-bold">
              <span>Ընդհանուր ծախս:</span>
              <span class="text-danger">${formatCurrency(totalCost)}</span>
            </div>
          </div>
           <div class="line"></div>
          <h6 class="fw-bold mb-2">Շահույթ</h6>
          <div class="small mb-2">
            <div class="d-flex justify-content-between">
              <span>${calculationMethod === 'per_piece' ? 'Մեկ հատից շահույթ:' : '1 մ² շահույթ:'}</span>
              <span class="${finalProfitPerPiece >= 0 ? 'text-success' : 'text-danger'}">
                ${formatCurrency(finalProfitPerPiece)}
              </span>
            </div>
            <div class="d-flex justify-content-between fw-bold">
              <span>Ընդհանուր շահույթ:</span>
              <span class="${finalProfit >= 0 ? 'text-success' : 'text-danger'}">
                ${formatCurrency(finalProfit)}
              </span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Շահութաբերություն:</span>
              <span class="${(finalProfit / finalPrice) >= 0 ? 'text-success' : 'text-danger'}">
                ${Math.round((finalProfit / finalPrice) * 100)}%
              </span>
            </div>
          </div>
          
          <div class="line"></div>
          
          <h6 class="fw-bold mb-2">Տպման մանրամասներ</h6>
          <div class="small">
            <div class="d-flex justify-content-between">
              <span>Տպիչ:</span>
              <span>${printerModel || '—'}</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Տպման ժամանակ:</span>
              <span>${totalPrintTimeHours > 0 ? totalPrintTimeHours + 'ժ ' : ''}${remainingMinutes}ր</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Ներկի սպառում:</span>
              <span>${totalInkUsage.toFixed(2)} մլ</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Թղթի օգտագործում:</span>
              <span>${paperUsageText}</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Դասավորություն:</span>
              <span>${cols}×${rows} = ${itemsPerPage} հատ/էջ</span>
            </div>
          </div>
        </div>
      `;
      
      resultDiv.innerHTML = resultHTML;
      
      // Show ink details
      showInkDetails(totalInkUsage, inkCostPerMl, totalInkCost, colors);
      
      // Scroll to results
      resultDiv.scrollTop = 0;
    }

    function showInkDetails(totalInkUsage, inkCostPerMl, totalInkCost, colors) {
      const colorNames = {
        4: ['Cyan', 'Magenta', 'Yellow', 'Black'],
        5: ['Cyan', 'Magenta', 'Yellow', 'Black', 'White'],
        6: ['Cyan', 'Magenta', 'Yellow', 'Black', 'Light Cyan', 'Light Magenta'],
        8: ['Cyan', 'Magenta', 'Yellow', 'Black', 'Light Cyan', 'Light Magenta', 'Light Black', 'Gray'],
        10: ['Cyan', 'Magenta', 'Yellow', 'Black', 'Light Cyan', 'Light Magenta', 'Light Black', 'Gray', 'Red', 'Green'],
        12: ['Cyan', 'Magenta', 'Yellow', 'Black', 'Light Cyan', 'Light Magenta', 'Light Black', 'Gray', 'Red', 'Green', 'Blue', 'Orange']
      };
      
      const colorsList = colorNames[colors] || colorNames[4];
      const inkPerColor = totalInkUsage / colors;
      const costPerColor = totalInkCost / colors;
      
      let breakdownHTML = '<div class="row g-1">';
      
      colorsList.forEach((colorName, index) => {
        const colorClass = colorName.toLowerCase().replace(' ', '-');
        breakdownHTML += `
          <div class="col-6">
            <div class="d-flex justify-content-between align-items-center">
              <span class="small">${colorName}:</span>
              <span class="small">${inkPerColor.toFixed(2)} մլ</span>
            </div>
            <div class="progress ink-progress">
              <div class="progress-bar bg-${colorClass}" style="width: ${100/colors}%"></div>
            </div>
          </div>
        `;
      });
      
      breakdownHTML += '</div>';
      
      inkBreakdown.innerHTML = breakdownHTML;
      inkDetails.style.display = 'block';
    }

    function showError(message) {
      resultDiv.innerHTML = `
        <div class="alert alert-danger d-flex align-items-center">
          <i class="bi bi-exclamation-triangle-fill me-2"></i>
          <div>${message}</div>
        </div>
      `;
    }

    function formatCurrency(amount) {
      return new Intl.NumberFormat('hy-AM', {
        style: 'currency',
        currency: 'AMD'
      }).format(Math.round(amount));
    }

    function generatePDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(20);
      doc.text('GDPrint Pro - Հաշվարկի Արդյունքներ', 20, 20);
      
      // Add current date
      doc.setFontSize(10);
      doc.text(`Հաշվարկված է: ${new Date().toLocaleDateString('hy-AM')}`, 20, 30);
      
      // Add content from result div
      const resultText = resultDiv.innerText;
      const lines = doc.splitTextToSize(resultText, 170);
      doc.setFontSize(12);
      doc.text(lines, 20, 45);
      
      // Save the PDF
      doc.save('gdprint-calculation.pdf');
    }

    function generateCSV() {
      const resultText = resultDiv.innerText;
      const lines = resultText.split('\n').filter(line => line.trim());
      
      let csvContent = 'GDPrint Pro - Հաշվարկի Արդյունքներ\n';
      csvContent += `Հաշվարկված է:,${new Date().toLocaleDateString('hy-AM')}\n\n`;
      
      lines.forEach(line => {
        const parts = line.split(':');
        if (parts.length === 2) {
          csvContent += `"${parts[0].trim()}","${parts[1].trim()}"\n`;
        }
      });
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'gdprint-calculation.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    function takeScreenshot() {
      html2canvas(resultDiv).then(canvas => {
        const link = document.createElement('a');
        link.download = 'gdprint-results.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }

    // Initialize on window load
    window.addEventListener('load', function() {
      updateLayout();
    });
  })();
	  