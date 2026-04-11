# Ejecutar en la carpeta del repo
$raw = Get-Content .\datos.js -Raw
$len = $raw.Length
$step = [math]::Ceiling($len / 3)

$p1 = $raw.Substring(0, [math]::Min($step, $len))
$p2Start = [math]::Min($step, $len)
$p2Len = [math]::Min($step, $len - $p2Start)
$p2 = $raw.Substring($p2Start, $p2Len)
$p3Start = $p2Start + $p2Len
$p3Len = $len - $p3Start
$p3 = $raw.Substring($p3Start, $p3Len)

Set-Content .\datos_parte_1.js $p1 -Encoding UTF8
Set-Content .\datos_parte_2.js $p2 -Encoding UTF8
Set-Content .\datos_parte_3.js $p3 -Encoding UTF8

code .\datos_parte_1.js .\datos_parte_2.js .\datos_parte_3.js
$raw = Get-Content .\datos.js -Raw
$len = $raw.Length
$step = [math]::Ceiling($len / 3)

$start = [math]::Min($step, $len)
$length = [math]::Min($step, $len - $start)

$part2 = $raw.Substring($start, $length)
$part2 | Set-Content .\datos_parte_2.js -Encoding UTF8
code .\datos_parte_2.js
$raw = Get-Content .\datos.js -Raw
$len = $raw.Length
$step = [math]::Ceiling($len / 3)

$start3 = [math]::Min($step * 2, $len)
$len3 = $len - $start3

$part3 = $raw.Substring($start3, $len3)
$part3 | Set-Content .\datos_parte_3.js -Encoding UTF8
code .\datos_parte_3.js