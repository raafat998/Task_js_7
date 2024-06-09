   const countrySelect = document.getElementById('countrySelect');
   const img = document.getElementById('img');

   const images = {
       jordan: 'jordan.jpg',
       ksa: 'ksa.webp',
       qatar: 'qatar.png'
   };

   countrySelect.addEventListener('change', function() {

    const selectedCountry = this.value;

       img.src = images[selectedCountry];
   });