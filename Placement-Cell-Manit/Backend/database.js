import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = "mongodb+srv://tiwarikartik434:chintu@cluster0.eh3cyrt.mongodb.net/";

const client = new MongoClient(uri);

export async function connect() {
  try {
    const database = client.db('Placement-Cell');
    const movies = database.collection('Project');

    // Query for a movie that has the title 'Back to the Future'
    const query = { arpit:"marry" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}