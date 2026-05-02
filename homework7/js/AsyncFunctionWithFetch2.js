hideSpinner();
function hideSpinner(){
    //Javascript
    // document.getElementById('loader').style.display = 'none';

    //JQuery
    $('#loader-container').hide();
}

function showSpinner(){
    //Javascript
    // document.getElementById('loader').style.display = 'block';

    //JQuery
    $('#loader-container').show();
}
async function loadTable() {
    showSpinner();
    const url = "http://api.tvmaze.com/shows/30/episodes";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        //const resData = await response.text();
        const resData = await response.json();
        //console.log(resData);
        LoadTableData(resData);
        hideSpinner();
    } catch (error) {
        console.error(error.message);
        setTimeout(hideSpinner, 3000);
    }
}
function LoadTableData(jsonData){
    //console.log(jsonData);
    $("#tableBody").empty();
    let i=0;
    // jQuery
    $.each(jsonData, function(index, arrayItem) {
        i++;
        let newRow = `<tr>
            <td class='text-center'>${i}</td>
            <td class='text-left'>${arrayItem.name}</td>
            <td class='text-center'>
                ${arrayItem.type}
            </td>
            <td class='text-center'>
                <img src='${arrayItem.image.medium}'>
            </td>
            <td class='text-center'>
                ${arrayItem.airdate}
            </td>
            <td class='text-center'>
                ${arrayItem.runtime}
            </td>
            <td class='text-center'>
                ${arrayItem.rating.average}
            </td>
        </tr>`;
        // Append the new row to the table body
        $("#tableBody").append(newRow);
    });
}
$(document).ready(function(){
    $("#BtShow").click(function(){
        loadTable();
    });
});
