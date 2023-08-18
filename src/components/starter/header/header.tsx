import { component$ } from '@builder.io/qwik';
import styles       from './header.module.css';
import Logo from '~/media/logo.png?jsx';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={[styles.wrapper]}>

        <div class={styles.logowrap}>
            <a href="https://goldentriangleofdenver.com/" title="Golden Triangle Creative District">
              <Logo alt="GTCD Logo" class={styles.logoimage}/>
            </a>
          <div class={[styles.event_wrapper, 'hideOnMobile']}>
            <div class={styles.breaker}>
              <h2 class={'luloFont'}>COLORCON</h2>
              <h3 class={'luloFont'}>arts & music festival</h3>
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
              <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
                Artists
              </a>
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
