function hov(kk)
{
	im = document.getElementById(kk);
	if (kk == "b")
		im.src = "img/biogrh.png";
	else
		if (kk == "intf")
			im.src = "img/intfaktyh.png";
		else
			if (kk == "sl")
				im.src = "../img/strlh.png";
			else
				if (kk == "sr")
					im.src = "../img/strrh.png";
				else
					im.src = "img/rabotyh.png";
}
function uhov(kk)
{
	im = document.getElementById(kk);
	if (kk == "b")
		im.src = "img/biogr.png";
	else
		if (kk == "intf")
			im.src = "img/intfakty.png";
		else
			if (kk == "sl")
				im.src = "../img/strl.png";
			else
				if (kk == "sr")
					im.src = "../img/strr.png";
				else
					im.src = "img/raboty.png";
}
var nkart = 1;
function ch(a)
{
	var kart = document.getElementById('kart');
	var podp = document.getElementById('podp');
	var vrtex = document.getElementById('vrtex');
	if (a == '+')
		nkart++;
	else
		nkart--;
	if (nkart == 0)
		nkart = 10;
	if (nkart == 11)
		nkart = 1;
	switch (nkart)
	{
		case 1:
		{
			kart.src = "../img/spalna.jpeg";
			podp.innerHTML = '"Спальня в Арле", 1888, Музей Винсента Ван Гога, Амстердам, Нидерланды';
			vrtex.innerHTML = '<a href = "https://artsandculture.google.com/streetview/van-gogh-museum-groundfloor/2QHwyv_Y6gueAw?sv_lng=4.8813324&sv_lat=52.358454&sv_h=80.939809309229304&sv_p=-8.713639132398129&sv_pid=Nhu3UwMqQHZJBpIMBcAafg&sv_z=0.5896820314712248" target="_blank">(кликните для виртуальной экскурсии)</a>';
			break;
		}
		case 2:
		{
			kart.src = "../img/terrasa.jpeg";
			podp.innerHTML = '"Ночная терраса кафе", 1888, Музей Крёллер-Мюллер, Оттерло, Нидерланды';
			vrtex.innerHTML = ' <a href = "https://krollermuller.nl/en" target="_blank">сайт музея (виртуальная экскурсия остутствует)</a>';
			break;
		}
		case 3:
		{
			kart.src = "../img/noch.jpeg";
			podp.innerHTML = '"Звёздная ночь", 1889, Музей современного искусства, Нью-Йорк';
			vrtex.innerHTML = '<a href = "https://www.moma.org/" target="_blank">сайт музея (виртуальная экскурсия остутствует)</a>';
			break;
		}
		case 4:
		{
			kart.src = "../img/podsolnuh.jpeg";
			podp.innerHTML = '"Подсолнухи", 1888, Музей Винсента ван Гога, Амстердам, Нидерланды';
			vrtex.innerHTML = '<a href = "https://www.nationalgallery.org.uk/" target="_blank">сайт музея (Нет доступа через виртуальную экскурсию к данной картине)</a>';
			break;
		}
		case 5:
		{
			kart.src = "../img/mindal.jpeg";
			podp.innerHTML = '"Цветущие ветки миндаля", 1890, Музей Винсента ван Гога, Амстердам, Нидерланды';
			vrtex.innerHTML = '<a href = "https://artsandculture.google.com/streetview/van-gogh-museum-groundfloor/2QHwyv_Y6gueAw?sv_lng=4.8808198&sv_lat=52.3585336&sv_h=8.3308143401017&sv_p=-8.482844035841055&sv_pid=T4EwMNbRYOhcEPF8T1I8xw&sv_z=0.4815059702122162" target="_blank"> (кликните для виртуальной экскурсии)</a>';
			break;
		}
		case 6:
		{
			kart.src = "../img/port.jpeg";
			podp.innerHTML = "'Автопортрет', 1889, Музей д'Орсе, Париж, Франция";
			vrtex.innerHTML = '<a href = "https://artsandculture.google.com/streetview/mus%C3%A9e-d%E2%80%99orsay-paris/KQEnDge3UJkVmw?hl=en&sv_lng=2.326348762936026&sv_lat=48.859648111662&sv_h=228.13916245487042&sv_p=-22.542578444900727&sv_pid=_md5OyguSH2gWH36_rUv4A&sv_z=1.0000000000000002" target="_blank"> (кликните для виртуальной экскурсии)</a>';
			break;
		}
		case 7:
		{
			kart.src = "../img/irisy.jpeg";
			podp.innerHTML = '"Ирисы", 1889, Музей Гетти, Лос-Анджелес, США';
			vrtex.innerHTML = '<a href = "https://artsandculture.google.com/streetview/the-j-paul-getty-museum/cwFdGYSXlaOg6w?sv_lng=-118.4739546&sv_lat=34.0764508&sv_h=159.94648308448285&sv_p=-22.427284826149005&sv_pid=0P2F_X_xSj4HdNN3KSwhZg&sv_z=0.47407300422716603" target="_blank"> (кликните для виртуальной экскурсии)</a>';
			break;
		}
		case 8:
		{
			kart.src = "../img/noch2.jpeg";
			podp.innerHTML = "'Звёздная ночь над Роной', 1888, Музей д'Орсе, Париж, Франция";
			vrtex.innerHTML = '<a href = "https://www.musee-orsay.fr/en" target="_blank">сайт музея (картина временно недоступна в музее)</a>';
			break;
		}
		case 9:
		{
			kart.src = "../img/edoki.jpeg";
			podp.innerHTML = '"Едоки картофеля", 1885, Музей Винсента ван Гога, Амстердам, Нидерланды';
			vrtex.innerHTML = '<a href = "https://artsandculture.google.com/streetview/van-gogh-museum-groundfloor/2QHwyv_Y6gueAw?sv_lng=4.8812837&sv_lat=52.3583553&sv_h=359.4874180373132&sv_p=-20.2067766122219&sv_pid=7N56CwMdyWwjnjhLABhSmA&sv_z=0.7654243595088517" target="_blank">(кликните для виртуальной экскурсии)</a>';
			break;
		}
		case 10:
		{
			kart.src = "../img/port_gashe.jpg";
			podp.innerHTML = '"Портрет доктора Гаше", 1890, частная коллекция';
			vrtex.innerHTML = 'Экскурсия невозможна';
			break;
		}
	}
}