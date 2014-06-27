[xdebug]

<?php if ($this->match("5.3.*")): ?>

zend_extension = "<?= $base_dir ?>/ext/php_xdebug-2.2.1-5.3-vc9-nts.dll"

<?php elseif ($this->match("5.4.*")): ?>

zend_extension = "<?= $base_dir ?>/ext/php_xdebug-2.2.2-5.4-vc9-nts.dll"

<?php elseif ($this->match("5.5.*")): ?>

zend_extension = "<?= $base_dir ?>/ext/php_xdebug-2.2.5-5.5-vc11-nts-x86_64.dll"

<?php endif; ?>

xdebug.default_enable = On
;xdebug.idekey = default
xdebug.remote_autostart = Off
xdebug.remote_enable = On
xdebug.remote_handler = dbgp
xdebug.remote_host = localhost
xdebug.remote_connect_back = On
xdebug.remote_port = 9000
xdebug.remote_mode = req

xdebug.profiler_enable = Off
xdebug.profiler_output_dir = "."

;xdebug.var_display_max_children = 1280
;xdebug.var_display_max_data = 102400
;xdebug.var_display_max_depth = 100

xdebug.max_nesting_level = 1000
