var input,search , locale_HTML;

locale_HTML = document.body.innerHTML;  

function FindOnPage('text-to-find') {

	input = document.getElementById('text-to-find').value; //получаем значение из поля в html
	
	if(input.length<3) {
		alert('Для поиска вы должны ввести три или более символов');
	}
        
        if(input.length>=3)
	{
              function FindOnPageGo() {
             search = '/'+input+'/g';  
 }
        }
}
