const sendForm = (formId)=>{
  const checkBox = document.querySelectorAll('input[type="checkbox"]'),
        successMessage = 'Мы скоро с Вами свяжемся!',
        loadMessage = 'Загрузка...',
        alertPersonalData = 'Дайте согласие на обработку персональных данных';

  const removeElement = (el)=>{
    setTimeout(function(){
      el.remove();
    }, 2000);
  };

  const form = document.getElementById(`${formId}`),
        formInputs = form.querySelectorAll('input');
  const messageContent = (content)=>{  // функция создания сообщения о статусе заявки
    let successMessage = document.createElement('div');
      successMessage.style.cssText = 'font-size: 1rem; color: red';
      successMessage.textContent = content;
    return successMessage;
  };
  const successMessageContent = messageContent(successMessage);
  const alertMessageContent = messageContent(alertPersonalData);
  const loadMessageContent = messageContent(loadMessage);

  const cancel = ()=>{
    checkBox.forEach((item)=>{
      if(item.checked === false){
        form.append(alertMessageContent);
        return false;
      }
    });
  };

  form.addEventListener('submit', (event)=>{
    cancel();
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
        form.append(loadMessageContent);
        form.removeChild(loadMessageContent);
        form.append(successMessageContent);
      })
      .catch((error)=>{
        console.error(error);
      });

    const clearFormInputs = ()=>{ 
      formInputs.forEach((item)=>{
        item.value = '';
      });
    };
    setTimeout(clearFormInputs, 3000);

    const clearStatusMessage = ()=>{
      setTimeout(function(){
        form.removeChild(successMessageContent);
      }, 5000);
    };
    clearStatusMessage();
  });

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
/*const checkBox = document.querySelectorAll('input[type="checkbox"]'),
        thanks = document.getElementById('thanks'),
        alertMessage = document.createElement('div');
  console.log(checkBox);
  alertMessage.textContent = 'Согласитесь на обработку персональных данных!';
  document.querySelectorAll('form').forEach((form)=>{
    form.addEventListener('submit', (event)=>{
      event.preventDefault();
      let body = {};
      
      const removeElement = (el)=>{
        setTimeout(function(){
          el.remove();
        }, 2000);
      };

      checkBox.forEach((item)=>{
        if(!item.checked){
          form.append(alertMessage);
          removeElement(alertMessage);
          return false;
        }
      });


      const formData = new FormData(form);

      formData.forEach((val, key)=>{
        body[key] = val;
      });
      postData(body)
        .then((response)=>{
          if (response.status !== 200) {
            throw new Error('status network not 200.');
          } else{
            form.reset();
            thanks.style.display = 'block';
            removeElement(thanks);
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

  }); */
};

export default sendForm;
