const sendForm = (formId)=>{
  const form = document.getElementById(`${formId}`);

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