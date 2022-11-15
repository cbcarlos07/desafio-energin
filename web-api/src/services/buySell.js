const rep = require('../repositories/buySellRepository')

exports.create = data => {
    return rep.create(data)
}

exports.readById = data => {
    return rep.readById(data)
}

exports.read = () => {
    return rep.read()
}

