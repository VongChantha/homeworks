// Make the class instance global so all click events can access it

LoadTableArea();

function LoadTableArea(){
    const MyStudent = new Student();
    let i=0;
    $.each(MyStudent.StudentList(),function(index , arrayItem){
        i++;
        // 1. Changed arrayItem.sex to arrayItem.gender
        // 2. Added classes (BtOnOff, BtDelete, BtEdit) and values to the buttons
        let newRow = `<tr>
                        <td align="center">${i}</td>
                        <td align="center">${arrayItem.student_code}</td>
                        <td><div class='d-flex justify-content-between'><div>${arrayItem.last_name} ${arrayItem.first_name}</div><div>[${arrayItem.gender}]</div></div></td>
                        <td align="center">${arrayItem.contact}</td>
                        <td align="center">
                            <button class="btn btn-sm btn-primary BtOnOff" value="${arrayItem.student_code}">On/Off</button>
                        </td>
                        <td align="center">
                            <button class="btn btn-sm btn-danger BtDelete" value="${arrayItem.student_code}">Delete</button>
                        </td>
                        <td align="center">
                            <button class="btn btn-sm btn-warning BtEdit" value="${arrayItem.student_code}">Edit</button>
                        </td>
                    </tr>`;
        $('#tableBody').append(newRow);
    });
}

// Fixed selectors to look for classes (.BtOnOff instead of BtOnOff)
$(document).on('click', '.BtOnOff', function(){
    let BtValue = $(this).val();
    $('#student_code').val(BtValue); // Pass the value to the modal so you know who to toggle
    $('#ModalOnOff').modal('show');
});

$(document).on('click', '.BtDelete', function(){
    let BtValue = $(this).val();
    $('#student_code').val(BtValue); // Pass the value to the modal so you know who to delete
    $('#ModalDelete').modal('show');
});

$(document).on('click', '.BtEdit', function(){
    let BtValue = $(this).val();
    $('#student_code').val(BtValue); 
    $('#ModalEdit').modal('show');
});

$(document).on('click', '#BtAdd', function(){
    // Clear out the form when adding a new student
    $('#student_code').val('');
    $('#first_name').val('');   
    $('#last_name').val('');
    $('#gender').val('');
    $('#contact').val('');
    $('#ModalEdit').modal('show');
});

$(document).on('click', '#BtSave', function(){
    let student_code = $('#student_code').val();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let gender = $('#gender').val();  
    let contact = $('#contact').val();

    if(student_code != "" && first_name != "" && last_name != "" && gender != "" && contact != ""){
        let newStudent = {
            student_code: student_code,
            first_name: first_name,
            last_name: last_name,    
            gender: gender,
            contact: contact
        };
        // Add the new student to the list
        MyStudent.AddStudent(newStudent);
        // Reload the table
        $('#tableBody').empty();
        LoadTableArea();
        // Close the modal
        $('#ModalEdit').modal('hide');
    }
}); 

$(document).on('click', '#BtDeleteConfirm', function(){
    let student_code = $('#student_code').val();  
    if(student_code != ""){
        // Delete the student from the list
        MyStudent.DeleteStudent(student_code);
        // Reload the table
        $('#tableBody').empty();
        LoadTableArea();
        // Close the modal
        $('#ModalDelete').modal('hide');
    }
});     

$(document).on('click', '#BtOnOffConfirm', function(){
    let student_code = $('#student_code').val();  
    if(student_code != ""){
        // Toggle the student's status in the list
        MyStudent.ToggleStudentStatus(student_code);
        // Reload the table
        $('#tableBody').empty();
        LoadTableArea();
        // Close the modal
        $('#ModalOnOff').modal('hide');
    }
});

$(document).on('click', '#BtEditConfirm', function(){
    let student_code = $('#student_code').val();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let gender = $('#gender').val();
    let contact = $('#contact').val();

    if(student_code != "" && first_name != "" && last_name != "" && gender != "" && contact != ""){
        let updatedStudent = {
            student_code: student_code,
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            contact: contact
        };
        // Update the student in the list
        MyStudent.UpdateStudent(student_code, updatedStudent);
        // Reload the table
        $('#tableBody').empty();
        LoadTableArea();
        // Close the modal
        $('#ModalEdit').modal('hide');
    }
});     
// Duplicate event listeners from here down have been removed!