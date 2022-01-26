 function zapisz() {
                var item = {};
                item.nazwa = document.getElementById("nazwa").value;
                item.cena = document.getElementById("cena").value;
                item.kolor = document.getElementById("kolor").value;
                item.liczba = document.getElementById("liczba").value;
                var lista = JSON.parse(localStorage.getItem('lista'));
                if (lista == null) lista = [];
                lista.push(item);
                localStorage.setItem('lista', JSON.stringify(lista));
                
            }

            function pokaz() {
                var lista = JSON.parse(localStorage.getItem('lista'));

                var temp = "<h1>Koszyk:</h1><table><tr><td>Imie</td><td>Nazwisko</td><td>Telefon</td><td>Liczba sztuk</td><td></td><td></td></tr>";
                for (var i = 0; i < lista.length; i++) {
                    temp += "<tr><td>" + lista[i].nazwa + "</td><td>" + lista[i].cena + "</td><td>" + lista[i].kolor + "</td><td>" + lista[i].liczba + "</td><td><button onclick='usunZadanie(" + i + ")'>Usuń</button></td><td><button onclick='edytujZadanie(" + i + ")'>Edytuj</button></td></tr>";
                }
                temp += "</table>";
                document.getElementById('pokazLocalStorage').innerHTML = temp;
            }

            function wyczysc() {
                localStorage.removeItem('lista');
                document.getElementById("pokazLocalStorage").innerHTML = "";
            }

            function usunZadanie(i) {
                var lista = JSON.parse(localStorage.getItem('lista'));
                if (confirm("Usunąć?")) lista.splice(i, 1);
                localStorage.setItem('lista', JSON.stringify(lista));
                pokaz();
            }

            function edytujZadanie(i) {
                var lista = JSON.parse(localStorage.getItem('lista'));
                var tresc = "<h1>Edytuj dane:</h1>Imie: <input type='text' id='nazwaEd'  title='Wypełnij to pole. Pamiętaj żeby zaczynać dużą literą' placeholder='" + lista[i].nazwa + "'/><br />Nazwisko: <input type='text' id='cenaEd'  title='Wypełnij to pole. Pamiętaj żeby zaczynać dużą literą' placeholder='" + lista[i].cena + "'/><br />Telefon: <input type='text' id='kolorEd' title='Wypełnij to pole. Numer telefonu musi miec 9 cyfr' placeholder='" + lista[i].kolor + "'/><br />Liczba sztuk: <input type='text' id='liczbaEd' placeholder=' " + lista[i].liczba + "'/><br /><button onclick='edytuj(" + i + ")'>Edytuj</button><button onclick='schowajEdytuj()'>Anuluj</button>";


                document.getElementById('pokazEdytuj').innerHTML = tresc;
            }

            function edytuj(i) {
                var lista = JSON.parse(localStorage.getItem('lista'));

                var nazwa = document.getElementById("nazwaEd").value;
                var cena = document.getElementById("cenaEd").value;
                var kolor = document.getElementById("kolorEd").value;
                var liczba = document.getElementById("liczbaEd").value;

                if (nazwa != "")
                    lista[i].nazwa = nazwa;

                if (cena != "")
                    lista[i].cena = cena;

                if (kolor != "")
                    lista[i].kolor = kolor;

                if (liczba != "")
                    lista[i].liczba = liczba;

                localStorage.setItem('lista', JSON.stringify(lista));
                schowajEdytuj();
                pokaz();
            }

            function schowajEdytuj() {
                document.getElementById('pokazEdytuj').innerHTML = "";
            }