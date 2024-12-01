document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
  
    if (taskValue !== "") {
      const li = document.createElement("li");
      li.innerHTML = `<span>${taskValue}</span><button class="deleteBtn">Delete</button>`;
      document.getElementById("todoList").appendChild(li);
  
      li.querySelector(".deleteBtn").addEventListener("click", function() {
        li.remove();
      });
  
      taskInput.value = "";
    }
  });
  
  document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      document.getElementById("addTaskBtn").click();
    }
  });
  