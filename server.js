const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = 'YOUR_WEATHERSTACK_API_KEY';
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        res.render('weather', { weather: weatherData });
    } catch (error) {
        res.send('Error fetching weather data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


