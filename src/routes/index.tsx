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

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-community">
            Community
          </div>
          <ul>
            <li>
              <span>Questions or just want to say hi? </span>
              <a href="https://qwik.builder.io/chat" target="_blank">
                Message Us
              </a>
            </li>
            <li>
              <span>Follow </span>
              <a href="https://instagram.com/ColoradoColorcon" target="_blank">
                @ColoradoColorcon
              </a>
              <span> on Instagram</span>
            </li>
            <li>
              <span>Follow </span>
              <a href="https://instagram.com/goldentriangleofdenver" target="_blank">
                Golden Triangle Create District
              </a>
              <span> on Instagram</span>
            </li>
          </ul>
        </Infobox>
      </div>
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
