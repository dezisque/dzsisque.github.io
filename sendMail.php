<?php

if(isset($_POST['submit'])){
  $to = "dzsq1337@yandex.ru";
  $from = $_POST['email'];
  $first_name = $_POST['name'];
  $subject = "Соосщение с сайта";
  $message = $name . " оставил сообщение:" . "\n\n" . $_POST['message'];

  $headers = "From:" . $from;

  mail($to,$subject,$message,$headers);
  // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
  echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
  echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";
}

?>
