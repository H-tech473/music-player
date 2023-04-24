const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoUtils = require('mongodb-utils')
 
const app = express();
 
app.use(cors());
// parse application/json
app.use(bodyParser.json());


let client, database, Collmusic, Collmymusic, User;
// Collmusic = mongoUtils(db.collection('Music'))
// Collmymusic = mongoUtils(db.collection('Mymusic'))
// collection.utils.create({ username: 'terrajs'})
// const user = collection.utils.get({ username: 'terrajs'})
// console.log(user);
const uri = "mongodb+srv://Harman:Bq0DcJwODNXkmkd6@cluster0.upwjcyv.mongodb.net/?retryWrites=true&w=majority"

function Connect(){
    client = new MongoClient(uri);
    client.connect();
    database = client.db(Podcasifydb);
    Collmusic = database.collection("Music");
    Collmymusic = database.collection("Mymusic");
    User = database.collection("User");
}
function Close(){
    client.close();
}

async function Insert({name, genre, songsrc, imgsrc, video, artist}){
    Connect();
    const entry = {
        name: name,
        artist: artist,
        genre: genre,
        imgSrc: imgsrc,
        songSrc: songsrc,
        video: video,
        Trending: false,
        views: 0,
        liked: []
    }
    const myentry = {
        name: name,
        user: artist,
        songsrc: songsrc,
        imgSrc: imgsrc,
        video: video
    }
    Collmusic.insertOne(entry, (err)=>{console.log(err)});
    Collmymusic.insertOne(myentry, (err)=>{console.log(err)})
    Close()
}

async function Findall(){
    Connect();
    Collmusic.findOne({name: "harman"}).then((result)=>{return result});
    Close();
}

app.post("/store", (req, res)=>{
    Insert(req.body);
    res.send("done");
})

app.get("/get", (req, res)=>{
    res.send(Findall());
})
   
app.listen(3030, () => {
    console.log("Server running successfully on 3000");
})


//   const recipes = [
//     {
//       name: "elotes",
//       ingredients: [
//         "corn",
//         "mayonnaise",
//         "cotija cheese",
//         "sour cream",
//         "lime",
//       ],
//       prepTimeInMinutes: 35,
//     },
//     {
//       name: "loco moco",
//       ingredients: [
//         "ground beef",
//         "butter",
//         "onion",
//         "egg",
//         "bread bun",
//         "mushrooms",
//       ],
//       prepTimeInMinutes: 54,
//     },
//     {
//       name: "patatas bravas",
//       ingredients: [
//         "potato",
//         "tomato",
//         "olive oil",
//         "onion",
//         "garlic",
//         "paprika",
//       ],
//       prepTimeInMinutes: 80,
//     },
//     {
//       name: "fried rice",
//       ingredients: [
//         "rice",
//         "soy sauce",
//         "egg",
//         "onion",
//         "pea",
//         "carrot",
//         "sesame oil",
//       ],
//       prepTimeInMinutes: 40,
//     },
//   ];

//   try {
//     const insertManyResult = await collection.insertMany(recipes);
//     console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
//   } catch (err) {
//     console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
//   }

//   /*
//    * *** FIND DOCUMENTS ***
//    *
//    * Now that we have data in Atlas, we can read it. To retrieve all of
//    * the data in a collection, we call Find() with an empty filter.
//    * The Builders class is very helpful when building complex
//    * filters, and is used here to show its most basic use.
//    */

//   const findQuery = { prepTimeInMinutes: { $lt: 45 } };

//   try {
//     const cursor = await collection.find(findQuery).sort({ name: 1 });
//     await cursor.forEach(recipe => {
//       console.log(`${recipe.name} has ${recipe.ingredients.length} ingredients and takes ${recipe.prepTimeInMinutes} minutes to make.`);
//     });
//     // add a linebreak
//     console.log();
//   } catch (err) {
//     console.error(`Something went wrong trying to find the documents: ${err}\n`);
//   }

//   // We can also find a single document. Let's find the first document
//   // that has the string "potato" in the ingredients list.
//   const findOneQuery = { ingredients: "potato" };

//   try {
//     const findOneResult = await collection.findOne(findOneQuery);
//     if (findOneResult === null) {
//       console.log("Couldn't find any recipes that contain 'potato' as an ingredient.\n");
//     } else {
//       console.log(`Found a recipe with 'potato' as an ingredient:\n${JSON.stringify(findOneResult)}\n`);
//     }
//   } catch (err) {
//     console.error(`Something went wrong trying to find one document: ${err}\n`);
//   }

//   /*
//    * *** UPDATE A DOCUMENT ***
//    *
//    * You can update a single document or multiple documents in a single call.
//    *
//    * Here we update the PrepTimeInMinutes value on the document we
//    * just found.
//    */
//   const updateDoc = { $set: { prepTimeInMinutes: 72 } };

//   // The following updateOptions document specifies that we want the *updated*
//   // document to be returned. By default, we get the document as it was *before*
//   // the update.
//   const updateOptions = { returnOriginal: false };

//   try {
//     const updateResult = await collection.findOneAndUpdate(
//       findOneQuery,
//       updateDoc,
//       updateOptions,
//     );
//     console.log(`Here is the updated document:\n${JSON.stringify(updateResult.value)}\n`);
//   } catch (err) {
//     console.error(`Something went wrong trying to update one document: ${err}\n`);
//   }

//   /*      *** DELETE DOCUMENTS ***
//    *
//    *      As with other CRUD methods, you can delete a single document
//    *      or all documents that match a specified filter. To delete all
//    *      of the documents in a collection, pass an empty filter to
//    *      the DeleteMany() method. In this example, we'll delete two of
//    *      the recipes.
//    */


//   const deleteQuery = { name: { $in: ["elotes", "fried rice"] } };
//   try {
//     const deleteResult = await collection.deleteMany(deleteQuery);
//     console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
//   } catch (err) {
//     console.error(`Something went wrong trying to delete documents: ${err}\n`);
//   }

//   // Make sure to call close() on your client to perform cleanup operations
//   await client.close();