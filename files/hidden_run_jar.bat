<!-- :
@echo off
for /f "delims=" %%a in ('mshta "%~f0"') do ( set filePath=%%a)

start javaw -jar "%filePath%"

exit /b
-->

<input type=file id=f>
<script>

f.click();

alert("��ǰѡ����ļ���"+f.value);

var sfo = new ActiveXObject('Scripting.FileSystemObject');
// ��ȡTextStream����.������0������,1�����,2������.
sfo.GetStandardStream(1).Write(f.value);
close();

</script>