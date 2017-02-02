sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ConfigureWizard.controller.Welcome", {
		onWizard: function(){
				this.getOwnerComponent().getRouter().navTo("wizard");
		}
	});

});