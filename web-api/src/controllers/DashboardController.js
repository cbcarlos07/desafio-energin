const service = require('./../services/dashboard')

exports.dashboard = (req, res) => {
    return service.dashboard()
                  .then(response => {
                    res.json(response)
                  })
                  
}

