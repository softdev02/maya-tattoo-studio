<?php
// Define Path Application
define('SCRIPT', str_replace('\\', '/', rtrim(__DIR__, '/')) . '/');
define('SYSTEM', SCRIPT . 'System/');
define('CONTROLLERS', SCRIPT . 'Api/Controllers/');
define('MODELS', SCRIPT . 'Api/Models/');
define('SERVICES', SCRIPT . 'Services/');
define('VIDEO', SCRIPT . 'Upload/video');
define('PDF', SCRIPT . 'Upload/pdf');
// Config Database
define('DATABASE', [
   /*  'Port'   => '3306',
    'Host'   => 'localhost',
    'Driver' => 'PDO',
    'Name'   => 'cia_online_learning',
    'User'   => 'root',
    'Pass'   => '',
    'Prefix' => 'cia_'*/
   
    'Port'   => '3306',
    'Host'   => 'localhost',
    'Driver' => 'PDO',
    'Name'   => 'maya-tattoo-project',
    'User'   => 'vetrii',
    'Pass'   => '1997',
    'Prefix' => 'maya_'
    
]);

// DB_PREFIX
define('DB_PREFIX', 'maya_');
?>