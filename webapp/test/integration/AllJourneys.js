/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"alex/fiori/FioriOnlineTraining/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"alex/fiori/FioriOnlineTraining/test/integration/pages/App",
	"alex/fiori/FioriOnlineTraining/test/integration/pages/Browser",
	"alex/fiori/FioriOnlineTraining/test/integration/pages/Master",
	"alex/fiori/FioriOnlineTraining/test/integration/pages/Detail",
	"alex/fiori/FioriOnlineTraining/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "alex.fiori.FioriOnlineTraining.view."
	});

	sap.ui.require([
		"alex/fiori/FioriOnlineTraining/test/integration/MasterJourney",
		"alex/fiori/FioriOnlineTraining/test/integration/NavigationJourney",
		"alex/fiori/FioriOnlineTraining/test/integration/NotFoundJourney",
		"alex/fiori/FioriOnlineTraining/test/integration/BusyJourney",
		"alex/fiori/FioriOnlineTraining/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});