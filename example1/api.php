<?php
/*$arr = array("a" => 10,"b" => 20);
echo json_encode($arr);*/


$obj=new stdClass;
$obj->name="Deepak";
$obj->age=21;
$obj->marks=75;
echo json_encode($obj);