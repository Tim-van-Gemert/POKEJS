<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

try {
    $pdo = new PDO("mysql:host=localhost;dbname=pokemonDB", 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Failed to connect to the database: ' . $e->getMessage());
}

function query($sql) {
    global $pdo;
    try {
        $stmt = $pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die('Database query failed: ' . $e->getMessage());
    }
}

// Handle GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['query'])) {
        $query = $_GET['query'];
        $result = query($query);
        echo json_encode($result);
    } else {
        die('Invalid request. Missing query parameter.');
    }
}


// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Assuming you expect JSON data in the request body
    $data = json_decode(file_get_contents('php://input'), true);
    // Extract the values from $data and construct your SQL query accordingly
    $checkpoint = $data['checkpoint'];
    $badges = $data['badges'];
    $team = $data['team'];
    $storedPokemon = $data['storedPokemon'];

    $query = "INSERT INTO saves (checkpoint, badges, team, storedPokemon)
    VALUES ('$checkpoint', '$badges', '$team', '$storedPokemon')";

    $result = query($query);

    // Return a success message or appropriate response
    echo json_encode(['message' => 'Record inserted successfully.']);
}

?>
