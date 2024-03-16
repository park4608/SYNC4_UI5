sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("sync4.zfc1620.controller.View1", {
            onInit: function () {

            },
            onSearch: function() {
                // alert("onSearch");
                let condCarrid = this.getView().byId("inpCarrid").getValue();
                let condConnid = this.byId("inpConnid").getValue();
                // let sMesg = "'"+ condCarrid + "'" +  " Airline " +
                //             "'" + condConnid + "'" + " Connection Number";
                let sMesg = `'${condCarrid} Airline '${condConnid} Connection Number'`;
                MessageBox.show(
                    sMesg,
                    {
                        title: "Title"
                    }
                );
            }
        });
    });
