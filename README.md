# Faculty Workload Management System (FWMS)

## Overview

The **Faculty Workload Management System (FWMS)** is a platform designed to streamline the management and distribution of faculty workloads across departments in an educational institution. The system provides administrators with tools to efficiently assign, track, and optimize faculty resources, while offering features for managing announcements, searching for faculty availability, and enhancing overall academic planning.

## Features

### 1. **Hero Section**
   - A welcoming interface that introduces users to the Faculty Workload Management System and offers an easy way to explore departments and functionalities of the platform.

### 2. **Manage Workloads**
   - Allows the easy assignment and tracking of faculty workloads across departments. Users can view data such as theory and practical classes taught by each faculty member.

### 3. **Find Available Faculty**
   - A quick search feature that helps administrators locate faculty members available during specific time slots or periods for any department.

### 4. **Department Announcements**
   - Real-time updates for department-wide announcements to ensure that faculty and staff stay informed about important information or changes.

### 5. **Streamlined Academic Planning**
   - A tool to optimize resource allocation and improve the efficiency of managing faculty workloads for smooth academic operations.

### 6. **Search by Faculty ID**
   - An intuitive search feature that enables administrators to find specific faculty members by their faculty ID and view their workload and availability.

### 7. **Find Idle Faculty**
   - A feature that allows users to search for faculty members who are idle during a specified time or period across departments, facilitating resource management.

### 8. **Free Teachers List**
   - Provides a table of all faculty members who are currently not assigned any tasks, along with details such as their name, faculty ID, and total workload. Administrators can quickly view and assign tasks to these faculty members.

### 9. **Post New Announcements**
   - A tool for department heads and administrators to post new announcements for the entire department. These announcements can be viewed in real-time by faculty and staff.

## Technologies Used

- **HTML5 / CSS3**: Markup and styling.
- **Bootstrap 5**: For responsive design and prebuilt components.
- **Node.js / Express.js**: Backend server for routing and handling requests.
- **EJS (Embedded JavaScript)**: Template engine used to dynamically render data on the server.
- **MongoDB**: For database management, storing faculty data, departments, and workload details.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fwms.git
   cd fwms
   ```

2. **Install dependencies**
   Make sure you have Node.js and MongoDB installed on your system.
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your MongoDB URI and any other necessary environment variables:
   ```env
   MONGODB_URI=your-mongo-db-uri
   PORT=3000
   ```

4. **Run the application**
   Start the server using the following command:
   ```bash
   npm start
   ```

5. **Access the application**
   Once the server is running, you can access the system at `http://localhost:3000`.

<img width="1463" alt="Screenshot 2024-09-19 at 1 13 30 AM" src="https://github.com/user-attachments/assets/78d1f696-cd27-49d7-86ff-ede5829838b5">
<img width="1470" alt="Screenshot 2024-09-19 at 1 14 17 AM" src="https://github.com/user-attachments/assets/541f2a02-daaa-4f9b-a0ae-d5f48f1a454b">
<img width="1470" alt="Screenshot 2024-09-19 at 1 14 59 AM" src="https://github.com/user-attachments/assets/dbdd06e4-9b9a-49fc-83ac-1239b40014dc">
<img width="1470" alt="Screenshot 2024-09-19 at 1 16 08 AM" src="https://github.com/user-attachments/assets/78bdcdef-a4fe-4411-9431-19dbc2bf96f4">
<img width="1470" alt="Screenshot 2024-09-19 at 1 18 34 AM" src="https://github.com/user-attachments/assets/00b4f302-ad49-46b9-ab2a-8661674a4e2b">
<img width="1470" alt="Screenshot 2024-09-19 at 1 18 54 AM" src="https://github.com/user-attachments/assets/5bd4ae84-8d2a-436b-85d2-5c7f45227878">
<img width="1470" alt="Screenshot 2024-09-19 at 1 22 08 AM" src="https://github.com/user-attachments/assets/058e500e-1b39-4ebb-8f6c-3fdf795cfdb3">



## Contributing

We welcome contributions to improve the system! Feel free to open issues and pull requests for bug fixes, features, and other improvements.

1. Fork the project.
2. Create your feature branch.
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes.
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch.
   ```bash
   git push origin feature/my-feature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to modify this readme based on your project's specific requirements.
