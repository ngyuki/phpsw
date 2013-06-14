// http://msdn.microsoft.com/ja-jp/library/cc364453

!function(){
	var shell = WScript.CreateObject('WScript.Shell');
	var fso = WScript.CreateObject("Scripting.FileSystemObject");
	var env = shell.Environment('Volatile');

	var dir = fso.GetParentFolderName(fso.GetParentFolderName(WScript.ScriptFullName));

	var newlist = [
		dir + "\\bin",
		dir + "\\php"
	];

	var list = env.item('PATH').split(';');

	for (var i=0, len=list.length; i<len; i++)
	{
		var path = list[i];

		if (path.indexOf(dir) !== 0)
		{
			newlist.push(path);
		}
	}

	env.item('PATH') = newlist.join(';');
}()
