import { MongoClient } from "mongodb";

export const getCollection = async () => {
  const client = await MongoClient.connect(
    "mongodb://root:password@local-server:27017/?authMechanism=DEFAULT"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  return {
    client: client,
    collection: meetupsCollection,
  };
};
