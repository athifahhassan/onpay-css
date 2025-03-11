 const properties = [
            { img: "https://afrproperty.onpay.my/media/uploads/SetiaIndah5.jpg", price: "RM 1,600,000", address: "Jalan Setia 5 @ Taman Setia Indah", details: "6 Beds | 5 Baths | 6100 SQFT" },
            { img: "https://afrproperty.onpay.my/media/uploads/SetiaTropika.jpg", price: "RM 1,200,000", address: "Dictyo Alba Setia Tropika", details: "4 Beds | 3 Baths | 3,509 SQFT" },
            { img: "https://afrproperty.onpay.my/media/uploads/FairwaysPulaiPerdana.jpg", price: "RM 880,000", address: "Fairways @ Sri Pulai Perdana", details: "5 Beds | 4 Baths | 8,600 SQFT" },
            { img: "https://afrproperty.onpay.my/media/uploads/Rumah1.jpg", price: "Price Upon Request", address: "281 Park Ave South, New York, NY 10010", details: "0 Beds | 42,500 SQFT" },
            { img: "https://afrproperty.onpay.my/media/uploads/Rumah2.jpg", price: "$75,000,000", address: "56 North Moore St, New York City, NY 10013", details: "50 Beds" },
            { img: "https://afrproperty.onpay.my/media/uploads/Rumah3.jpg", price: "$69,995,000", address: "165 SURFSIDE DR, Water Mill, NY 11976", details: "8 Beds | 8 Full Baths | 1 Half Bath | 8,600 SQFT" },
            { img: "https://afrproperty.onpay.my/media/uploads/SetiaIndah5.jpg", price: "RM 1,600,000", address: "Jalan Setia 5 @ Taman Setia Indah", details: "6 Beds | 5 Baths | 6100 SQFT" },
            { img: "https://afrproperty.onpay.my/media/uploads/SetiaTropika.jpg", price: "RM 1,200,000", address: "Dictyo Alba Setia Tropika", details: "4 Beds | 3 Baths | 3,509 SQFT" }
        ];

        const itemsPerPage = 6;
        let currentPage = 1;
        const propertyList = document.getElementById("property-list");
        const prevBtn = document.getElementById("prev-btn");
        const nextBtn = document.getElementById("next-btn");
        const pageInfo = document.getElementById("page-info");

        function renderProperties() {
            propertyList.innerHTML = "";
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedItems = properties.slice(start, end);

            paginatedItems.forEach(property => {
                const card = document.createElement("div");
                card.className = "property-card";
                card.innerHTML = `
                    <img src="${property.img}" alt="Property">
                    <div class="property-details">
                        <h3>${property.price}</h3>
                        <p>${property.address}</p>
                        <p>${property.details}</p>
                    </div>
                `;
                propertyList.appendChild(card);
            });

            pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(properties.length / itemsPerPage)}`;
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage * itemsPerPage >= properties.length;
        }

        prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderProperties();
            }
        });

        nextBtn.addEventListener("click", () => {
            if (currentPage * itemsPerPage < properties.length) {
                currentPage++;
                renderProperties();
            }
        });

        renderProperties();
