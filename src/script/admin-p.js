document.addEventListener("DOMContentLoaded", function() {
    const adminUsernameElement = document.querySelector(".admin-username");
    const searchInput = document.getElementById("search");
    const sortLatestLoginButton = document.getElementById("sortLatestLogin");
    const sortRecipeCreatedButton = document.getElementById("sortRecipeCreated");
    const sortFollowersButton = document.getElementById("sortFollowers");
    const sortFlagButton = document.getElementById("sortFlag");

    let originalTableData = [
        { id: 1, email: "jhonny@gmail.com", username: "jhonny", recipe_created: 12, followers: 17, flag: false, latest_login: "07/20/2024 10:31am", account_created: "07/01/2024 12:14pm" },
        { id: 2, email: "anna_smith@gmail.com", username: "annasmith", recipe_created: 45, followers: 18, flag: true, latest_login: "07/21/2024 11:00am", account_created: "06/30/2024 09:20am" },
        { id: 3, email: "bobby@yahoo.com", username: "bobby123", recipe_created: 30, followers: 6, flag: true, latest_login: "07/22/2024 09:45am", account_created: "07/02/2024 14:30pm" },
        { id: 4, email: "chris.wilson@outlook.com", username: "chriswilson", recipe_created: 21, followers: 14, flag: false, latest_login: "07/23/2024 16:20pm", account_created: "07/03/2024 08:50am" },
        { id: 5, email: "diana_lee@gmail.com", username: "dianalee", recipe_created: 35, followers: 19, flag: false, latest_login: "07/24/2024 13:10pm", account_created: "07/04/2024 10:10am" },
        { id: 6, email: "ethan.jones@yahoo.com", username: "ethannjones", recipe_created: 27, followers: 11, flag: false, latest_login: "07/25/2024 12:00pm", account_created: "07/05/2024 15:15pm" },
        { id: 7, email: "fiona.brown@outlook.com", username: "fionabrown", recipe_created: 3, followers: 2, flag: false, latest_login: "07/26/2024 14:25pm", account_created: "07/06/2024 11:11am" },
        { id: 8, email: "george.miller@gmail.com", username: "georgemiller", recipe_created: 47, followers: 13, flag: false, latest_login: "07/27/2024 15:30pm", account_created: "07/07/2024 12:12pm" },
        { id: 9, email: "hannah.davis@yahoo.com", username: "hannahdavis", recipe_created: 23, followers: 1, flag: false, latest_login: "07/28/2024 17:00pm", account_created: "07/08/2024 09:09am" },
        { id: 10, email: "ian.roberts@outlook.com", username: "ianroberts", recipe_created: 2, followers: 9, flag: false, latest_login: "07/29/2024 10:10am", account_created: "07/09/2024 13:13pm" },
        { id: 11, email: "julia.kim@gmail.com", username: "juliakim", recipe_created: 37, followers: 11, flag: true, latest_login: "07/30/2024 16:40pm", account_created: "07/10/2024 14:14pm" },
        { id: 12, email: "kevin.clark@yahoo.com", username: "kevinclark", recipe_created: 28, followers: 12, flag: false, latest_login: "07/31/2024 11:11am", account_created: "07/11/2024 12:00pm" },
        { id: 13, email: "linda.martin@outlook.com", username: "lindamartin", recipe_created: 14, followers: 10, flag: false, latest_login: "08/01/2024 13:13pm", account_created: "07/12/2024 15:00pm" },
        { id: 14, email: "michael.walker@gmail.com", username: "michaelwalker", recipe_created: 20, followers: 15, flag: true, latest_login: "08/02/2024 14:14pm", account_created: "07/13/2024 11:30am" },
        { id: 15, email: "natalie.perez@yahoo.com", username: "natalieperez", recipe_created: 22, followers: 8, flag: true, latest_login: "08/03/2024 15:15pm", account_created: "07/14/2024 12:45pm" },
        { id: 16, email: "oliver.hall@outlook.com", username: "oliverhall", recipe_created: 18, followers: 5, flag: true, latest_login: "08/04/2024 16:00pm", account_created: "07/15/2024 14:00pm" },
        { id: 17, email: "paula.taylor@gmail.com", username: "paulataylor", recipe_created: 4, followers: 9, flag: false, latest_login: "08/05/2024 17:30pm", account_created: "07/16/2024 09:10am" },
        { id: 18, email: "quentin.anderson@yahoo.com", username: "quentinanderson", recipe_created: 7, followers: 7, flag: false, latest_login: "08/06/2024 18:00pm", account_created: "07/17/2024 11:20am" },
        { id: 19, email: "rachel.moore@outlook.com", username: "rachelmoore", recipe_created: 16, followers: 4, flag: false, latest_login: "08/07/2024 19:00pm", account_created: "07/18/2024 15:15pm" },
        { id: 20, email: "samuel.james@gmail.com", username: "samueljames", recipe_created: 10, followers: 3, flag: false, latest_login: "08/08/2024 20:00pm", account_created: "07/19/2024 13:13pm" }
    ];


        function updateAdminUsername() {
            const adminEmail = sessionStorage.getItem('adminEmail');
            let username;
            switch (adminEmail) {
                case 'admin1':
                    username = 'ADM1N';
                    break;
                case 'admin2':
                    username = 'A2MIN';
                    break;
                case 'admin3':
                    username = 'ADM3N';
                    break;
                default:
                    username = '4DMIN';
                    break;
            }
            adminUsernameElement.textContent = username;
        }
    

        
        function populateTable(data) {
            const tbody = document.querySelector("#userTable tbody");
            tbody.innerHTML = "";
            data.forEach((row) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${row.id}</td>
                    <td>${row.email}</td>
                    <td>${row.username}</td>
                    <td>${row.recipe_created}</td>
                    <td>${row.followers}</td>
                    <td><input type="checkbox" ${row.flag ? 'checked' : ''} disabled /></td>
                    <td>${row.latest_login}</td>
                    <td>${row.account_created}</td>
                    <td><button class="delete-button"><img src="https://img.icons8.com/material-sharp/24/1e1e1e/trash.png" alt="trash" /></button></td>
                `;
                tbody.appendChild(tr);
            });
            attachDeleteEventListeners();
        }
    
        function attachDeleteEventListeners() {
            document.querySelectorAll('.delete-button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const row = e.target.closest('tr');
                    const id = row.querySelector('td').textContent;
                    deleteRow(id);
                    row.remove();
                });
            });
        }
    
        function deleteRow(id) {
            originalTableData = originalTableData.filter(row => row.id != id);
            populateTable(originalTableData);
        }
    
        function sortTable(column, order) {
            const sortedData = [...originalTableData].sort((a, b) => {
                if (order === 'asc') {
                    return a[column] > b[column] ? 1 : -1;
                } else {
                    return a[column] < b[column] ? 1 : -1;
                }
            });
            populateTable(sortedData);
        }
    
        function searchTable(query) {
            const filteredData = originalTableData.filter(row => {
                return Object.values(row).some(value => 
                    value.toString().toLowerCase().includes(query.toLowerCase())
                );
            });
            populateTable(filteredData);
        }
    
        searchInput.addEventListener("input", (e) => {
            searchTable(e.target.value);
        });
    
        sortLatestLoginButton.addEventListener("click", () => {
            const sortedData = [...originalTableData].sort((a, b) => new Date(b.latest_login) - new Date(a.latest_login));
            populateTable(sortedData);
        });
    
        sortRecipeCreatedButton.addEventListener("click", () => {
            const sortedData = [...originalTableData].sort((a, b) => b.recipe_created - a.recipe_created);
            populateTable(sortedData);
        });
    
        sortFollowersButton.addEventListener("click", () => {
            const sortedData = [...originalTableData].sort((a, b) => b.followers - a.followers);
            populateTable(sortedData);
        });
    
        sortFlagButton.addEventListener("click", () => {
            const sortedData = [...originalTableData].sort((a, b) => (b.flag === a.flag ? 0 : b.flag ? 1 : -1));
            populateTable(sortedData);
        });
    
        updateAdminUsername();
        populateTable(originalTableData);
    });
    