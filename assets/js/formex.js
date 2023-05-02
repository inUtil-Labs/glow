/*
function handleUploadButtonClick() {
  const useWhatsappImage = document.getElementById("use-whatsapp-image").checked;
  const mobileInput = document.getElementById("mobile");
  const profilePictureInput = document.getElementById("profile-picture");

  if (!profilePictureInput.value && !useWhatsappImage) {
    profilePictureInput.click();
  } else if (useWhatsappImage) {
    const mobileRegex = /^[0-9]+$/;

    if (mobileRegex.test(mobileInput.value)) {
      const apiUrl = "https://whatsapp-scraper.p.rapidapi.com/wspicture";
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7540839c98mshc8fe15e657db2c2p13c8ccjsnd1d2ebde022a',
          'X-RapidAPI-Host': 'whatsapp-scraper.p.rapidapi.com'
        }
      };
      const phoneNumber = mobileInput.value;
      const requestUrl = `${apiUrl}?phone=${phoneNumber}`;

      fetch(requestUrl, options)
        .then(response => response.text())
        .then(data => {
          const imageUrl = data.trim();
          const picturePreview = document.getElementById("profile-picture-preview");
          picturePreview.src = imageUrl;
          picturePreview.style.display = "block";
          picturePreview.style.width = "50px";
          picturePreview.style.height = "50px";
        })
        .catch(error => {
          alert("Error fetching image: " + error);
        });

    } else {
      alert("Invalid phone number format. Please enter numbers only.");
    }
  } else {
    const form = document.getElementById("person-details-form");
    form.submit();
  }
}
*/

/*

function handleUploadButtonClick() {
  const useWhatsappImage = document.getElementById("use-whatsapp-image").checked;
  const mobileInput = document.getElementById("mobile");
  const profilePictureInput = document.getElementById("profile-picture");

  if (useWhatsappImage) {
    const mobileRegex = /^[0-9]+$/;

    if (mobileRegex.test(mobileInput.value)) {
      const apiUrl = "https://whatsapp-scraper.p.rapidapi.com/wspicture";
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7540839c98mshc8fe15e657db2c2p13c8ccjsnd1d2ebde022a',
          'X-RapidAPI-Host': 'whatsapp-scraper.p.rapidapi.com'
        }
      };
      const phoneNumber = mobileInput.value;
      const requestUrl = `${apiUrl}?phone=${phoneNumber}`;

      fetch(requestUrl, options)
        .then(response => response.text())
        .then(data => {
          const imageUrl = data.trim();
          const picturePreview = document.getElementById("profile-picture-preview");
          picturePreview.src = imageUrl;
          picturePreview.style.display = "block";
          picturePreview.style.width = "180px";
          picturePreview.style.height = "180px";
        })
        .catch(error => {
          alert("Error fetching image: " + error);
        });

    } else {
      alert("Invalid phone number format. Please enter numbers only.");
    }
  } else {
    profilePictureInput.click();
  }
}

function handleFileInputChange() {
  const fileInput = document.getElementById("profile-picture");
  const file = fileInput.files[0];

  if (file) {
    const picturePreview = document.getElementById("profile-picture-preview");

    const reader = new FileReader();
    reader.onload = function (event) {
      const imageUrl = event.target.result;
      picturePreview.src = imageUrl;
      picturePreview.style.display = "block";
      picturePreview.style.width = "180px";
      picturePreview.style.height = "180px";
    };
    reader.readAsDataURL(file);
  }
}

const form = document.getElementById("person-details-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  handleUploadButtonClick();
});
*/

function handleFileInputChange() {
  const fileInput = document.querySelector('#profile-picture');
  const previewImage = document.querySelector('#profile-picture-preview');
  const pictureContainer = document.querySelector('#picture-container');
  const uploadButton = document.querySelector('#profile-picture-upload-btn');
  const useWhatsappCheckbox = document.querySelector('#use-whatsapp-image');

  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function (event) {
    previewImage.src = event.target.result;
    pictureContainer.innerHTML = '';
    uploadButton.disabled = false;
    useWhatsappCheckbox.checked = false;
    useWhatsappCheckbox.disabled = false;
  };
}

function handleUploadButtonClick() {
  const fileInput = document.querySelector('#profile-picture');
  const pictureContainer = document.querySelector('#picture-container');
  const uploadButton = document.querySelector('#profile-picture-upload-btn');
  const useWhatsappCheckbox = document.querySelector('#use-whatsapp-image');

  if (useWhatsappCheckbox.checked) {
    // do something for WhatsApp image
  } else {
    const file = fileInput.files[0];
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onload = function (event) {
      const img = document.createElement('img');
      img.src = event.target.result;
      pictureContainer.innerHTML = '';
      pictureContainer.appendChild(img);
      uploadButton.disabled = true;
      useWhatsappCheckbox.disabled = true;
    };
  }
}


function handleCheckboxChange() {
  const uploadButton = document.querySelector('#profile-picture-upload-btn');
  if (this.checked) {
    uploadButton.style.display = 'none';
  } else {
    uploadButton.style.display = 'block';
  }
}

const useWhatsappCheckbox = document.querySelector('#use-whatsapp-image');
useWhatsappCheckbox.addEventListener('change', handleCheckboxChange);


