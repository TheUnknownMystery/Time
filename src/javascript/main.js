//@create By - Sauhardo Sengupta
//launguage - javascript html and css

/*creating a dictonary or json array
structure...

id: A special id depending on the length of the array
TimeTableItem: contains a string
isDone: by default is set by false

*/

//Posting Time Table Here!
function PostTimeTableDetails() {

 const TimeTable = []
 //Time Table Inp Element........
 const TimeTableInput = document.getElementById("TimeTableInput").value

 //checking if the use has put anything in the input
 if (TimeTable) {

  TimeTable.unshift(
   {
    id: (TimeTable.length + 1),
    TimeTableItem: TimeTableInput,
    isDone: false
   }
  )

 }
 var TimeTableDisplayElement = document.getElementById("time_table_list_dropdown")

 for (var i = 0; i < TimeTable.length; i++) {

  var row =
   `<p id="ue9qfqn9ebg">

${TimeTable[i].TimeTableItem}
 
  </p>`
  TimeTableDisplayElement.innerHTML += row
 }
}