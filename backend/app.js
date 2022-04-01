const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./models/index')

const app = express()

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "UPDATE"],
    credentials: true,
}))

app.use(express.json())
app.use( bodyParser.urlencoded({ extended: true}))

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url} `)
    next();
})

require('./routes/users')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
//{ force: true }
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});
