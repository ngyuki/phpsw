@echo off

cd /d %~dp0

for /d %%d in (versions\*) do (
    %%d\php -n lib/makeconf.php %%d
    echo %%d
)
