# BMI 6300 Infobutton Demonstration
This is a simple example of how to use HL7 context aware infobuttons. All functionality in this repository is client side code - data is requested via GET request to lite.bmi.utah.edu. To install oe run application, download repository and place in directory that can be served via a web server.

For more information about infobuttons, see:

* http://www.openinfobutton.org
* Github project https://github.com/VHAINNOVATIONS/InfoButtons
* http://www.hl7.org/implement/standards/product_brief.cfm?product_id=208

## Tools employed

### LITE (lite.bmi.utah.edu)
An open-access tool that allows users of OpenInfobutton to create knowledge resource profiles by specifying the clinical contexts in which they would like OpenInfobutton to provide links to those resources

### Javascript Libraries
* Backbonejs - http://backbonejs.org/
* Underscorejs - http://underscorejs.org/
* jQuery - https://jquery.com/

### CSS
* Bootstrap - http://getbootstrap.com/ (CSS and some UI Javascript functionality)

## To Do
* Push to publicly accessible URL
* Web service does not return JSON response for medications. Need to use XML response type if want medication information.
* As of now, web service no longer returns values for LOINC codes selected.
* Create medication view for model to display relevant information: URL, Summary, other details
* Fix background color for multi-medication per problem list row - doesn't work on screens smaller than 1280 wide

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (Apache License, Version 2.0).
