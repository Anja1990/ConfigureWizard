sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ConfigureWizard/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ConfigureWizard.Component", {

		metadata: {
		//	manifest: "json"
		rootView: "ConfigureWizard.view.App",
			routing: {
				config: {
					routerClass: "sap.m.routing.Router",
					viewPath: "ConfigureWizard.view",
					controlId: "rootControl",
					controlAggregation: "pages",
					viewType: "XML"
				},
				routes: [
					{
						name: "welcome",
						// empty hash - normally the start pagehjhj
						pattern: "",
						target: "welcome"
					},
					{
						name: "wizard",
						pattern: "wizard",
						target: "wizard"
					}
				],
				targets: {
					welcome: {
						viewName: "Welcome",
						viewLevel: 0
					},
					wizard: {
						viewName: "Wizard",
						viewLevel: 1
					}
				}
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
				this.getRouter().initialize();   
		}
	});

});
