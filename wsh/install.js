!function(){
    var url = "http://windows.php.net/downloads/releases/php-5.4.16-nts-Win32-VC9-x86.zip";
    var zip = "archive\\php-5.4.16-nts-Win32-VC9-x86.zip";
    var dst = "versions\\5.4.16";
    
    var wsh = WScript.CreateObject('WScript.Shell');
    var fso = WScript.CreateObject('Scripting.FileSystemObject');
    
    function log(str)
    {
        WScript.Echo(str);
    }
    
    function setupDirectory()
    {
        wsh.CurrentDirectory = fso.GetParentFolderName(fso.GetParentFolderName(WScript.ScriptFullName));
        return wsh.CurrentDirectory;
    }
    
    function download(url, fn)
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
        stream.SaveToFile(fn, adSaveCreateOverwrite);
    }

    function unzip(zip, dir)
    {
        var zip_abs = fso.GetAbsolutePathName(zip);
        var dir_abs = fso.GetAbsolutePathName(dir);
        
        if (!fso.FolderExists(dir_abs))
        {
            fso.CreateFolder(dir_abs);
        }
        
        var options = 0
            //| 4   // 進捗ダイアログを表示しない
            | 16  // すべて はい
        ;
        
        var explorer = WScript.CreateObject('Shell.Application');
        explorer.NameSpace(dir_abs).CopyHere(explorer.NameSpace(zip_abs).Items(), options);
    }

    var cwd = setupDirectory();
    log("cwd ... " + cwd);
    
    log("download ... " + url);
    download(url, zip);

    log("unzip ... " + zip);
    unzip(zip, dst);
}()

// WScript - http://msdn.microsoft.com/ja-jp/library/cc364456.aspx
// WScript.Shell - http://msdn.microsoft.com/ja-jp/library/cc364466.aspx
// Adodb.Stream - http://msdn.microsoft.com/ja-jp/library/cc364272.aspx
// Shell.Application.CopyHere - http://msdn.microsoft.com/ja-jp/library/windows/desktop/ms723207%28v=vs.85%29.aspx
