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
        { ingredient: "Aspargus", amount: "250 g", preparation: "Whole, stems trimmed", oil: "2 tsp", temperature: "200 °C", cook_time: "6-8 min" },
        { ingredient: "Beetroot", amount: "6 small or 4 large (ca. 1 kg)", preparation: "Whole", oil: "None", temperature: "200 °C", cook_time: "45-60 min" },
        { ingredient: "Paprika", amount: "4 (600g)", preparation: "Whole", oil: "None", temperature: "200 °C", cook_time: "26-30 min" },
        { ingredient: "Broccoli", amount: "400 g", preparation: "Cut in 2.5 cm florets", oil: "1 Tbsp", temperature: "200 °C", cook_time: "13-16 min" },
        { ingredient: "Brussel sprouts", amount: "1 kg", preparation: "Cut in half, stem removed", oil: "1 Tbsp", temperature: "200 °C", cook_time: "18-22 min" },
        {
          ingredient: "Butternut squash",
          group: [
            { amount: "500 - 750 g", preparation: "Cut in 2.5 cm pieces", oil: "1 Tbsp", temperature: "200 °C", cook_time: "16-18 min" },
            { amount: "1 kg", preparation: "Cut in 2.5 cm pieces", oil: "1 Tbsp", temperature: "200 °C", cook_time: "23-26 min" }
          ]
        },
        { ingredient: "Carrots", amount: "1 kg", preparation: "Peeled, cut in 1.5 cm pieces", oil: "1 Tbsp", temperature: "200 °C", cook_time: "20-24 min" },
        { ingredient: "Cauliflower", amount: "900 g", preparation: "Cut in 2.5 cm florets", oil: "2 Tbsp", temperature: "200 °C", cook_time: "20-24 min" },
        { ingredient: "Corn on the cob", amount: "4", preparation: "Whole ears, husks removed", oil: "1 Tbsp", temperature: "200 °C", cook_time: "15-18 min" },
        {
          ingredient: "Courgette",
          group: [
            { amount: "500 g", preparation: "Cut in quarters lengthwise, then cut in 2.5 cm pieces", oil: "1 Tbsp", temperature: "200 °C", cook_time: "8-10 min" },
            { amount: "1 kg", preparation: "Cut in quarters lengthwise, then cut in 2.5 cm pieces", oil: "1 Tbsp", temperature: "200 °C", cook_time: "18-20 min" }
          ]
        },
        { ingredient: "Green beans", amount: "400 g", preparation: "Trimmed", oil: "1 Tbsp", temperature: "200 °C", cook_time: "12-14 min" },
        { ingredient: "Kale (for chips)", amount: "200 g", preparation: "Torn in pieces, stems removed", oil: "None", temperature: "150 °C", cook_time: "8-10 min" },
        { ingredient: "Mushrooms", amount: "300 g", preparation: "Wiped, cut in quarters", oil: "1 Tbsp", temperature: "200 °C", cook_time: "13 min" },
        {
          ingredient: "Potatoes<br/> King Edward, Maris Piper oder Russet",
          group: [
            { amount: "1 kg", preparation: "Cut in 2.5 cm wedges", oil: "1 Tbsp", temperature: "200 °C", cook_time: "22-26 min" },
            { amount: "500 g", preparation: "handcut chips*, thin", oil: "½-3 Tbsp Pflanzenöl", temperature: "200 °C", cook_time: "16-18 min" },
            { amount: "500 g", preparation: "handcut chips*, thick", oil: "½-3 Tbsp Pflanzenöl", temperature: "200 °C", cook_time: "23-26 min" },
            { amount: "500 g", preparation: "Cut in same size pieces", oil: "2 Tbsp Pflanzenöl", temperature: "200 °C", cook_time: "15-20 min" },
            { amount: "4 whole (185-250 g)", preparation: "Pierced with fork 3 times", oil: "1 Tbsp", temperature: "200 °C", cook_time: "30-35 min" }
          ]
        },
        {
          ingredient: "Potatoes, sweet",
          group: [
            { amount: "1 kg", preparation: "Cut in 2.5 cm chunks", oil: "1 Tbsp", temperature: "200 °C", cook_time: "18-20 min" },
            {  amount: "4 ganze (je 185-250 g)", preparation: "Pierced with fork 3 times", oil: "None", temperature: "200 °C", cook_time: "30-35 min" }
          ]
        },
      ]
    },
    {
      header: "POULTRY",
      items: [
        { ingredient: "Chicken breasts", amount: "4 (800 g)", preparation: "Bone in", oil: "Brushed with oil", temperature: "200 °C", cook_time: "20-22 min" },
        
        {
          ingredient: "Chicken thighs",
          group: [
            { amount: "1 kg", preparation: "Bone in", oil: "Brushed with oil", temperature: "200 °C", cook_time: "22-28 min" },
            { amount: "1 kg", preparation: "Boneless, skinless", oil: "Brushed with oil", temperature: "200 °C", cook_time: "20-26 min" }
          ]
        },
        { ingredient: "Chicken wings", amount: "1 kg", preparation: "Drumettes & flats", oil: "1 Tbsp", temperature: "200 °C", cook_time: "22-26 min" },
      ]
    },
    {
      header: "FISH & SEAFOOD",
      items: [
        { ingredient: "Cod filet", amount: "2 Filets (140 g each)", preparation: "None", oil: "Brushed with oil", temperature: "200 °C", cook_time: "7-10 min" },
        { ingredient: "Fish cakes", amount: "2 (145 g each)", preparation: "None", oil: "hed with oil", temperature: "200 °C", cook_time: "12-15 min" },
        { ingredient: "Lobster tails", amount: "4", preparation: "Whole", oil: "None", temperature: "190 °C", cook_time: "5-8 min" },
        { ingredient: "Prawns", amount: "16 large (165 g)", preparation: "Whole, peeled, tails on", oil: "1 Tbsp", temperature: "200 °C", cook_time: "9-11 min" },
        { ingredient: "Salmon fillets", amount: "4 filets (130 g each)", preparation: "None", oil: "Brushed with oil", temperature: "200 °C", cook_time: "10-13 min" },
      ]
    },
    {
      header: "BEEF",
      items: [
        { ingredient: "Burgers", amount: "4 (120-130 g each)", preparation: "2,5 cm thick", oil: "None", temperature: "190 °C", cook_time: "8-10 min" },
        { ingredient: "Steaks", amount: "2 (230 g each)", preparation: "Whole", oil: "None", temperature: "200 °C", cook_time: "6-10 min" }
      ]
    },
    {
      header: "PORK",
      items: [
        { ingredient: "Bacon", amount: "4 rashers", preparation: "None", oil: "None", temperature: "200 °C", cook_time: "8-10 min" },
        { ingredient: "Ham steaks", amount: "1 (225 g)", preparation: "Cut off 2 cm of the rind, turn after 5 minutes", oil: "Brushed with oil", temperature: "190 °C", cook_time: "10-12 min" },
        {
          ingredient: "Pork chops",
          group: [
            { amount: "2 bone in (250 g each)", preparation: "Bone in", oil: "Brushed with oil", temperature: "190 °C", cook_time: "14-17 min" },
            { amount: "4 boneless (100g each)", preparation: "Boneless", oil: "Brushed with oil", temperature: "190 °C", cook_time: "14 min" }
          ]
        },
        { ingredient: "Pork filet", amount: "2 (350-500g)", preparation: "Whole", oil: "Brushed with oil", temperature: "190 °C", cook_time: "25-30 min" },
        {
          ingredient: "Sausages",
          group: [
            { amount: "4-8  (205-410 g)", preparation: "Whole", oil: "None", temperature: "200 °C", cook_time: "8-10 min" }
          ]
        }
      ]
    },
    {
      header: "LAMB",
      items: [
        { ingredient: "Lamb chops", amount: "4 (340 g)", preparation: "None", oil: "Brushed with oil", temperature: "180 °C", cook_time: "11-12 min" },
        { ingredient: "Lamb steak", amount: "3 (300 g)", preparation: "None", oil: "Brushed with oil", temperature: "180 °C", cook_time: "12-13 min" }
      ]
    },
    {
      header: "FROZEN FOODS",
      items: [
        { ingredient: "Breaded Mushrooms", amount: "300 g", preparation: "None", oil: "None", temperature: "170 °C", cook_time: "18-18 min" },
        { ingredient: "Chicken Escalopes", amount: "5", preparation: "None", oil: "None", temperature: "200 °C", cook_time: "18-21 min" },
        { ingredient: "Chicken nuggets", amount: "700 g", preparation: "None", oil: "None", temperature: "200 °C", cook_time: "20-22 min" },
        { ingredient: "Chicken Kiew", amount: "4 (500 g)", preparation: "None", oil: "None", temperature: "180 °C", cook_time: "15 min" },
        { ingredient: "Chicken strips", amount: "11 (270 g)", preparation: "None", oil: "None", temperature: "190 °C", cook_time: "8 min" },
        { ingredient: "Fish fillets (in batter)", amount: "4 (440 g)", preparation: "Turn halfway through cooking time", oil: "None", temperature: "200 °C", cook_time: "16-18 min" },
        { ingredient: "Fish fillets, Breaded", amount: "4 fillets (440 g)", preparation: "None", oil: "None", temperature: "200 °C", cook_time: "13-15 min" },
        { ingredient: "Fish Fingers", amount: "10 (280 g)", preparation: "None", oil: "None", temperature: "200 °C", cook_time: "13-15 min" },
        { ingredient: "Hash Browns", amount: "625", preparation: "None", oil: "None", temperature: "180 °C", cook_time: "20 min" },
        { ingredient: "Onion rings", amount: "375 g", preparation: "Kein Öl", oil: "Kein Öl", temperature: "180 °C", cook_time: "12 min" },
        { ingredient: "Roast potatoes", amount: "700 g", preparation: "None", oil: "None", temperature: "190 °C", cook_time: "20 min" },
        { ingredient: "Sausage Rolls", amount: "24 (400 g)", preparation: "Brushed with egg wash", oil: "Kein Öl", temperature: "200 °C", cook_time: "12-13 min" },
        { ingredient: "Scampi, breaded", amount: "280 g", preparation: "None", oil: "None", temperature: "180 °C", cook_time: "12 min" },
        { ingredient: "Stuffing Balls", amount: "12 (310 g)", preparation: "Keine", oil: "Brushed with oil", temperature: "160 °C", cook_time: "18-20 min" },
        { ingredient: "Tempura prawns", amount: "8 prawns (140 g)", preparation: "Turn halfway through cooking time", oil: "None", temperature: "190 °C", cook_time: "8-9 min" },
        { ingredient: "Vegan burgers", amount: "4 (265 g)", preparation: "Single layer", oil: "None", temperature: "190 °C", cook_time: "15 min" }
      ]
    },
    {
      header: "CHIPS / FRENCH FRIES",
      items: [
        { ingredient: "Hand-cut French fries, 1 cm thick", amount: "500 g", preparation: "Soak in water for 30 min, pat dry", oil: "1-3 Tbsp oil", temperature: "200 °C", cook_time: "14-18 min" },
        { ingredient: "Hand-cut French fries, 2 cm thick", amount: "500 g", preparation: "Soak in water for 30 min, pat dry", oil: "1-3 Tbsp oil", temperature: "200 °C", cook_time: "20-22 min" },
        { ingredient: "Frozen crinkle-cut French fries", amount: "500 g", preparation: "None", oil: "None", temperature: "210 °C", cook_time: "18-20 min" },
        { ingredient: "Frozen curly fries", amount: "700 g", preparation: "None", oil: "None", temperature: "210 °C", cook_time: "18-20 min" },
        { ingredient: "Frozen thin-cut French fries", amount: "500 g", preparation: "None", oil: "None", temperature: "200 °C", cook_time: "18 min" },
        { ingredient: "Frozen thick-cut/chunky French fries", amount: "500 g", preparation: "None", oil: "None", temperature: "220 °C", cook_time: "20 min" },
        { ingredient: "Frozen skin-on French fries", amount: "500 g", preparation: "None", oil: "None", temperature: "200 °C", cook_time: "18-20 min" },
        { ingredient: "Frozen gastro French fries", amount: "700 g", preparation: "None", oil: "None", temperature: "220 °C", cook_time: "22 min" },
        { ingredient: "Frozen French fries", amount: "500 g", preparation: "None", oil: "None", temperature: "180 °C", cook_time: "20-22 min" },
        { ingredient: "Frozen French fries", amount: "1 kg", preparation: "None", oil: "None", temperature: "190 °C", cook_time: "20-22 min" },
        { ingredient: "Frozen potato wedges", amount: "650 g", preparation: "None", oil: "None", temperature: "190 °C", cook_time: "20 min" },
        { ingredient: "Frozen sweet potato fries", amount: "500 g", preparation: "None", oil: "None", temperature: "190 °C", cook_time: "20-22 min" }
      ]
    }
  ],

  table_max_crisp: [
    {
      header: "FROZEN FOOD",
      items: [
        { ingredient: "Chicken nuggets", amount: "24 (350 g)", preparation: "None", oil: "None", cook_time: "9 min" },
        {
          ingredient: "Chips / French fries",
          group: [
            { amount: "500 g", preparation: "None", oil: "None", cook_time: "15 min" },
            { amount: "1 kg", preparation: "None", oil: "None", cook_time: "25 min" },
          ]
        },
        { ingredient: "Chicken dippers", amount: "400 g", preparation: "None", oil: "None", cook_time: "9-10 min" },
        { ingredient: "Chicken wings", amount: "700 g", preparation: "None", oil: "1 Tbsp", cook_time: "25 min" },
        { ingredient: "Fish sticks", amount: "275 g", preparation: "None", oil: "None", cook_time: "10 min" },
        { ingredient: "Potato puffs", amount: "500 g", preparation: "None", oil: "None", cook_time: "12 min" },
        { ingredient: "Mozzarella sticks", amount: "700 g", preparation: "None", oil: "None", cook_time: "6-8 min" },
        { ingredient: "Popcorn chicken", amount: "500 g", preparation: "None", oil: "None", cook_time: "12 min" },
        { ingredient: "Waffle-cut fries", amount: "550 g", preparation: "None", oil: "None", cook_time: "14-16 min" },
        { ingredient: "Battered onion rings", amount: "300 g", preparation: "None", oil: "None", cook_time: "9-10 min" },
      ]
  
    }
  ],

  table_roast: [
    {
      header: "VEGETABLES",
      items: [
        { ingredient: "Eggplant stuffed with mozzarella", amount: "2 small eggplants (500-600 g)", preparation: "Stem removed, halved lengthwise, prepared according to recipe", oil: "Brush with oil", temperature: "190 °C", cook_time: "20+10 min" },
        { ingredient: "Baked potatoes", amount: "1 kg", preparation: "Halved, or quartered if large", oil: "Brush with oil", temperature: "180 °C", cook_time: "30 min" },        
      ]
    },
    {
      header: "MEAT",
      items: [        
        { ingredient: "Whole chicken", amount: "1.38 kg", preparation: "Tie legs together", oil: "Brush with oil", temperature: "170 °C", cook_time: "50 min" },
        { ingredient: "Beef top rump steak", amount: "750 g", preparation: "None", oil: "Brush with oil", temperature: "160 °C", cook_time: "45-50 min (medium)" },
        { ingredient: "Boneless pork loin", amount: "800 g", preparation: "None", oil: "Score the fat", temperature: "180 °C", cook_time: "60 min" },
      ]
    }
  ],

  table_bake: [
    {
      header: "CAKES & PASTRIES",
        items: [
          { ingredient: "Apple pastries", amount: "900 g", preparation: "According to recipe", oil: "Grease the pan and line with baking paper", temperature: "180 °C", cook_time: "16 min" },
          { ingredient: "Banana cake", amount: "900 g", preparation: "According to recipe", oil: "Grease the pan and line with baking paper", temperature: "160 °C", cook_time: "35 min" }
        ]
    }
  ],

  table_dehydration: [
    {
      header: "FRUITS & VEGETABLES",
      items: [
        { ingredient: "Apples", preparation: "Core removed, cut in 3 mm slices, rinsed in lemon water, patted dry", temperature: "60 °C", dehydrate_time: "7-8 h" },
        { ingredient: "Asparagus", preparation: "Cut into 2.5 cm pieces, blanched", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Bananas", preparation: "Peeled, cut in 3 mm slices", temperature: "60 °C", dehydrate_time: "8-10 h" },
        { ingredient: "Beetroot", preparation: "Peeled, cut in 3 mm slices", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Eggplant / Aubergine", preparation: "Peeled, cut in 3 mm slices, blanched", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Fresh herbs", preparation: "Rinsed, patted dry, stems removed", temperature: "60 °C", dehydrate_time: "4 h" },
        { ingredient: "Ginger root", preparation: "Cut in 3 mm slices", temperature: "60 °C", dehydrate_time: "6 h" },
        { ingredient: "Mangoes", preparation: "Peeled, cut in 3 mm slices, pit removed", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Mushrooms", preparation: "Cleaned with soft brush (do not wash)", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Pineapple", preparation: "Peeled, cored, cut in 3 mm - 1.25 cm slices", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Strawberries", preparation: "Cut in half or in 1.25 cm slices", temperature: "60 °C", dehydrate_time: "6-8 h" },
        { ingredient: "Tomatoes", preparation: "Cut in 3 mm slices or grated; steam if planning to rehydrate", temperature: "60 °C", dehydrate_time: "6-8 h" },
      ]
    },
    {
      header: "MEAT, POULTRY, FISH",
      items: [
        { ingredient: "Beef, Chicken, Turkey Jerky", preparation: "Cut in 6 mm slices, marinated overnight", temperature: "70 °C", dehydrate_time: "5-7 h" },
        { ingredient: "Salmon Jerky", preparation: "Cut in 6 mm slices, marinated overnight", temperature: "70 °C", dehydrate_time: "3-5 h" }
      ]
    }
  ]
};