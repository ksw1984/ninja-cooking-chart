/**
 * Renders a dynamic HTML table from a structured data array.
 * 
 * Supports:
 *  - Categories with a header row
 *  - Normal rows
 *  - Grouped rows (multiple entries under the same "ingredient" with rowspan)
 *  - Tables with 4, 5, or 6 columns
 * 
 * Column layouts:
 *  - 6 columns: ingredient, amount, preparation, oil, temperature, cook_time
 *  - 5 columns: ingredient, amount, preparation, oil, cook_time
 *  - 4 columns: ingredient, preparation, temperature, dehydrate_time
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
 *       { ingredient: "Item 1", amount: "500 g", preparation: "Keine", oil: "Kein Öl", temperature: "180°C", cook_time: "10 min" },
 *       {
 *         ingredient: "Grouped Item",
 *         gruppe: [
 *           { amount: "500 g", preparation: "Keine", oil: "Kein Öl", temperature: "180°C", cook_time: "10 min" },
 *           { amount: "1 kg", preparation: "Keine", oil: "Kein Öl", temperature: "180°C", cook_time: "20 min" }
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
              <td rowspan="${item.gruppe.length}">${item.ingredient}</td>
              ${colCount === 6 ? `
                <td>${subItem.amount}</td>
                <td>${subItem.preparation}</td>
                <td>${subItem.oil}</td>
                <td>${subItem.temperature}</td>
                <td>${subItem.cook_time}</td>
              ` : colCount === 5 ? `
                <td>${subItem.amount}</td>
                <td>${subItem.preparation}</td>
                <td>${subItem.oil}</td>
                <td>${subItem.cook_time}</td>
              ` : `
                <td>${subItem.preparation}</td>
                <td>${subItem.temperature}</td>
                <td>${subItem.dehydrate_time}</td>
              `}
            `;
          } else {
            // additional rows withut ingredient column
            row.innerHTML = colCount === 6 ? `
              <td>${subItem.amount}</td>
              <td>${subItem.preparation}</td>
              <td>${subItem.oil}</td>
              <td>${subItem.temperature}</td>
              <td>${subItem.cook_time}</td>
            ` : colCount === 5 ? `
              <td>${subItem.amount}</td>
              <td>${subItem.preparation}</td>
              <td>${subItem.oil}</td>
              <td>${subItem.cook_time}</td>
            ` : `
              <td>${subItem.preparation}</td>
              <td>${subItem.temperature}</td>
              <td>${subItem.dehydrate_time}</td>
            `;
          }

          tbody.appendChild(row);
        });

      } else {
        // Standard ingredient entry (without group)
        const row = document.createElement("tr");
        if (colCount === 6) {
          row.innerHTML = `
            <td>${item.ingredient}</td>
            <td>${item.amount}</td>
            <td>${item.preparation}</td>
            <td>${item.oil}</td>
            <td>${item.temperature}</td>
            <td>${item.cook_time}</td>
          `;
        } else if (colCount === 5) {
          row.innerHTML = `
            <td>${item.ingredient}</td>
            <td>${item.amount}</td>
            <td>${item.preparation}</td>
            <td>${item.oil}</td>
            <td>${item.cook_time}</td>
          `;
        } else if (colCount === 4) {
          row.innerHTML = `
            <td>${item.ingredient}</td>
            <td>${item.preparation}</td>
            <td>${item.temperature}</td>
            <td>${item.dehydrate_time}</td>
          `;
        }
        tbody.appendChild(row);
      }
    });
  });
}