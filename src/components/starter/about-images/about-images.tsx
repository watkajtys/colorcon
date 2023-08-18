import {component$} from '@builder.io/qwik';
import styles       from './about-images.module.css';
import Box          from "~/components/starter/about-images/box";
import ColorBox from '~/media/colorcan.png?jsx';
import CreateImage from '~/media/create.png?jsx';
import DreamImage from '~/media/dreambig.png?jsx';
import MusicImage from '~/media/music.png?jsx';

export default component$(() => {
    return (
        <div class="container container-flex column">

            <Box alt={true}>
                <div q:slot={"title"}>What Is ColorCon?</div>
                <p q:slot={"copy"} class={'big'}>COLORCON is a musical and artistic mural event that moves throughout the GTCD
                    community. making art accessible to all</p>
                <a q:slot={"btn"} href={'https://goldentriangleofdenver.wildapricot.org/event-5269261'}
                   class={['button', 'alt']}>Tickets</a>
                <div q:slot={"image"}>
                    <ColorBox class={styles.imagebox} alt={'an image of a mural spray paint can mentioning Colorcon 2022'}/>
                </div>
            </Box>

            <Box>
                <div q:slot={"title"}>Making Place</div>
                <p q:slot={"copy"} class={'big'}>re-imagining spaces/alleyways in the Golden Triangle Creative District.</p>
                <div q:slot={"image"}>
                    <CreateImage class={styles.imagebox} alt={'two artists working on a colorcon mural from 2022'}/>
                </div>
            </Box>

            <Box alt={true}>
                <div q:slot={"title"}>What Is ColorCon?</div>
                <p q:slot={"copy"} class={'big'}>COLORCON is a musical and artistic mural event that moves throughout the GTCD
                    community. making art accessible to all</p>
                <a q:slot={"btn"} href={'https://goldentriangleofdenver.wildapricot.org/event-5269261'}
                   class={['button', 'alt']}>Tickets</a>
                <div q:slot={"image"}>
                    <DreamImage class={styles.imagebox} alt={'a scissor lift next to a colorcon mural'}/>
                </div>
            </Box>

            <Box>
                <div q:slot={"title"}>Celebrate Culture</div>
                <p q:slot={"copy"} class={'big'}>COLORCON brings art and music to life in the Golden Triangle</p>
                <div q:slot={"image"}>
                    <MusicImage class={styles.imagebox} alt={'a musician sings during colorcon 2022'}/>
                </div>
            </Box>
        </div>
    );
});
