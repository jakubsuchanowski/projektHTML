
function pokazDane()
{
    //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
    //typu confirm do zatwierdzenia przez użytkownika:
    dane="Następujące dane zostaną wysłane:\n";
    dane+="Imie:"+document.getElementById('imie').value+"\n";
    dane+="Email:"+document.getElementById('email').value+"\n";
    dane+="Telefon:"+document.getElementById('phone').value+"\n";
    dane+="Komentarz:"+document.getElementById('wiadomosc').value+"\n";
    if (window.confirm(dane)) return true;
    else return false;

}