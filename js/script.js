import { getOrganizations } from './firebase.js';

let map;
let markers = [];
let infowindow;
let categoriasData = {};

async function loadCategories() {
    try {
        const response = await fetch('../categories.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar categories.json');
        }
        categoriasData = await response.json();
        console.log('Categorías cargadas correctamente:', categoriasData);
    } catch (error) {
        console.error('Error al cargar el archivo de categorías:', error);
        categoriasData = { categorias: [] };
    }
}

function placeMarker(loc) {

    if (!loc.geopoint || !loc.geopoint.latitude || !loc.geopoint.longitude) {
        console.error(`GeoPoint inválido para ${loc.name}:`, loc.geopoint);
        return;
    }

    let recibeText = 'No especificado';
    if (Array.isArray(loc.recibe) && loc.recibe.length > 0) {
        const categoriasConSubcategorias = [];

        loc.recibe.forEach(receive => {
            const categoriaEncontrada = categoriasData.categorias.find(cat => cat.subcategorias.includes(receive));
            if (categoriaEncontrada) {
                const index = categoriasConSubcategorias.findIndex(cat => cat.nombre === categoriaEncontrada.nombre);
                if (index !== -1) {
                    categoriasConSubcategorias[index].subcategorias.push(receive);
                } else {
                    categoriasConSubcategorias.push({
                        nombre: categoriaEncontrada.nombre,
                        subcategorias: [receive]
                    });
                }
            } else {
                categoriasConSubcategorias.push({
                    nombre: receive,
                    subcategorias: []
                });
            }
        });

        recibeText = categoriasConSubcategorias.map(cat => {
            return cat.subcategorias.length > 0 ? `${cat.nombre} (${cat.subcategorias.join(', ')})` : cat.nombre;
        }).join(', ');
    }

    const image = "../assets/Markers.png"; // Icono del marcador
    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(loc.geopoint.latitude, loc.geopoint.longitude),
        map: map,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.close();
        infowindow.setContent(
            `<div id="content">
            <h1 id="firstHeading" class="firstHeading">${loc.name}</h1>
            <div id="separator"></div>
            <div id="bodyContent">
            <span><img src="https://img.icons8.com/?size=512&id=DcygmpZqBEd9&format=png" alt="Icon" class="icon">${loc.adress}</span>
            <span><a href="${loc.onMaps}" target="_blank" class="viewOnMaps">Ver en Google Maps → </a></span> 
            <span><img src="https://img.icons8.com/?size=512&id=85059&format=png" alt="Icon" class="icon">${loc.phoneNumber}</span>
            <span><img src="https://img.icons8.com/?size=512&id=JuGf5gbYAJ21&format=png" alt="Icon" class="icon">${loc.email}</span>
            <span><img src="https://img.icons8.com/?size=512&id=88204&format=png" alt="Icon" class="icon"><a href="https://${loc.website}" target="_blank">${loc.website}</a></span>
            <div id="recibe-cont"><p><span class="bold">Recibe:</span> ${recibeText}</p></div>
            </div>`
        );
        infowindow.open(map, marker);
    });

    markers.push(marker);
}

function updateMarkers(organizations, selectedCategories) {
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    const allSubcategories = new Set(categoriasData.categorias.flatMap(cat => cat.subcategorias));
    const filteredCategories = new Set(selectedCategories.filter(subcat => allSubcategories.has(subcat)));

    organizations.forEach(loc => {
        console.log("🔍 Revisando organización:", loc.name);
        console.log("📌 Recibe:", loc.recibe);

        if (!Array.isArray(loc.recibe) || loc.recibe.length === 0) {
            console.warn(`⚠️ ${loc.name} no tiene subcategorías definidas.`);
            return;
        }

        const recibeSet = new Set(loc.recibe);
        const shouldShow = recibeSet.size > 0 && [...recibeSet].some(subcat => filteredCategories.has(subcat));
        if (shouldShow) {
            placeMarker(loc);
        }
    });
}

function getSelectedCategoriesFromSessionStorage() {
    return JSON.parse(sessionStorage.getItem("selectedCategories")) || [];
}

function handleCategoryCheckboxChange() {
    const selectedCategories = Array.from(document.querySelectorAll('.category-checkbox:checked'))
        .map(checkbox => checkbox.value);

    sessionStorage.setItem("selectedCategories", JSON.stringify(selectedCategories));

    getOrganizations().then(organizations => {
        updateMarkers(organizations, selectedCategories);
    });
}

async function initGoogleMap() {
    infowindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const userPos = { lat: position.coords.latitude, lng: position.coords.longitude };

                map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 12,
                    center: userPos
                });

                await loadCategories();

                const organizations = await getOrganizations();
                let selectedCategories = getSelectedCategoriesFromSessionStorage();

                if (selectedCategories.length === 0 && categoriasData.categorias) {
                    selectedCategories = categoriasData.categorias.flatMap(cat => cat.subcategorias);
                    document.querySelectorAll('.category-checkbox').forEach(checkbox => checkbox.checked = true);
                } else {
                    document.querySelectorAll('.category-checkbox').forEach(checkbox => {
                        checkbox.checked = selectedCategories.includes(checkbox.value);
                    });
                }

                updateMarkers(organizations, selectedCategories);

                document.querySelectorAll('.category-checkbox').forEach(checkbox => {
                    checkbox.addEventListener('change', handleCategoryCheckboxChange);
                });
            },
            () => {
                console.error("Error al obtener la ubicación del usuario.");
            }
        );
    } else {
        console.error("Geolocalización no soportada.");
    }
}

window.initMap = initGoogleMap;
google.maps.event.addDomListener(window, 'load', initGoogleMap);
