const {MongoClient} = require('mongodb')

async function main(){
    const uri = "mongodb+srv://Harman:Bq0DcJwODNXkmkd6@cluster0.upwjcyv.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    try{
        await client.connect();
        await findOneListingByName(client, {name: "harman"})
    }catch(e){
        console.log(e)
    }finally{
        await client.close();
    }
}

main().catch(console.error);

async function createListing(client, newListing){
    const result = await client.db("Podcasifydb").collection("Music").insertOne(newListing);
    console.log(`New listing created with the following id: ${result}`);
}

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

async function findOneListingByName(client, nameOfListing){
    const result = await client.db("Podcasifydb").collection("Music").findOne({})
    console.log(result)
}