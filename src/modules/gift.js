const gift = ()=>{
  
  const giftId  = document.getElementById('gift'),
        fixedGift = document.querySelector('.fixed-gift');

  fixedGift.addEventListener('click', ()=>{
    fixedGift.style.display = 'none';
    giftId.style.display = 'block';
  });

};

export default gift;