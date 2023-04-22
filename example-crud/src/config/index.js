import {Client} from "appwrite"

const collectionID = "6423030465cdbe9c0a24";   // your collection ID
const databaseID="6422fabba73c9d80f50c"   // Your database ID
const client= new Client()
  .setEndpoint('http://192.168.1.5/v1') // We set the endpoint, change this if your using another endpoint URL.
  .setProject('6422f471138c6530bbe9'); // Here replace 'ProjectID' with the project ID that you created in your appwrite installation.

export { client,collectionID,databaseID }; // Finally export the client to be used in projects.
