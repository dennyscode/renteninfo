import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/backdrop.css';

document.addEventListener("turbolinks:load", () => {

    // Test
    tippy('#singleElement', {
        content: 'Tooltip',
    });

    // Rentenrechner - Helper Icons
    tippy(".icon-help__rente_estimate", {
        content: 'Schätzung',
    })
    tippy(".icon-help__rente_art", {
        content: 'Art',
    })
    tippy(".icon-help__rente_zusatz", {
        content: 'Zusatz',
    })
    tippy(".icon-help__rente_start", {
        content: 'Start',
    })
    tippy(".icon-help__rente_uebergang", {
        content: 'Übergang',
    })
    tippy(".icon-help__rente__jobs", {
        content: 'Jobs',
    })
    tippy(".icon-help__rente_dauer", {
        content: 'Dauer',
    })
    tippy(".icon-help__rente_eink", {
        content: 'Einkommen',
    })
    tippy(".icon-help__rente_reg", {
        content: 'Region',
    })
    tippy(".icon-help__rente_kinder__nachwuchs", {
        content: 'Kinder?',
    })
    tippy(".icon-help__rente__kinder", {
        content: 'Anzahl Kinder',
    })
    tippy(".icon-help__rente__kinder_gebjahr", {
        content: 'Geburtsjahre der Kinder',
    })
    tippy(".icon-help__rente_betrieb", {
        content: 'Betriebliche Rente',
    })
    tippy(".icon-help__rente_wunschalter", {
        content: 'Renteneintrittsalter',
    })
});