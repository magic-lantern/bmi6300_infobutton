// from http://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript
function getHostname(href) {
  var location = document.createElement("a");
  location.href = href;
  if (location.host === "")
    location.href = location.href;
  return location.hostname;
  }

var models = {};
$(".problembutton,.labbutton").each(function(index, element) {
  var de = $(element).data("mainsearchcriteria_v_c");
  if (de) {
    models[de] = new infoButtonModel();
    if ($(element).hasClass("problembutton"))
      models[de].set("infobuttontype", "problem");
    if ($(element).hasClass("labbutton"))
      models[de].set("infobuttontype", "lab");
    models[de].set("mainsearchcriteria_v_c", de);
    models[de].set("mainsearchcriteria_v_dn", $(element).data("mainsearchcriteria_v_dn"));
    models[de].fetch({
      success: function(model, response, options){
        console.log("CODE ", de, " - Retrieved infobutton information. Response: ", response);
        $(element).removeClass('hidden');
        $('.alert-info').addClass('hidden')
      },
      error: function(model, response, options){
        console.log("CODE ", de, " - Could not retrieve infobutton information. Response: " , response);
        $('.alert-warning').removeClass('hidden');
      }
    });
  }
});

$(function(){
  $(".problembutton").click(function(e){
    var m = $(e.currentTarget).data("mainsearchcriteria_v_c");
    var tmpView = new infoView({
      model: models[m],
      template: "#problemViewTemplate"
    });
    tmpView.render();
    $('#problemViewModal').modal('show');
  });

  $(".labbutton").click(function(e){
    var m = $(e.currentTarget).data("mainsearchcriteria_v_c");
    var tmpView = new infoView({
      model: models[m],
      template: "#labViewTemplate"
    });
    tmpView.render();
    $('#labViewModal').modal('show');
  });
})
