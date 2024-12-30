 // Get modal elements
 const modal = document.getElementById('image-modal');
 const openPopup = document.getElementById('open-popup');
 const closePopup = document.getElementById('close-popup');

 // Show the modal when the icon is clicked
 openPopup.addEventListener('click', function (e) {
     e.preventDefault(); // Prevent default link behavior
     modal.style.display = 'flex'; // Show modal
 });

 // Hide the modal when the close button is clicked
 closePopup.addEventListener('click', function () {
     modal.style.display = 'none'; // Hide modal
 });

 // Hide the modal when clicking outside the image
 window.addEventListener('click', function (e) {
     if (e.target === modal) {
         modal.style.display = 'none'; // Hide modal
     }
 });
 
 //input
 window.onload = function()
 {
    document.getElementById('ifNO').style.display = 'none';
 }
 function nockeck() {
    const ifNoSection = document.getElementById("ifNo");
    const yesRadio = document.getElementById("yes");
    const noRadio = document.getElementById("no");

    if (noRadio.checked) {
        ifNoSection.style.display = "block";
    } else if (yesRadio.checked) {
        ifNoSection.style.display = "none";
    }
}

 function nockeck()
 {
    if (document.getElementById('no').checked)
    {
        document.getElementById('ifNO').style.visibility='visible';
    }
    else
    {
        document.getElementById('ifNO').style.visibility='hidden';
    }
 }