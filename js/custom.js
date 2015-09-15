var REST_SERVICE_ROOT_URL = "http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=PROBLISTREV&mainSearchCriteria.v.c=38341003&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&knowledgeResponseType=application/json"
$.ajaxSetup({timeout:4000});

var infoButtonModel = Backbone.Model.extend({
  defaults: {
  },
  validate: function(attributes){
    // add this later
  },
  initialize: function(){
    // nothing needed for now
  },
  urlRoot: REST_SERVICE_ROOT_URL,
  sync: function(method, model, options) {
    // for now only override the read and create URLs
    switch(method) {
        case 'read':
          options.url = model.urlRoot;
          break;
        default:
          console.log("sync method - infoButtonModel model non read ", method);
          return;
    }
    return Backbone.sync(method, model, options);
  },
  parse: function(response) {
    // map server response to expected object attributes
    console.log("infoButtonModell - server JSON response ", response);
    //response.id = 1;
    return response;
  }
});

var test = new infoButtonModel();

test.fetch({
  success: function(model, response, options){
    console.log("Retrieved infobutton information: ", response);
  },
  error: function(model, response, options){
    console.log("Could not retrieve infobutton information: " , response);
  }
});

$(function(){
  $(".infobutton").click(function(){
    $("#infoModal").modal('show');
    var summary = test.get("feed")[0].entry[0].summary.value;
    var link = test.get("feed")[0].entry[0].link[0].href;
    $(".modal-content").html(summary);
    $(".modal-content").append("<p>For more information go to <a href=" + link + " target='_blank'>" + link + "<\a>");
  });
})
