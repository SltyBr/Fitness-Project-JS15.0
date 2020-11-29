const calc = ()=>{
  const formCard = document.getElementById('card_order'),
        months = document.querySelector('.time'),
        cardFirstCase = document.getElementById('card_leto_mozaika'),
        cardSecondCase = document.getElementById('card_leto_schelkovo'),
        priceTotal = document.getElementById('price-total'),
        monthsOptions = months.querySelectorAll('input[type="radio"]');     

  const pricesFirstCase = [1999, 9900, 13900, 19900];
  const pricesSecondCase = [2999, 14900, 21900, 24900];
  const prices = {};
  let result = 0;

  const priceCase = ()=>{
    if(cardFirstCase.checked){
      monthsOptions.forEach((item, index)=>{
        prices[item.value] = pricesFirstCase[index];
      });
    } else if(cardSecondCase.checked){
      monthsOptions.forEach((item, index)=>{
        prices[item.value] = pricesSecondCase[index];
      });
    }
  };
  priceCase();

  const priceOptions = ()=>{
    monthsOptions.forEach((item)=>{
      if(item.checked){
        for(let key in prices){
          if(key == item.value){
            result = prices[key];
            priceTotal.textContent = result;
          }
        }
      }
    });
  };
  priceOptions();

  const promoPrice = ()=>{
    if(formCard.querySelector('#promocode').value === 'ТЕЛО2020'){
      result = Math.ceil(result*0.7);
      priceTotal.textContent = result;
      formCard.querySelector('#promocode').style.border = "3px solid green";
    } else if(formCard.querySelector('#promocode').value){
      formCard.querySelector('#promocode').style.border = "3px solid red";
    }
  };

  formCard.addEventListener('change', (event)=>{
    let target = event.target;
    if(target.matches('input[type="radio"]')){
      priceCase();
      priceOptions();
      promoPrice();
    }
    if(target.matches('#promocode')){
      promoPrice();
    }
  });
  
};

export default calc;