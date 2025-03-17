## 🎯 **Objective**  
Build a **Task Management System** using **React** that displays a list of tasks, allows users to add new tasks, and renders each task dynamically.  

---  

## 📌 **Expected Functionality & Output**  

### 🔹 **Task List**  
- A page should display a task list containing tasks with their **title, priority, and due date**.  
- Example UI output:  
  ```  
  Task List  
  ----------------------  
  📌 Complete Assignment - High - Due: 2025-03-20  
  📌 Grocery Shopping - Medium - Due: 2025-03-22  
  📌 Call the Bank - Low - Due: 2025-03-25  
  ```  
- The list should dynamically render based on available tasks.  

---  

### 🔹 **Task Item**  
- Each task should be displayed as a separate entry with:  
  - **Task Title**  
  - **Priority Level (High, Medium, Low)**  
  - **Due Date**  

- Example individual output:  
  ```  
  📌 Grocery Shopping - Medium - Due: 2025-03-22  
  ```  

---  

### 🔹 **Task Form**  
- The page should have a form allowing users to add **new tasks** to the task list.  
- The form should contain input fields for:  
  - Task Title  
  - Priority Level (Dropdown: High, Medium, Low)  
  - Due Date  
- A **Submit Button** should be present.  
- On clicking submit, the inputted values should be captured.  

---  

## 📌 **Technical Constraints**  
- The project must be built using **React components**.  
- Components should be structured properly.  
- Styling should be applied for **better readability and UI consistency**.  

---

### **Instructions for Students**  

- Complete TaskForm.jsx by adding:
    - An input field for the task title.
    - A dropdown for selecting priority (High, Medium, Low).
    - An input field for the due date.
    - A Submit button to add the task.
- Ensure tasks are displayed in the TaskList component.
- Use the appropriate method in TaskList.jsx to render each task dynamically.
