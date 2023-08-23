import {component$}        from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';

import Infobox      from '~/components/starter/infobox/infobox';
import ArtistImages from "~/components/starter/about-images/artist-images";
import Poster       from "~/components/starter/poster/poster";

export default component$(() => {
    return (
        <>

            <Poster/>

            <ArtistImages/>


            <div class="container container-flex">
                <Infobox>
                    <div q:slot="title" class="icon icon-community">
                        Community
                    </div>
                    <ul>
                        <li>
                            <span>Questions or just want to say hi? </span>
                            <a href="mailto:jlarsen@goldentriangleofdenver.com" target="_blank">
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
                                Golden Triangle Creative District
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
    title: 'Denver Colorcon 2023 Artists',
    meta : [
        {
            name   : 'description',
            content: 'The 2023 Artist Lineup',
        },
    ],
};
