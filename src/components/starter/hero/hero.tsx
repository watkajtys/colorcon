import { component$ } from '@builder.io/qwik';
import styles         from './hero.module.css';

export default component$(() => {
  return (
    <div class={[styles.hero]}>
      <h1>
        <span class="highlight">COLORCON 2023</span>
      </h1>
        <p>Celebrating Local Icons Past & Present</p>
      <div class={styles['button-group']}>
        <a href="https://goldentriangleofdenver.wildapricot.org/event-5269261" target="_blank" class="button">
          TICKETS
        </a>
      </div>
    </div>
  );
});
