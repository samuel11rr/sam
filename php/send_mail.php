<?php
	// header('Access-Control-Allow-Origin: *');
	// header('Access-Control-Allow-Headers: *');

	$datos_str = file_get_contents('php://input');
	$datos_obj = json_decode( $datos_str );

	$mensaje 	= limpiastring( $datos_obj->mensaje );
	$contacto 	= limpiastring( $datos_obj->contacto );
	
	$to = 'samuel_ramirez@live.com.mx';
	$email_subject = "Solicitud de informacion";
	$email_body = "Se ha solicitado informacion\n";
	$email_body.= $mensaje."\n";
	$email_body.= "From: ".$contacto;

	$headers = 'From: samuel-ramirez.com <no-reply@samuel-ramirez.com>' . "\r\n";
	// $headers .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
	// if( $contacto != '' ) $headers .= 'Cc:' . $contacto . "\r\n";
	// $headers .= 'Bcc: samuel@mail.com' . "\r\n";

	try {
		if ($mensaje != '' && $contacto != '') {
			mail($to,$email_subject,$email_body,$headers);

			$respuesta = array('respuesta' => true);
		}else{
			$respuesta = array('respuesta' => false);
		}
	} catch (Exception $e) {
		$respuesta = array('respuesta' => false);	
	}

	echo json_encode( $respuesta );

	function limpiastring( $dato ){
	    $noPermitidos = array("'", '\\', '<', '>', "\"");
	    $cadenaLimpia = str_replace($noPermitidos,"", $dato);

	    return $cadenaLimpia;
	}
?>