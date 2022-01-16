<?php
$db = new PDO(
    "mysql:host=localhost;dbname=blog",
    'root',
    '',
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
);
$db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
$db->setAttribute( PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true );

$items = $db->query('SELECT * FROM items ORDER BY id;')->fetchAll(PDO::FETCH_ASSOC);

foreach ($items as $item) {
    $tags = explode("\r\n", $item['tags']);
    foreach ($tags as $key => $tag) {
        $tags[$key] = '  - ' . $tag;
    }
    $tags = implode("\r\n", $tags);

    $content = <<<EOT
---
title: {$item['title']}
date: {$item['date']}
tags:
{$tags}
published: {$item['published']}
---

{$item['text']}
EOT;

    file_put_contents('C:\OpenServer\domains\blog2\src\items\\' . $item['id'] . '.md', $content);
}
