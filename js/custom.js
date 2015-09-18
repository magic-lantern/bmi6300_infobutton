var REST_SERVICE_ROOT_URL = "http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=PROBLISTREV&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json";
/*
problems:
  Hypertensive disorder - SNOMEDCT 38341003 
  Transformed migraine - SNOMEDCT 427419006
  Hypercholesterolemia - SNOMEDCT 13644009
  Bacterial pneumonia - SNOMEDCT 53084003
sample of problem URLs
  http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=PROBLISTREV&mainSearchCriteria.v.c=38341003&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&mainSearchCriteria.v.dn=Hypertensive disorder&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
  http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=PROBLISTREV&mainSearchCriteria.v.c=427419006&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&mainSearchCriteria.v.dn=Transformed migraine&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
  http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=PROBLISTREV&mainSearchCriteria.v.c=13644009&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&mainSearchCriteria.v.dn=Hypercholesterolemia&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
medications:
  for hypertension
    lisinopril (Prinivil, Zestril) - RXNORM 197884 Lisinopril 40 MG Oral Tablet
    Diltiazem (Cardizem, Tiazac)) - RXNORM 830877 24 HR Diltiazem Hydrochloride 180 MG Extended Release Oral Tablet
  for migraine
    Depakote (Divalproex sodium) - RXNORM 1099786 Divalproex Sodium 300 MG
  for cholesterol
    Simvastatin (Zocor) - RXNORM 565109 Simvastatin 40 MG [Zocor]
  for bacterial pneumonia
    Levofloxacin (Levaquin) - RXNORM 211816 Levofloxacin 500 MG Oral Tablet
sample of medication URLs
    http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=MLREV&mainSearchCriteria.v.c=197884&mainSearchCriteria.v.cs=2.16.840.1.113883.6.88&mainSearchCriteria.v.dn=Lisinopril&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
    http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=MLREV&mainSearchCriteria.v.c=830877&mainSearchCriteria.v.cs=2.16.840.1.113883.6.88&mainSearchCriteria.v.dn=Diltiazem&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
    http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=MLREV&mainSearchCriteria.v.c=1099786&mainSearchCriteria.v.cs=2.16.840.1.113883.6.88&mainSearchCriteria.v.dn=Depakote&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
    http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=MLREV&mainSearchCriteria.v.c=565109&mainSearchCriteria.v.cs=2.16.840.1.113883.6.88&mainSearchCriteria.v.dn=Zocor&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=text/xml
    http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=MLREV&mainSearchCriteria.v.c=211816&mainSearchCriteria.v.cs=2.16.840.1.113883.6.88&mainSearchCriteria.v.dn=Levaquin&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
lab tests:
  Triglycerides, Serum or Plasma - LOINC 2571-8
  Stat Gram Stain - LOINC 664-3
sample of lab test URLS:  
  http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=LABRREV&mainSearchCriteria.v.c=2571-8&mainSearchCriteria.v.cs=2.16.840.1.113883.6.1&mainSearchCriteria.v.dn=Triglycerides, Serum or Plasma&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
  http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=LABRREV&mainSearchCriteria.v.c=664-3&mainSearchCriteria.v.cs=2.16.840.1.113883.6.1&mainSearchCriteria.v.dn=Stat Gram Stain&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json
*/
$.ajaxSetup({timeout:8000});

var infoButtonModel = Backbone.Model.extend({
  defaults: {
    'mainsearchcriteria_v_c' : '',   //toLower() and replace . with _ for easier use
    'mainsearchcriteria_v_dn' : ''   //toLower() and replace . with _ for easier use
  },
  validate: function(attributes){
    // add this later
  },
  initialize: function(){
    // nothing needed for now
  },
  urlRoot: REST_SERVICE_ROOT_URL,
  url : function() {
    return  this.urlRoot + "&mainSearchCriteria.v.c=" + this.attributes.mainsearchcriteria_v_c + 
      "&mainSearchCriteria.v.dn=" + this.attributes.mainsearchcriteria_v_dn;
  },
  parse: function(response) {
    // map server response to expected object attributes
    console.log("infoButtonModel - server JSON response ", response);
    //response.id = 1;
    return response;
  }
});

var problemView = Backbone.View.extend({
  el: '#infoModal',
  template: _.template( $('#problemViewTemplate').html() ),
  initalize: function() {
    console.log("64 - called initalize");
    this.render();
  },
  render : function() {
    console.log("68 - called render");
    console.log("this.model.attributes: ", this.model.attributes);
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }
});

// from http://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript
function getHostname(href) {
  var location = document.createElement("a");
  location.href = href;
  if (location.host == "")
    location.href = location.href;
  return location.hostname;
  }

var models = {};
$(".problembutton").each(function(index, element) {
  var de = $(element).data("mainsearchcriteria_v_c");
  if (de) {
    models[de] = new infoButtonModel();
    models[de].set("mainsearchcriteria_v_c", de);
    models[de].set("mainsearchcriteria_v_dn", $(element).data("mainsearchcriteria_v_dn"));
    models[de].fetch({
      success: function(model, response, options){
        console.log("Retrieved infobutton information: ", response);
        $(element).toggleClass('hidden');
        $('.alert-info').addClass('hidden')
      },
      error: function(model, response, options){
        console.log("Could not retrieve infobutton information: " , response);
        $('.alert-warning').removeClass('hidden')
      }
    });
  }
});

$(function(){
  $(".problembutton").click(function(e){
    var m = $(e.currentTarget).data("mainsearchcriteria_v_c");
    var tmpView = new problemView({model: models[m]});
    tmpView.render();
    $('#problemViewModal').modal('show');
  });
})
