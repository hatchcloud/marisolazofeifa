const button = document.getElementById("download-pdf");
button.addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "./img/marisolazofeifa.pdf";
  link.download = "marisolazofeifa.pdf";
  link.click();
});