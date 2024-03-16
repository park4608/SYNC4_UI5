sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync4.zfc1640.controller.View1", {
            onInit: function () {
                let oData = {
                    lastName :" Park",
                };
                let oModel = new JSONModel(oData);
                let oView = this.getView();
                oView.setModel(oModel);
            },
            onSetModel: function() {
                let oData = {
                    emp: { lastName: "Han"}
                };
                let oModel = new JSONModel( oData );
                this.getView().setModel(oModel, "2nd");
            }
        });
    });
