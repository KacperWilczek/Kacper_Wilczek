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






