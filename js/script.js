function render_table_old(data, tableId, colCount) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = ""; // sauber starten

  data.forEach(kategorie => {
    // Header-Row mit colspan = colCount
    const headerRow = document.createElement("tr");
    headerRow.classList.add("header-row");
    const headerCell = document.createElement("td");
    headerCell.colSpan = colCount;
    headerCell.textContent = kategorie.header;
    headerRow.appendChild(headerCell);
    tbody.appendChild(headerRow);

    kategorie.items.forEach(item => {
      const row = document.createElement("tr");

      if (colCount === 6) {
        // Air Fry Table mit 6 Spalten
        row.innerHTML = `
          <td>${item.zutat}</td>
          <td>${item.menge}</td>
          <td>${item.vorbereitung}</td>
          <td>${item.oel}</td>
          <td>${item.temperatur}</td>
          <td>${item.garzeit}</td>
        `;
      } else if (colCount === 5) {
        // Max Crisp Table mit 5 Spalten (ohne Temperatur)
        row.innerHTML = `
          <td>${item.zutat}</td>
          <td>${item.menge}</td>
          <td>${item.vorbereitung}</td>
          <td>${item.oel}</td>
          <td>${item.garzeit}</td>
        `;
      } else if (colCount === 4) {
        // Für die Dehydrierungstabelle, Feldname ist 'dehydrierzeit' (nicht 'garzeit'!)
        row.innerHTML = `
          <td>${item.zutat}</td>
          <td>${item.vorbereitung}</td>
          <td>${item.temperatur}</td>
          <td>${item.dehydrierzeit}</td>
        `;
      }

      tbody.appendChild(row);
    });
  });
}

function render_table(data, tableId, colCount) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = ""; // sauber starten

  data.forEach(kategorie => {
    // Header-Row mit colspan = colCount
    const headerRow = document.createElement("tr");
    headerRow.classList.add("header-row");
    const headerCell = document.createElement("td");
    headerCell.colSpan = colCount;
    headerCell.textContent = kategorie.header;
    headerRow.appendChild(headerCell);
    tbody.appendChild(headerRow);

    kategorie.items.forEach(item => {
      if (item.gruppe && colCount === 6) {
        // Für Air Fry Tabelle: gruppe mit rowspan rendern
        item.gruppe.forEach((subItem, index) => {
          const row = document.createElement("tr");
          if (index === 0) {
            row.innerHTML = `
              <td rowspan="${item.gruppe.length}">${item.zutat}</td>
              <td>${subItem.menge}</td>
              <td>${subItem.vorbereitung}</td>
              <td>${subItem.oel}</td>
              <td>${subItem.temperatur}</td>
              <td>${subItem.garzeit}</td>
            `;
          } else {
            row.innerHTML = `
              <td>${subItem.menge}</td>
              <td>${subItem.vorbereitung}</td>
              <td>${subItem.oel}</td>
              <td>${subItem.temperatur}</td>
              <td>${subItem.garzeit}</td>
            `;
          }
          tbody.appendChild(row);
        });
      } else {
        // Normale Einträge (ohne gruppe)
        const row = document.createElement("tr");
        if (colCount === 6) {
          row.innerHTML = `
            <td>${item.zutat}</td>
            <td>${item.menge}</td>
            <td>${item.vorbereitung}</td>
            <td>${item.oel}</td>
            <td>${item.temperatur}</td>
            <td>${item.garzeit}</td>
          `;
        } else if (colCount === 5) {
          row.innerHTML = `
            <td>${item.zutat}</td>
            <td>${item.menge}</td>
            <td>${item.vorbereitung}</td>
            <td>${item.oel}</td>
            <td>${item.garzeit}</td>
          `;
        } else if (colCount === 4) {
          row.innerHTML = `
            <td>${item.zutat}</td>
            <td>${item.vorbereitung}</td>
            <td>${item.temperatur}</td>
            <td>${item.dehydrierzeit}</td>
          `;
        }
        tbody.appendChild(row);
      }
    });
  });
}

// Aufruf für beide Tabellen:
render_table(table_air_fry, "table_air_fry", 6);
render_table(table_max_crisp, "table_max_crisp", 5);
render_table(table_fry, "table_fry", 6);
render_table(table_dehydration, "table_dehydration", 4);