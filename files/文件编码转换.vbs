'�÷������ļ����ϵ���vbs�ϣ�����˫��ѡ���ļ���������Ҫת���ɵ��ַ�����
Call Run

Function Run()
    Dim fdpath,charset
    On Error Resume Next
    If WScript.Arguments.Length>=1 Then
        fdpath = WScript.Arguments(0)
    Else
        hta="""about:<input type=file id=f><script>f.click();" & _
        "new ActiveXObject('Scripting.FileSystemObject').GetStandardStream(1).WriteLine(f.value);" & _
        "close();resizeTo(0,0);</script>"""
        ' �򿪶Ի��򣬲����ѡ��ģ��ļ���·��
        fdpath = CreateObject("WScript.Shell").Exec("mshta.exe " & hta ).StdOut.ReadLine
        If fdpath = "" Then
            WScript.echo "���������ļ�·��"
            WScript.Quit
        End If
    End If
    If WScript.Arguments.Length>=2 Then
        charset = WScript.Arguments(1)
    Else
        charset = InputBox("�ַ����룬Ĭ��UTF-8","�������ַ�����","UTF-8")
        if charset = "" then
            WScript.echo "���������ַ�����"
            WScript.Quit
        End If
        charset = UCase(charset)
        if StrComp(replace(charset,"-",""), "UTF8") <> 0 _
            and StrComp(replace(charset,"-",""), "UTF8BOM") <> 0 _
            and StrComp(charset, "GB2312") <> 0 _
            and StrComp(charset, "UNICODE") <> 0 _
            and StrComp(charset, "ANSI") <> 0 then
                WScript.echo "��֧�ֵĸ�ʽ: " & charset
                WScript.Quit
        End if
        ' ANSI ������һ�ֱ��룬ANSI ʵ�ʶ�Ӧ�ı����ϵͳ���õĴ���ҳ�йأ�
        ' �ڼ�������ϵͳ�д���ҳĬ����936����Ӧ GB2312 ����
        if charset = "ANSI" then charset = "GB2312"
    End If
    ' Set fso = CreateObject("scripting.filesystemobject")
    ' Set fd = fso.GetFolder(fdpath)
    ' Set fl=fd.Files
    ' For each f in fl
    '     WriteToFile f.Path,replace(ReadFile(fdpath,CheckCode(fdpath)),vbLf,vbCrLf),charset
    ' Next

    oldCharSet = UCase(CheckCode(fdpath))
    WScript.echo "��ǰ���� "& oldCharSet &" ת���ɱ���" & charset
    If StrComp(charset, oldCharSet) = 0 Then
        MsgBox charset & " == " & oldCharSet,,"�ַ�������ͬ��ʾ"
        WScript.Quit
    End If

    If StrComp(oldCharSet, "UTF-8-BOM") =0 and StrComp(replace(charset,"-",""), "UTF-8") = 0 Then
        MsgBox replace(ReadFile(fdpath,oldCharSet),vbLf,vbCrLf)
        UF8NoBOM fdpath
    Else
        WriteToFile fdpath,replace(ReadFile(fdpath,oldCharSet),vbLf,vbCrLf),charset
    End If
    MsgBox "ת������룺" & CheckCode(fdpath),,"�ַ�����ת��������ʾ"
End Function

' UTF-8-BOM ת UTF8
Function UF8NoBOM(Path)
    Set UTFStream = CreateObject("ADODB.Stream")
    UTFStream.Type = 1
    UTFStream.Mode = 3
    UTFStream.Open
    UTFStream.Position = 0
    UTFStream.loadfromfile Path
    ' Bin=UTFStream.read(2)

    Set BinaryStream = CreateObject("ADODB.Stream")
    ' �ƶ����ַ����ֽ�����������ʼλ�ã�ȥ��BOM��ǰ3���ֽڣ�
    UTFStream.Position = 3
    BinaryStream.Type = 1
    BinaryStream.Mode = 3
    BinaryStream.Open
    UTFStream.CopyTo BinaryStream
    BinaryStream.SaveToFile Path, 2
    BinaryStream.Flush
    BinaryStream.Close
    UTFStream.Flush
    UTFStream.Close
End Function

' ����ȡ���ļ�������ָ������д���ļ� UF8WithoutBOM
Function WriteToFile(Path, Str, CharSet)
    ' ����UTF8���Զ�дBOM������ʹ��UTF-8
    If StrComp(replace(charset,"-",""), "UTF8BOM") =0 Then
        CharSet = "UTF-8"
    End If
    Set stm = CreateObject("Adodb.Stream")
    ' ����1Ϊ�����ƣ�2Ϊ�ı���
    stm.Type = 2
    stm.mode = 3
    stm.charset = CharSet
    stm.Open
    ' ���Ϊ�ı���ֻ��ָ��ΪSize��д���ı�����Ҫȥ��BOM
    ' stm.Position = stm.Size
    ' writeд������,writetextд�ı��ͣ�
    ' stream���Զ����������ʼ����3���ֽڵ�BOM
    stm.WriteText Str
    stm.SaveToFile Path, 2
    ' stm.SetEOS
    stm.flush
    stm.Close
    Set stm = Nothing
End Function

' ���ļ���������ȡ�ļ�
Function ReadFile(Path, CharSet)
    Set stm = CreateObject("Adodb.Stream")
    stm.Type = 2
    stm.mode = 3
    stm.charset = CharSet
    stm.Open
    stm.loadfromfile Path
    ReadFile = stm.ReadText(-1)
    stm.Close
    Set stm = Nothing
End Function

'�ú�����鲢�����ļ��ı�������
Function CheckCode(Path)
    Dim slz
    set slz = CreateObject("Adodb.Stream")
    slz.Type = 1
    slz.Mode = 3
    slz.Open
    slz.Position = 0
    slz.Loadfromfile Path
    Bin=slz.read(2)
    If AscB(MidB(Bin, 1, 1)) = &HEF and AscB(MidB(Bin, 2, 1)) = &HBB Then
        Codes="UTF-8-BOM"
    ElseIf is_valid_utf8(read(Path)) Then
        Codes="UTF-8"
    ElseIf AscB(MidB(Bin,1,1))=&HFF and AscB(MidB(Bin,2,1))=&HFE Then
        Codes="Unicode"
    Else
        Codes="GB2312"
    End if
    slz.Flush
    slz.Close
    Set slz = Nothing
    CheckCode = Codes
End Function

'��Byte()����ת��String�ַ���
Function read(path)
    Dim ado, a(), i, n
    Set ado = CreateObject("ADODB.Stream")
    ado.Type = 1 : ado.Open
    ado.LoadFromFile path
    n = ado.Size - 1
    ReDim a(n)
    For i = 0 To n
        a(i) = ChrW(AscB(ado.Read(1)))
    Next
    read = Join(a, "")
End Function

'׼ȷ��֤�ļ��Ƿ�Ϊutf-8������֤��BOMͷ��uft-8�ļ���
Function is_valid_utf8(ByRef input) 'ByRef�����Ч��
    Dim s, re
    Set re = New Regexp
    s = "[\xC0-\xDF]([^\x80-\xBF]|$)"
    s = s & "|[\xE0-\xEF].{0,1}([^\x80-\xBF]|$)"
    s = s & "|[\xF0-\xF7].{0,2}([^\x80-\xBF]|$)"
    s = s & "|[\xF8-\xFB].{0,3}([^\x80-\xBF]|$)"
    s = s & "|[\xFC-\xFD].{0,4}([^\x80-\xBF]|$)"
    s = s & "|[\xFE-\xFE].{0,5}([^\x80-\xBF]|$)"
    s = s & "|[\x00-\x7F][\x80-\xBF]"
    s = s & "|[\xC0-\xDF].[\x80-\xBF]"
    s = s & "|[\xE0-\xEF]..[\x80-\xBF]"
    s = s & "|[\xF0-\xF7]...[\x80-\xBF]"
    s = s & "|[\xF8-\xFB]....[\x80-\xBF]"
    s = s & "|[\xFC-\xFD].....[\x80-\xBF]"
    s = s & "|[\xFE-\xFE]......[\x80-\xBF]"
    s = s & "|^[\x80-\xBF]"
    re.Pattern = s
    is_valid_utf8 = (Not re.Test(input))
End Function
