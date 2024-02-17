// Use dynamic import() instead of require()
import('node-fetch').then(({ default: fetch }) => {
    // Continue with your code here
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Set up static file directories
    app.use('/templates', express.static(path.join(__dirname, 'source', 'Templates')));
    app.use('/styles', express.static(path.join(__dirname, 'source', 'styles')));

    app.get('/', function (req, res) {
        res.sendFile('index.html', { root: path.join(__dirname, 'source', 'Templates') });
    });

    app.get('/weather', function (req, res) {
        res.sendFile('weather.html', { root: path.join(__dirname, 'source', 'Templates') });
    });

    app.post('/getweather', async (req, res) => {
        const cityName = req.body.cityName;
        const apiKey = '994ab94e21cf406fbe735244241702'; 
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;
      
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            res.json(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            res.status(500).json({ error: 'Error fetching weather data' });
        }
        
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}).catch(err => {
    console.error('Error importing node-fetch:', err);
});
