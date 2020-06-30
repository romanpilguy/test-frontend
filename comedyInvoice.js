const BaseInvoiceStrategy  = require('./baseInvoice.js')
class ComedyInvoiceStrategy extends BaseInvoiceStrategy{
    constructor(){
        super()
        this.name = 'comedy'
    }
    calculateCost(perf){
        const extraCost = (perf.audience > 20) ? 10000 + 500 * (perf.audience - 20) : 0
        return 30000 +  300 * perf.audience + extraCost
    }
}
module.exports = ComedyInvoiceStrategy 