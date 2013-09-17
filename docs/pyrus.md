# Pyrus

ダウンロード

```
curl http://pear2.php.net/pyrus.phar > pyrus.phar

cat <<'EOS' > bin/pyrus
#!/usr/bin/env php
<?php
require __DIR__ . '/../pyrus.phar';
EOS
``` 

初期設定

    pyrus mypear "$PWD/pear"

ディレクトリ設定の変更

    pyrus set bin_dir   "$PWD/bin"
    pyrus set cache_dir "$PWD/pear/cache"
    pyrus set temp_dir  "$PWD/pear/temp"

設定を表示

    pyrus get

ライブラリのインストール

    pyrus set auto_discover 1
    pyrus install pear.phpunit.de/PHPUnit

ライブラリの一覧

    pyrus list-packages
