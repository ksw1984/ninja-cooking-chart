/* data/cooking_chart_english.js */
const headers_en = {
  air_fry: "Air Fry Cooking Chart",
  max_crisp: "Max Crisp Cooking Chart",
  roast: "Roasting Chart",
  bake: "Baking Chart",
  dehydration: "Dehydration Chart"
};

const tableHeaders_en = {
  table_air_fry: ["INGREDIENT", "AMOUNT", "PREPARATION", "TOSS IN OIL", "TEMP", "COOK TIME"],
  table_max_crisp: ["INGREDIENT", "AMOUNT", "PREPARATION", "TOSS IN OIL", "COOK TIME"],
  table_roast: ["INGREDIENT", "AMOUNT", "PREPARATION", "TOSS IN OIL", "TEMP", "COOK TIME"],
  table_bake: ["INGREDIENT", "AMOUNT", "PREPARATION", "TOSS IN OIL", "TEMP", "COOK TIME"],
  table_dehydration: ["INGREDIENTS", "PREPARATION", "TEMP", "DEHYDRATION TIME"]
};

const data_en = {
  table_air_fry: [
    {
      header: "VEGETABLES",
      items: [
        { ingredient: "Blumenkohl", amount: "900 g", preparation: "In 2.5 cm große Röschen geschnitten", oil: "2 EL", temperature: "200 °C", cook_time: "20-24 min" },
        { ingredient: "Brokkoli", amount: "400 g", preparation: "In 2.5 cm große Röschen geschnitten", oil: "1 EL", temperature: "200 °C", cook_time: "13-16 min" },
        {
          ingredient: "Butternusskürbis",
          gruppe: [
            { amount: "500 - 750 g", preparation: "In 2.5 cm große Stücke geschnitten", oil: "1 EL", temperature: "200 °C", cook_time: "16-18 min" },
            { amount: "1 kg", preparation: "In 2.5 cm große Stücke geschnitten", oil: "1 EL", temperature: "200 °C", cook_time: "23-26 min" }
          ]
        },
        { ingredient: "Grüne Bohnen", amount: "400 g", preparation: "Enden abgeschnitten", oil: "1 EL", temperature: "200 °C", cook_time: "12-14 min" },
        { ingredient: "Grünkohl (für Chips)", amount: "200 g", preparation: "In Stücke geteilt, Strünke entfernt", oil: "Kein Öl", temperature: "150 °C", cook_time: "8-10 min" },
        {
          ingredient: "Kartoffeln, weiß<br/>z. B. King Edward, Maris Piper oder Russet",
          gruppe: [
            { amount: "1 kg", preparation: "In 2.5 cm große Spalten geschnitten", oil: "1 EL", temperature: "200 °C", cook_time: "22-26 min" },
            { amount: "500 g", preparation: "Handgeschnittene Chips*, dünn", oil: "½-3 EL Pflanzenöl", temperature: "200 °C", cook_time: "16-18 min" },
            { amount: "500 g", preparation: "Handgeschnittene Chips*, dick", oil: "½-3 EL Pflanzenöl", temperature: "200 °C", cook_time: "23-26 min" },
            { amount: "500 g", preparation: "In gleichmäßige Stücke schneiden", oil: "2 EL Pflanzenöl", temperature: "200 °C", cook_time: "15-20 min" },
            { amount: "4 ganze (je 185-250 g)", preparation: "3 x mit der Gabel eingestochen", oil: "1 EL", temperature: "200 °C", cook_time: "30-35 min" }
          ]
        },
        { ingredient: "Maiskolben", amount: "4 Kolben", preparation: "Ganze Kolben ohne Hülsen", oil: "1 EL", temperature: "200 °C", cook_time: "15-18 min" },
        { ingredient: "Möhren", amount: "1 kg", preparation: "Geschält und in 1.5 cm große Stücke geschnitten", oil: "1 EL", temperature: "200 °C", cook_time: "20-24 min" },
        { ingredient: "Paprika", amount: "4 (600g)", preparation: "Ganz", oil: "Kein Öl", temperature: "200 °C", cook_time: "26-30 min" },
        { ingredient: "Pilze", amount: "300 g", preparation: "Gebürstet, gestielt", oil: "1 EL", temperature: "200 °C", cook_time: "13 min" },
        { ingredient: "Rosenkohl", amount: "1 kg", preparation: "Halbiert, Strunk entfernt", oil: "1 EL", temperature: "200 °C", cook_time: "18-22 min" },
        { ingredient: "Rote Bete", amount: "6 kleine oder 4 große (ca. 1 kg)", preparation: "Ganz", oil: "Kein Öl", temperature: "200 °C", cook_time: "40-60 min" },
        {
          ingredient: "Süßkartoffeln",
          gruppe: [
            { amount: "1 kg", preparation: "In 2.5 cm große Stücke geschnitten", oil: "1 EL", temperature: "200 °C", cook_time: "18-20 min" },
            {  amount: "4 ganze (je 185-250 g)", preparation: "3 x mit der Gabel eingestochen", oil: "Kein Öl", temperature: "200 °C", cook_time: "30-35 min" }
          ]
        },
        { ingredient: "Spargel", amount: "250 g", preparation: "Ganz, Enden der Stangen abgeschnitten", oil: "2 TL", temperature: "200 °C", cook_time: "6-8 min" },
        {
          ingredient: "Zucchini",
          gruppe: [
            { amount: "500 g", preparation: "Der Länge nach geviertelt, dann in 2.5 cm große Stücke geschnitten", oil: "1 EL", temperature: "200 °C", cook_time: "8-10 min" },
            { amount: "1 kg", preparation: "Der Länge nach geviertelt, dann in 2.5 cm große Stücke geschnitten", oil: "1 EL", temperature: "200 °C", cook_time: "18-20 min" }
          ]
        }
      ]
    },
    {
      header: "GEFLÜGEL",
      items: [
        { ingredient: "Entenbrust", amount: "2 Brüste (400 g)", preparation: "Haut einschneiden, mit der Brust nach unten braten, nach der Hälfte der Garzeit umdrehen", oil: "Kein Öl", temperature: "200 °C", cook_time: "18-22 min" },
        { ingredient: "Hähnchenbrust", amount: "4 (800 g)", preparation: "Keine", oil: "Mit Öl bestreichen", temperature: "200 °C", cook_time: "20-22 min" },
        { ingredient: "Hähnchenflügel", amount: "1 kg", preparation: "Keine", oil: "Mit Öl bestreichen", temperature: "200 °C", cook_time: "27-30 min" },
        {
          ingredient: "Hähnchenschenkel",
          gruppe: [
            { amount: "6 Schenkel (je 125-150 g/750-900 g)", preparation: "Mit Knochen", oil: "Mit Öl bestreichen", temperature: "200 °C", cook_time: "20-26 min" },
            { amount: "6-8 Schenkel (je 100/600-800 g)", preparation: "Entbeint", oil: "Mit Öl bestreichen", temperature: "200 °C", cook_time: "20-26 min" }
          ]
        }
      ]
    },
    {
      header: "FISCH UND MEERESFRÜCHTE",
      items: [
        { ingredient: "Fischfrikadellen", amount: "2 Frikadellen (je 145 g)", preparation: "Keine", oil: "Mit Öl bestreichen", temperature: "200 °C", cook_time: "12-15 min" },
        { ingredient: "Garnelen", amount: "16 große (165 g)", preparation: "Ganz, geschält, mit Schwanz", oil: "1 EL", temperature: "200 °C", cook_time: "9-10 min" },
        { ingredient: "Kabeljaufilets", amount: "2 Filets (280 g)", preparation: "Keine", oil: "Mit Öl bestreichen", temperature: "200 °C", cook_time: "7-10 min" },
        { ingredient: "Lachsfilets", amount: "4 Filets (520 g)", preparation: "Keine", oil: "Mit Öl bestreichen", temperature: "200 °C", cook_time: "12-14 min" }
      ]
    },
    {
      header: "RIND",
      items: [
        { ingredient: "Burger", amount: "4 (jeweils 113 g)", preparation: "2,5 cm dick", oil: "Kein Öl", temperature: "190 °C", cook_time: "11-12 min" },
        { ingredient: "Steaks", amount: "2 Steaks (jeweils 230 g)", preparation: "Ganz", oil: "Mit Öl bestrichen", temperature: "200 °C", cook_time: "8-12 min" }
      ]
    },
    {
      header: "SCHWEINEFLEISCH",
      items: [
        { ingredient: "Bacon (Speck)", amount: "4 Streifen", preparation: "Keine", oil: "Kein Öl", temperature: "200 °C", cook_time: "8-10 min" },
        { ingredient: "Schinkensteak", amount: "1 (225 g)", preparation: "2 cm von der Rinde abschneiden, nach 5 min wenden", oil: "Mit Öl bestrichen", temperature: "190 °C", cook_time: "10-12 min" },
        { ingredient: "Schweinefilets", amount: "2 (je 350-500g)", preparation: "Keine", oil: "Mit Öl bestrichen", temperature: "190 °C", cook_time: "25-30 min" },
        {
          ingredient: "Schweinekoteletts",
          gruppe: [
            { amount: "2 dick geschnittene Koteletts mit Knochen (jeweils 250 g)", preparation: "Keine", oil: "Mit Öl bestrichen", temperature: "190 °C", cook_time: "14-15 min" },
            { amount: "4 entpbeinte (jeweils 100g)", preparation: "Entbeint", oil: "Mit Öl bestrichen", temperature: "190 °C", cook_time: "14-17min" }
          ]
        },
        {
          ingredient: "Wurst",
          gruppe: [
            { amount: "4 Würste (205 g)", preparation: "Ganz", oil: "Kein Öl", temperature: "200 °C", cook_time: "8 min" },
            { amount: "8 Würste (410 g)", preparation: "Ganz", oil: "Kein Öl", temperature: "200 °C", cook_time: "10 min" }
          ]
        }
      ]
    },
    {
      header: "LAMM",
      items: [
        { ingredient: "Lammkoteletts", amount: "4 (340 g)", preparation: "Keine", oil: "Mit Öl bestrichen", temperature: "180 °C", cook_time: "11-12 min" },
        { ingredient: "Lammsteak", amount: "3 (300 g)", preparation: "Keine", oil: "Mit Öl bestrichen", temperature: "180 °C", cook_time: "12-13 min" }
      ]
    },
    {
      header: "TIEFGEFRORENE LEBENSMITTEL",
      items: [
        { ingredient: "Fischfilets (im Backteig)", amount: "4 (440 g)", preparation: "Nach halber Garzeit wenden", oil: "Kein Öl", temperature: "200 °C", cook_time: "16-18 min" },
        { ingredient: "Fischstäbchen", amount: "10 (280 g)", preparation: "Keine", oil: "Kein Öl", temperature: "200 °C", cook_time: "13-15 min" },
        { ingredient: "Hähnchenstreifen", amount: "11 (270 g)", preparation: "Keine", oil: "Kein Öl", temperature: "190 °C", cook_time: "8 min" },
        { ingredient: "Hähnchenschnitzel", amount: "5", preparation: "Keine", oil: "Kein Öl", temperature: "200 °C", cook_time: "18-21 min" },
        { ingredient: "Hähnchennuggets", amount: "1kg (etwa 50 Nuggets)", preparation: "Keine", oil: "Kein Öl", temperature: "200 °C", cook_time: "20-22 min" },
        { ingredient: "Kartoffelpuffer", amount: "7 (390 g)", preparation: "Einzelne Schicht", oil: "Kein Öl", temperature: "200 °C", cook_time: "15 min" },
        { ingredient: "Kiewer Kotelett", amount: "4 (500 g)", preparation: "Keine", oil: "Kein Öl", temperature: "180 °C", cook_time: "15 min" },
        { ingredient: "Panierte Fischfilets", amount: "4 Filets (440 g)", preparation: "Keine", oil: "Kein Öl", temperature: "200 °C", cook_time: "13-15 min" },
        { ingredient: "Panierte Knoblauch-Pilze", amount: "300 g", preparation: "Keine", oil: "Kein Öl", temperature: "190 °C", cook_time: "10-12 min" },
        { ingredient: "Panierte Scampi", amount: "280 g", preparation: "Keine", oil: "Kein Öl", temperature: "180 °C", cook_time: "12 min" },
        { ingredient: "Röstkartoffeln", amount: "700 g", preparation: "Keine", oil: "Kein Öl", temperature: "190 °C", cook_time: "20 min" },
        { ingredient: "Tempura-Garnelen", amount: "8 Garnelen (140 g)", preparation: "Nach halber Garzeit wenden", oil: "Kein Öl", temperature: "190 °C", cook_time: "8-9 min" },
        { ingredient: "Vegane Burger", amount: "4 (265 g)", preparation: "Einzelne Schicht", oil: "Kein Öl", temperature: "190 °C", cook_time: "15 min" }
      ]
    },
    {
      header: "POMMES FRIES",
      items: [
        { ingredient: "Handgeschnittene Pommes frites, 1 cm dick", amount: "500 g", preparation: "30 min in Wasser legen, trocken tupfen", oil: "1-3 EL Pflanzenöl", temperature: "200 °C", cook_time: "20-22 min" },
        { ingredient: "Handgeschnittene Pommes frites, 2 cm dick", amount: "500 g", preparation: "30 min in Wasser legen, trocken tupfen", oil: "1-3 EL Pflanzenöl", temperature: "200 °C", cook_time: "20-22 min" },
        { ingredient: "Tiefgefrorene Kartoffelecken", amount: "650 g", preparation: "Keine", oil: "Keine", temperature: "190 °C", cook_time: "20 min" }, 
        { ingredient: "Tiefgefrorene Pommes frites mit Wellenschnitt", amount: "500 g", preparation: "Keine", oil: "Keine", temperature: "210 °C", cook_time: "18-20 min" },
        { ingredient: "Tiefgefrorene Pommes frites in Spiralenform", amount: "700 g", preparation: "Keine", oil: "Keine", temperature: "210 °C", cook_time: "18-20 min" },
        { ingredient: "Tiefgefrorene Pommes frites, dünn geschnittene", amount: "500 g", preparation: "Keine", oil: "Keine", temperature: "200 °C", cook_time: "18 min" },
        { ingredient: "Tiefgefrorene Pommes frites, grob geschnittene", amount: "500 g", preparation: "Keine", oil: "Keine", temperature: "220 °C", cook_time: "20 min" },
        { ingredient: "Tiefgefrorene Pommes frites mit Schale", amount: "500 g", preparation: "Keine", oil: "Keine", temperature: "200 °C", cook_time: "18-20 min" },
        { ingredient: "Tiefgefrorene Pommes frites Gastro", amount: "700 g", preparation: "Keine", oil: "Keine", temperature: "220 °C", cook_time: "22 min" },
        { ingredient: "Tiefgefrorene Pommes frites", amount: "500 g", preparation: "Keine", oil: "Keine", temperature: "180 °C", cook_time: "20-22 min" },
        { ingredient: "Tiefgefrorene Pommes frites", amount: "1 kg", preparation: "Keine", oil: "Keine", temperature: "190 °C", cook_time: "20-22 min" },
        { ingredient: "Tiefgefrorene Süßkartoffelpommes", amount: "500 g", preparation: "Keine", oil: "Keine", temperature: "180 °C", cook_time: "22 min" }
      ]
    }
  ],

  table_max_crisp: [
    {
      header: "TIEFGEFRORENE LEBENSMITTEL",
      items: [
        { ingredient: "Hähnchennuggets", amount: "24 (350 g)", preparation: "Keine", oil: "Kein Öl", cook_time: "10 min" },
        {
          ingredient: "Pommes frites",
          gruppe: [
            { amount: "500 g", preparation: "Keine", oil: "Kein Öl", cook_time: "15 min" },
            { amount: "1 kg", preparation: "Keine", oil: "Kein Öl", cook_time: "25 min" },
          ]
        },
        { ingredient: "Chicken Dippers", amount: "400 g", preparation: "Keine", oil: "Kein Öl", cook_time: "9-10 min" },
        { ingredient: "Chicken Wings", amount: "700 g", preparation: "Keine", oil: "Kein Öl", cook_time: "9-10 min" },
        { ingredient: "Fischstreifen", amount: "275 g", preparation: "Keine", oil: "Kein Öl", cook_time: "10 min" },
        { ingredient: "Kartoffel-Pops", amount: "500 g", preparation: "Keine", oil: "Kein Öl", cook_time: "12 min" },
        { ingredient: "Mozzarella-Sticks", amount: "700 g", preparation: "Keine", oil: "Kein Öl", cook_time: "7-8 min" },
        { ingredient: "Popcorn-Hähnchen", amount: "500 g", preparation: "Keine", oil: "Kein Öl", cook_time: "12 min" },
        { ingredient: "Pommes frites (Waffelförmige)", amount: "550 g", preparation: "Keine", oil: "Kein Öl", cook_time: "14-16 min" },
        { ingredient: "Zwiebelringe (Panniert)", amount: "300 g", preparation: "Keine", oil: "Kein Öl", cook_time: "9-10 min" },
      ]
  
    }
  ],

  table_roast: [
    {
      header: "BRATENTABELLE",
      items: [
        { ingredient: "Aubergine, gefüllt mit Mozarella", amount: "2 kleine Auberginen (500-600 g)", preparation: "Stiel entfernt, der Länge nach halbiert, nach Rezept", oil: "Mit Öl bestreichen", temperature: "190 °C", cook_time: "20+10 min" },
        { ingredient: "Hähnchen, ganz", amount: "1.38 kg", preparation: "Keulen zusammenbinden", oil: "Mit Öl bestreichen", temperature: "170 °C", cook_time: "50 min" },
        { ingredient: "Kartoffeln, gebacken", amount: "1 kg", preparation: "Halbiert, oder geviertelt wenn groß", oil: "Mit Öl bestreichen", temperature: "180 °C", cook_time: "30 min" },
        { ingredient: "Rindfleisch, oberes Rumpsteak", amount: "750 g", preparation: "Keine", oil: "Mit Öl bestreichen", temperature: "160 °C", cook_time: "45-50 min (mittel)" },
        { ingredient: "Schweinelende ohne Knochen", amount: "800 g", preparation: "Keine", oil: "Fett einschneiden", temperature: "180 °C", cook_time: "60 min" }
      ]
    }
  ],

  table_bake: [
    {
      header: "BACKTABELLE",
      items: [
        { ingredient: "Apfel-Teilchen", amount: "900 g", preparation: "Nach Rezept", oil: "Form fettern und mit Backpapier auslegen", temperature: "180 °C", cook_time: "16 min" },
        { ingredient: "Bananenkuchen", amount: "900 g", preparation: "Nach Rezept", oil: "Form fettern und mit Backpapier auslegen", temperature: "160 °C", cook_time: "35 min" },
      ]
    }
  ],

  table_dehydration: [
    {
      header: "OBST UND GEMÜSE (Dehydrierung)",
      items: [
        { ingredient: "Ananas", preparation: "Geschält, entkernt, in 3 mm - 1,25 cm dicke Scheiben geschnitten", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Äpfel", preparation: "Kerngehäuse entfernt, in 3 mm große Spalten geschnitten, in Zitronensaft getaucht, trocken getupft", temperature: "60 °C", dehydrate_time: "7-8 h" },
        { ingredient: "Aubergine", preparation: "Geschält, in 3 mm dicke Scheiben geschnitten, blanchiert", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Bananen", preparation: "Geschält, in 3 mm dicke Scheiben geschnitten", temperature: "60 °C", dehydrate_time: "8-10 h" },
        { ingredient: "Erdbeeren", preparation: "Halbiert oder in 1,25 cm dicke Scheiben geschnitten", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Frische Kräuter", preparation: "Gewaschen, trocken getupft, Stiele entfernt", temperature: "60 °C", dehydrate_time: "4 h" },
        { ingredient: "Ingwerwurzel", preparation: "In 3 mm dicke Scheiben geschnitten", temperature: "60 °C", dehydrate_time: "6 h" },
        { ingredient: "Mango", preparation: "Geschält, in 3 mm dicke Scheiben geschnitten, Kern entfernt", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Pilze", preparation: "Mit weicher Bürste gereinigt (nicht waschen)", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Rote Bete", preparation: "Geschält, in 3 mm dicke Scheiben geschnitten", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Spargel", preparation: "In 2,5 cm große Stücke geschnitten, blanchiert", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Tomaten", preparation: "In 3 mm dicke Scheiben geschnitten oder gerieben; dämpfen, wenn Sie sie dehydrieren wollen", temperature: "60 °C", dehydrate_time: "6-8 h" }
      ]
    },
    {
      header: "FLEISCH, GEFLÜGEL, FISCH (Dehydrierung)",
      items: [
        { ingredient: "Beef, Chicken, Turkey Jerky (Rind, Hähnchen, Puten-Trockenfleisch)", preparation: "In 6 mm dicke Scheiben geschnitten, über Nacht mariniert", temperature: "70 °C", dehydrate_time: "5-7 h" },
        { ingredient: "Salmon Jerky (Lachs-Trockenfleisch)", preparation: "In 6 mm dicke Scheiben geschnitten, über Nacht mariniert", temperature: "70 °C", dehydrate_time: "3-5 h" }
      ]
    }
  ]
};