const sendForm = ()=>{

  const checkBox = document.getElementById('check1'),
        thanks = document.getElementById('thanks'),
        alertMessage = document.createElement('div');

  alertMessage.textContent = 'Согласитесь с обработкой персональных данных!';
  document.querySelectorAll('form').forEach((form)=>{
    form.addEventListener('submit', (event)=>{
      event.preventDefault();
      let body = {};
      
      const removeElement = (el)=>{
        setTimeout(function(){
          el.remove();
        }, 2000);
      };

      const formData = new FormData(form);

      if(!checkBox.checked){
        form.insertAdjacentElement('afterend', alertMessage);
        removeElement(alertMessage);
        return false;
      }

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

        form.reset();

        thanks.style.display = 'block';

        removeElement(thanks);
    });

    const postData = body => fetch('./server.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

  });
};

export default sendForm;
