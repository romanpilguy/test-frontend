class InvoiceCalculator{
    constructor(){
        this.strategies = {}
    }
    use(strategy){
        this.strategies[strategy.name] = strategy
    }
    
    calculateInvoice(perf){
        const strategy = this.strategies[perf.type]
        if(!strategy){
            throw new Error(`неизвестный тип: ${perf.type}`);
        }
        return strategy.calculateInvoice(perf)
    }
}
module.exports =  InvoiceCalculator 