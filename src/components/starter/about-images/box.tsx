import { Slot, component$ } from '@builder.io/qwik';
import styles               from './about-images.module.css';

interface BoxProps {
    alt?: boolean;
}
export default component$<BoxProps>((props) => {
    return (

        <div class={[styles.aboutitem, props.alt ? styles.alt : '']}>
            <div class={styles.aboutcopy}>
                <h3 class={'luloFont'}>
                    <Slot name="title" />
                </h3>

                <Slot name="copy" />

                <Slot name={"btn"}/>
            </div>

            <Slot name={"image"}/>

        </div>
    );
});
