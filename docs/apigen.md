# ApiGen

ApiGen の依存する Texy が 2.3.0 からディレクトリ構成が変更されたようで、ApiGen からロードできない。

 - https://github.com/dg/texy/commit/184cacc96486d2e71608109d7ac1bac679051987

2.2.0 であれば大丈夫なのでバージョン指定でインストールすれば大丈夫。

```
php pyrus.phar set auto_discover 1
php pyrus.phar install pear.texy.info/texy-2.2.0
php pyrus.phar install pear.apigen.org/apigen
```

もしくは packagist に登録されているので composer で入れても良いかもしれません。

```
composer require "apigen/apigen:*"

cat <<'EOS' > bin/apigen
#!/usr/bin/env sh
exec "`dirname $0`/../vendor/apigen/apigen/apigen.php" "$@"
EOS
```
