const menuBurger = ()=>{
  const topMenu = document.querySelector('.top-menu');

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

};

export default menuBurger;