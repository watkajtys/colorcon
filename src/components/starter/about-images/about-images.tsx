import {component$} from '@builder.io/qwik';
import styles       from './about-images.module.css';

export default component$(() => {
    return (
        <div class="container container-flex column">
            <div class={styles.aboutitem}>
                <div class={styles.aboutcopy}>
                    <h3 class={'luloFont'}>What Is Colorcon?</h3>
                    <p class={'big'}>COLORCON is a musical and artistic mural event that moves throughout the GTCD
                        community. making art accessible to all</p>
                </div>

                <img class={styles.imagebox} src="/media/colorcan.png" alt="colorcon can art" width="600" height="600"/>
            </div>

            <div class={styles.aboutitem}>
                <div class={styles.aboutcopy}>
                    <h3 class={'luloFont'}>Making Place</h3>
                    <p class={'big'}>re-imagining spaces/alleyways in the Golden Triangle Creative District.</p>
                </div>

                <img class={styles.imagebox} src="/media/create.png" alt="colorcon can art" width="600" height="600"/>
            </div>
        </div>
    );
});
