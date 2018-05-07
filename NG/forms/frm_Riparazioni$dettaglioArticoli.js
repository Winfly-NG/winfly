
/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4FAA3DEC-8ACE-471D-88D9-B14E3F15C7E7"}
 */
function addRiga(event) {
	var indexNEW = foundset.newRecord(false);
	elements.codice.requestFocus()
	globals.setOrganization_Owner(indexNEW)
	if (indexNEW >0){
		var rec = foundset.getRecord(indexNEW)
		rec.n_riga = foundset.getSize()
		rec.tipo_riga = 0;
	}	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F969AB4A-16D3-4F25-9B89-57F2E4ACFE63"}
 */
function onDataChangeCodiceArt(oldValue, newValue, event) {
	

	var lookupObj = scopes.svyLookup.createLookup(datasources.db.winfly.articoli.getDataSource());

	
	lookupObj.addField('cod_art').setTitleText('Codice');
	lookupObj.addField('descrizione').setTitleText("Descrizione");

	var component = elements.codice;
	var initialValue = newValue;

	lookupObj.showPopUp(onSelect, component, 600, 300, initialValue);
	
	return true;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param record
 *
 * @properties={typeid:24,uuid:"E1ED65F8-0A7B-4E81-B27D-E196381E84FE"}
 */
function onSelect(record) {
	if (record) {
		foundset.getSelectedRecord().articolo_id = record.articoli_id;
		foundset.getSelectedRecord().descrizione = record.descrizione;
		foundset.getSelectedRecord().prezzo = record.prezzo;
		foundset.getSelectedRecord().tab_unit_mis_id = record.tab_unit_mis_id
		foundset.getSelectedRecord().cod_ven_acq = record.conto_vendita_id
	}
}	
	
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D5846CA8-77BE-4FD0-98A2-EBDEB16B2E16"}
 */
function eliminaRiga(event) {
	if (plugins.dialogs.showErrorDialog('Elimina Articolo', 'Vuoi eliminare la riga selezionata?', 'Si', 'No') == 'Si') {
		var rec = foundset.getSelectedRecord();
		foundset.deleteRecord(rec);	
	}
}
