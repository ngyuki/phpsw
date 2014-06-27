<?php
if ($this->match("5.4.*"))
{
    $src = "$base_dir/ext/php_phalcon-x86_VC9_php5.4.0_1.2.3_nts.dll";
    $dst = "$base_dir/$php_dir/ext/php_phalcon.dll";
    copy($src, $dst);

    echo "[phalcon]\n";
    echo "extension = php_phalcon.dll\n";
}
