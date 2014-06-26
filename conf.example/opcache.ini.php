<?php if ($this->compare("5.5.0") >= 0): ?>
[opcache]

zend_extension = php_opcache.dll
opcache.revalidate_freq = 0

<?php endif; ?>
