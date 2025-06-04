<?php
require 'db.php';
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
$email = trim($data['email'] ?? '');
$code = trim($data['code'] ?? '');
$new_password = $data['new_password'] ?? '';
if (!$email || !$code || !$new_password) {
    echo json_encode(['success' => false, 'message' => 'Tüm alanlar zorunludur.']);
    exit;
}
$stmt = $pdo->prepare('SELECT * FROM users WHERE email = ? AND reset_code = ? AND reset_code_expiry > NOW()');
$stmt->execute([$email, $code]);
$user = $stmt->fetch();
if (!$user) {
    echo json_encode(['success' => false, 'message' => 'Kod yanlış veya süresi dolmuş.']);
    exit;
}
$hash = password_hash($new_password, PASSWORD_BCRYPT);
$stmt = $pdo->prepare('UPDATE users SET password = ?, reset_code = NULL, reset_code_expiry = NULL WHERE email = ?');
$stmt->execute([$hash, $email]);
echo json_encode(['success' => true, 'message' => 'Şifreniz başarıyla değiştirildi.']); 