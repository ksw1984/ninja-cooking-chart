/**
 * Renders a dynamic HTML table from a structured data array.
 * 
 * Supports:
 *  - Categories with a header row
 *  - Normal rows
 *  - Grouped rows (multiple entries under the same "zutat" with rowspan)
 *  - Tables with 4, 5, or 6 columns
 * 
 * Column layouts:
 *  - 6 columns: zutat, menge, vorbereitung, oel, temperatur, garzeit
 *  - 5 columns: zutat, menge, vorbereitung, oel, garzeit
 *  - 4 columns: zutat, vorbereitung, temperatur, dehydrierzeit
 * 
 * @param {Array} data - Array of category objects. Each category has a `header` and an `items` array.
 * @param {string} tableId - The ID of the target table element (must contain a <tbody>).
 * @param {number} colCount - Number of columns in the table (4, 5, or 6).
 * 
 * Example data structure:
 * [
 *   {
 *     header: "Category Name",
 *     items: [
 *       { zutat: "Item 1", menge: "500 g", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "180°C", garzeit: "10 min" },
 *       {
 *         zutat: "Grouped Item",
 *         gruppe: [
 *           { menge: "500 g", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "180°C", garzeit: "10 min" },
 *           { menge: "1 kg", vorbereitung: "Keine", oel: "Kein Öl", temperatur: "180°C", garzeit: "20 min" }
 *         ]
 *       }
 *     ]
 *   }
 * ]
 */
function render_table(data, tableId, colCount) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = ""; // clear previous content

  data.forEach(category => {
    // Header row
    const headerRow = document.createElement("tr");
    headerRow.classList.add("header-row");
    const headerCell = document.createElement("td");
    headerCell.colSpan = colCount;
    headerCell.textContent = category.header;
    headerRow.appendChild(headerCell);
    tbody.appendChild(headerRow);

    category.items.forEach(item => {
      // in case group exists: multiple lines with rowspan for ingredient
      if (item.gruppe) {
        item.gruppe.forEach((subItem, index) => {
          const row = document.createElement("tr");

          // Forst row with ingredient and rowspan
          if (index === 0) {
            row.innerHTML = `
              <td rowspan="${item.gruppe.length}">${item.zutat}</td>
              ${colCount === 6 ? `
                <td>${subItem.menge}</td>
                <td>${subItem.vorbereitung}</td>
                <td>${subItem.oel}</td>
                <td>${subItem.temperatur}</td>
                <td>${subItem.garzeit}</td>
              ` : colCount === 5 ? `
                <td>${subItem.menge}</td>
                <td>${subItem.vorbereitung}</td>
                <td>${subItem.oel}</td>
                <td>${subItem.garzeit}</td>
              ` : `
                <td>${subItem.vorbereitung}</td>
                <td>${subItem.temperatur}</td>
                <td>${subItem.dehydrierzeit}</td>
              `}
            `;
          } else {
            // additional rows withut ingredient column
            row.innerHTML = colCount === 6 ? `
              <td>${subItem.menge}</td>
              <td>${subItem.vorbereitung}</td>
              <td>${subItem.oel}</td>
              <td>${subItem.temperatur}</td>
              <td>${subItem.garzeit}</td>
            ` : colCount === 5 ? `
              <td>${subItem.menge}</td>
              <td>${subItem.vorbereitung}</td>
              <td>${subItem.oel}</td>
              <td>${subItem.garzeit}</td>
            ` : `
              <td>${subItem.vorbereitung}</td>
              <td>${subItem.temperatur}</td>
              <td>${subItem.dehydrierzeit}</td>
            `;
          }

          tbody.appendChild(row);
        });

      } else {
        // Standard ingredient entry (without group)
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

// Call for cooking charts
render_table(table_air_fry, "table_air_fry", 6);
render_table(table_max_crisp, "table_max_crisp", 5);
render_table(table_roast, "table_roast", 6);
render_table(table_bake, "table_bake", 6);
render_table(table_dehydration, "table_dehydration", 4);