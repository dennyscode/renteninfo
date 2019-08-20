console.log("TESTING QUESTIONS");

works = [
    {
    instruction: '1. Frage',
    question: 'Wie hoch schätzen Sie wird ihre monatliche Rente sein?',
    option_input: [
    ['input_line', [
    ['Übertragen Sie Ihre Schätzung in das Feld', '€', ' '], ], ],
    ]
    },
    {
    instruction: '2. Frage',
    question: 'In welchem Jahr haben Sie angefangen zu arbeiten?',
    option_input: [
    ['input_line', [
    ['Übertragen Sie Ihre Schätzung', 'Jahr', ' '], ], ],
    ]
    },
    {
    instruction: '3. Frage',
    question: 'Welche Art von Beschäftigungsverhältnis lag vor?',
    option_input: [
    ['radio', [
    [ ['Wählen Sie aus'], ['abhängig beschäftigt','selbstständig',],],],],
    ]
    },
    {
    instruction: '4. Frage',
    question: 'Welches Geburtsjahr?',
    option_input: [
    ['dropdown_minmax', [
    [ ['Wählen Sie Ihr Geburtsjahr'], ['1960','2010',],],],],
    ]
    },
    {
    instruction: '5. Frage',
    question: 'Wie hoch ist ihr Jahresbruttogehalt?',
    option_input: [
    ['input_line', [
    ['Geben Sie Ihr durchschnittliches Jahresbruttogehalt an.', '24000', ' '], ], ],
    ]
    },
    {
    instruction: '6. Frage',
    question: 'Leben Sie in Ost- oder Westdeutschland?',
    option_input: [
    ['radio', [
    [ ['Wählen Sie aus'], ['Ostdeutschland','Westdeutschland',],],],],
    ]
    },
    {
    instruction: '7. Frage',
    question: 'Wieviele Kinder haben Sie?',
    option_input: [
    ['dropdown_minmax', [
    [ ['Wählen Sie aus'], ['0','10',],],],],
    ]
    },
    {
    instruction: '8. Frage',
    question: 'In welchem Jahr geboren?',
    option_input: [
    ['input_line', [
    ['Wann wurde das (1.) Kind geboren?', 'Jahr', ' '], ], ],
    ]
    },
    ]

    // console.log(works)
    // module.exports.works = works;
