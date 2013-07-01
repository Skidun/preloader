manifest = [

    "img/gato1.jpg",
    "img/gato2.jpg",
    "img/gato3.jpg",
    "img/gato4.jpg",
	"img/gato5.jpg",
	"img/gato6.jpg",
    "img/gato7.jpg",
    "img/gato8.jpg",
    "img/gato9.jpg",
    "img/gato10.jpg",
	"img/gato11.jpg",
	"img/gato12.jpg",
	"css/jquery-ui-1.9.2.custom.css"

];

// cria o preloader
preload = new createjs.LoadQueue(true, ""); //mude "" para o caminho base (se houver)

//mostra o progresso
var $mainProgress = $("#mainProgress"),
    $progressBar = $mainProgress.find('.progress');
$progressBar.width(0);
preload.addEventListener("progress", function()
{
       console.log('Updating preloading progress...'+Math.round(preload.progress*100)+"%");
       $progressBar.width(preload.progress * $mainProgress.width());
});

//callback quando completo
preload.addEventListener("complete", function()
{
    console.log('IMAGENS PRECARREGADAS');
});

preload.loadManifest(manifest);