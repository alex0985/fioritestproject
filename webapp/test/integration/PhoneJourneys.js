/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"alex/fiori/FioriOnlineTraining/test/integration/NavigationJourneyPhone",
		"alex/fiori/FioriOnlineTraining/test/integration/NotFoundJourneyPhone",
		"alex/fiori/FioriOnlineTraining/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});