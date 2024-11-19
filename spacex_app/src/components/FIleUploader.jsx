function FileUploader() {
  var output = [];
  var evt = [];
  var f = evt.target.files[0];
  if (f) {
    var r = new FileReader();
    r.onload = function (e) {
      var contents = e.target.result;
      document.write(
        "File Uploaded! <br />" +
          "name: " +
          f.name +
          "<br />" +
          "content: " +
          contents +
          "<br />" +
          "type: " +
          f.type +
          "<br />" +
          "size: " +
          f.size +
          " bytes <br />"
      );

      var lines = contents.split("\n"),
        output = [];
      for (var i = 0; i < lines.length; i++) {
        output.push(
          "<tr><td>" + lines[i].split(",").join("</td><td>") + "</td></tr>"
        );
      }
      output = "<table>" + output.join("") + "</table>";
      document.write(output);
    };
    r.readAsText(f);
    document.write(output);
  } else {
    alert("Failed to load file");
  }
  return (
    <>
      <input type="file" id="fileinput" />
    </>
  );
}
export default FileUploader;
// <script>

//   document.getElementById('fileinput').addEventListener('change', readSingleFile);
// </script>
