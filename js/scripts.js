// generate excel style column naming 

function colName(n) {
    var ordA = 'A'.charCodeAt(0);
    var ordZ = 'Z'.charCodeAt(0);
    var len = ordZ - ordA + 1;
  
    var s = "";
    while(n >= 0) {
      s = String.fromCharCode(n % len + ordA) + s;
      n = Math.floor(n / len) - 1;
    }
  
    return s
  }
  
  //create an array to push 100 column names to for grid
  
  let colNames = []
  
  for (n = 0; n <= 100; n++) {
    if( n === 0 ) {
      colNames.push("");
    }
    colNames.push(colName(n));
  }
  
  //generate the table head and populate it with column names (letters)
  
  function generateTableHead(table) {
  
    let thead = table.createTHead();
    let row = thead.insertRow();
    
    for (let i = 0; i <= 100; i++) {
      let th = document.createElement("th");
      let text = document.createTextNode(colNames[i]);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  let table = document.querySelector("table");
  generateTableHead(table);
  
  
  //put rows into the table and generate cells! 
  
  function generateRows(table) {
    for (i = 1; i <= 100; i++) {
      var row = table.insertRow(i)
      var cell = row.insertCell(0);
      cell.innerHTML = [i];
  
      for (j = 1; j <= 100; j++) {
        let newCell = row.insertCell(j);
        //set ID to call later with math functions
        newCell.id = i + colNames[j]
        //create input field onclick
        var element = document.getElementById(newCell.id);
        element.addEventListener("onClick", editCell(element));
      }
    }
  }
  
  //Having this inside the for loop caused broken input fields
  generateRows(table)
  function editCell(element) {
      element.innerHTML = '<input type="text" />';
  }
  
  // this is where I got up to after around 4-5 hours
  
  // each cell has a unique ID that matches the format asked for in the sums later (=A1+A2) etc 
  // I decided to use an (old school) html table element because of the inherited styling 
  // and to later be able to reference it as an array to easily access the values
  
  // I enjoyed this challenge. It's nice to get back to basics with pure javascript! 