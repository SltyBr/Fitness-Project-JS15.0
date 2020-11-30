const menuBurger = ()=>{
  const topMenu = document.querySelector('.top-menu'),
        popupMenu = document.querySelector('.popup-menu');

  const scrollWidthFunc = ()=>{
    window.addEventListener('scroll', ()=>{
      let scrollWidth = document.documentElement.scrollWidth,
          scrollTop = document.documentElement.scrollTop;
      if(scrollWidth < 769 && scrollTop > 150){
        topMenu.style.position = 'fixed';
      } else{
        topMenu.removeAttribute('style');
      }
    });
  };
  scrollWidthFunc();

  const closePopup = ()=>{
    popupMenu.addEventListener('click', (event)=>{
      let target = event.target;
      if(target.matches('#close-menu-id')){
        popupMenu.style.display = "none";
      }
      if(target.closest('.scroll>a')){
        console.log(target);
        popupMenu.style.display = "none";
      }
    });
  };
  closePopup();

};

export default menuBurger;