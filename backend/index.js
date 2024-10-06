const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
//hba777
//14COH7rVrvocPBgq

app.use(express.json())
app.use(cors());

async function main() {
    await mongoose.connect('mongodb+srv://hba777:14COH7rVrvocPBgq@food-react-app.96ofi.mongodb.net/food-react-app?retryWrites=true&w=majority&appName=food-react-app');

    

}

main().then(() => console.log("MongoDB Connected Successfully")).catch(err => console.log(err));

//Routes
const itemRoutes = require('../backend/src/routes/itemRoute');
app.use('/api', itemRoutes) 

const categoryRoutes = require('../backend/src/routes/categoryRoute');
app.use('/api', categoryRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})