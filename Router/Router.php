<?php
require './API/Controllers/APILogin.php';
require './API/Controllers/APIGallery.php';


use Controller\APILoginController;


//login or authentication
$router->post('/maya-tattoo/api/login', function(){(new APILoginController)->UserLogin();});
//Gallery 
$router->get('/maya-tattoo/api/getallgallery', function(){(new ControllersGallery)->getallimage();});
$router->post('/maya-tattoo/api/upload', function(){(new ControllersGallery)->saveimage();});
$router->post('/maya-tattoo/api/delete', function(){(new ControllersGallery)->admindeleteimage();});


?>
