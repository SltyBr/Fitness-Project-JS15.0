const sendForm = (formId)=>{
  const form = document.getElementById(`${formId}`);

   //маска для телефона
  function maskPhone(selector, masked = '+7 (___) ___-__-__') {
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

}
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

  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let body = {};
    
    const formData = new FormData(form);

    formData.forEach((val, key)=>{
      body[key] = val;
    });
    postData(body)
      .then((response)=>{
        if (response.status !== 200) {
          throw new Error('status network not 200.');
        }
      })
      .catch((error)=>{
        console.error(error);
      });
  });

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

};

export default sendForm;
