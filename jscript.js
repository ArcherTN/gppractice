$(document).ready(function()
{
    var db = openDatabase('C:\Users\Tomasz.Pawlak\Documents\IntroToDatabases\first_select_exercise\stuffed_face.db', '1.0', 'GP_DB', 2 * 1024 * 1024);
   
    var Nname=document.getElementById('firstname');
    var sName=document.getElementById('surname');
    var dataField=document.getElementById('date');
    var timeField=document.getElementById('time');
    var notes=document.getElementById('notes');
    var form=document.getElementById('form');
    var submit=document.getElementById('submit');

    function saveRecord()
    {

        let userName=String(Nname.value);
        //if
        let userSurname=String(sName.value);
        let data=dataField.value;
        let time=timeField.value;
        let extraNotes=notes.value;
        console.log(userName);
        console.log(userSurname);
        console.log(data);
        console.log(time);
        
    }
    submit.onclick=saveRecord;
    
    // form.onsubmit=function(e)
    // {
    //     if (fName.value==='' || sName.value==='' || dateField.value==='' || timeField.value==='' )
    //     {
    //         e.preventDefault();
    //         para.textContent='You need fill both fields !'; // extra Field for communicate !
    
    //     }
    // }
});
