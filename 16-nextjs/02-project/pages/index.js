import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { getCollection } from "../utils/mongodb";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetup</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const { client, collection: meetupsCollection } = await getCollection();
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  // fetch data from API
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   console.log(req, res);

//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
