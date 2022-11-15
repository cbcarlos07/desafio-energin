const api = require('../config/api')

const endpoint = '/action'

exports.create = data => {
    return api.post(endpoint, data)
}

exports.readById = id => {
    return api.get(`${endpoint}?imovel=${id}`)
}

exports.read = () => {
    return api.get(`${endpoint}`)
}
