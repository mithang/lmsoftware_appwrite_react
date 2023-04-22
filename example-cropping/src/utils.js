import { Client } from 'appwrite';

const client = new Client();

const bucketID = '6423051432c49a6eae4c';  // your bucket ID
const endpoint = 'http://192.168.1.5/v1';  // Your End point
const projectId = '6422f471138c6530bbe9'; //Your bucked ID

client.setEndpoint(endpoint).setProject(projectId);

export { bucketID, client };
