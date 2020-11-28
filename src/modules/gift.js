const gift = ()=>{
  
  if(document.querySelector('.fixed-gift') && document.getElementById('gift')){
    document.querySelector('.fixed-gift').addEventListener('click', ()=>{
      document.querySelector('.fixed-gift').style.display = 'none';
      document.getElementById('gift').style.display = 'block';
    });
  }
};

export default gift;