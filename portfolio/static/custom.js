// Take action if the request on URI has internal link '#'
function internal_link() {
    var urlArray = window.location.href.split('#');
    if (urlArray.length === 2 && urlArray[1] !== "") {
        console.log(urlArray[1]);
        switch (urlArray[1]) {
            case "intro":           $('#tab-intro-content').show(); break;
            case "publications":    $('#tab-publications-content').show(); break;
            case "academic-awards": $('#tab-academic-awards-content').show(); break;
            case "achievements":    $('#tab-achievements-content').show(); break;
            case "programming":     $('#tab-programming-content').show(); break;
            case "leadership":      $('#tab-leadership-content').show(); break;
            case "participations":  $('#tab-participations-content').show(); break;
            case "courses":         $('#tab-courses-content').show(); break;
            case "language":        $('#tab-language-content').show(); break;
            case "links":           $('#tab-links-content').show(); break;
            case "medium":          $('#tab-medium-content').show(); break;
            case "contact":         $('#tab-contact-content').show(); break;
            default: break;
        }
    }
}

function sizing(windowWidth) {
    if(windowWidth <= 480){ // small devices
        $('.allshow').hide();
        $('.noshow').show();
        $('.expandshow').show();
        $('.collapseshow').hide();
    } else {
        $('.allshow').show();
        $('.noshow').hide();
        $('.expandshow').hide();
        $('.collapseshow').hide();
    }
}

function scrollFunction(btn) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
    var windowWidth = $(window).width();
    $(window).resize(function(){
        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() !== windowWidth) {
            windowWidth = $(window).width();
            sizing(windowWidth);
        }
    });
    sizing(windowWidth);
    internal_link();

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction(document.getElementById("btnToTop"))
    };

    $('#courseModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal

        // Extract info from data-* attributes
        var header = button.data('header');
        var title = button.data('title');
        var credit = button.data('credit');
        var prereq = button.data('prereq');
        var hours = button.data('hours');
        var content = button.data('content');

        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.course-modal-header').text(header);
        modal.find('.course-modal-title').text(title);
        modal.find('.course-modal-credit').text('Credits: ' + credit);
        modal.find('.course-modal-prereq').text('Prerequisites: ' + prereq);
        modal.find('.course-modal-hours').text('Hours: ' + hours);
        modal.find('.course-modal-content').html(content)
    });

});

