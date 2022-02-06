roadMines = [false, false, true, false, false, true, false, false, false, false]
i = 0
mis = 0
position = 1
do
{
roadMines[i] === true
console.log(`Танк переместился на ${position} ячейку`)
position ++
if (roadMines[i] === true)
{
mis++

if (mis == 2)
{console.log("Танк уничтожен и не может продолжать движение")
break
} else
{
console.log("Танк поврежден")
}
}

i ++

} while (i < roadMines.length)
