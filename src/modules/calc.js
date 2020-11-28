const calc = ()=>{
  const firstCase = document.getElementById('card_leto_mozaika'),
        secondCase = document.getElementById('card_leto_schelkovo'),
        months = document.querySelector('.time'),
        priceTotal = document.getElementById('price-total'),
        promocode = document.getElementById('promocode'),
        monthsOptions = months.querySelectorAll('input[type="radio"]');

  const pricesFirstCase = [1999, 9900, 13900, 19900];
  const pricesSecondCase = [2999, 14900, 21900, 24900];
  const prices = {};

  const getPrice = (option, price)=>{
    option.addEventListener('click', ()=>{
      priceTotal.textContent = '';
      monthsOptions.forEach((item, index)=>{
        prices[item.value] = price[index];
        item.addEventListener('click', ()=>{
          for(let key in prices){
            if(item.value == key){
              priceTotal.textContent = `${prices[key]} р.`;
              promocode.addEventListener('change', ()=>{
                if(promocode.value === 'ТЕЛО'){
                  prices[key] = prices[key]*0.7;
                  promocode.style.border = '3px solid green';
                  priceTotal.textContent = `${prices[key].toFixed(0)} р.`;
                } else{
                  alert('неверный промокод, попробуйте ещё раз');
                  promocode.value = '';
                }
              });
            }
          }
        });
      });
    });
  };

  getPrice(firstCase, pricesFirstCase);
  getPrice(secondCase, pricesSecondCase);


};

export default calc;