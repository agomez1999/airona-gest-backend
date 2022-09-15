const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./routes/users.routes');
const clientsRoutes = require('./routes/clients.routes');
const flightRoutes = require('./routes/flights.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(userRoutes);
app.use(clientsRoutes);
app.use(flightRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})
const PORT = process.env.PORT || 4000
app.listen(PORT);
console.log('Server on port ' + PORT);