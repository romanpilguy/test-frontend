class BaseInvoiceStrategy{
    constructor(){
        this.name = 'base'
    }
    calculateCost(perf){
        return 0
    }
    calculateCredits(perf){
        return Math.max(perf.audience - 30, 0)
    }
    createInvoice(perf){
        return {
            cost : this.calculateCost(perf),
            credits : this.calculateCredits(perf)
        }
    }
}
module.exports =  BaseInvoiceStrategy 