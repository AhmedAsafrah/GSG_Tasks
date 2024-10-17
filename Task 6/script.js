const show = () => {
  const tasks = [""];

  const list = () => {
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Task Completion");
    console.log("4. Edit Task");
    console.log("5. Delete Task");
    console.log("6. Search Task");
    console.log("7. Exit");
  };

  list();

  function menu() {
    const num = Number(prompt("Enter a choice (1-7): "));

    switch (num) {
      case 1:
        addTask();
        break;
      case 2:
        viewTasks();
        break;
      case 3:
        taskCompletion();
        break;
      case 4:
        editTask();
        break;
      case 5:
        deleteTask();
        break;
      case 6:
        searchTask();
        break;
      case 7:
        console.log("Goodbye");
        break;
      default:
        console.log("Invalid choice, please enter a valid choice");
        menu();
        break;
    }
  }

  menu();

  function addTask() {
    const task = prompt("Enter the task description: ");
    tasks.push(task + " - " + "[ Incomplete ]");
    console.log(`Task added: -${task}-`);
    menu();
  }

  function viewTasks() {
    console.log("All Tasks: ");
    for (let i = 1; i < tasks.length; i++) {
      console.log(i + ". " + tasks[i]);
    }
    menu();
  }

  function taskCompletion() {
    const taskNumber = Number(prompt("Enter the task number to toggle: "));

    if (taskNumber >= tasks.length || taskNumber <= 0) {
      console.log("Invalid task number entered");
      menu();
    }

    if (tasks[taskNumber].includes("Incomplete")) {
      tasks[taskNumber] = tasks[taskNumber].replace("Incomplete", "Completed");
      console.log(`Task -${taskNumber}- marked as completed`);
    } else {
      tasks[taskNumber] = tasks[taskNumber].replace("Completed", "Incomplete");
      console.log(`Task -${taskNumber}- marked as incomplete`);
    }
    menu();
  }

  function editTask() {
    if (tasks.length === 1) {
      console.log("No tasks to edit");
      menu();
    }
    const taskNumber = Number(prompt("Enter the task number to edit: "));
    if (taskNumber >= tasks.length || taskNumber <= 0) {
      console.log("Invalid task number entered");
      menu();
    } else {
      const newTask = prompt("Enter the new description of the task: ");
      tasks[taskNumber] = newTask + " - " + "[ Incomplete ]";
      console.log(`Task -${taskNumber}- updated to -${newTask}- `);
      menu();
    }
  }

  function deleteTask() {
    if (tasks.length === 1) {
      console.log("No tasks to delete");
      menu();
    }
    const taskNumber = Number(prompt("Enter the task number to delete: "));
    if (taskNumber >= tasks.length || taskNumber <= 0) {
      console.log("Invalid task number entered");
      menu();
    } else {
      tasks.splice(taskNumber, 1);
      console.log(`Task deleted -${taskNumber}- `);
      menu();
    }
  }

  function searchTask() {
    const toSearch = prompt("Enter the task desc to search: ");
    const searchResults = tasks.filter((task) =>
      task.toLowerCase().includes(toSearch.toLowerCase())
    );

    if (searchResults) {
      console.log("Search Results: ");
      searchResults.forEach((task) => console.log(task));
    } else {
      console.log("No results found");
    }
    menu();
  }
};
