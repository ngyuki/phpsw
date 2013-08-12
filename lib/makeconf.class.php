<?php
class MakeConf
{
    private $_php_dir;
    private $_base_dir;

    public function __construct($php_dir)
    {
        $this->_php_dir = $php_dir;
        $this->_base_dir = dirname(__DIR__);
    }

    public function run()
    {
        $out = array_merge(array($this->read_orig()), $this->read_parts());
        $out = implode("\n\n", $out);

        $this->save($out);
    }

    private function read_orig()
    {
        $list = array(
            'php.ini-development',
            'php.ini-recommended',
        );

        foreach ($list as $fn)
        {
            $fn = $this->_php_dir . DIRECTORY_SEPARATOR . $fn;

            if (is_file($fn))
            {
                return file_get_contents($fn);
            }
        }
    }

    private function read_parts()
    {
        $list = glob($this->_base_dir . '/conf/*');

        $out = array();

        foreach ($list as $fn)
        {
            if (preg_match('/\.ini\.php$/', $fn))
            {
                $out[] = $this->render($fn);
            }
            else if (preg_match('/\.ini$/', $fn))
            {
                $out[] = file_get_contents($fn);
            }
        }

        return $out;
    }

    private function save($out)
    {
        $fn = $this->_php_dir . '/php.ini';
        file_put_contents($fn, $out);
    }

    private function render($fn)
    {
        $php_dir = $this->_php_dir;
        $base_dir = $this->_base_dir;

        ob_start();
        include $fn;
        return ob_get_clean();
    }

    public function compare($v)
    {
        return version_compare(PHP_VERSION, $v);
    }

    public function range($v1, $v2)
    {
        return $this->compare($v1) >= 0 && $this->compare($v2) < 0;
    }

    public function match($v)
    {
        $v = preg_quote($v, '/');

        $v = strtr($v, array(
            '\\*' => "\\w+",
        ));

        return !!preg_match("/^{$v}$/", PHP_VERSION);
    }
}
