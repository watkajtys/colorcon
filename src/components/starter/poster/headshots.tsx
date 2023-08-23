import {component$} from "@builder.io/qwik";
import styles       from './headshots.module.css';

import Headshot1 from '~/media/headshot/carlos.png?jsx';
import Headshot2 from '~/media/headshot/hannimal.png?jsx';
import Headshot3 from '~/media/headshot/holmes.png?jsx';
import Headshot4 from '~/media/headshot/mello.png?jsx';
import Headshot5 from '~/media/headshot/will.png?jsx';

export default component$(() => {
    return (
        <div class={styles.headshots}>
            <Headshot1 class={styles.headshotimage} alt={'Carlos Fresquez headshot'}/>
            <Headshot2 class={styles.headshotimage} alt={'Mr. Hanimal headshot'}/>
            <Headshot3 class={styles.headshotimage} alt={'Jasmine Holmes headshot'}/>
            <Headshot4 class={styles.headshotimage} alt={'RJ Mello headshot'}/>
            <Headshot5 class={styles.headshotimage} alt={'Will Barker headshot'}/>
        </div>
    );
});