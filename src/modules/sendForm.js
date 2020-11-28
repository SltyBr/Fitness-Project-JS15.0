const sendForm = (formId)=>{
  const form = document.getElementById(`${formId}`);

  let body = {};

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
        form.reset();
      } else{
        alert('Ошибка');
      }
    } else{
      alert('Дайте согласие на обработку');
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
