import { getCollection } from "../../utils/mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const { client, collection: meetupsCollection } = await getCollection();
    const result = await meetupsCollection.insertOne(data);
    client.close();

    console.log(result);

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
