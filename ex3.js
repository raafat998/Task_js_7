document.addEventListener('DOMContentLoaded', function() {
                
    var element = document.getElementById('text');
    var checkbox = document.getElementById('font_bold');
    var Underline = document.getElementById('font_underline');
    var italic = document.getElementById('font_italic');


checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            element.style.fontWeight = 'bold';
        } else {
            element.style.fontWeight = 'normal';
        }
});

Underline.addEventListener('change', function() {
        if (Underline.checked) {
            element.style.textDecoration = 'underline';
        } else {
            element.style.textDecoration = 'none';
        }
});

italic.addEventListener('change', function() {
        if (italic.checked) {
            element.style.fontStyle = 'italic';
        } else {
            element.style.fontStyle = 'normal';
        }
});

  
const fontSize = document.getElementById('font_size');

fontSize.addEventListener('change', function() {
    
    const selectedFontSize = this.value;
    
    element.style.fontSize = selectedFontSize;
});


const fontFamily = document.getElementById('font_family');

fontFamily.addEventListener('change', function() {
    
    const selectedFamily = this.value;
    
    element.style.fontFamily = selectedFamily;
});



});