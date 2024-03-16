sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, Fragment) {
        "use strict";

        return Controller.extend("sync4.zfc1623.controller.View1", {
            onInit: function () {

            },
            onMsg: function() {
                let oView = this.getView();
                let oCarrid = oView.byId("inpCarrid");
                let oCurrency = oView.byId("inpCurrency");
                let carrid = oCarrid.getValue();
                let curr = oCurrency.getValue();
                MessageBox.show(
                    // `${oCarrid.getValue()} Airline ${oCurrency.getValue()} Connection Number`,
                    `${carrid} Airline ${curr} Connection Number`,
                    {
                        title: "Message"
                    }
                )
            },
            onPopup: function() {
                let oView = this.getView();
                if(!this.getView().byId("popupDialog")) {
                    Fragment.load(
                        {
                            id: oView.getId(),
                            name: "sync4.zfc1623.view.PopupFrag",
                            type: "XML",
                            controller: this
                        }
                    ).then(
                        function(oDialog) {
                            oView.addDependent(oDialog);
                            oDialog.open();
                        }
                    )
                } else {
                    oView.byId("popupDialog").open();
                }
            },
            onClose: function() {
                this.getView().byId("popupDialog").close();
            }
        });
    });
