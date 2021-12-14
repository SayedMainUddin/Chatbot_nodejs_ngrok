var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
console.log(accountSid);
const client = require('twilio')('AC36c62b8759e62877cc53cd2de3cdffa0', 'd26963b08c61e4c4f09b5c8a0bc51595',{
	lazyLoging:true
});
const sendMessage = async(message, senderId)=>{
	//console.log("Send Id: "+senderId);
	console.log("Send message: "+message);
	try{
		await client.messages.create({
			//to:senderId,
			from:'whatsapp:+14155238886',
			body:message,
			to:senderId
			
		});
	}catch(error){
		console.log('error at sendMessage -->$(error)');
	}
};
module.exports = {
	sendMessage
}