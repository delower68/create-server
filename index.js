const express = require('express');
const cors = require('cors');


const app = express();
const port =process.env.PORT || 5000 ;

app.use(cors());

const hotels = require('./data/hotels.json')

app.get('/', (req , res)=>{
    res.send('The server is running on port')
})


app.get('/hotels', (req, res)=>{
    res.send(hotels)
})


app.get('/hotels/:_id', (req, res )=>{
    const id = req.params._id 

    // console.log(id);

    const singleHotel = hotels?.find((p) => p._id == id)
    // res.send(singleHotel)
    // console.log(singleHotel)
    if (!singleHotel) {
        res.send('can not get your value.')
    }
    else{
        res.send(singleHotel)
    }
})


app.get('/category/:name', (req, res)=>{
    const name = req.params.name ;
    // console.log(id);
    const categories = hotels?.filter((p)=> p.category_id == name);
    console.log(categories);
    res.send(categories)

})

app.listen( port , ()=>{
    console.log(`this server is running on port: ${port}`);
})


module.exports = app ;