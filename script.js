// Add row function with edit/delete buttons
function addRow(table, values) {
  let newRow = table.insertRow();
  values.forEach(val => {
    newRow.insertCell().innerText = val;
  });

  // Actions cell
  let actionCell = newRow.insertCell();
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "action-btn edit-btn";
  editBtn.onclick = () => editRow(newRow, table);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "action-btn delete-btn";
  deleteBtn.onclick = () => table.deleteRow(newRow.rowIndex);

  actionCell.appendChild(editBtn);
  actionCell.appendChild(deleteBtn);
}

// Edit row
function editRow(row, table) {
  let cells = row.cells;
  for (let i = 0; i < cells.length - 1; i++) {
    let input = prompt(`Edit value:`, cells[i].innerText);
    if (input !== null) cells[i].innerText = input;
  }
}

// Donor Form
const donorForm = document.getElementById("donorForm");
const donorTable = document.getElementById("donorTable");
const donorMsg = document.getElementById("donorMsg");

donorForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let values = [
    document.getElementById("donorName").value,
    document.getElementById("donorAge").value,
    document.getElementById("donorBloodGroup").value,
    document.getElementById("donorCity").value,
    document.getElementById("donorContact").value
  ];
  addRow(donorTable, values);
  donorMsg.innerText = `Thank you, ${values[0]}, for registering as a Donor! ❤️`;
  donorForm.reset();
  setTimeout(() => donorMsg.innerText = "", 4000);
});

// Receiver Form
const receiverForm = document.getElementById("receiverForm");
const receiverTable = document.getElementById("receiverTable");
const receiverMsg = document.getElementById("receiverMsg");

receiverForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let values = [
    document.getElementById("receiverName").value,
    document.getElementById("receiverAge").value,
    document.getElementById("receiverBloodGroup").value,
    document.getElementById("receiverCity").value,
    document.getElementById("receiverContact").value
  ];
  addRow(receiverTable, values);
  receiverMsg.innerText = `Thank you, ${values[0]}, you are registered as Receiver! 🙏`;
  receiverForm.reset();
  setTimeout(() => receiverMsg.innerText = "", 4000);
});
