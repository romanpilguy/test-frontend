const InvoiceCreator = require('./invoiceCreator')
const ComedyStrategy = require('./comedyInvoice')
const TragedyStrategy = require('./tragedyInvoice')
const invoiceCreator = new InvoiceCreator()
invoiceCreator.use(new ComedyStrategy())
invoiceCreator.use(new TragedyStrategy())

function statement(invoice) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Счет для ${invoice.customer}\n`;
    let comedyCount = 0
    const format = new Intl.NumberFormat("ru-RU",
                        { style: "currency", currency: "RUB",
                          minimumFractionDigits: 2 }).format;
   
    for (let perf of invoice.performances) {
        if (perf.type === 'comedy') {
            comedyCount ++
        }
        const { cost, credits } = invoiceCreator.calculateInvoice(perf)
        totalAmount += cost
        volumeCredits += credits
    // Дополнительный бонус за каждые 10 комедий
        
        if(comedyCount % 10 === 0){
            volumeCredits += Math.floor(perf.audience / 5);
        }

    // Вывод строки счета
        result += ` ${perf.playId}: ${format(cost / 100)}`;
        result += ` (${perf.audience} мест)\n`;
        
    }
    result += `Итого с вас ${format(totalAmount/100)}\n`;
    result += `Вы заработали ${volumeCredits} бонусов\n`;
    return result;
}
module.exports =  statement 