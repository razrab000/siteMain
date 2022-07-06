         var CHAT_ID = "5066558166";
         var TOKEN = "5597625973:AAFYCYSlqyxC-OSz_UBe1d4nuzjouYj9Nts";
         var text_b = "Текст для <b>нашего</b> бота";
         var url
    const openPopUp = document.getElementById('open_pop_up');
    const closePopUp = document.getElementById('pop_up_close');
    const popUp = document.getElementById('pop_up');
    openPopUp.addEventListener('click', function(e){
        e.preventDefault();
        popUp.classList.add('active');
    });
    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active');
    });
    const form = document.getElementById('form');
    form.addEventListener('submit', getFormValue);
     function getFormValue(event) {
         event.preventDefault();
         const text = form.querySelector('[name="message"]'),
                contact = form.querySelector('[name="contact"]');
         text_f = text.value;
         contact_f = contact.value;
         console.log(text_f);
         url = 'https://api.telegram.org/bot'+TOKEN+'/sendMessage?chat_id='+CHAT_ID+'&parse_mode=HTML&text=Новое сообщение на сайте:\n'+text_f+'\nКонтактная информация: '+contact_f;
         const Http = new XMLHttpRequest();
         Http.open("GET", url);
         Http.send();
         Http.onreadystatechange=(e)=>{
            console.log(Http.responseText)
         }
         };
