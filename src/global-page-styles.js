import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "index": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/pr-menedzher": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/back-end-razrabotchik-php": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/specialist-po-seo-optimizacii-sajtov": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/sborshik-sajtov-na-konstruktorah-ucozuweb": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/junior-nodejs-razrabotchik": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/menedzher-dizajner-shablonov": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/specialist-sluzhby-tehnicheskoj-podderzhki": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/backend-software-engineer": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/programmist-perl": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/pr-menedzher-quarkly": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/banneromejker-illyustrator": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/technology-evangelistdeveloper-advocate": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/junior-nodejs-razrabotchik1": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/javascript-razrabotchik-react": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/veb-dizajner": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/junior-front-end-developer-js": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/ofis-menedzher": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/pr-menedzher-ukit": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/junior-qa": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/back-end-developer-php": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/rukovoditel-sluzhby-tehnicheskoj-podderzhki": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/qa-engineer": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/frontend-developer": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/komyuniti-menedzher": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/sistemnyj-administrator": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/frontend-developer-udal": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/seo-specialist": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/seo-specialist-rostov": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/deloproizvoditel-pomoshnik-yurista": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/veb-dizajner1": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/ofis-menedzher-or-rostov": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/seo-specialist-rusender": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/product-marketing-manager-media-buyer": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/technical-team-lead": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/email-marketolog": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/team-lead-sre": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/fullstack-react-laravel": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/sistemnyj-administrator1": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/junior-it-recruiter": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/middle-fullstack": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/middle-backend-developer": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/rukovoditel-sluzhby-tehnicheskoj-podderzhki-spb": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "uteam": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "resume": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "contacts": {
        "overflow-y": "",
        "overflow-x": "hidden"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
