
const user = require('./user')
const imoveisService = require('./imovel')
const buySellService = require('./buySell')
exports.dashboard = () => {
    return new Promise(async(resolve, reject)=>{
        const {data: users} = await user.read()
        const {data: imoveis} = await imoveisService.read()
        const {data: buySell} = await buySellService.read()
        
        resolve({
            users: users.length,
            imoveis: imoveis.length,
            buy: buySell.filter(b => b.acao === 'C').length,
            sell: buySell.filter(b => b.acao == 'V').length
        })
    })
    
}



