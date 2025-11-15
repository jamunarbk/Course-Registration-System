function showCourses() {
    fetch("http://localhost:8080/courses")
        .then(response => response.json())
        .then(courses => {
            const dataTable = document.getElementById("coursetable");
            let rows = "";

            courses.forEach(course => {
                rows += `
                    <tr>
                        <td>${course.courseId}</td>
                        <td>${course.courseName}</td>
                        <td>${course.trainer}</td>
                        <td>${course.durationInMonths}</td>
                    </tr>
                `;
            });

            dataTable.innerHTML = rows;
        });
}

function showEnrolledStudents() {
    fetch("http://localhost:8080/courses/enrolled")
        .then(response => response.json())
        .then(students => {
            const dataTable = document.getElementById("enrolledtable");
            let rows = "";

            students.forEach(student => {
                rows += `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.emailId}</td>
                        <td>${student.courseName}</td>
                    </tr>
                `;
            });

            dataTable.innerHTML = rows;
        });
    }