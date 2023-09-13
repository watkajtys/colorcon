import {component$} from '@builder.io/qwik';
import styles       from './poster.module.css';

export default component$(() => {
    return (
        <div class={styles.poster}>
            <span>Will Barker</span>
            <span>Mr. Hanimal</span>
            <span>Carlos Frésquez</span>
            <span>(Los Gatos Locos)</span>
            <span>Jasmine Holmes</span>
            <span>RJ Mello</span>
            <span>Marco Garcia</span>
        </div>
    );
});
