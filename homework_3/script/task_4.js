console.log(Boolean(Number('10') + 1));// выведет true , оба элемента являются числом выше нуля
console.log(Boolean('sub' + Number(false))) // выведет true , так как строка + фолс( "0") выведет значение отменное от нуля
console.log(Boolean (16  *  '          91      ')) //выведет true, тка как при умножение происходит преобразование типов
console.log(Boolean(true - 70)) //выведет true
console.log(Boolean(Number(1 + String(1)) + 1)) //выведет true

