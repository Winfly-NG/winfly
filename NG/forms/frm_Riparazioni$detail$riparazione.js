
/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CCB4F13A-2A67-4A4B-93CF-DCF3F9708DA4"}
 */
function editRiparazione(event) {
	
	forms.mainForm.elements.menu.containedForm = 'frm_baseRiparazioniEstNew';

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E89BFB55-D962-44FB-8DA0-38ABA107F263"}
 */
function deleteRiparazione(event) {
	
	if (plugins.dialogs.showErrorDialog('Elimina Riparazione', 'Vuoi eliminare la riparazione selezionata?', 'Si', 'No') == 'Si') {
		var rec = foundset.getSelectedRecord();
		if(foundset.deleteRecord(rec))
			plugins.webnotificationsToastr.success("Riparazione esterna eliminata")
		else
			plugins.webnotificationsToastr.error("Impossibile eliminare, controlla file di log")
			
		forms.frm_baseRiparazioniEst.elements.main_form.containedForm = 'frm_Riparazioni$mainTable'
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2FDB6030-6E26-4DCD-8CC3-A507CC472860"}
 */
function onShow(firstShow, event) {
	controller.readOnly = true
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F26D8830-3AD9-45E5-9DA6-B40ED8883093"}
 */
function goForward(event) {
	
	var current = foundset.getSelectedIndex();
	foundset.setSelectedIndex(current + 1)
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5E0D1409-23E2-4A7E-A531-AAD0A4018D56"}
 */
function goBack(event) {
	var current = foundset.getSelectedIndex();
	foundset.setSelectedIndex(current - 1)
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8E69C04B-6C46-4D58-A82A-957DE131CE77"}
 * @AllowToRunInFind
 */
function printRiparazione(event) {
	var fsDuplicate = foundset.duplicateFoundSet()
	fsDuplicate.find()
	fsDuplicate.documento_id = documento_id
	fsDuplicate.search()
	
	plugins.jasperPluginRMI.runReport(fsDuplicate , 'doc_riparazioni_est_dtl.jasper', null, plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, null);
	
}
