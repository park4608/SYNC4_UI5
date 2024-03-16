sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("sync4.zfc1621.controller.View1", {
            onInit: function () {

            },
            onMain: function() {
                // alert(this.getView().byId(
                //     Fragment.createId("idFrag", "inpCarrid")
                //     // sap.ui.core.Fragment.createId("idFrag", "inpCarrid")
                // ).getValue())
                alert(this.getView().byId("inpConn").getValue());
            },
            onFrag: function() {
                alert(this.getView().byId("inpCarrid").getValue());
            }
        });
    });
