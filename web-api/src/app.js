const express = require('express');
const cors = require('cors');
const jwtMiddleware = require('./utils/jwtMiddleware')
const router = require('./routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions));
const exclusions =['/','/auth']
app.use(jwtMiddleware( {exclusions} ))
app.use('/', router.initRouter)
app.use('/api/users', router.userRouter)
app.use('/api/imoveis', router.imoveisRouter)
app.use('/api/buy-sell', router.buySellRouter)
app.use('/api/dashboard', router.dashboardRouter)

module.exports = app