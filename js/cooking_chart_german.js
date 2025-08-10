/* ja/cooking_chart_german.js */
const table_air_fry = [
  {
    header: "GEMÜSE",
    items: [
      { zutat: "Blumenkohl", menge: "900 g", vorbereitung: "In 2.5 cm große Röschen geschnitten", oel: "2 EL", temperatur: "200 °C", garzeit: "20-24 min" },
      { zutat: "Brokkoli", menge: "400 g", vorbereitung: "In 2.5 cm große Röschen geschnitten", oel: "1 EL", temperatur: "200 °C", garzeit: "13-16 min" },
      {
        zutat: "Butternusskürbis",
        gruppe: [
          { menge: "500 - 750 g", vorbereitung: "In 2.5 cm große Stücke geschnitten", oel: "1 EL", temperatur: "200 °C", garzeit: "16-18 min" },
          { menge: "1 kg", vorbereitung: "In 2.5 cm große Stücke geschnitten", oel: "1 EL", temperatur: "200 °C", garzeit: "23-26 min" }
        ]
      },
      { zutat: "Grüne Bohnen", menge: "400 g", vorbereitung: "Enden abgeschnitten", oel: "1 EL", temperatur: "200 °C", garzeit: "12-14 min" },
      { zutat: "Grünkohl (für Chips)", menge: "200 g", vorbereitung: "In Stücke geteilt, Strünke entfernt", oel: "Kein Öl", temperatur: "150 °C", garzeit: "8-10 min" },
      {
        zutat: "Kartoffeln, weiß<br/>z. B. King Edward, Maris Piper oder Russet",
        gruppe: [
          { menge: "1 kg", vorbereitung: "In 2.5 cm große Spalten geschnitten", oel: "1 EL", temperatur: "200 °C", garzeit: "22-26 min" },
          { menge: "500 g", vorbereitung: "Handgeschnittene Chips*, dünn", oel: "½-3 EL Pflanzenöl", temperatur: "200 °C", garzeit: "16-18 min" },
          { menge: "500 g", vorbereitung: "Handgeschnittene Chips*, dick", oel: "½-3 EL Pflanzenöl", temperatur: "200 °C", garzeit: "23-26 min" },
          { menge: "500 g", vorbereitung: "In gleichmäßige Stücke schneiden", oel: "2 EL Pflanzenöl", temperatur: "200 °C", garzeit: "15-20 min" },
          { menge: "4 ganze (je 185-250 g)", vorbereitung: "3 x mit der Gabel eingestochen", oel: "1 EL", temperatur: "200 °C", garzeit: "30-35 min" }
        ]
      },
      { zutat: "Maiskolben", menge: "4 Kolben", vorbereitung: "Ganze Kolben ohne Hülsen", oel: "1 EL", temperatur: "200 °C", garzeit: "15-18 min" },
      { zutat: "Möhren", menge: "1 kg", vorbereitung: "Geschält und in 1.5 cm große Stücke geschnitten", oel: "1 EL", temperatur: "200 °C", garzeit: "20-24 min" },
      { zutat: "Paprika", menge: "4 (600g)", vorbereitung: "Ganz", oel: "Kein Öl", temperatur: "200 °C", garzeit: "26-30 min" },
      { zutat: "Pilze", menge: "300 g", vorbereitung: "Gebürstet, gestielt", oel: "1 EL", temperatur: "200 °C", garzeit: "13 min" },
      { zutat: "Rosenkohl", menge: "1 kg", vorbereitung: "Halbiert, Strunk entfernt", oel: "1 EL", temperatur: "200 °C", garzeit: "18-22 min" },
      { zutat: "Rote Bete", menge: "6 kleine oder 4 große (ca. 1 kg)", vorbereitung: "Ganz", oel: "Kein Öl", temperatur: "200 °C", garzeit: "40-60 min" },
      {
        zutat: "Süßkartoffeln",
        gruppe: [
          { menge: "1 kg", vorbereitung: "In 2.5 cm große Stücke geschnitten", oel: "1 EL", temperatur: "200 °C", garzeit: "18-20 min" },
          {  menge: "4 ganze (je 185-250 g)", vorbereitung: "3 x mit der Gabel eingestochen", oel: "Kein Öl", temperatur: "200 °C", garzeit: "30-35 min" }
        ]
      },
      { zutat: "Spargel", menge: "250 g", vorbereitung: "Ganz, Enden der Stangen abgeschnitten", oel: "2 TL", temperatur: "200 °C", garzeit: "6-8 min" },
      {
        zutat: "Zucchini",
        gruppe: [
          { menge: "500 g", vorbereitung: "Der Länge nach geviertelt, dann in 2.5 cm große Stücke geschnitten", oel: "1 EL", temperatur: "200 °C", garzeit: "8-10 min" },
          { menge: "1 kg", vorbereitung: "Der Länge nach geviertelt, dann in 2.5 cm große Stücke geschnitten", oel: "1 EL", temperatur: "200 °C", garzeit: "18-20 min" }
        ]
      }
    ]
  },
  {
    header: "GEFLÜGEL",
    items: [
      { zutat: "Entenbrust", menge: "2 Brüste (400 g)", vorbereitung: "Haut einschneiden, mit der Brust nach unten braten, nach der Hälfte der Garzeit umdrehen", oel: "Kein Öl", temperatur: "200 °C", garzeit: "18-22 min" },
      { zutat: "Hähnchenbrust", menge: "4 (800 g)", vorbereitung: "Keine", oel: "Mit Öl bestreichen", temperatur: "200 °C", garzeit: "20-22 min" },
      { zutat: "Hähnchenflügel", menge: "1 kg", vorbereitung: "Keine", oel: "Mit Öl bestreichen", temperatur: "200 °C", garzeit: "27-30 min" },
      {
        zutat: "Hähnchenschenkel",
        gruppe: [
          { menge: "6 Schenkel (je 125-150 g/750-900 g)", vorbereitung: "Mit Knochen", oel: "Mit Öl bestreichen", temperatur: "200 °C", garzeit: "20-26 min" },
          { menge: "6-8 Schenkel (je 100/600-800 g)", vorbereitung: "Entbeint", oel: "Mit Öl bestreichen", temperatur: "200 °C", garzeit: "20-26 min" }
        ]
      }
    ]
  },
  {
    header: "FISCH UND MEERESFRÜCHTE",
    items: [
      { zutat: "Fischfrikadellen", menge: "2 Frikadellen (je 145 g)", vorbereitung: "Keine", oel: "Mit Öl bestreichen", temperatur: "200 °C", garzeit: "12-15 min" },
      { zutat: "Garnelen", menge: "16 große (165 g)", vorbereitung: "Ganz, geschält, mit Schwanz", oel: "1 EL", temperatur: "200 °C", garzeit: "9-10 min" },
      { zutat: "Kabeljaufilets", menge: "2 Filets (280 g)", vorbereitung: "Keine", oel: "Mit Öl bestreichen", temperatur: "200 °C", garzeit: "7-10 min" },
      { zutat: "Lachsfilets", menge: "4 Filets (520 g)", vorbereitung: "Keine", oel: "Mit Öl bestreichen", temperatur: "200 °C", garzeit: "12-14 min" }
    ]
  },
  {
    header: "RIND",
    items: [
      { zutat: "Burger", menge: "4 (jeweils 113 g)", vorbereitung: "2,5 cm dick", oel: "Kein Öl", temperatur: "190 °C", garzeit: "11-12 min" },
      { zutat: "Steaks", menge: "2 Steaks (jeweils 230 g)", vorbereitung: "Ganz", oel: "Mit Öl bestrichen", temperatur: "200 °C", garzeit: "8-12 min" }
    ]
  },
  {
    header: "SCHWEINEFLEISCH",
    items: [
      { zutat: "Bacon (Speck)", menge: "4 Streifen", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "200 °C", garzeit: "8-10 min" },
      { zutat: "Schinkensteak", menge: "1 (225 g)", vorbereitung: "2 cm von der Rinde abschneiden, nach 5 min wenden", oel: "Mit Öl bestrichen", temperatur: "190 °C", garzeit: "10-12 min" },
      { zutat: "Schweinefilets", menge: "2 (je 350-500g)", vorbereitung: "Keine", oel: "Mit Öl bestrichen", temperatur: "190 °C", garzeit: "25-30 min" },
      {
        zutat: "Schweinekoteletts",
        gruppe: [
          { menge: "2 dick geschnittene Koteletts mit Knochen (jeweils 250 g)", vorbereitung: "Keine", oel: "Mit Öl bestrichen", temperatur: "190 °C", garzeit: "14-15 min" },
          { menge: "4 entpbeinte (jeweils 100g)", vorbereitung: "Entbeint", oel: "Mit Öl bestrichen", temperatur: "190 °C", garzeit: "14-17min" }
        ]
      },
      {
        zutat: "Wurst",
        gruppe: [
          { menge: "4 Würste (205 g)", vorbereitung: "Ganz", oel: "Kein Öl", temperatur: "200 °C", garzeit: "8 min" },
          { menge: "8 Würste (410 g)", vorbereitung: "Ganz", oel: "Kein Öl", temperatur: "200 °C", garzeit: "10 min" }
        ]
      }
    ]
  },
  {
    header: "LAMM",
    items: [
      { zutat: "Lammkoteletts", menge: "4 (340 g)", vorbereitung: "Keine", oel: "Mit Öl bestrichen", temperatur: "180 °C", garzeit: "11-12 min" },
      { zutat: "Lammsteak", menge: "3 (300 g)", vorbereitung: "Keine", oel: "Mit Öl bestrichen", temperatur: "180 °C", garzeit: "12-13 min" }
    ]
  },
  {
    header: "TIEFGEFRORENE LEBENSMITTEL",
    items: [
      { zutat: "Fischfilets (im Backteig)", menge: "4 (440 g)", vorbereitung: "Nach halber Garzeit wenden", oel: "Kein Öl", temperatur: "200 °C", garzeit: "16-18 min" },
      { zutat: "Fischstäbchen", menge: "10 (280 g)", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "200 °C", garzeit: "13-15 min" },
      { zutat: "Hähnchenstreifen", menge: "11 (270 g)", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "190 °C", garzeit: "8 min" },
      { zutat: "Hähnchenschnitzel", menge: "5", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "200 °C", garzeit: "18-21 min" },
      { zutat: "Hähnchennuggets", menge: "1kg (etwa 50 Nuggets)", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "200 °C", garzeit: "20-22 min" },
      { zutat: "Kartoffelpuffer", menge: "7 (390 g)", vorbereitung: "Einzelne Schicht", oel: "Kein Öl", temperatur: "200 °C", garzeit: "15 min" },
      { zutat: "Kiewer Kotelett", menge: "4 (500 g)", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "180 °C", garzeit: "15 min" },
      { zutat: "Panierte Fischfilets", menge: "4 Filets (440 g)", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "200 °C", garzeit: "13-15 min" },
      { zutat: "Panierte Knoblauch-Pilze", menge: "300 g", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "190 °C", garzeit: "10-12 min" },
      { zutat: "Panierte Scampi", menge: "280 g", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "180 °C", garzeit: "12 min" },
      { zutat: "Röstkartoffeln", menge: "700 g", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "190 °C", garzeit: "20 min" },
      { zutat: "Tempura-Garnelen", menge: "8 Garnelen (140 g)", vorbereitung: "Nach halber Garzeit wenden", oel: "Kein Öl", temperatur: "190 °C", garzeit: "8-9 min" },
      { zutat: "Vegane Burger", menge: "4 (265 g)", vorbereitung: "Einzelne Schicht", oel: "Kein Öl", temperatur: "190 °C", garzeit: "15 min" }
    ]
  },
  {
    header: "POMMES FRIES",
    items: [
      { zutat: "Handgeschnittene Pommes frites, 1 cm dick", menge: "500 g", vorbereitung: "30 min in Wasser legen, trocken tupfen", oel: "1-3 EL Pflanzenöl", temperatur: "200 °C", garzeit: "20-22 min" },
      { zutat: "Handgeschnittene Pommes frites, 2 cm dick", menge: "500 g", vorbereitung: "30 min in Wasser legen, trocken tupfen", oel: "1-3 EL Pflanzenöl", temperatur: "200 °C", garzeit: "20-22 min" },
      { zutat: "Tiefgefrorene Kartoffelecken", menge: "650 g", vorbereitung: "Keine", oel: "Keine", temperatur: "190 °C", garzeit: "20 min" }, 
      { zutat: "Tiefgefrorene Pommes frites mit Wellenschnitt", menge: "500 g", vorbereitung: "Keine", oel: "Keine", temperatur: "210 °C", garzeit: "18-20 min" },
      { zutat: "Tiefgefrorene Pommes frites in Spiralenform", menge: "700 g", vorbereitung: "Keine", oel: "Keine", temperatur: "210 °C", garzeit: "18-20 min" },
      { zutat: "Tiefgefrorene Pommes frites, dünn geschnittene", menge: "500 g", vorbereitung: "Keine", oel: "Keine", temperatur: "200 °C", garzeit: "18 min" },
      { zutat: "Tiefgefrorene Pommes frites, grob geschnittene", menge: "500 g", vorbereitung: "Keine", oel: "Keine", temperatur: "220 °C", garzeit: "20 min" },
      { zutat: "Tiefgefrorene Pommes frites mit Schale", menge: "500 g", vorbereitung: "Keine", oel: "Keine", temperatur: "200 °C", garzeit: "18-20 min" },
      { zutat: "Tiefgefrorene Pommes frites Gastro", menge: "700 g", vorbereitung: "Keine", oel: "Keine", temperatur: "220 °C", garzeit: "22 min" },
      { zutat: "Tiefgefrorene Pommes frites", menge: "500 g", vorbereitung: "Keine", oel: "Keine", temperatur: "180 °C", garzeit: "20-22 min" },
      { zutat: "Tiefgefrorene Pommes frites", menge: "1 kg", vorbereitung: "Keine", oel: "Keine", temperatur: "190 °C", garzeit: "20-22 min" },
      { zutat: "Tiefgefrorene Süßkartoffelpommes", menge: "500 g", vorbereitung: "Keine", oel: "Keine", temperatur: "180 °C", garzeit: "22 min" }
    ]
  }
];

const table_max_crisp = [
  {
    header: "TIEFGEFRORENE LEBENSMITTEL",
    items: [
      { zutat: "Hähnchennuggets", menge: "24 (350 g)", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "10 min" },
      {
        zutat: "Pommes frites",
        gruppe: [
          { menge: "500 g", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "15 min" },
          { menge: "1 kg", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "25 min" },
        ]
      },
      { zutat: "Chicken Dippers", menge: "400 g", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "9-10 min" },
      { zutat: "Chicken Wings", menge: "700 g", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "9-10 min" },
      { zutat: "Fischstreifen", menge: "275 g", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "10 min" },
      { zutat: "Kartoffel-Pops", menge: "500 g", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "12 min" },
      { zutat: "Mozzarella-Sticks", menge: "700 g", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "7-8 min" },
      { zutat: "Popcorn-Hähnchen", menge: "500 g", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "12 min" },
      { zutat: "Pommes frites (Waffelförmige)", menge: "550 g", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "14-16 min" },
      { zutat: "Zwiebelringe (Panniert)", menge: "300 g", vorbereitung: "Keine", oel: "Kein Öl", garzeit: "9-10 min" },
    ]
 
  }
];

const table_roast = [
  {
    header: "BRATENTABELLE",
    items: [
      { zutat: "Aubergine, gefüllt mit Mozarella", menge: "2 kleine Auberginen (500-600 g)", vorbereitung: "Stiel entfernt, der Länge nach halbiert, nach Rezept", oel: "Mit Öl bestreichen", temperatur: "190 °C", garzeit: "20+10 min" },
      { zutat: "Hähnchen, ganz", menge: "1.38 kg", vorbereitung: "Keulen zusammenbinden", oel: "Mit Öl bestreichen", temperatur: "170 °C", garzeit: "50 min" },
      { zutat: "Kartoffeln, gebacken", menge: "1 kg", vorbereitung: "Halbiert, oder geviertelt wenn groß", oel: "Mit Öl bestreichen", temperatur: "180 °C", garzeit: "30 min" },
      { zutat: "Rindfleisch, oberes Rumpsteak", menge: "750 g", vorbereitung: "Keine", oel: "Mit Öl bestreichen", temperatur: "160 °C", garzeit: "45-50 min (mittel)" },
      { zutat: "Schweinelende ohne Knochen", menge: "800 g", vorbereitung: "Keine", oel: "Fett einschneiden", temperatur: "180 °C", garzeit: "60 min" }
    ]
  }
];

const table_bake = [
  {
    header: "BACKTABELLE",
    items: [
      { zutat: "Apfel-Teilchen", menge: "900 g", vorbereitung: "Nach Rezept", oel: "Form fettern und mit Backpapier auslegen", temperatur: "180 °C", garzeit: "16 min" },
      { zutat: "Bananenkuchen", menge: "900 g", vorbereitung: "Nach Rezept", oel: "Form fettern und mit Backpapier auslegen", temperatur: "160 °C", garzeit: "35 min" },
    ]
  }
];

const table_dehydration = [
  {
    header: "OBST UND GEMÜSE (Dehydrierung)",
    items: [
      { zutat: "Ananas", vorbereitung: "Geschält, entkernt, in 3 mm - 1,25 cm dicke Scheiben geschnitten", temperatur: "60 °C", dehydrierzeit: "6-8 h" },
      { zutat: "Äpfel", vorbereitung: "Kerngehäuse entfernt, in 3 mm große Spalten geschnitten, in Zitronensaft getaucht, trocken getupft", temperatur: "60 °C", dehydrierzeit: "7-8 h" },
      { zutat: "Aubergine", vorbereitung: "Geschält, in 3 mm dicke Scheiben geschnitten, blanchiert", temperatur: "60 °C", dehydrierzeit: "6-8 h" },
      { zutat: "Bananen", vorbereitung: "Geschält, in 3 mm dicke Scheiben geschnitten", temperatur: "60 °C", dehydrierzeit: "8-10 h" },
      { zutat: "Erdbeeren", vorbereitung: "Halbiert oder in 1,25 cm dicke Scheiben geschnitten", temperatur: "60 °C", dehydrierzeit: "6-8 h" },
      { zutat: "Frische Kräuter", vorbereitung: "Gewaschen, trocken getupft, Stiele entfernt", temperatur: "60 °C", dehydrierzeit: "4 h" },
      { zutat: "Ingwerwurzel", vorbereitung: "In 3 mm dicke Scheiben geschnitten", temperatur: "60 °C", dehydrierzeit: "6 h" },
      { zutat: "Mango", vorbereitung: "Geschält, in 3 mm dicke Scheiben geschnitten, Kern entfernt", temperatur: "60 °C", dehydrierzeit: "6-8 h" },
      { zutat: "Pilze", vorbereitung: "Mit weicher Bürste gereinigt (nicht waschen)", temperatur: "60 °C", dehydrierzeit: "6-8 h" },
      { zutat: "Rote Bete", vorbereitung: "Geschält, in 3 mm dicke Scheiben geschnitten", temperatur: "60 °C", dehydrierzeit: "6-8 h" },
      { zutat: "Spargel", vorbereitung: "In 2,5 cm große Stücke geschnitten, blanchiert", temperatur: "60 °C", dehydrierzeit: "6-8 h" },
      { zutat: "Tomaten", vorbereitung: "In 3 mm dicke Scheiben geschnitten oder gerieben; dämpfen, wenn Sie sie dehydrieren wollen", temperatur: "60 °C", dehydrierzeit: "6-8 h" }
    ]
  },
  {
    header: "FLEISCH, GEFLÜGEL, FISCH (Dehydrierung)",
    items: [
      { zutat: "Beef, Chicken, Turkey Jerky (Rind, Hähnchen, Puten-Trockenfleisch)", vorbereitung: "In 6 mm dicke Scheiben geschnitten, über Nacht mariniert", temperatur: "70 °C", dehydrierzeit: "5-7 h" },
      { zutat: "Salmon Jerky (Lachs-Trockenfleisch)", vorbereitung: "In 6 mm dicke Scheiben geschnitten, über Nacht mariniert", temperatur: "70 °C", dehydrierzeit: "3-5 h" }
    ]
  }
];