const employeesData = [
    {
      "id": 1,
      "name": "John Doe",
      "gender": "Male",
      "department": "HR",
      "salary": 50000
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "gender": "Female",
      "department": "Engineering",
      "salary": 60000
    },
    {
        "id": 64,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Shoshanna Standingford",
        "gender": "male",
        "department": "operations",
        "salary": 51000
      },
      {
        "id": 65,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Courtenay Risborough",
        "gender": "female",
        "department": "hr",
        "salary": 35000
      },
      {
        "id": 66,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Jemmy Bensley",
        "gender": "male",
        "department": "operations",
        "salary": 50000
      },
      {
        "id": 67,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Deerdre Allridge",
        "gender": "female",
        "department": "finance",
        "salary": 35000
      },
      {
        "id": 68,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Magdalena Santoro",
        "gender": "male",
        "department": "operations",
        "salary": 35000
      },
      {
        "id": 69,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Dory Thrustle",
        "gender": "male",
        "department": "marketing",
        "salary": 42000
      },
      {
        "id": 70,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Dyann Engeham",
        "gender": "male",
        "department": "hr",
        "salary": 70000
      },
      {
        "id": 71,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Annabell Jeyes",
        "gender": "others",
        "department": "finance",
        "salary": 36000
      },
      {
        "id": 72,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Alexine Joreau",
        "gender": "female",
        "department": "operations",
        "salary": 45000
      },
      {
        "id": 73,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Joletta Dyerson",
        "gender": "male",
        "department": "marketing",
        "salary": 50000
      },
      {
        "id": 74,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Renault Sailes",
        "gender": "female",
        "department": "operations",
        "salary": 54000
      },
      {
        "id": 75,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Kathryne Moryson",
        "gender": "male",
        "department": "operations",
        "salary": 30000
      },
      {
        "id": 76,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Flin Redhead",
        "gender": "others",
        "department": "finance",
        "salary": 42000
      },
      {
        "id": 77,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Natalina MacCroary",
        "gender": "male",
        "department": "marketing",
        "salary": 50000
      },
      {
        "id": 78,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Miquela Aireton",
        "gender": "female",
        "department": "operations",
        "salary": 40000
      },
      {
        "id": 79,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Birgit Jadczak",
        "gender": "male",
        "department": "operations",
        "salary": 42000
      },
      {
        "id": 80,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Nil Fremantle",
        "gender": "male",
        "department": "engineering",
        "salary": 60000
      },
      {
        "id": 81,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Belinda Bortol",
        "gender": "others",
        "department": "engineering",
        "salary": 60000
      },
      {
        "id": 82,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Stacy McCrory",
        "gender": "male",
        "department": "hr",
        "salary": 45000
      },
      {
        "id": 83,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Adelbert Witten",
        "gender": "female",
        "department": "engineering",
        "salary": 54000
      },
      {
        "id": 84,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Muriel Fitzpayn",
        "gender": "others",
        "department": "operations",
        "salary": 25000
      },
      {
        "id": 85,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Winifred McNalley",
        "gender": "male",
        "department": "engineering",
        "salary": 60000
      },
      {
        "id": 86,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Gibby Brabbins",
        "gender": "female",
        "department": "operations",
        "salary": 70000
      },
      {
        "id": 87,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Eunice Emanson",
        "gender": "female",
        "department": "engineering",
        "salary": 60000
      },
      {
        "id": 88,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Tobi Pizer",
        "gender": "female",
        "department": "operations",
        "salary": 30000
      },
      {
        "id": 89,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Nadiya Rohfsen",
        "gender": "male",
        "department": "engineering",
        "salary": 40000
      },
      {
        "id": 90,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Shannon Cardew",
        "gender": "male",
        "department": "marketing",
        "salary": 27000
      },
      {
        "id": 91,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Lorettalorna Rosenfarb",
        "gender": "female",
        "department": "operations",
        "salary": 25000
      },
      {
        "id": 92,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Rina Nasey",
        "gender": "female",
        "department": "engineering",
        "salary": 27000
      },
      {
        "id": 93,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Pammie McRannell",
        "gender": "female",
        "department": "operations",
        "salary": 50000
      },
      {
        "id": 94,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Shannen Erwin",
        "gender": "male",
        "department": "engineering",
        "salary": 27000
      },
      {
        "id": 95,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Nariko Cerith",
        "gender": "male",
        "department": "marketing",
        "salary": 51000
      },
      {
        "id": 96,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Claudia Vasyukhin",
        "gender": "female",
        "department": "hr",
        "salary": 25000
      },
      {
        "id": 1,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Donald Surgen",
        "gender": "female",
        "department": "engineering",
        "salary": 57000
      },
      {
        "id": 1,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Donald Surgen",
        "gender": "female",
        "department": "engineering",
        "salary": 57000
      },
      {
        "id": 2,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Brynn Wildblood",
        "gender": "female",
        "department": "finance",
        "salary": 27000
      },
      {
        "id": 3,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Etta McGairl",
        "gender": "male",
        "department": "operations",
        "salary": 42000
      },
      {
        "id": 4,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Alexandros Renihan",
        "gender": "female",
        "department": "engineering",
        "salary": 40000
      },
      {
        "id": 5,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Geri Maudlen",
        "gender": "others",
        "department": "operations",
        "salary": 40000
      },
      {
        "id": 6,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Grazia Pilkington",
        "gender": "others",
        "department": "operations",
        "salary": 50000
      },
      {
        "id": 7,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Norry Bodicum",
        "gender": "others",
        "department": "operations",
        "salary": 30000
      },
      {
        "id": 8,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Athena Broadey",
        "gender": "male",
        "department": "marketing",
        "salary": 66000
      },
      {
        "id": 9,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Luisa Artois",
        "gender": "male",
        "department": "engineering",
        "salary": 45000
      },
      {
        "id": 10,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Cookie Gimber",
        "gender": "male",
        "department": "finance",
        "salary": 25000
      },
      {
        "id": 11,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Aridatha Boylund",
        "gender": "female",
        "department": "engineering",
        "salary": 40000
      },
      {
        "id": 12,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Christiana Withringten",
        "gender": "male",
        "department": "marketing",
        "salary": 42000
      },
      {
        "id": 13,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Clotilda Gleader",
        "gender": "female",
        "department": "marketing",
        "salary": 42000
      },
      {
        "id": 14,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Marlane Dabner",
        "gender": "male",
        "department": "engineering",
        "salary": 50000
      },
      {
        "id": 15,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Casar Morais",
        "gender": "male",
        "department": "operations",
        "salary": 63000
      },
      {
        "id": 16,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Pris Emms",
        "gender": "others",
        "department": "operations",
        "salary": 66000
      },
      {
        "id": 17,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Inglis Easdon",
        "gender": "others",
        "department": "operations",
        "salary": 45000
      },
      {
        "id": 18,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Tamera Bartaletti",
        "gender": "male",
        "department": "operations",
        "salary": 60000
      },
      {
        "id": 19,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Grata Channon",
        "gender": "others",
        "department": "engineering",
        "salary": 27000
      },
      {
        "id": 1,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Donald Surgen",
        "gender": "female",
        "department": "engineering",
        "salary": 57000
      },
      {
        "id": 2,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Brynn Wildblood",
        "gender": "female",
        "department": "finance",
        "salary": 27000
      },
      {
        "id": 3,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Etta McGairl",
        "gender": "male",
        "department": "operations",
        "salary": 42000
      },
      {
        "id": 4,
        "image": "https://i.imgur.com/9xEcfJj.jpg",
        "name": "Alexandros Renihan",
        "gender": "female",
        "department": "engineering",
        "salary": 40000
      },
     
      
      
  ];

const perPage = 10;
let currentPage = 1;
let filteredEmployees = [];

function filterAndSortEmployees() {
  const departmentFilter = document.getElementById("filter-department").value;
  const genderFilter = document.getElementById("filter-gender").value;
  const sort = document.getElementById("sort-salary").value;

  let filteredData = employeesData;

  if (departmentFilter) {
    filteredData = filteredData.filter(employee => employee.department === departmentFilter);
  }

  if (genderFilter) {
    filteredData = filteredData.filter(employee => employee.gender === genderFilter);
  }

  if (sort === "asc") {
    filteredData.sort((a, b) => a.salary - b.salary);
  } else if (sort === "desc") {
    filteredData.sort((a, b) => b.salary - a.salary);
  }

  filteredEmployees = filteredData;
  updateTable();
}

function updateTable() {
  const employeesBody = document.getElementById("employees-body");
  employeesBody.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedEmployees = filteredEmployees.slice(start, end);

  paginatedEmployees.forEach((employee, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${start + index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.gender}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
    `;
    employeesBody.appendChild(row);
  });

  updatePaginationButtons();
}

function updatePaginationButtons() {
  const prevBtn = document.getElementById("prev-page");
  const nextBtn = document.getElementById("next-page");

  if (currentPage === 1) {
    prevBtn.classList.add("disabled");
    prevBtn.disabled = true;
  } else {
    prevBtn.classList.remove("disabled");
    prevBtn.disabled = false;
  }

  const totalPages = Math.ceil(filteredEmployees.length / perPage);

  if (currentPage === totalPages || filteredEmployees.length === 0) {
    nextBtn.classList.add("disabled");
    nextBtn.disabled = true;
  } else {
    nextBtn.classList.remove("disabled");
    nextBtn.disabled = false;
  }
}

document.getElementById("filter-department").addEventListener("change", filterAndSortEmployees);
document.getElementById("filter-gender").addEventListener("change", filterAndSortEmployees);
document.getElementById("sort-salary").addEventListener("change", filterAndSortEmployees);
document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateTable();
  }
});
document.getElementById("next-page").addEventListener("click", () => {
  const totalPages = Math.ceil(filteredEmployees.length / perPage);
  if (currentPage < totalPages) {
    currentPage++;
    updateTable();
  }
});

document.getElementById("search-button").addEventListener("click", () => {
  const searchInput = document.getElementById("search-input").value.trim().toLowerCase();
  filteredEmployees = employeesData.filter(employee => employee.name.toLowerCase().includes(searchInput));
  currentPage = 1;
  updateTable();
});

filterAndSortEmployees();