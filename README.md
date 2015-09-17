# BMI 6300 Infobutton Demonstration
This is a simple example of how to use HL7 context aware infobuttons. For more information about infobuttons, see:

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
* Bootstrap - http://getbootstrap.com/ (actually has CSS and Javascript functionality)

## To Do
* ? Should I use a collection for data?
* Verify current model will work for problems, medications, lab results
* Create view for model to display relevant information: URL, Summary, other details
    * View for Problems
    * View for Medications
    * View for Lab Results
* Fix modal to have close button, better styling
* Infobutton icon shouldn't show up until JSON content has loaded
* Show "loading content" at top of page while content is loading

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (Apache License, Version 2.0).
