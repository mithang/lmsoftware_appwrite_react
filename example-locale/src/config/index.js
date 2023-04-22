import { Client, Locale } from "appwrite"; //Import appwrite 

const client = new Client();
const locale = new Locale(client);
client
  .setEndpoint("http://192.168.1.5/v1") // Your API Endpoint
  .setProject("6422f471138c6530bbe9") // Your project ID

let response = locale.get();

export {response};
