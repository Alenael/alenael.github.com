<script>
function doit1() {
var file = document.getElementById('fileid').files[0]; // selected file
  // you can't hard code the file -- user has to select it.
  var reader = new FileReader(); // new in HTML5
  reader.onload = function(e) { // this is the async function
    var elt = document.getElementById("tbldiv"); // table in this div
    var tblstr = "<table>"; // need to build whole table in string
    var recs = reader.result.split("\n"); // break file into records
    for (var irec=0; irec<recs.length; irec+=1) {
      var fields = recs[irec].split(","); // break record into fields
      tblstr += "<tr><td>" + fields[0] + "</td><td>" + fields[1] + "</td></tr>";
    }
    elt.innerHTML = tblstr + "</table>";
  } 
  reader.readAsText(file); // readAsText
}
</script>