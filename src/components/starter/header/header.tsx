import { component$ } from '@builder.io/qwik';
import styles         from './header.module.css';
import Logo           from '~/media/logo/GTCD_Logo_Horizontal_Rev.png?jsx';
import {Link}         from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={[styles.wrapper]}>

        <div class={styles.logowrap}>
          <a href="/" title="Golden Triangle Creative District">
              <Logo alt="GTCD Logo" class={styles.logoimage}/>
            </a>
          <div class={[styles.event_wrapper, 'hideOnMobile']}>
            <div class={styles.breaker}>
              <h2 class={'luloFont'}>COLORCON</h2>
              <h3 class={'luloFont'}>2023 Mural Festival</h3>
            </div>
            <div class={styles.breaker}>
              <p>august 26 | 5-8pm</p>
              <a href="https://goo.gl/maps/tLfMJBcdCssppLYM8">
                <p>1278 Lincoln St.</p>
              </a>
            </div>
          </div>
        </div>

        <div class={styles.menu}>
          <ul>
            <li>
              <Link href="/artists">
                Artists
              </Link>
            </li>
            <li>
              <a href="https://goldentriangleofdenver.wildapricot.org/event-5269261" target="_blank" class={styles.button}>
                TICKETS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});
