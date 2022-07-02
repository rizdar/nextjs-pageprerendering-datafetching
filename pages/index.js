import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/util-api';
import EventList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NEXT JS Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve...." />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
