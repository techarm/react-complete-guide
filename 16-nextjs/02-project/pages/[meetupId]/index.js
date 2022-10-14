import Head from "next/head";
import { ObjectId } from "mongodb";
import { getCollection } from "../../utils/mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Fragment } from "react";

function MeetupDetails(props) {
  const { meetupData } = props;
  return (
    <Fragment>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  // fetch data from a single meetup
  // const meetupId = context.params.meetupId;

  const { client, collection: meetupCollection } = await getCollection();
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();

  console.log("getStaticPaths is running");

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data from a single meetup
  const meetupId = context.params.meetupId;

  const { client, collection: meetupCollection } = await getCollection();
  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  console.log("getStaticProps is running");

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
