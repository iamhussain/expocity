import $ from "../node_modules/jquery/dist/jquery.js";
import "../node_modules/bootstrap-fileinput/js/fileinput.js"
import "../node_modules/parsleyjs/dist/parsley.min.js"

$(document).ready(function () {
    console.log('jquery');
    $(".input-file").fileinput({
        allowedFileExtensions: ["jpg", "png", "gif", "pdf"],
        uploadUrl: "/file-upload-batch/2",
        showRemove: false,
        showZoom: false,
        showDrag: false,
        showRotate: false,
        dropZoneEnabled: false,
        showPreview: false,
        showUpload: false,
        browseIcon: '<img src="/assets/images/Uploading.svg" />',
        browseClass: "rounded-[50%] border-2 border-orange-100 w-[40px] h-[40px] flex p-1",
        browseLabel:"",
        showCancel: false
    });
    $('.form').parsley()


})