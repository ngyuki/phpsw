# phpDocumentor

pear/pyrus でインストールすると include_path に大量の依存ライブラリが配置されて邪魔。
phar だとよくわからないエラーが発生。なので composer でインストールする。

composer でインストールしても bin/phpdoc がダメダメな形で作成されるので自前で作成する。

```
composer install --no-dev

cat <<'EOS' > bin/phpdoc
#!/bin/sh
exec "`dirname $0`/../vendor/phpdocumentor/phpdocumentor/bin/phpdoc.php" "$@"
EOS
```
