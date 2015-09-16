var REST_SERVICE_ROOT_URL = "http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=PROBLISTREV&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json";
/*
problems:
  Hypertensive disorder - 38341003
  Transformed migraine - 427419006
  Hypercholesterolemia - 13644009
sample of problem URLs
  http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=PROBLISTREV&mainSearchCriteria.v.c=38341003&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&mainSearchCriteria.v.dn=Hypertensive disorder&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json"
  http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=PROBLISTREV&mainSearchCriteria.v.c=427419006&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&mainSearchCriteria.v.dn=Transformed migraine&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
  http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=PROBLISTREV&mainSearchCriteria.v.c=13644009&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&mainSearchCriteria.v.dn=Hypercholesterolemia&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
*/
$.ajaxSetup({timeout:4000});

var infoButtonModel = Backbone.Model.extend({
  defaults: {
    'mainSearchCriteria.v.c' : '',
    'mainSearchCriteria.v.dn' : ''
  },
  validate: function(attributes){
    // add this later
  },
  initialize: function(){
    // nothing needed for now
  },
  urlRoot: REST_SERVICE_ROOT_URL,
  url : function() {
    return  this.urlRoot + "&mainSearchCriteria.v.c=" + this.attributes['mainSearchCriteria.v.c'] + 
      "&mainSearchCriteria.v.dn=" + this.attributes['mainSearchCriteria.v.dn'];
  },
  parse: function(response) {
    // map server response to expected object attributes
    console.log("infoButtonModel - server JSON response ", response);
    //response.id = 1;
    return response;
  }
});

var test = new infoButtonModel();
test.set("mainSearchCriteria.v.c", 38341003);
test.set("mainSearchCriteria.v.dn", 'Hypertensive disorder');
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
