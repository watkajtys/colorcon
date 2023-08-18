import { Slot, component$ } from '@builder.io/qwik';
import styles from './infobox.module.css';

export default component$(() => {
  return (
    <div class={styles.infobox}>
        <h4>
        <Slot name="title" />
        </h4>
      <Slot />
    </div>
  );
});
