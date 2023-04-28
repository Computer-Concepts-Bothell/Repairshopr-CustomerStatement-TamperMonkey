// ==UserScript==
// @name         RS-Statment-OpenBalance
// @namespace    https://github.com/Pixelbays/Repairshopr-CustomerStatement-TamperMonkey
// @version      0.1
// @description  Adds a button to open the Statement PDF for a customer
// @author       HeruEdhel@Pixelbays
// @include      https://*.repairshopr.com/reports/open_balances*
// @updateURL    https://raw.githubusercontent.com/Pixelbays/Repairshopr-CustomerStatement-TamperMonkey/main/StatementReport.js
// @downloadURL  https://raw.githubusercontent.com/Pixelbays/Repairshopr-CustomerStatement-TamperMonkey/main/StatementReport.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=repairshopr.com
// @supportURL   https://github.com/Pixelbays/Repairshopr-CustomerStatement-TamperMonkey/issues
// ==/UserScript==
(function() {
    // Get all the rows in the table
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        // Get the 8th cell in this row (the ViewProfile cell)
        var viewProfileCell = rows[i].getElementsByTagName("td")[8];
        if (viewProfileCell) {
            // Get the ViewProfile link
            var viewProfileLink = viewProfileCell.getElementsByTagName("a")[0];
            if (viewProfileLink) {
                // Get the URL of the ViewProfile link and add some text to the end to make link to the PDF statment
                var printProfileUrl = viewProfileLink.href + "/statement.pdf";
                // Create a new cell for the PDF statement link
                var printProfileCell = rows[i].insertCell(9);
                // Create a new anchor tag for the PDF statement link cell
                var printProfileLink = document.createElement("a");
                printProfileLink.innerHTML = "PDF Statement";
                printProfileLink.href = printProfileUrl;
                printProfileLink.target = "_blank";
                printProfileLink.className = "btn btn-default btn-xs"; // Add the class to the link so that it matches the CSS at the other button.
                // Add the link to the PrintProfile cell
                printProfileCell.appendChild(printProfileLink);
            }
        }
    }
})();
