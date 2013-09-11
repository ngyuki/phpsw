!function(){

    var host = 'http://windows.php.net';
    var url  = 'http://windows.php.net/downloads/releases/';
    var pat  = 'href="(/downloads/releases/(php-([.0-9]+)-nts-Win32-VC[0-9]+-x86.zip))"';

    var wsh = WScript.CreateObject('WScript.Shell');
    var fso = WScript.CreateObject('Scripting.FileSystemObject');

    function log(str)
    {
        WScript.Echo(str);
    }

    function setup_cwd()
    {
        wsh.CurrentDirectory = fso.GetParentFolderName(fso.GetParentFolderName(WScript.ScriptFullName));
        return wsh.CurrentDirectory;
    }

    function scan_latest_version()
    {
        var xhr = WScript.CreateObject('Msxml2.XMLHTTP');

        xhr.open('GET', url, false);
        xhr.send();

        var html = xhr.responseText;
        var reg = new RegExp(pat, 'gi');

        var m, ret;

        while (m = reg.exec(html))
        {
            ret = {
                url: host + m[1],
                file: m[2],
                version: m[3]
            };
        }

        if (!ret)
        {
            throw new Error("notfound latest php version");
        }

        return ret;
    }

    function download(url, savefile)
    {
        var xhr = WScript.CreateObject('Msxml2.XMLHTTP');
        xhr.open("GET", url, false);
        xhr.send();

        var stream = WScript.CreateObject('Adodb.Stream');
        var adTypeBinary = 1;
        var adSaveCreateOverwrite = 2;

        stream.Type = adTypeBinary;
        stream.Open();
        stream.Write(xhr.responseBody);
        stream.SaveToFile(savefile, adSaveCreateOverwrite);
    }

    function unzip(zip, dir)
    {
        var zip_abs = fso.GetAbsolutePathName(zip);
        var dir_abs = fso.GetAbsolutePathName(dir);

        if (!fso.FolderExists(dir_abs))
        {
            fso.CreateFolder(dir_abs);
        }

        var options = 16; // all Yes
        var explorer = WScript.CreateObject('Shell.Application');
        explorer.NameSpace(dir_abs).CopyHere(explorer.NameSpace(zip_abs).Items(), options);
    }
    
    var cwd = setup_cwd();
    log("cwd ... " + cwd);
    
    log("scan ... " + url);
    var latest = scan_latest_version();
    
    log("find latest php");
    log("  url     : " + latest.url);
    log("  file    : " + latest.file);
    log("  version : " + latest.version);
    
    var zipfile = "archive\\" + latest.file;
    var destdir = "versions\\" + latest.version;
    
    log("download ... " + latest.url);
    download(latest.url, zipfile);
    
    log("unzip ... " + zipfile);
    unzip(zipfile, destdir);
}()

// WScript - http://msdn.microsoft.com/ja-jp/library/cc364456.aspx
// WScript.Shell - http://msdn.microsoft.com/ja-jp/library/cc364466.aspx
// Adodb.Stream - http://msdn.microsoft.com/ja-jp/library/cc364272.aspx
// Shell.Application.CopyHere - http://msdn.microsoft.com/ja-jp/library/windows/desktop/ms723207%28v=vs.85%29.aspx
