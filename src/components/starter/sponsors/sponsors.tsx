import {component$} from "@builder.io/qwik";
import styles       from "./sponsors.module.css";

import Sponsor1  from "~/media/logo/2_DenverArtsAndVenues_CMYK.jpg?jsx";
import Sponsor2  from "~/media/logo/ART-Hotel-Logo-w-Trademark.png?jsx";
import Sponsor3  from "~/media/logo/CITIZEN LOGO FA V1 BLACK.png?jsx";
import Sponsor4  from "~/media/logo/DAM-2020-SQ.jpeg?jsx";
import Sponsor5  from "~/media/logo/Dazzle Denver_Logo.jpg?jsx";
import Sponsor6  from "~/media/logo/DRYDEN_Primary_Logotype_Black.jpeg?jsx";
import Sponsor7  from "~/media/logo/Global Security Solutions_Logo.jpg?jsx";
import Sponsor8  from "~/media/logo/logo2.png?jsx";
import Sponsor9  from "~/media/logo/kindred-logo2.png?jsx";
import Sponsor10 from "~/media/logo/Leven_CLEAN_HERO@LARGE.png?jsx";
import Sponsor12 from "~/media/logo/MEININGER_Triangle_website.png?jsx";
import Sponsor13 from "~/media/logo/MolsonCoors-Logo-S.png?jsx";
import Sponsor14 from "~/media/logo/New-FronTier-Works-Logo.png?jsx";
import Sponsor15 from "~/media/logo/NP+logo+11+2020.png?jsx";
import Sponsor16 from "~/media/logo/npu_homepage_blackbox_logo.png?jsx";
import Sponsor17 from "~/media/logo/OVH.png?jsx";
import Sponsor18 from "~/media/logo/png_mdldc logo_black.png?jsx";
import Sponsor19 from "~/media/logo/Sean Walsh Consulting_Logo.png?jsx";
import Sponsor20 from "~/media/logo/Sewald Hanfling_Logo.jpeg?jsx";
import Sponsor21 from "~/media/logo/The Coffee Ban.png?jsx";
import Sponsor22 from "~/media/logo/urban-villages-reg.png?jsx";
import Sponsor23 from "~/media/logo/WW logo red.png?jsx";
import Sponsor24 from "~/media/logo/Xcel_Logo.png?jsx";

// A GRID OF SPONSOR LOGOS GOES HERE

export default component$(() => {
    return (
        <div class={styles.sponsors}>
            <h3 class={'black'}>Brought to You By:</h3>
            <div class={styles.sponsorsgrid}>
                <Sponsor1 class={styles.sponsorimage} alt={'Denver Arts and Venues logo'}/>
                <Sponsor2 class={styles.sponsorimage} alt={'Art Hotel logo'}/>
                <Sponsor3 class={styles.sponsorimage} alt={'Citizen logo'}/>
                <Sponsor4 class={styles.sponsorimage} alt={'Denver Art Museum logo'}/>
                <Sponsor5 class={styles.sponsorimage} alt={'Dazzle logo'}/>
                <Sponsor6 class={styles.sponsorimage} alt={'Dryden logo'}/>
                <Sponsor7 class={styles.sponsorimage} alt={'Global Security Solutions logo'}/>
                <Sponsor8 class={styles.sponsorimage} alt={'Golden Triangle Creative District logo'}/>
                <Sponsor9 class={styles.sponsorimage} alt={'Kindred logo'}/>
                <Sponsor10 class={styles.sponsorimage} alt={'Leven logo'}/>
                <Sponsor12 class={styles.sponsorimage} alt={'Meininger logo'}/>
                <Sponsor13 class={styles.sponsorimage} alt={'Molson Coors logo'}/>
                <Sponsor14 class={styles.sponsorimage} alt={'New FronTier Works logo'}/>
                <Sponsor15 class={styles.sponsorimage} alt={'NP+ logo'}/>
                <Sponsor16 class={styles.sponsorimage} alt={'NPU logo'}/>
                <Sponsor17 class={styles.sponsorimage} alt={'OVH logo'}/>
                <Sponsor18 class={styles.sponsorimage} alt={'MDLDC logo'}/>
                <Sponsor19 class={styles.sponsorimage} alt={'Sean Walsh Consulting logo'}/>
                <Sponsor20 class={styles.sponsorimage} alt={'Sewald Hanfling logo'}/>
                <Sponsor21 class={styles.sponsorimage} alt={'The Coffee Ban logo'}/>
                <Sponsor22 class={styles.sponsorimage} alt={'Urban Villages logo'}/>
                <Sponsor23 class={styles.sponsorimage} alt={'WW logo'}/>
                <Sponsor24 class={styles.sponsorimage} alt={'Xcel logo'}/>
            </div>
        </div>
    );
});