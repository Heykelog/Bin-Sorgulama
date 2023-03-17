const sorgulaBtn = document.querySelector('#sorgula-btn');
const sonucContainer = document.querySelector('#sonuc-container');
const sonuc = document.querySelector('#sonuc');

sorgulaBtn.addEventListener('click', () => {
  const binInput = document.querySelector('#bin-input');
  const binValue = binInput.value.trim();
  
  if (binValue.length !== 6) {
    alert('Lütfen 6 haneli bir bin numarası girin.');
    return;
  }

  fetch(`https://lookup.binlist.net/${binValue}`)
    .then(response => response.json())
    .then(data => {
      sonuc.innerHTML = `
        <p>Kart Türü: ${data.scheme}</p>
        <p>Banka: ${data.bank.name}</p>
        <p>Ülke: ${data.country.name}</p>
      `;
      sonucContainer.style.display = 'block';
    })
    .catch(() => {
      alert('Bin numarası geçersiz veya bilgiler sorgulanamadı.');
    });
});