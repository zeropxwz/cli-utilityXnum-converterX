# read arguments

### описание: 
Функция принимает на вход массив "process.argv" и возвращает массив аргументов, который был передан в программу черз cli  

### сигнатура функции:  
```ts
function readArguments (args: Array<string>): Array<string>
```

### использование:  
```ts
console.log(
    readArguments(process.argv) // вывыдет массив аргументов переданый в параметры 
)
```
