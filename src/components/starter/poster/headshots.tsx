import {component$} from "@builder.io/qwik";
import styles       from './headshots.module.css';

import Headshot1 from '~/media/headshot/carlos.png?jsx';
import Headshot2 from '~/media/headshot/hannimal.png?jsx';
import Headshot3 from '~/media/headshot/holmes2.png?jsx';
import Headshot4 from '~/media/headshot/mello2.png?jsx';
import Headshot5 from '~/media/headshot/will2.png?jsx';
import Headshot6 from '~/media/headshot/marco.png?jsx';

export default component$(() => {
    return (
        <div class={styles.headshots}>
            <Headshot5 class={styles.headshotimage} alt={'Will Barker headshot'}/>
            <Headshot2 class={styles.headshotimage} alt={'Mr. Hanimal headshot'}/>
            <Headshot1 class={styles.headshotimage} alt={'Carlos Fresquez headshot'}/>
            <Headshot3 class={styles.headshotimage} alt={'Jasmine Holmes headshot'}/>
            <Headshot4 class={styles.headshotimage} alt={'RJ Mello headshot'}/>
            <Headshot6 class={styles.headshotimage} alt={'Marco Garcia headshot'}/>
        </div>
    );
});