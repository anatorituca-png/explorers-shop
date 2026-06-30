/* ============================================================
   EXPLORERS TECHNOLOGIES — Online Store
   ------------------------------------------------------------
   >>> SET YOUR WHATSAPP NUMBER HERE  <<<
   International format, digits only, NO "+" and NO spaces.
   Uganda example: 256712345678  (256 = Uganda, then your number
   without the leading 0).
   ============================================================ */
const CONFIG = {
  whatsapp: "256700123878",          // <-- your WhatsApp number (international format, no +)
  businessName: "EXPLORERS TECHNOLOGIES",
  currency: "UGX",
  location: "Kampala, Uganda",
};

/* ---------- Categories ---------- */
const CATEGORIES = [
  { key: "phones",    label: "Phones",              icon: "📱" },
  { key: "laptops",   label: "Laptops",             icon: "💻" },
  { key: "watches",   label: "Smart Watches",       icon: "⌚" },
  { key: "earphones", label: "Earphones & Audio",   icon: "🎧" },
  { key: "phoneacc",  label: "Phone Accessories",   icon: "🔌" },
  { key: "laptopacc", label: "Laptop Accessories",  icon: "🖱️" },
  { key: "other",     label: "Other Devices",       icon: "📦" },
];

/* ---------- Products (grouped by category, in order) ---------- */
const PRODUCTS = [
  // ===== PHONES =====
  { id:101, cat:"phones", name:"Tecno Spark 20C",        price:520000, old:600000, stock:8,  desc:"6.6\" display, 128GB / 4GB RAM, 5000mAh battery, dual SIM." },
  { id:102, cat:"phones", name:"Infinix Hot 40i",        price:610000, old:700000, stock:5,  desc:"128GB / 8GB RAM, 90Hz screen, 5000mAh, fast charging." },
  { id:103, cat:"phones", name:"Samsung Galaxy A05s",    price:720000,            stock:6,  desc:"6.7\" display, 128GB, 50MP camera, all-day battery." },
  { id:104, cat:"phones", name:"Redmi 13C",              price:650000, old:720000, stock:4,  desc:"128GB / 6GB, 50MP triple camera, 90Hz display." },
  { id:105, cat:"phones", name:"itel S23",               price:430000,            stock:12, desc:"128GB / 8GB, 6.6\" screen, slim design, budget friendly." },
  { id:106, cat:"phones", name:"Tecno Camon 20",         price:920000, old:1050000,stock:3,  desc:"256GB / 8GB, 64MP camera, vivid AMOLED display." },
  { id:107, cat:"phones", name:"Samsung Galaxy A15",     price:980000,            stock:5,  desc:"Super AMOLED, 128GB, 50MP camera, 5000mAh battery." },
  { id:108, cat:"phones", name:"Infinix Note 30",        price:1100000,old:1250000,stock:4,  desc:"256GB / 8GB, 120Hz, 45W fast charge, NFC." },
  { id:109, cat:"phones", name:"Nokia G21",              price:560000,            stock:7,  desc:"Durable build, 3-day battery, 50MP camera, 128GB." },
  { id:110, cat:"phones", name:"iPhone 11 (UK Used)",    price:1450000,old:1700000,stock:2,  desc:"64GB, clean, ~95% battery health, Face ID." },
  { id:111, cat:"phones", name:"Samsung Galaxy A25 5G",  price:1250000,old:1400000,stock:4,  desc:"5G, Super AMOLED 120Hz, 256GB / 8GB, 50MP OIS camera." },
  { id:112, cat:"phones", name:"Tecno Pop 8",            price:320000,            stock:15, desc:"6.6\" display, 64GB, big battery — easy budget pick." },
  { id:113, cat:"phones", name:"Infinix Smart 8",        price:380000, old:430000, stock:10, desc:"128GB, 90Hz screen, 5000mAh, dual SIM." },
  { id:114, cat:"phones", name:"Oppo A38",               price:690000,            stock:6,  desc:"128GB / 6GB, 90Hz, 5000mAh, 33W fast charge." },
  { id:115, cat:"phones", name:"Samsung Galaxy S21 (UK Used)",price:1750000,old:2000000,stock:2,desc:"256GB, 120Hz AMOLED, triple camera, clean." },

  // ===== LAPTOPS =====
  { id:201, cat:"laptops", name:"Lenovo 100e",            price:350000, old:400000, stock:9, desc:"Intel Celeron, 4GB RAM, 64GB — great for students & browsing." },
  { id:202, cat:"laptops", name:"Dell Latitude 3190",     price:480000,            stock:6, desc:"Compact, 4GB / 128GB SSD, durable for school & office." },
  { id:203, cat:"laptops", name:"HP ProBook 440 G5",      price:950000, old:1100000,stock:4, desc:"Core i5 8th Gen, 8GB, 256GB SSD — fast & reliable." },
  { id:204, cat:"laptops", name:"Dell Latitude 5400",     price:1250000,           stock:3, desc:"Core i5, 8GB, 256GB SSD, backlit keyboard, business-grade." },
  { id:205, cat:"laptops", name:"Lenovo ThinkPad T480",   price:1350000,old:1500000,stock:3, desc:"Core i5, 16GB, 256GB SSD — legendary durability." },
  { id:206, cat:"laptops", name:"HP EliteBook 840 G5",    price:1400000,           stock:2, desc:"Core i5, 16GB, 512GB SSD, slim aluminium body." },
  { id:207, cat:"laptops", name:"Acer Aspire 3 (New)",    price:1600000,old:1750000,stock:4, desc:"Core i3 12th Gen, 8GB, 512GB SSD, 1-year warranty." },
  { id:208, cat:"laptops", name:"Lenovo IdeaPad 3 (New)", price:1850000,           stock:3, desc:"Ryzen 5, 8GB, 512GB SSD, 15.6\" Full HD." },
  { id:209, cat:"laptops", name:"Dell Inspiron 15",       price:2100000,old:2300000,stock:2, desc:"Core i5 12th Gen, 16GB, 512GB SSD, FHD display." },
  { id:210, cat:"laptops", name:"MacBook Air 2017",       price:2400000,           stock:1, desc:"Core i5, 8GB, 128GB SSD, macOS, premium build." },
  { id:211, cat:"laptops", name:"HP Stream 11",           price:420000,            stock:7, desc:"Celeron, 4GB, 64GB — ultra-portable for browsing." },
  { id:212, cat:"laptops", name:"Lenovo ThinkPad X260",   price:780000, old:900000, stock:5, desc:"Core i5, 8GB, 256GB SSD, compact business laptop." },
  { id:213, cat:"laptops", name:"HP EliteBook 820 G3",    price:850000,            stock:4, desc:"Core i5, 8GB, 256GB SSD, 12.5\" and portable." },
  { id:214, cat:"laptops", name:"Dell XPS 13",            price:2600000,old:2900000,stock:1, desc:"Core i7, 16GB, 512GB SSD, premium ultrabook." },
  { id:215, cat:"laptops", name:"Asus VivoBook 15 (New)", price:1750000,           stock:3, desc:"Core i5 12th Gen, 8GB, 512GB SSD, Full HD." },

  // ===== SMART WATCHES =====
  { id:301, cat:"watches", name:"T500 Smart Watch",        price:45000, old:60000, stock:20, desc:"Bluetooth call, heart rate, fitness tracking, full touch." },
  { id:302, cat:"watches", name:"D20 Fitness Band",        price:35000,           stock:25, desc:"Step counter, heart rate, sleep monitor, waterproof." },
  { id:303, cat:"watches", name:"Oraimo Watch 2R",         price:120000,old:150000,stock:10, desc:"1.8\" display, BT calling, 100+ sports modes." },
  { id:304, cat:"watches", name:"Xiaomi Smart Band 8",     price:160000,          stock:8,  desc:"AMOLED, 16-day battery, SpO2, 150+ workout modes." },
  { id:305, cat:"watches", name:"Amazfit Bip 3",           price:190000,          stock:6,  desc:"1.69\" display, 14-day battery, GPS, 60+ sports." },
  { id:306, cat:"watches", name:"Huawei Band 9",           price:210000,old:240000,stock:5,  desc:"Slim, AMOLED, sleep tracking, 14-day battery." },
  { id:307, cat:"watches", name:"Samsung Galaxy Fit3",     price:280000,          stock:6,  desc:"1.6\" AMOLED, 13-day battery, 100+ workouts." },
  { id:308, cat:"watches", name:"Realme Watch S",          price:230000,          stock:4,  desc:"1.3\" display, SpO2, IP68, 15-day battery." },
  { id:309, cat:"watches", name:"Samsung Galaxy Watch4",   price:650000,old:750000,stock:3,  desc:"Wear OS, ECG, body composition, 44mm." },
  { id:310, cat:"watches", name:"Apple Watch SE (2nd Gen)",price:1150000,         stock:2,  desc:"GPS, 40mm, full fitness & health tracking, clean." },
  { id:311, cat:"watches", name:"HW16 Smart Watch",        price:38000,           stock:22, desc:"Full touch, heart rate, calls, multiple watch faces." },
  { id:312, cat:"watches", name:"Zordai Z70 Ultra",        price:95000, old:120000,stock:12, desc:"2.0\" screen, BT call, wireless charging." },
  { id:313, cat:"watches", name:"Apple Watch Series 7 (Used)",price:950000,        stock:2,  desc:"45mm, GPS, always-on display, clean." },
  { id:314, cat:"watches", name:"Samsung Galaxy Watch6",   price:850000,old:950000,stock:3,  desc:"Wear OS, sleep coaching, 44mm." },
  { id:315, cat:"watches", name:"Fitbit Charge 6",         price:420000,          stock:4,  desc:"GPS, heart rate, 7-day battery, Google apps." },

  // ===== EARPHONES & AUDIO =====
  { id:401, cat:"earphones", name:"Wired Earphones (3.5mm)",  price:12000,          stock:40, desc:"Crisp sound, in-line mic, universal fit." },
  { id:402, cat:"earphones", name:"Type-C Earphones",         price:18000,          stock:30, desc:"For modern phones, clear audio, built-in mic." },
  { id:403, cat:"earphones", name:"Oraimo FreePods 4",        price:95000, old:120000,stock:12,desc:"ENC calls, 30h playtime, BT 5.3, touch control." },
  { id:404, cat:"earphones", name:"Realme Buds T100",         price:80000,          stock:10, desc:"AI ENC, 28h battery, low-latency gaming mode." },
  { id:405, cat:"earphones", name:"JBL Tune 510BT Headphone", price:220000,         stock:6,  desc:"Wireless on-ear, pure bass, 40h battery." },
  { id:406, cat:"earphones", name:"boAt Airdopes 141",        price:110000,old:140000,stock:8, desc:"TWS, 42h playback, ENx tech, IPX4." },
  { id:407, cat:"earphones", name:"Anker Soundcore P20i",     price:150000,         stock:5,  desc:"TWS, big bass, 30h playtime, app EQ, IPX5." },
  { id:408, cat:"earphones", name:"Samsung Galaxy Buds FE",   price:320000,         stock:4,  desc:"Active noise cancelling, comfortable fit, rich sound." },
  { id:409, cat:"earphones", name:"Gaming Headset (RGB)",     price:130000,old:160000,stock:7, desc:"Surround sound, noise-cancel mic, PC & console." },
  { id:410, cat:"earphones", name:"Bluetooth Neckband",       price:55000,          stock:15, desc:"Magnetic earbuds, 20h battery, sweat-proof." },
  { id:411, cat:"earphones", name:"Apple AirPods (2nd Gen)",  price:350000,old:420000,stock:5, desc:"Wireless, fast pairing, 24h with charging case." },
  { id:412, cat:"earphones", name:"Oraimo RIFF Earbuds",      price:60000,          stock:18, desc:"TWS, 27h playtime, BT 5.3, compact." },
  { id:413, cat:"earphones", name:"JBL Wave Buds",            price:180000,         stock:6,  desc:"Deep bass, IP54, 32h playtime, ambient aware." },
  { id:414, cat:"earphones", name:"Soundcore Life Q20 Headphone",price:280000,old:320000,stock:4,desc:"Hybrid ANC, 40h battery, hi-res audio." },
  { id:415, cat:"earphones", name:"Earbuds + Speaker Combo",  price:90000,          stock:9,  desc:"Value bundle — clear sound, long battery." },

  // ===== PHONE ACCESSORIES =====
  { id:501, cat:"phoneacc", name:"Type-C Fast Charger 25W",  price:35000, old:45000, stock:30, desc:"Quick charge, durable cable included." },
  { id:502, cat:"phoneacc", name:"Power Bank 10000mAh",      price:65000,           stock:18, desc:"Dual USB, fast output, LED charge indicator." },
  { id:503, cat:"phoneacc", name:"Power Bank 20000mAh",      price:110000,old:130000,stock:10, desc:"Charges a phone 4–5x, 22.5W fast charging." },
  { id:504, cat:"phoneacc", name:"Tempered Glass Protector", price:8000,            stock:60, desc:"9H hardness, full coverage, bubble-free." },
  { id:505, cat:"phoneacc", name:"Silicone Phone Case",      price:15000,           stock:50, desc:"Shockproof, slim — assorted colours & models." },
  { id:506, cat:"phoneacc", name:"USB-C to USB-C Cable",     price:18000,           stock:35, desc:"60W fast charge & data, braided." },
  { id:507, cat:"phoneacc", name:"Car Charger (Dual Port)",  price:28000, old:35000, stock:20, desc:"Fast charge on the go, two devices at once." },
  { id:508, cat:"phoneacc", name:"Phone Holder / Stand",     price:22000,           stock:25, desc:"Adjustable — desk & car mount options." },
  { id:509, cat:"phoneacc", name:"64GB Memory Card",         price:45000,           stock:15, desc:"Class 10, fast, for phones & cameras." },
  { id:510, cat:"phoneacc", name:"Wireless Charger Pad",     price:70000, old:85000, stock:8,  desc:"15W fast wireless charging, slim design." },
  { id:511, cat:"phoneacc", name:"33W Super Fast Charger",   price:55000, old:70000, stock:20, desc:"GaN tech, charges most phones rapidly." },
  { id:512, cat:"phoneacc", name:"Phone Ring Holder",        price:6000,            stock:70, desc:"Stick-on grip & stand, anti-drop." },
  { id:513, cat:"phoneacc", name:"OTG Adapter (Type-C)",     price:10000,           stock:40, desc:"Connect flash drives & peripherals to your phone." },
  { id:514, cat:"phoneacc", name:"Phone Cleaning Kit",       price:18000,           stock:25, desc:"Screen-safe microfiber cloth + solution." },
  { id:515, cat:"phoneacc", name:"30000mAh Power Bank",      price:160000,old:190000,stock:6,  desc:"Huge capacity, fast charge, 3 outputs." },

  // ===== LAPTOP ACCESSORIES =====
  { id:601, cat:"laptopacc", name:"Wireless Mouse",            price:30000, old:40000, stock:25, desc:"2.4GHz, silent click, long battery, USB receiver." },
  { id:602, cat:"laptopacc", name:"Universal Laptop Charger",  price:90000,           stock:12, desc:"Multiple tips, auto-voltage, fits most brands." },
  { id:603, cat:"laptopacc", name:"Lenovo Type-C Charger 65W", price:110000,          stock:10, desc:"Original-grade, fast & safe charging." },
  { id:604, cat:"laptopacc", name:"Laptop Bag (15.6\")",       price:65000, old:80000, stock:15, desc:"Padded, water-resistant, multi-pocket." },
  { id:605, cat:"laptopacc", name:"Wired Keyboard",            price:45000,           stock:14, desc:"Full-size, spill-resistant, plug & play." },
  { id:606, cat:"laptopacc", name:"USB Hub (4-Port)",          price:40000,           stock:18, desc:"USB 3.0 — expand your ports, compact." },
  { id:607, cat:"laptopacc", name:"HDMI Cable (1.5m)",         price:25000,           stock:22, desc:"Full HD / 4K, connect laptop to TV or monitor." },
  { id:608, cat:"laptopacc", name:"Laptop Cooling Pad",        price:75000, old:90000, stock:8,  desc:"Dual fans, adjustable height, quiet operation." },
  { id:609, cat:"laptopacc", name:"Laptop Stand (Aluminium)",  price:95000,           stock:6,  desc:"Ergonomic, foldable, improves posture." },
  { id:610, cat:"laptopacc", name:"External HDD 1TB",          price:220000,old:260000,stock:5,  desc:"USB 3.0 — store movies, backups & files." },
  { id:611, cat:"laptopacc", name:"8GB DDR4 Laptop RAM",       price:160000,old:190000,stock:8,  desc:"2666MHz — boost speed & multitasking." },
  { id:612, cat:"laptopacc", name:"240GB SSD",                 price:180000,          stock:10, desc:"SATA upgrade for fast boot & loading." },
  { id:613, cat:"laptopacc", name:"Keyboard & Mouse Combo",    price:95000,           stock:7,  desc:"Wireless, slim, quiet, plug-and-play." },
  { id:614, cat:"laptopacc", name:"Webcam 1080p",              price:110000,old:130000,stock:6,  desc:"Full HD, built-in mic — great for meetings." },
  { id:615, cat:"laptopacc", name:"Screen Cleaning Kit",       price:20000,           stock:20, desc:"Safe for screens, lint-free cloth included." },

  // ===== OTHER MOBILE DEVICES =====
  { id:701, cat:"other", name:"Lenovo Tab M10",             price:750000, old:850000, stock:5,  desc:"10.1\" HD, 64GB — great for study & streaming." },
  { id:702, cat:"other", name:"Samsung Galaxy Tab A9",      price:980000,            stock:4,  desc:"8.7\" display, 64GB, slim, long battery." },
  { id:703, cat:"other", name:"Bluetooth Speaker (Portable)",price:120000,old:150000, stock:12, desc:"Loud bass, waterproof, 12h playtime." },
  { id:704, cat:"other", name:"MiFi 4G Router",            price:160000,            stock:8,  desc:"Pocket WiFi — share internet with up to 10 devices." },
  { id:705, cat:"other", name:"Smart TV Stick (4K)",       price:140000,            stock:7,  desc:"Stream Netflix / YouTube — turn any TV smart." },
  { id:706, cat:"other", name:"Mini Projector",            price:380000, old:430000, stock:4,  desc:"1080p support, home cinema, HDMI & USB." },
  { id:707, cat:"other", name:"Power Station / Inverter",  price:650000,            stock:3,  desc:"Backup power for devices, multiple outlets." },
  { id:708, cat:"other", name:"Game Controller (Wireless)",price:95000,             stock:9,  desc:"For PC / Android / console, rechargeable." },
  { id:709, cat:"other", name:"Solar Power Bank 10000mAh", price:130000, old:160000, stock:6,  desc:"Solar + USB charging, rugged, dual output." },
  { id:710, cat:"other", name:"Tablet Keyboard Case",      price:110000,            stock:5,  desc:"Detachable keyboard + stand, for 10\" tablets." },
  { id:711, cat:"other", name:"iPad 9th Gen (UK Used)",    price:1450000,old:1650000,stock:2,  desc:"64GB, 10.2\" display — great for work & study." },
  { id:712, cat:"other", name:"JBL Flip 6 Speaker",        price:420000,            stock:4,  desc:"Powerful, waterproof, 12h, party boost." },
  { id:713, cat:"other", name:"Smart WiFi Bulb",           price:45000,             stock:20, desc:"App & voice control, colour changing." },
  { id:714, cat:"other", name:"Action Camera 4K",          price:320000, old:380000, stock:5,  desc:"Waterproof, wide angle, mounts included." },
  { id:715, cat:"other", name:"Wireless Doorbell Camera",  price:280000,            stock:4,  desc:"HD video, motion alerts, two-way talk." },
];

/* assign images per category in listed order: images/<cat><n>.jpg */
const _cc = {};
PRODUCTS.forEach(p => { _cc[p.cat] = (_cc[p.cat] || 0) + 1; p.img = `images/${p.cat}${_cc[p.cat]}.jpg`; });

/* deterministic pseudo rating + reviews so the page feels alive */
PRODUCTS.forEach(p => {
  p.rating = (4 + ((p.id * 3) % 10) / 10).toFixed(1);   // 4.0 – 4.9
  p.reviews = 8 + ((p.id * 13) % 240);
});

/* ============================================================
   State + helpers
   ============================================================ */
let activeCat = "all";
let searchTerm = "";
let sortMode = "featured";
let cart = loadCart();

const $ = sel => document.querySelector(sel);
const money = n => `${CONFIG.currency} ${Number(n).toLocaleString("en-US")}`;
const byId = id => PRODUCTS.find(p => p.id === id);

function loadCart() {
  try { return JSON.parse(localStorage.getItem("explorers_cart")) || {}; }
  catch { return {}; }
}
function saveCart() { localStorage.setItem("explorers_cart", JSON.stringify(cart)); }

function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, q]) => {
    const p = byId(Number(id)); return p ? sum + p.price * q : sum;
  }, 0);
}

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

function stockBadge(p) {
  if (p.stock <= 0) return `<span class="badge out">Out of stock</span>`;
  if (p.stock <= 3) return `<span class="badge low">Only ${p.stock} left</span>`;
  return `<span class="badge in">In stock</span>`;
}

function stars(r) {
  const full = Math.round(r);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

/* ============================================================
   Rendering
   ============================================================ */
const MENU_ITEMS = [{ key: "all", label: "All Products", icon: "🛍️" }, ...CATEGORIES];

function renderCategoryMenu() {
  const menu = $("#catDdMenu");
  menu.innerHTML = MENU_ITEMS.map(c => {
    const count = c.key === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === c.key).length;
    return `<button class="cat-dd-item ${activeCat===c.key?'active':''}" data-cat="${c.key}" role="menuitem">
      <span class="ddi-ic">${c.icon}</span><span class="ddi-label">${c.label}</span><span class="ddi-count">${count}</span>
    </button>`;
  }).join("");
  menu.querySelectorAll(".cat-dd-item").forEach(b => b.onclick = () => selectCategory(b.dataset.cat));
  const cur = MENU_ITEMS.find(c => c.key === activeCat) || MENU_ITEMS[0];
  $("#catDdLabel").textContent = activeCat === "all" ? "Shop by Category" : cur.label;
  $("#shopTitle").textContent = cur.label;
}

function selectCategory(key) {
  activeCat = key;
  closeCatMenu();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function openCatMenu()  { $("#catDd").classList.add("open");  $("#catDdMenu").classList.add("open");  $("#catDdBtn").setAttribute("aria-expanded","true"); }
function closeCatMenu() { $("#catDd").classList.remove("open"); $("#catDdMenu").classList.remove("open"); $("#catDdBtn").setAttribute("aria-expanded","false"); }

function filteredProducts() {
  let list = PRODUCTS.filter(p =>
    (activeCat === "all" || p.cat === activeCat) &&
    (searchTerm === "" || p.name.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm))
  );
  if (sortMode === "low")  list = [...list].sort((a,b)=>a.price-b.price);
  if (sortMode === "high") list = [...list].sort((a,b)=>b.price-a.price);
  return list;
}

function productCard(p) {
  const disc = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  const soldOut = p.stock <= 0;
  return `<article class="card">
    <div class="card-img">
      ${disc ? `<span class="disc">-${disc}%</span>` : ""}
      ${stockBadge(p)}
      <img src="${p.img}" alt="${p.name}" loading="lazy"
           onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22225%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23e7eef5%22/><text x=%2250%25%22 y=%2250%25%22 font-size=%2216%22 fill=%22%2390a4b8%22 text-anchor=%22middle%22>Image</text></svg>'">
    </div>
    <div class="card-body">
      <h3 class="card-title">${p.name}</h3>
      <div class="rating"><span class="rstars">${stars(p.rating)}</span><span class="rnum">${p.rating} (${p.reviews})</span></div>
      <p class="card-desc">${p.desc}</p>
      <div class="price-row">
        <span class="price">${money(p.price)}</span>
        ${p.old ? `<span class="old">${money(p.old)}</span>` : ""}
      </div>
      <div class="card-actions">
        <button class="btn btn-cart" ${soldOut?"disabled":""} data-add="${p.id}">Add to Cart</button>
        <button class="btn btn-order" ${soldOut?"disabled":""} data-order="${p.id}">Order on WhatsApp</button>
      </div>
    </div>
  </article>`;
}

function render() {
  renderCategoryMenu();
  const list = filteredProducts();
  const grid = $("#grid");
  $("#resultCount").textContent = `${list.length} product${list.length!==1?"s":""}`;
  grid.innerHTML = list.length
    ? list.map(productCard).join("")
    : `<p class="empty">No products match your search.</p>`;
  grid.querySelectorAll("[data-add]").forEach(b => b.onclick = () => addToCart(Number(b.dataset.add)));
  grid.querySelectorAll("[data-order]").forEach(b => b.onclick = () => orderSingle(Number(b.dataset.order)));
  updateCartUI();
}

/* ============================================================
   Cart actions
   ============================================================ */
function addToCart(id) {
  const p = byId(id); if (!p || p.stock <= 0) return;
  cart[id] = (cart[id] || 0) + 1;
  saveCart(); updateCartUI(); toast(`${p.name} added to cart`);
}
function setQty(id, q) {
  if (q <= 0) delete cart[id]; else cart[id] = q;
  saveCart(); updateCartUI();
}
function updateCartUI() {
  $("#cartCount").textContent = cartCount();
  const items = Object.entries(cart);
  const box = $("#cartItems");
  if (!items.length) {
    box.innerHTML = `<p class="cart-empty">Your cart is empty.<br>Browse the products and tap “Add to Cart”.</p>`;
  } else {
    box.innerHTML = items.map(([id, q]) => {
      const p = byId(Number(id)); if (!p) return "";
      return `<div class="cart-item">
        <img src="${p.img}" alt="">
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">${money(p.price)}</div>
          <div class="qty">
            <button data-dec="${id}">−</button><span>${q}</span><button data-inc="${id}">+</button>
            <button class="ci-remove" data-rem="${id}">Remove</button>
          </div>
        </div>
        <div class="ci-line">${money(p.price * q)}</div>
      </div>`;
    }).join("");
    box.querySelectorAll("[data-inc]").forEach(b => b.onclick = () => setQty(Number(b.dataset.inc), cart[b.dataset.inc] + 1));
    box.querySelectorAll("[data-dec]").forEach(b => b.onclick = () => setQty(Number(b.dataset.dec), cart[b.dataset.dec] - 1));
    box.querySelectorAll("[data-rem]").forEach(b => b.onclick = () => setQty(Number(b.dataset.rem), 0));
  }
  $("#cartTotal").textContent = money(cartTotal());
  $("#checkoutBtn").disabled = !items.length;
}

/* ============================================================
   WhatsApp ordering
   ============================================================ */
function orderSingle(id) {
  const p = byId(id); if (!p) return;
  const msg =
`Hello ${CONFIG.businessName}, I want to order:

• ${p.name}
• Price: ${money(p.price)}

Please confirm availability and delivery. Thank you.`;
  window.open(waLink(msg), "_blank");
}

function checkout() {
  const items = Object.entries(cart);
  if (!items.length) return;
  let lines = items.map(([id, q], i) => {
    const p = byId(Number(id));
    return `${i+1}. ${p.name} — ${q} x ${money(p.price)} = ${money(p.price*q)}`;
  }).join("\n");
  const msg =
`Hello ${CONFIG.businessName}, I would like to place this order:

${lines}

TOTAL: ${money(cartTotal())}

My name:
Delivery location:

Please confirm availability and delivery cost. Thank you!`;
  window.open(waLink(msg), "_blank");
}

/* ============================================================
   Toast + UI wiring
   ============================================================ */
let toastTimer;
function toast(text) {
  const t = $("#toast"); t.textContent = text; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

function openCart()  { $("#cartDrawer").classList.add("open");  $("#overlay").classList.add("show"); }
function closeCart() { $("#cartDrawer").classList.remove("open"); $("#overlay").classList.remove("show"); }

document.addEventListener("DOMContentLoaded", () => {
  // fill dynamic text
  $("#waFloatLink").href = waLink(`Hello ${CONFIG.businessName}, I have a question about your products.`);
  $("#footYear").textContent = new Date().getFullYear();

  render();

  // category dropdown open/close
  $("#catDdBtn").onclick = e => {
    e.stopPropagation();
    $("#catDd").classList.contains("open") ? closeCatMenu() : openCatMenu();
  };
  document.addEventListener("click", e => { if (!e.target.closest("#catDd")) closeCatMenu(); });

  $("#search").addEventListener("input", e => { searchTerm = e.target.value.toLowerCase().trim(); render(); });
  $("#sort").addEventListener("change", e => { sortMode = e.target.value; render(); });
  $("#cartBtn").onclick = openCart;
  $("#closeCart").onclick = closeCart;
  $("#overlay").onclick = closeCart;
  $("#checkoutBtn").onclick = checkout;

  // warn if WhatsApp number not set
  if (CONFIG.whatsapp === "256700000000") {
    $("#setupNote").style.display = "block";
  }
});
