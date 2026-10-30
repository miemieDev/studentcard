const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("studentName");
const schoolInput = document.getElementById("schoolName");
const courseInput = document.getElementById("courseName");

const errorMessage = document.getElementById("errorMessage");

const studentCard = document.getElementById("cardResult");
const cardName = document.getElementById("cardName");
const cardSchool = document.getElementById("cardSchool");
const cardCourse = document.getElementById("cardCourse");

studentForm.addEventListener("submit", function (event) {

    
    event.preventDefault();

    // 8. Get the user's input and remove extra spaces
    const studentName = nameInput.value.trim();
    const schoolName = schoolInput.value.trim();
    const courseName = courseInput.value.trim();

    
    if (
        studentName === "" ||
        schoolName === "" ||
        courseName === ""
    ) {

        
        errorMessage.textContent =
            "Please fill in all fields.";

       
        studentCard.hidden = true;

        
        return;
    }

    
    errorMessage.textContent = "";

    
    cardName.textContent = studentName;

    
    cardSchool.textContent = schoolName;

    
    cardCourse.textContent = courseName;

    
    studentCard.hidden = false;

});