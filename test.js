const statement = require('./statement.js')
const ComedyInvoiceStrategy = require('./comedyInvoice')
const TragedyInvoiceStrategy = require('./tragedyInvoice')
const  invoices  = require('./invoices.json')

const comedyStrategy = new ComedyInvoiceStrategy()
const comedyPerfomance = {
    "playId": "Отелло",
    "audience": 40,
    "type": "comedy"
    }
console.log(comedyStrategy.calculateInvoice(comedyPerfomance))
// { cost: 62000, credits: 10 }

const tragedyStrategy = new TragedyInvoiceStrategy()
const tragedyPerfomance = {
    "playId": "Гамлет",
    "audience": 55,
    "type": "tragedy"
    }
console.log(tragedyStrategy.calculateInvoice(tragedyPerfomance))
//{ cost: 65000, credits: 25 }




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