const BaseInvoiceStrategy = require('./baseInvoice.js')
class TragedyInvoiceStrategy extends BaseInvoiceStrategy{
    constructor(){
        super()
        this.name = 'tragedy'
    }
    calculateCost(perf){
        const extraAmount = (perf.audience > 30) ? 1000 * (perf.audience - 30) : 0
        return 40000 + extraAmount
    }
}
module.exports =  TragedyInvoiceStrategy 