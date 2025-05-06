function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// CUSTOMER
function saveCustomer(event) {
  event.preventDefault();
  const data = {
    name: cName.value,
    ticket: cTicket.value,
    payment: cPayment.value,
    address: cAddress.value,
    phone: cPhone.value
  };
  let customers = JSON.parse(localStorage.getItem('customers')) || [];
  customers.push(data);
  localStorage.setItem('customers', JSON.stringify(customers));
  showCustomerList();
  event.target.reset();
}

function showCustomerList() {
  let customers = JSON.parse(localStorage.getItem('customers')) || [];
  customerList.innerHTML = customers.map(c =>
    `<li>${c.name} - ${c.ticket} - ${c.payment} - ${c.address} - ${c.phone}</li>`
  ).join('');
}

// OFFICE
function saveOffice(event) {
  event.preventDefault();
  const data = {
    title: oTitle.value,
    amount: oAmount.value,
    date: oDate.value
  };
  let office = JSON.parse(localStorage.getItem('office')) || [];
  office.push(data);
  localStorage.setItem('office', JSON.stringify(office));
  showOfficeList();
  event.target.reset();
}

function showOfficeList() {
  let office = JSON.parse(localStorage.getItem('office')) || [];
  officeList.innerHTML = office.map(o =>
    `<li>${o.title} - ${o.amount} - ${o.date}</li>`
  ).join('');
}

// AGENT
function saveAgent(event) {
  event.preventDefault();
  const data = {
    name: aName.value,
    ticket: aTicket.value,
    payment: aPayment.value
  };
  let agents = JSON.parse(localStorage.getItem('agents')) || [];
  agents.push(data);
  localStorage.setItem('agents', JSON.stringify(agents));
  showAgentList();
  event.target.reset();
}

function showAgentList() {
  let agents = JSON.parse(localStorage.getItem('agents')) || [];
  agentList.innerHTML = agents.map(a =>
    `<li>${a.name} - ${a.ticket} - ${a.payment}</li>`
  ).join('');
}

// Init
showTab('customer');
showCustomerList();
showOfficeList();
showAgentList();
