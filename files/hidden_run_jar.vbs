hta="""about:<input type=file id=f><script>f.click();" & _
    "new ActiveXObject('Scripting.FileSystemObject').GetStandardStream(1).WriteLine(f.value);" & _
    "close();resizeTo(0,0);</script>"""
' �򿪶Ի���
Set Shell = CreateObject("WScript.Shell")

Set oExec = Shell.Exec("mshta.exe " & hta)

jarPath = oExec.StdOut.ReadLine
If jarPath <> "" Then
    ' ���ѡ��ģ��ļ���·��
    MsgBox "��ǰѡ����ļ���" & chr(13) & jarPath, 64

    arg = InputBox("JVM������", "��������ҪЯ����JVM����", "")

    Shell.Run "java -jar " & jarPath & " " & arg, 0, False

    MsgBox "ִ�гɹ���", 64
Else
    MsgBox "��ѡ���ļ���", 48
End If
