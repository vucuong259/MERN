const express = require('express');
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://cuongvm:1234@mern.ougxi.mongodb.net/MERN?retryWrites=true&w=majority`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('MongDb connected')
    } catch (error) {   
        console.log(error);
        process.exit(1);
    }
}

const app = express();

connectDB();

app.get('/', (req, res) => res.send('Hello'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))