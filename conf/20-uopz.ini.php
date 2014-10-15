<?php if ($this->match("5.5.*")): ?>

[uopz]
zend_extension = "<?= $base_dir ?>/ext/php_uopz-2.0.5-5.5-nts-vc11-x86.dll"
uopz.overloads = 1

<?php elseif ($this->match("5.6.*")): ?>

[uopz]
zend_extension = "<?= $base_dir ?>/ext/php_uopz-2.0.5-5.6-nts-vc11-x64.dll"
uopz.overloads = 1

<?php endif; ?>
