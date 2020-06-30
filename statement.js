const InvoiceCalculator = require('./invoiceCalculator.js')
const ComedyStrategy = require('./comedyInvoice.js')
const TragedyStrategy = require('./tragedyInvoice.js')

const plays = require('./plays.json') // Возможно plays и invoices должны быть разными таблицами, связанными по ключу playId

const invoiceCalculator = new InvoiceCalculator()
invoiceCalculator.use(new ComedyStrategy())
invoiceCalculator.use(new TragedyStrategy())

function statement(invoice) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Счет для ${invoice.customer}\n`;
    
    let comedyCount = 0
    const format = new Intl.NumberFormat("ru-RU",
                        { style: "currency", currency: "RUB",
                          minimumFractionDigits: 2 }).format;
   
    for (let perf of invoice.performances) {
        let play = plays[perf.playId] || {name : "Неизвестное произведение"}
        if (perf.type === 'comedy') {
            comedyCount ++
        }
        const { cost, credits } = invoiceCalculator.calculateInvoice(perf)
        totalAmount += cost
        volumeCredits += credits
    // Дополнительный бонус за каждые 10 комедий
        
        if(comedyCount % 10 === 0){
            volumeCredits += Math.floor(perf.audience / 5);
        }

    // Вывод строки счета
        result += ` ${play.name}: ${format(cost / 100)}`;
        result += ` (${perf.audience} мест)\n`;
        
    }
    result += `Итого с вас ${format(totalAmount/100)}\n`;
    result += `Вы заработали ${volumeCredits} бонусов\n`;
    return result;
}
module.exports =  statement 