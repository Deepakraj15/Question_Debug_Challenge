
import('node-fetch').then(({ default: fetch }) => {
   
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');

    const app = express();
    const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.use('/templates', express.static(path.join(__dirname, 'source', 'Templates')));
    app.use('/styles', express.static(path.join(__dirname, 'source', 'styles')));
    app.use('/images', express.static(path.join(__dirname, 'source', 'images')));   

    app.get('/', (req, res)=> {
        res.sendFile('index.html', { root: path.join(__dirname, 'source', 'Templates') });
    });

    app.get('/weather', (req, res)=> {
        res.sendFile('weather.html', { root: path.join(__dirname, 'source', 'Templates') });
    });

    app.post('/getweather', async (req, res) => {
        const cityName = req.body.cityName;
        const apiKey = '994ab94e21cf406fbe735244241702'; 
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${cityName}&q=${apikey}&aqi=no`;
      
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            res.json(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            res.status(500).json({ error: 'Error fetching weather data' });
        }
        
    });
    app.get('/login',(req, res)=> {
        res.sendFile('login.html', { root: path.join(__dirname, 'source', 'Templates') });
    });
   
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}).catch(err => {
    console.error('Error importing node-fetch:', err);
});
