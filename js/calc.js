document.addEventListener('DOMContentLoaded', function() {
  const obliczBtn = document.getElementById('obliczBtn');
  const wynik = document.getElementById('wynik');

  obliczBtn.addEventListener('click', function() {
    const basePrice = parseInt(document.getElementById('typStrony').value);
    const podstrony = parseInt(document.getElementById('podstrony').value);
    const formularz = document.getElementById('formularz').checked;
    const seo = document.getElementById('seo').checked;

    let cena = basePrice + (podstrony - 1) * 100;
    if (formularz) cena += 200;
    if (seo) cena += 300;

    wynik.textContent = `Szacunkowa cena Twojej strony: ${cena} zł`;
  });
});