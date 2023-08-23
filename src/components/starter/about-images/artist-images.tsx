import {component$} from '@builder.io/qwik';
import styles       from './about-images.module.css';
import Box          from "~/components/starter/about-images/box";

import Carlos   from '~/media/headshot/carlos.png?jsx';
import Hannimal from '~/media/headshot/hannimal.png?jsx';
import Holmes   from '~/media/headshot/holmes2.png?jsx';
import Mello    from '~/media/headshot/mello2.png?jsx';
import Will     from '~/media/headshot/will2.png?jsx';
import Marco    from '~/media/headshot/marco.png?jsx';

export default component$(() => {
    return (
        <div class="container container-flex column">

            <Box>
                <div q:slot={"title"}>Jasmine Holmes</div>
                <p q:slot={"copy"} class={'big'}>Jasmine Holmes is an artist who creates drawings though a variety of
                    media. She received her BFA from the University of West Florida and her MFA from Colorado State
                    University. Her works are inspired by consumerism and society’s appetite for Black culture.</p>
                <div q:slot={"image"}>
                    <Holmes class={styles.imagebox} alt={'two artists working on a colorcon mural from 2022'}/>
                </div>
            </Box>

            <Box alt={true}>
                <div q:slot={"title"}>Mello</div>
                <p q:slot={"copy"} class={'big'}>Mello, a queer artist of Azorean and Polish descent emerged onto the
                    artistic scene during their college years, what started as a personal escape soon evolved into a
                    profound calling. Their focuses are large-scale painting and digital design, but their curiosity
                    leads them to venture into realms as varied as tattooing and embroidery. Mello's current creative
                    phase is influenced by the dynamic worlds of comic books, traditional tattooing, and the rebellion
                    of the 90s punk movement. For Mello, art isn't merely a passive endeavor—it is a dynamic force of
                    protest, a catalyst for change, and a mechanism for amplifying the voices of the silenced.</p>
                <div q:slot={"image"}>
                    <Mello class={styles.imagebox} alt={'a scissor lift next to a colorcon mural'}/>
                </div>
            </Box>

            <Box>
                <div q:slot={"title"}>Will Barker</div>
                <p q:slot={"copy"} class={'big'}>Will is a full-time muralist and fine artist based in Globeville. His
                    road to this place has been a winding one, having played offensive line in the NFL, spent years as a
                    production manager of a downtown distillery, and dabbled in several other professions before the
                    pandemic gave him the opportunity to explore his passion for a career. The aim of his work is to
                    create scenes blending the lines of history and reality that capture his viewers with vibrancy,
                    action and detail in an effort to provoke thoughts of nostalgia, humor, and perhaps internal
                    reflection. His murals can be found across Denver and throughout Colorado as well as other states
                    across the country.</p>
                <div q:slot={"image"}>
                    <Will class={styles.imagebox} alt={'a musician sings during colorcon 2022'}/>
                </div>
            </Box>

            <Box alt={true}>
                <div q:slot={"title"}>Mr. Hanimal</div>
                <p q:slot={"copy"} class={'big'}>Mr. Hanimal is a Denver based sculptor, muralist and street artist who
                    works in large scale immersive environments. His work deals with themes of environmental justice
                    through a careful use of recycled materials. In recent years Mr. Hanimal has been contacted by extra
                    terrestrial beings known as Hanimals who have bestowed upon him the responsibility of becoming the
                    Hanimal Prophet and spreading the message of the hand.</p>
                <div q:slot={"image"}>
                    <Hannimal class={styles.imagebox}
                              alt={'an image of a mural spray paint can mentioning Colorcon 2022'}/>
                </div>
            </Box>

            <Box>
                <div q:slot={"title"}>El Gatos Locos</div>
                <p q:slot={"copy"} class={'big'}>Marco Antonio Garcia, a self-taught artist, draws from his Mexican
                    heritage and draws inspiration from Alebrije wooden mythical animals, ancient Mayan Art, and
                    renowned Mexican Artists. His creative process often starts with a spontaneous line or shape, using
                    it as a foundation for his compositions. He's mindful of utilizing space and avoids being overly
                    influenced by modern visual media. While he values the influence of other artists and art forms, he
                    believes it shouldn't constrain his own creative direction. Marco focuses on crafting original,
                    accessible art, favoring small canvases, cardboard, sheet metal, glass skulls, and hand-cut paper
                    for his efficient and affordable creations.</p>
                <div q:slot={"image"}>
                    <Carlos class={styles.imagebox}
                            alt={'an image of a mural spray paint can mentioning Colorcon 2022'}/>
                </div>
            </Box>


            <Box alt={true}>
                <div q:slot={"title"}>Marco Garcia</div>
                <p q:slot={"copy"} class={'big'}>Marco Antonio Garcia is a self taught artist who is rooted in his
                    Mexican Culture and inspired by the detailed paintings of the Alebrije wooden mythical animals that
                    were popularized in Mexico in the 70’s and 80’s, ancient Mayan Art and famous Mexican Artists. Marco
                    believes that being influenced by other Artists and art forms is a great way to become inspired as
                    long as it doesn’t inhibit the artists' own creative direction and become a crutch in the creative
                    process. Marco also likes to create original art that can be made efficiently and affordable to the
                    average person, which is why he likes to create small works of art on small canvases, cardboard,
                    sheet metal and glass skulls as well as hand cut paper art.</p>
                <div q:slot={"image"}>
                    <Marco class={styles.imagebox} alt={'an image of Marco Garcia Colorcon 2023'}/>
                </div>
            </Box>
        </div>
    );
});
