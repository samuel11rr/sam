<?php
    header('Access-Control-Allow-Origin: *');

    $respuesta = array('connected' => true);
	echo json_encode( $respuesta );
?>