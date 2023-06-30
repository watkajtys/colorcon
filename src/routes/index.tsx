import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import AboutImages from "~/components/starter/about-images/about-images";

export default component$(() => {
  return (
    <>
      <Hero />
      <AboutImages />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Denver Colorcon 2023',
  meta: [
    {
      name: 'description',
      content: 'Celebrating Local Icons Past & Present',
    },
  ],
};
