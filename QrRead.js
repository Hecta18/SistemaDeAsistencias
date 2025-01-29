function doGet(e) {
    try {
      const params = e.parameter; // Get parameters from  HTTP request
      const memberId = params.memberId; // Extract 'memberId' from URL
      const timestamp = new Date(); // Get current timestamp
  
      // Open  Google Sheet
      const sheet = SpreadsheetApp.getActiveSpreadsheet();
      
      // Find sheet for member
      const memberSheet = sheet.getSheetByName(memberId);
      if (!memberSheet) throw `La hoja del miembro de ID: ${memberId} no fue encontrada`; // Sheet not found for Member ID: ${memberId}
  
      // Append timestamp to member's sheet
      memberSheet.appendRow([timestamp]);
  
      return ContentService.createTextOutput("Participación registrada con éxito"); // "Attendance logged successfully."
    } catch (err) {
      return ContentService.createTextOutput(`Error: ${err}`);
    }
  }
  