const properties = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500',
        price: '₹85,00,000',
        title: 'Modern Villa',
        location: 'Mumbai, Maharashtra',
        beds: 4,
        baths: 3,
        area: '2400 sq ft'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500',
        price: '₹65,00,000',
        title: 'Luxury Apartment',
        location: 'Bangalore, Karnataka',
        beds: 3,
        baths: 2,
        area: '1800 sq ft'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500',
        price: '₹1,20,00,000',
        title: 'Spacious Bungalow',
        location: 'Delhi NCR',
        beds: 5,
        baths: 4,
        area: '3500 sq ft'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500',
        price: '₹45,00,000',
        title: 'Cozy Family Home',
        location: 'Pune, Maharashtra',
        beds: 3,
        baths: 2,
        area: '1500 sq ft'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500',
        price: '₹95,00,000',
        title: 'Contemporary House',
        location: 'Hyderabad, Telangana',
        beds: 4,
        baths: 3,
        area: '2800 sq ft'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500',
        price: '₹55,00,000',
        title: 'Urban Apartment',
        location: 'Chennai, Tamil Nadu',
        beds: 2,
        baths: 2,
        area: '1200 sq ft'
    }
];

function renderProperties() {
    const grid = document.getElementById('propertyGrid');
    grid.innerHTML = properties.map(property => `
        <div class="property-card">
            <img src="${property.image}" alt="${property.title}" class="property-img">
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">📍 ${property.location}</p>
                <div class="property-details">
                    <span>🛏️ ${property.beds} Beds</span>
                    <span>🚿 ${property.baths} Baths</span>
                    <span>📐 ${property.area}</span>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProperties);
