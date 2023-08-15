document .addEventListener("DOMContentLoaded", function(){
    const downloadButton = document.getElementById ("downloadButton");
    
    downloadButton.addEventListener("click", function(){
        const cvPath ="CV.pdf";
        const link = document.createElement ("a");
        link.href = cvPath;

        link.download = "CV_AryaP.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});