
        // start of products list script 
        function createProductCard(imageSrc, sellerName, productName, price, location) {
            var cardDiv = document.createElement('div');
            cardDiv.className = 'card bg-white shadow-lg mx-auto lg:mx-1 my-1 rounded-md';
    
            cardDiv.innerHTML = `
                <img src="${imageSrc}" class="cursor-pointer p-1 rounded-lg" alt="" style="max-width:100%; max-height: 150px;">
                <p class="name bg-[#2c303b] text-white text-sm px-2 py-1 rounded-md mx-1">${sellerName}</p>
                <p class="product_name font-semibold text-sm m-1">${productName}</p>
                <p class="price text-xs font-semibold text-[#f94f01] mx-1">${price}</p>
                <div class="p_location flex items-center ">
                    <span class="material-symbols-outlined text-xl text-[#f94f01] mb-2 ">location_on</span>
                    <p class="text-xs ml-2 mb-2">${location}</p>
                </div>
            `;
    
            document.getElementById('productSection').appendChild(cardDiv);
        }
    
        //usage of different values for each card
        createProductCard("Assets/images/alphard.jpg", "TEDDY D.", "Alphard C400 for sale", "KES.700,000", "Nairobi");
        createProductCard("Assets/images/aqua.jpg", "TEDDY D.", "Aqua", "KES.2,600,000", "Nairobi");
        createProductCard("Assets/images/niss.jpg", "TEDDY D.", "toyota Hiace", "KES.6,000,000", "Nairobi");
        createProductCard("Assets/images/landcruiser.jpg", "TEDDY D.", "Toyota Land cruiser", "KES.12,000,000", "Nairobi");
        createProductCard("Assets/images/cars.png", "TEDDY D.", "Mercedes benz C200", "KES.8,000,000", "Nairobi");
        createProductCard("Assets/images/caryard.png", "TEDDY D.", "Toyota Corolla for sale", "KES.1,300,000", "Nairobi");
        createProductCard("Assets/images/fieder.webp", "TEDDY D.", "Fielder", "KES.800,000", "Nairobi");
        createProductCard("Assets/images/Axio 08.webp", "TEDDY D.", "Axio 08", "KES.1,100,000", "Nairobi");
        createProductCard("Assets/images/Fortuner.webp", "TEDDY D.", "Fortuner", "KES.1,900,000", "Nairobi");
        createProductCard("Assets/images/toyota Hiace.webp", "TEDDY D.", "Toyota Hiace", "KES.00,000", "Nairobi");
        createProductCard("Assets/images/hilux double cab.webp", "TEDDY D.", "Hilux double cab", "KES.2,000,000", "Nairobi");
        createProductCard("Assets/images/Tyota crown(crossover type).jpg", "TEDDY D.", "Toyota crown (crossover type)", "KES.4,000,000", "Nairobi");

        // end of products display script

        // start of user show contact script
          let show = true;

    document.getElementById('showContactButton').addEventListener('click', function() {
        if (show) {
            this.textContent = '0712345678';
            show = false;
        } else {
            this.textContent = 'Show Contact';
            show = true;
        }
    });
    // end of user show contact script


        // start of "click to write feedback" script starts here  
        const feedbackBox = document.querySelector('.feedback-box');
        const feedbackTextarea = document.getElementById('feedbackTextarea');

        feedbackBox.addEventListener('click', () => {
            feedbackTextarea.readOnly = !feedbackTextarea.readOnly;

            if (!feedbackTextarea.readOnly) {
                feedbackTextarea.focus();
            }
        });
        // end of feedback script

        // start of banner slider script
         document.addEventListener('DOMContentLoaded', function () {
            var carousel = document.getElementById('carouselExampleFade');

            var currentIndex = 0;

            var items = carousel.querySelectorAll('.carousel-item');

            function showNextSlide() {
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % items.length;
                items[currentIndex].classList.add('active');
            }

            function showPrevSlide() {
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                items[currentIndex].classList.add('active');
            }

            var slideInterval = setInterval(showNextSlide, 3000);

            carousel.addEventListener('mouseover', function () {
                clearInterval(slideInterval);
            });


            carousel.addEventListener('mouseleave', function () {
                slideInterval = setInterval(showNextSlide, 3000);
            });

            var nextButton = document.querySelector('.carousel-control-next');
            var prevButton = document.querySelector('.carousel-control-prev');

            nextButton.addEventListener('click', showNextSlide);
            prevButton.addEventListener('click', showPrevSlide);
        });
    // end of the banner slider script
   


    