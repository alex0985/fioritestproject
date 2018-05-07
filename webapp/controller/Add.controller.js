sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("alex.fiori.FioriOnlineTraining.controller.Add", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf alex.fiori.FioriOnlineTraining.view.Add
		 */
		//	onInit: function() {
		//
		//	},
						// 		<Label text="Product ID"></Label><Input id="idProductId"></Input>
						// <Label text="TypeCode"></Label><Input id="idTypeCode"></Input>
						// <Label text="Category"></Label><Input id="idCategory"></Input>
						// <Label text="Name"></Label><Input id="idName"></Input>
						// <Label text="Description"></Label><Input id="idDescription"></Input>
						// <Label text="SupplierID"></Label><Input id="idSupplierId"></Input>
						// <Label text="Price"></Label><Input id="idPrice"></Input>
						// <Label text="CurrencyCode"></Label><Input id="idCurrencyCode"></Input>
						// <Label text="ProductPicUrl"></Label><Input id="idProductPicUrl"></Input>
		
		
		onSave: function(){
			var payload = {
					"ProductId": this.getView().byId("idProductId").getValue(),
					"TypeCode": this.getView().byId("idTypeCode").getValue(),
					"Category": this.getView().byId("idCategory").getValue(),
					"Name": this.getView().byId("idName").getValue(),
					"Description": this.getView().byId("idDescription").getValue(),
					"SupplierId": "0100000000",
					"SupplierName": "SAP",
					"TaxTarifCode": 1,
					"MeasureUnit": "EA",
					"WeightMeasure": "4.200",
					"WeightUnit": "KG",
					"Price": this.getView().byId("idPrice").getValue(),
					"CurrencyCode": this.getView().byId("idCurrencyCode").getValue(),
					"Width": "0.300",
					"Depth": "0.180",
					"Height": "0.030",
					"DimUnit": "M"
			};
			
			var oDataModel = this.getView().getModel();
			oDataModel.create("/ProductSet", payload,{
				sucess: function(){
					sap.m.MessageToast.show("Product saved");
				},
				error: function(){
					sap.m.MessageBox.error("Error");
				}
			});
			
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf alex.fiori.FioriOnlineTraining.view.Add
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf alex.fiori.FioriOnlineTraining.view.Add
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf alex.fiori.FioriOnlineTraining.view.Add
		 */
		//	onExit: function() {
		//
		//	}

	});

});