const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Start the webapp
const webApp = express();

// Webapp settings
webApp.use(bodyParser.urlencoded({
    extended: true
}));
webApp.use(bodyParser.json());

// Server Port
const PORT = process.env.PORT;

// Home route
webApp.get('/', (req, res) => {
    res.send(`Hello World.!`);
});

const WA = require('../helper-function/whatsapp-send-message');

// Route for WhatsApp
webApp.post('/whatsapp', async (req, res) => {

    let message = req.body.Body;
    let senderID = req.body.From;

    console.log(message);
    console.log(senderID);
	if(message.toString().toLowerCase() ==="jumon"){
		await WA.sendMessage('Hello from Jumon.', senderID);
	}
	else if(message.toString().toLowerCase() ==="main"){
		await WA.sendMessage('Hello from Main.', senderID);
	}
	else if(message.toString().toLowerCase() ==="sakib"){
		await WA.sendMessage('Hello from Sakib.', senderID);
	}
	else if(message.toString().toLowerCase() ==="maruf"){
		await WA.sendMessage('Vaia Performance Bonus Chai', senderID);
	}
	else if(message.toString().toLowerCase() ==="prince"){
		await WA.sendMessage('Vai biye ta ki korben?', senderID);
	}
	else if(message.toString().toLowerCase() ==="riaz"){
		await WA.sendMessage('Vai gastic er betha komche?', senderID);
	}
	else if(message.toString().toLowerCase() ==="ripon"){
		await WA.sendMessage('hi friends! I\'m ripon video.', senderID);
	}
	else if(message.toString().toLowerCase() ==="roman"){
		await WA.sendMessage('জননেতা রোমান ভাই , বিয়ের দাওয়াত খাইতে চাই', senderID);
	}else{
		await WA.sendMessage('Hello from Alchemy', senderID);
	}
    // Write a function to send message back to WhatsApp
    

});

// Start the server
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});