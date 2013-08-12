<?php
require_once dirname(__FILE__) . '/makeconf.class.php';
$obj = new MakeConf($argv[1]);
$obj->run();
