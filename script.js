document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('#switch input[type="checkbox"]');
    const annuallyPrices = document.querySelectorAll('.card-price-annually');
    const monthlyPrices = document.querySelectorAll('.card-price-monthly');
  
    function switchPricing(isMonthly) {
      if (isMonthly) {
        annuallyPrices.forEach(price => price.style.display = 'none');
        monthlyPrices.forEach(price => price.style.display = 'block');
      } else {
        annuallyPrices.forEach(price => price.style.display = 'block');
        monthlyPrices.forEach(price => price.style.display = 'none');
      }
    }
  
    toggleSwitch.addEventListener('change', function(e) {
      switchPricing(e.target.checked);
    });
  });
  