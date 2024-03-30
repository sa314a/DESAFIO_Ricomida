(function () {
  //Tooltips
  const tooltipTriggerList = $('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  //Alerts
  const alertPlaceholder = $("#liveAlertPlaceholder");
  const alertTrigger = $("#liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.click(() => {
      alertPlaceholder.addClass("show");
      alertTrigger.attr("disabled", true);

      setTimeout(() => {
        alertPlaceholder.removeClass("show");
        alertTrigger.removeAttr("disabled");
      }, 3000);
    });
  }
  /* Change color titles */
  const titles = $("h2:contains('INGREDIENTES'), h2:contains('PREPARACIÓN')");
  titles.on("dblclick", function () {
    if ($(this).hasClass("text-danger")) {
      $(this).removeClass("text-danger");
    } else {
      $(this).addClass("text-danger");
    }
  });

  /* Toggle Card */
  const titleCard = $(".related-recipes__card-title");
  titleCard.click(function () {
    $(".related-recipes__card-text").toggle();
  });
})();
