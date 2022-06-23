var hidden = false;

function action(){
    hidden = !hidden;
    if(hidden){
        document.getElementById('discord').style.display = 'relative';
    } else {
        document.getElementById('discord').style.display = 'block';
    }
} 
