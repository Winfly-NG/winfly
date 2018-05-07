
/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A3C0E50C-847F-40E8-98DE-8BA67CBC4FD6"}
 */
function goToRiparazioni(event) {
	plugins.svyBlockUI.spinner = 'Circle'
	plugins.svyBlockUI.show("Caricamento Riparazioni Esterne ", 0 )
	application.sleep (1500)
	plugins.svyBlockUI.stop()
	forms.mainForm.elements.menu.containedForm = 'frm_baseRiparazioniEst'
}
