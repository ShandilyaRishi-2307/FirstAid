function downloadPDF() {
    const link = document.createElement("a");
    link.href = "/ResourcePage/sample.pdf";
    link.download = "sample.pdf";
    link.click();
}