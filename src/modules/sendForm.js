const sendForm = (formId)=>{
  const form = document.getElementById(`${formId}`),
        thanksMessage = document.getElementById('thanks');

  const messageContent = (content)=>{  // функция создания сообщения о статусе заявки
    let successMessage = document.createElement('div');
      successMessage.style.cssText = 'font-size: 1rem; color: red';
      successMessage.textContent = content;
    return successMessage;
  };

  const alertMessage = messageContent('Заполните все поля');
  const errorMessage = messageContent('Что-то пошло не так, попробуйте ещё раз');



  const removeElement = (el)=>{
    setTimeout(function(){
      el.remove();
    }, 2000);
  };



  let body = {};

  const personalData = form.querySelector('.personal-data');

  personalData.querySelector('input[type="checkbox"]').classList.add('_req');
  personalData.querySelector('label').classList.add('checkbox__label');

  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    formData.forEach((val, key)=>{
      body[key] = val;
    });

    if(error === 0){
      let response = await fetch('./server.php',{
        method: 'POST',
        body: JSON.stringify(body)
      });
      if(response.ok){
        thanksMessage.style.display = 'block';
        removeElement(thanksMessage);
        form.reset();
      } else{
        form.append(errorMessage);
        removeElement(errorMessage);
      }
    } else{
      form.append(alertMessage);
      removeElement(alertMessage);
    }
  }

  function formValidate(){
    let error = 0;
    let formReq = document.querySelector('._req');

    formRemoveError(formReq);

    if(formReq.checked === false){
      formAddError(formReq);
      error++;
    }
    return error;
  }

  function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
};

export default sendForm;
