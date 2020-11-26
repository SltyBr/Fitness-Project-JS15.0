'use strict';

const toggleMenu = ()=>{
  const listId = document.getElementById('list-id'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form');

  // функция открывания/закрывания меню при клике по кнопке
  const handlerMenu = (item) =>{
    if(item.style.display === 'block'){
      item.style.display = 'none';
    } else{
      item.style.display = 'block';
    }
  };

  // функция закрытия модального окна на крестик или если клик был вне модального окна, принимает id формы
  const closeModal = (formId)=>{
    document.getElementById(`${formId}`).querySelector('.close_icon').addEventListener('click', ()=>{
      document.getElementById(`${formId}`).style.display = 'none';
    });
    document.getElementById(`${formId}`).addEventListener('click', (event)=>{
      let target = event.target;
      if(!target.closest(`.form-wrapper`)){
        document.getElementById(`${formId}`).style.display = 'none';
      }
    });
  };

  closeModal('free_visit_form');
  closeModal('callback_form');


  document.addEventListener('click', (event)=>{
    let target = event.target;

    if(target.closest('.clubs-list')){
      handlerMenu(listId);
    }
    if(!target.closest('.clubs-list') && listId.style.display === 'block'){
      handlerMenu(listId);
    }
    if(target.closest('.free-visit')){
      handlerMenu(freeVisitForm);
    }
    if(target.matches('.callback-btn') && !target.matches('#callback-btn__footer')){
      handlerMenu(callbackForm);
    }
  });
  
};

export default toggleMenu;
