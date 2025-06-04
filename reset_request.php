<?php
require 'db.php';
require 'vendor/autoload.php'; // PHPMailer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
$email = trim($data['email'] ?? '');
if (!$email) {
    echo json_encode(['success' => false, 'message' => 'E-posta zorunludur.']);
    exit;
}
$stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();
if (!$user) {
    echo json_encode(['success' => false, 'message' => 'Bu e-posta ile kayıtlı kullanıcı yok.']);
    exit;
}
$code = rand(100000, 999999);
$expiry = date('Y-m-d H:i:s', strtotime('+15 minutes'));
$stmt = $pdo->prepare('UPDATE users SET reset_code = ?, reset_code_expiry = ? WHERE email = ?');
$stmt->execute([$code, $expiry, $email]);
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // SMTP sunucusu
    $mail->SMTPAuth = true;
    $mail->Username = 'fatihmete1404@gmail.com'; // Kendi e-posta adresiniz
    $mail->Password = 'qoqo kfaq eobb jrph'; // Gmail uygulama şifresi
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->setFrom('fatihmete1404@gmail.com', 'Kütüphane');
    $mail->addAddress($email, $user['username']);
    $mail->Subject = 'Şifre Sıfırlama Kodu';
    $mail->Body = "Şifre sıfırlama kodunuz: $code (15 dakika geçerli)";
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Kod e-posta adresinize gönderildi.']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Mail gönderilemedi: ' . $mail->ErrorInfo]);
} 