import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6625fef4d550e4de1367") // Replace with your project ID
    .setPlatform('com.axom24.idea-tracker');


export const account = new Account(client);
export const databases = new Databases(client);
