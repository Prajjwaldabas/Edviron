const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const AuthRoute = require('./routes/AuthRoute')
const mongoose = require('mongoose')
const Middleware = require('./middleware/middleware')
const dashboardRoutes = require('./routes/dashboard')
// set up middleware



app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))


const allowedOrigins = [
  'https://edviron-dashboard-client-97dk43crq-prajjwaldabas-projects.vercel.app/',

  'http://localhost:3000',

  'https://edviron-dashboard.onrender.com'
];

const corsOptions = {
  origin: function (origin, callback) {

    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};


app.use(cors(corsOptions));


app.use('/auth',AuthRoute)
app.use('/api',dashboardRoutes)
app.get('/',Middleware.authenticateToken)







  mongoose.connect(process.env.MONGO_DB,
    {useNewUrlParser:true , useUnifiedTopology:true}
    ).then(()=>{
        app.listen(process.env.PORT,()=>console.log(`Server Listening at ${process.env.PORT}`));
    }).catch((err)=>console.log(err))



    

