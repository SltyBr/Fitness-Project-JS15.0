const sendForm = (formId, modalId)=>{
  const form = document.getElementById(`${formId}`),
        thanksMessage = document.getElementById('thanks'),
        mozaikaClub = form.querySelector('#footer_leto_mozaika'),
        schelkovoClub = form.querySelector('#footer_leto_schelkovo');

  const messageContent = (content, color = 'red')=>{  // функция создания сообщения о статусе заявки
    let successMessage = document.createElement('div');
      successMessage.style.cssText = `font-size: 1.2rem; color: ${color}; text-align: center`;
      successMessage.textContent = content;
    return successMessage;
  };

  const alertMessage = messageContent('Заполните все поля');
  const clubMessage = messageContent('Выберите клуб');
  const loadMessage = messageContent('Ожидайте несколько секунд', '#3afa20');
  const errorMessage = messageContent('Что-то пошло не так, попробуйте ещё раз');

  const removeElement = (el)=>{
    setTimeout(function(){
      el.remove();
    }, 1500);
  };

  let body = {};

  if(form.querySelector('.personal-data')){
    const personalData = form.querySelector('.personal-data');
      personalData.querySelector('input[type="checkbox"]').classList.add('_req');
      personalData.querySelector('label').classList.add('checkbox__label');
      personalData.querySelector('input[type="checkbox"]').addEventListener('click', ()=>{
        form.querySelector('.personal-data').classList.remove('_error');
      });
  }

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
        if(!formValidate(form)){
          form.append(loadMessage);
          removeElement(loadMessage);
        }
    
        thanksMessage.style.display = 'block';
        if(document.getElementById(`${modalId}`)){
          document.getElementById(`${modalId}`).style.display = 'none';
        }
        form.reset();
      } else{
        form.append(errorMessage);
        removeElement(errorMessage);
      }
    } else{
      if(mozaikaClub && schelkovoClub){
        if(!mozaikaClub.checked || !schelkovoClub.checked){
        form.append(clubMessage);
        removeElement(clubMessage);
      }} else{
      form.append(alertMessage);
      removeElement(alertMessage);}
    }
  }

  function formValidate(){
    let error = 0,
        formReq;
    if(form.querySelector('._req')){
    formReq = form.querySelector('._req');
      
    formRemoveError(formReq);

      if(formReq.checked === false){
        formAddError(formReq);
        error++;
      }
    }

    if(mozaikaClub && schelkovoClub){
      if (!mozaikaClub.checked && !schelkovoClub.checked){
        error++;
      }
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
