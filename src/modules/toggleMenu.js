'use strict';

const toggleMenu = ()=>{
  const listId = document.getElementById('list-id'),
        freeVisitForm = document.getElementById('free_visit_form'),
        popupMenu = document.querySelector('.popup-menu'),
        callbackForm = document.getElementById('callback_form');

  // функция открывания/закрывания меню при клике по кнопке
  const handlerMenu = (item, display = 'block') =>{
    if(item.style.display === `${display}`){
      item.style.display = 'none';
    } else{
      item.style.display = `${display}`;
    }
  };

  // функция закрытия модального окна на крестик или если клик был вне модального окна, принимает id формыъ
  // на других страницах вызывает проблемы
   const closeModal = (itemId)=>{
    document.getElementById(`${itemId}`).addEventListener('click', (event)=>{
      let target = event.target;
      if(target.matches('.close_icon') || !target.closest(`.form-wrapper`) || target.matches('.close-btn')){
        document.getElementById(`${itemId}`).style.display = 'none';
        if(document.querySelector('#html').style){
          document.querySelector('#html').removeAttribute('style');
        }
        document.getElementById(`${itemId}`).querySelectorAll('input').forEach((item)=>{
          item.value = '';
          item.checked = false;
          document.getElementById(`${itemId}`).querySelector('.personal-data').classList.remove('_error');
        });
      }
    });
  };

  closeModal('free_visit_form');
  closeModal('callback_form');
  if(document.getElementById('gift')){
    closeModal('gift');
  }
  closeModal('thanks');


  document.addEventListener('click', (event)=>{
    let target = event.target;
    if(target.closest('.clubs-list') && !target.closest('ul#list-id')){
      handlerMenu(listId);
    }
    if(target.closest('.free-visit')){
      handlerMenu(freeVisitForm);
    }
    if(target.matches('.callback-btn') && !target.matches('#callback-btn__footer')){
      handlerMenu(callbackForm);
    }
    if(target.matches('#menu-button-id')){
      handlerMenu(popupMenu, 'flex');
    }
  });
  
};

export default toggleMenu;
