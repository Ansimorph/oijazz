function getDates() {
  const eventDiv = document.querySelectorAll(".js_dates-section");

  if (!eventDiv) {
    return;
  }

  // ID of the Google Spreadsheet
  const spreadsheetID = "1Axl-4qpNgs0c19vkN-ZydFWtaelxnbdEjQkeVazbHOM";

  // Make sure it is public or set to Anyone with link can view
  const url = `https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const entry = data.feed.entry;

      eventDiv.forEach(eventElement => {
        entry.forEach(element => {
          const li = document.createElement("li");
          li.innerHTML =
            '<span class="reading__date">' +
            element.gsx$datum.$t +
            '</span><a class="reading__venue" href="' +
            element.gsx$url.$t +
            '"><span class="reading__title">' +
            element.gsx$titel.$t +
            "</span>" +
            element.gsx$venue.$t +
            "</a>";
          // Column names are name, age, etc.

          eventElement.appendChild(li);
        });
      });
    });
}

getDates();
