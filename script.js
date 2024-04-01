let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let count= 3;

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


function addrow(){
  let id = document.getElementById("id");
  let name = document.getElementById("name");
  let company = document.getElementById("company");
  
  let rowX = document.createElement('tr');
  
  let rowX_data_1 = document.createElement('td');
  let rowX_data_3 = document.createElement('td');
  let rowX_data_2 = document.createElement('td');

  rowX_data_1.innerHTML = id.value;
  rowX_data_2.innerHTML = name.value;
  rowX_data_3.innerHTML = company.value;
  
  
  
  if(id.value==""||name.value ==""){
    alert("please fill in the correct details");
  }
  else{
    rowX.appendChild(rowX_data_1);
    rowX.appendChild(rowX_data_2);
    rowX.appendChild(rowX_data_3);
    tbody.appendChild(rowX);
    rowX.setAttribute("id","row"+count);
    count++;
  }
  
  id.value="";
  name.value="";
  company.value="";
  
  let tableData = table.getInnerHTML();
  localStorage.setItem('newTable',tableData);


  
}

function remove(){
  let removId = document.getElementById("remid").value;
  let removerow= document.querySelector("tr:nth-child(2)");
  
  if(removId==""){
    alert("input id");
    let removBorder = document.getElementById(remid).style.borderColor = "red";

  }
  else{  
  removerow.parentElement.removeChild(removerow);
  document.getElementById("remid").value="";
  }
  
}

function edit(){
   let removId =document.getElementById("remidRow").value;
   let parent = document.getElementsByTagName("td")[removId];
   let change = document.getElementById("edit").value; 
  
  parent.lastChild.innerHTML = change;
  document.getElementById("edit").value =""; 
  document.getElementById("remid").value="";
  
  document.getElementsByTagName("td")[removId].innerHTML = change;
}

function edit(){
   let removId =document.getElementById("remidRow").value;
   let parent = document.getElementsByTagName("td")[removId];
   let change = document.getElementById("edit").value; 
  
  parent.lastChild.innerHTML = change;
  document.getElementById("edit").value =""; 
  document.getElementById("remid").value="";
  
  document.getElementsByTagName("td")[removId].innerHTML = change;
}

function reveal(){
  var hiddenlist = document.querySelectorAll('.hide');
  
    for(let i = 0; hiddenlist.length > i; i++){
    hiddenlist[i].classList.remove('hide');
  
  
  }
  
}

