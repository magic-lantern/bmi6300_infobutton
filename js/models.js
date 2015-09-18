var REST_SERVICE_ROOT_URL = "http://service.oib.utah.edu:8080/infobutton-service/infoRequest?representedOrganization.id.root=http://axeium.net&xsltTransform=Infobutton_UI_AXEIUM&taskContext.c.c=";
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
$.ajaxSetup({timeout:10000});

var infoButtonModel = Backbone.Model.extend({
  defaults: {
    'mainsearchcriteria_v_c' : '',   //toLower() and replace . with _ for easier use
    'mainsearchcriteria_v_dn' : '',   //toLower() and replace . with _ for easier use
    'infobuttontype' : ''
  },
  validate: function(attributes){
    // add this later
  },
  initialize: function(){
    // nothing needed for now
  },
  urlRoot: REST_SERVICE_ROOT_URL,
  url : function() {
    var urlbase = '';
    switch(this.attributes.infobuttontype) {
      case 'problem':
        urlbase = this.urlRoot + "PROBLISTREV&mainSearchCriteria.v.cs=2.16.840.1.113883.6.96&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json";
        break;
      case 'lab':
        urlbase = this.urlRoot + "LABRREV&mainSearchCriteria.v.cs=2.16.840.1.113883.6.1&encounter.c.c=AMB&informationRecipient=PROV&informationRecipient.languageCode.c=en&informationRecipient.healthCareProvider.c.c=200000000X&performer=PROV&performer.languageCode.c=en&performer.healthCareProvider.c.c=200000000X&knowledgeResponseType=application/json";
        break;
      case 'medication':
        break;
      default:
        console.log("Invalid or Unknown infobutton type, cannot retrieve data");
    }
    return  urlbase + "&mainSearchCriteria.v.c=" + this.attributes.mainsearchcriteria_v_c + 
      "&mainSearchCriteria.v.dn=" + this.attributes.mainsearchcriteria_v_dn;
  },
  parse: function(response) {
    // map server response to expected object attributes
    console.log("infoButtonModel - server JSON response ", response);
    //response.id = 1;
    return response;
  }
});
