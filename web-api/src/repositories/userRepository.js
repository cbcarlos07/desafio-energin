const api = require('../config/api')

const endpoint = '/users'

exports.create = data => {
    return api.post(endpoint, data)
}

exports.read = (id) => {
    if( id ){
        return api.get(`${endpoint}/${id}`)
    }else{
        return api.get(endpoint)
    }
}

exports.update = (id, data) => {
    return api.put(`${endpoint}/${id}`, data)
}

exports.delete = id => {
    return api.delete(`${endpoint}/${id}`)
}

exports.login = (login, password) => {
    return api.get(`${endpoint}/?login=${login}&password=${password}`)
}
