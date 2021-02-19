var numer = Math.floor(Math.random()*5)+1;
function slider()
			{
				numer++; if (numer>5) numer=1;		
				var plik = "<img src=\"zdj" + numer + ".jpg\" />";
				document.getElementById("pusty").innerHTML = plik;
                setTimeout ("slider()", 3000);
			
			}




 var liczba = 60;
function stoper()
{
    document.getElementById("pusty").innerText = liczba;
    liczba = liczba-1; 
    if(liczba<0) liczba = 60;
    setTimeout("stoper()",1000);
}



function obliczenia()
{
    var wartosc_a =parseInt(document.getElementById("wartosc_a").value);
    var wartosc_b = parseInt(document.getElementById("wartosc_b").value);
    var wartosc_c = parseInt(document.getElementById("wartosc_c").value); 
    var wynik1 = 0;
    var wynik2 = 0;

    wynik1 = Math.pow(wartosc_a,wartosc_b) - wartosc_c;


    wynik2 = if(wartosc_b != 0)
    {
        (wartosc_a/wartosc_b)–(wartosc_a*wartosc_c) 
    };

    wynik3 = if(wartosc_a !=0 || wartosc_b !=0 ){
       (wartosc_c/wartosc_b) + (wartosc_b/wartosc_a)
    } ;

    document.getElementById("pusty").innerText = wynik1 + " " + wynik2 + " " + wynik3;
}

