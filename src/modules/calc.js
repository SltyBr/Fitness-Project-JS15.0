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

  const getPriceMonth = (option, price)=>{
    monthsOptions.forEach((item, index)=>{
        if(option.checked && item.checked){
          prices[item.value] = price[index];
          for(let key in prices){
            if(item.value == key){
              priceTotal.textContent = `${prices[key]} р.`;
              promocode.addEventListener('change', ()=>{
                if(promocode.value === 'ТЕЛО'){
                  let newPrice = prices[key]*0.7;
                  promocode.style.border = '3px solid green';
                  priceTotal.textContent = `${newPrice} р.`;
                } else{
                  alert('неверный промокод, попробуйте ещё раз');
                  promocode.value = '';
                }
              });
            }
          }
        }

    });
  };

  const getPriceCheck = (option, price)=>{
    option.addEventListener('click', ()=>{
      monthsOptions.forEach((item, index)=>{
        prices[item.value] = price[index];
        item.addEventListener('click', ()=>{
          for(let key in prices){
            if(item.value == key){
              priceTotal.textContent = `${prices[key].toFixed(0)} р.`;
              promocode.addEventListener('change', ()=>{
                if(promocode.value === 'ТЕЛО'){
                  let newPrice = prices[key]*0.7;
                  promocode.style.border = '3px solid green';
                  priceTotal.textContent = `${newPrice.toFixed(0)} р.`;
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

  getPriceCheck(firstCase, pricesFirstCase);
  getPriceMonth(firstCase, pricesFirstCase);
  getPriceCheck(secondCase, pricesSecondCase);
  getPriceMonth(secondCase, pricesSecondCase);
};

export default calc;