<?php
//Get params from url
$orderCode = $_GET['OC'];
$level = $_GET['PL'];
$exPoints = $_GET['EP'];
$money = $_GET['MO'];
$ingredient1 = $_GET['I1'];
$ingredient2 = $_GET['I2'];
$ingredient3 = $_GET['I3'];
$ingredient4 = $_GET['I4'];
$pastQuestsIds = $_GET['PQI'];
$pastDungeonsIds = $_GET['PDI'];
$cards = $_GET['CA'];
$magic = $_GET['MA'];
$items = $_GET['IT'];
$itemsInUse = $_GET['IIU'];

//Create xml
$newsXML = new SimpleXMLElement("<root></root>");
$newsIntro = $newsXML->addChild('errorCode', '0');
$newsIntro = $newsXML->addChild('name', 'Flashpoint');
$newsIntro = $newsXML->addChild('orderCode', $orderCode);
$newsIntro = $newsXML->addChild('level', $level);
$newsIntro = $newsXML->addChild('exPoints', $exPoints);
$newsIntro = $newsXML->addChild('money', $money);
$newsIntro = $newsXML->addChild('ingredient1', $ingredient1);
$newsIntro = $newsXML->addChild('ingredient2', $ingredient2);
$newsIntro = $newsXML->addChild('ingredient3', $ingredient3);
$newsIntro = $newsXML->addChild('ingredient4', $ingredient4);
$newsIntro = $newsXML->addChild('pastQuestsIds', $pastQuestsIds);
$newsIntro = $newsXML->addChild('pastDungeonsIds', $pastDungeonsIds);
$newsIntro = $newsXML->addChild('cards', $cards);
$newsIntro = $newsXML->addChild('magic', $magic);
$newsIntro = $newsXML->addChild('items', $items);
$newsIntro = $newsXML->addChild('itemsInUse', $itemsInUse);

//Remove xml decleration and format
$dom = new DOMDocument('1.0');
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($newsXML->asXML());
$nodecl = explode("\n", $dom->saveXML(), 2)[1];

//Save file
if (!is_dir('xmls')) {
  mkdir('xmls');
}

file_put_contents('xmls/playerData.xml', $nodecl);

// let the client know there isn't an error
header ("Content-Type:text/xml");
print ("<root><errorCode>0</errorCode></root>");
?>