document.addEventListener("DOMContentLoaded", () => {
  const browserLang = navigator.language || navigator.userLanguage || "en";
  let currentLang = browserLang.startsWith("de") ? "de" : "en";

  
  // Function to set headers based on language
  function setHeaders(headers) {
    document.getElementById("header_air_fry").textContent = headers.air_fry;
    document.getElementById("header_max_crisp").textContent = headers.max_crisp;
    document.getElementById("header_roast").textContent = headers.roast;
    document.getElementById("header_bake").textContent = headers.bake;
    document.getElementById("header_dehydration").textContent = headers.dehydration;
  }

  // Set the table column headers dynamically for each table
  function setTableHeaders(headers) {
    Object.entries(headers).forEach(([tableId, cols]) => {
      const theadTr = document.querySelector(`#${tableId} thead tr`);
      if (theadTr) {
        theadTr.innerHTML = cols.map(col => `<th>${col}</th>`).join("");
      }
    });
  }

  function loadTables(lang) {
      const data = lang === "de" ? data_de : data_en;

      // Update headers according to language
      setHeaders(lang === "de" ? headers_de : headers_en);
      
      // Set table headers
      setTableHeaders(lang === "de" ? tableHeaders_de : tableHeaders_en);

      // Call for cooking charts
      render_table(data.table_air_fry, "table_air_fry", 6);
      render_table(data.table_max_crisp, "table_max_crisp", 5);
      render_table(data.table_roast, "table_roast", 6);
      render_table(data.table_bake, "table_bake", 6);
      render_table(data.table_dehydration, "table_dehydration", 4);
  }

  const langSwitchBtn = document.getElementById("lang-switch");
  langSwitchBtn.textContent = currentLang === "de" ? "Switch to English" : "Wechsel zu Deutsch";
  langSwitchBtn.addEventListener("click", () => {
      currentLang = currentLang === "de" ? "en" : "de";
      langSwitchBtn.textContent = currentLang === "de" ? "Switch to English" : "Wechsel zu Deutsch";
      loadTables(currentLang);
  });

  // Initial render
  loadTables(currentLang);
});

// load version from file
fetch('version.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('app-version').textContent = `v${data.version}`;
  })
  .catch(err => console.error('Error loading version:', err));