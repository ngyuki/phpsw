[misc]

include_path = ".;<?= realpath("$base_dir/pear/php") ?>"
expose_php = Off
error_reporting = -1
log_errors = Off
display_errors = On
display_startup_errors = On

mbstring.language = Japanese
mbstring.internal_encoding = UTF-8
date.timezone = "Asia/Tokyo"
user_agent = php

post_max_size = 24M
upload_max_filesize = 24M

memory_limit = 256M
realpath_cache_size = 8M

phar.readonly = Off

extension_dir = ext

extension = php_mbstring.dll
extension = php_sqlite3.dll
;extension = php_mysqli.dll
extension = php_pdo_mysql.dll
extension = php_sockets.dll
;extension = php_gd2.dll
extension = php_curl.dll
extension = php_xsl.dll
extension = php_soap.dll
extension = php_openssl.dll
extension = php_pdo_sqlite.dll
extension = php_fileinfo.dll
extension = php_intl.dll
extension = php_ldap.dll
extension = php_com_dotnet.dll
