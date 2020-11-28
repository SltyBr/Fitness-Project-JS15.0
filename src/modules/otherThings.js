  const otherThings = () =>{
    //маска для телефона
  const maskPhone = (selector, masked = '+7 (___) ___-__-__')=> {
    const elems = document.querySelectorAll(selector);

    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
          def = template.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      let i = 0,
          newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
      i = newValue.indexOf("_");
      if (i !== -1) {
          newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
          a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
          this.value = newValue;
      }
      if (event.type === "blur" && this.value.length < 5) {
          this.value = "";
      }

    }

  for (const elem of elems) {
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }
  };
  
  maskPhone('input[name="phone"]');

  //валидация имени в форме
  const nameValidate = (selector)=>{
    const elems = document.querySelectorAll(selector);
    elems.forEach((item)=>{
      item.addEventListener('input', ()=>{
        item.value = item.value.replace(/[^а-я\s]/gi, '');
      });
    });
  };
  nameValidate('input[name="name"]');

  //функция появления кнопки "наверх" при прокрутке вниз
  const fadeArrowTop = ()=>{

    const arrowTop = document.getElementById('totop');
    arrowTop.style.display = 'none';
    document.addEventListener('scroll', ()=>{
      let scrollValue = document.documentElement.scrollTop;
      if(scrollValue > 200){
        arrowTop.style.display = 'block';
      } else if(scrollValue < 200){
        arrowTop.style.display = 'none';
      }
    });

  };
  fadeArrowTop();
};

export default otherThings;