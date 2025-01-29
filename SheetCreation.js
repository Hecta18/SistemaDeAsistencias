function createSheetsFromColumn() {
    const book = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1-IyUv2ZgE5acB-D9WHpNd-eMCgPGxocEYzXL6uNdk5o/edit?gid=1845079857#gid=1845079857");
    const sourceSheet = book.getSheetByName("miembros");
    const range = sourceSheet.getRange("C3:C35"); // Adjust column as needed
    const values = range.getValues(); // Get all values in the column
    let count = 0;
  
    values.every((row) => {
      const sheetName = row[0].toString().trim(); // Get the value from the row and trim it
      count = count + 1;
      if (sheetName.length != 6){
        SpreadsheetApp.getUi().alert("There are " + count + " people in the club");
        return false;
      } else {
        if (sheetName && !book.getSheetByName(sheetName)) {
        book.insertSheet(sheetName); // Create sheet if it doesn't already exist
        }
        return true;
      }
    });
  
    SpreadsheetApp.getUi().alert("Sheets created successfully!");
  }
  