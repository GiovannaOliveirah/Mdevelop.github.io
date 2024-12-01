<?php 

$dbHost = 'localhost'; 
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'agenda47'; 

// Criar a conexão
$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Verificar a conexão
if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}


?>
