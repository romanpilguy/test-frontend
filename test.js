const statement = require('./statement.js')
const  invoices  = require('./invoices.json')


console.log(statement(invoices[0]))
/*
Счет для MDT
 Гамлет: RUB 650.00 (55 мест)
 Ромео и Джульетта: RUB 450.00 (35 мест)
 Отелло: RUB 620.00 (40 мест)
Итого с вас RUB 1,720.00
Вы заработали 58 бонусов
*/
console.log(statement(invoices[1]))
//Error: неизвестный тип: opera