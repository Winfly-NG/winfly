/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FF1BDC26-8897-4EC4-9567-7F34BA69D706"}
 */
var searchText = '';


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"4C0C9A4A-7C59-49BB-AF79-08FDC912D823"}
 */
function onSearch(event) {
//	 load all records when search is cleared
	if(!searchText){
		foundset.loadAllRecords();
		return;
	}
	
//	create search object and add search providers
	var search = scopes.svySearch.createSimpleSearch(foundset);
	
	// set the search text
	search.setSearchText(searchText);
	
//	list of data providers to include in search
	var searchProviders = [
		'doc_riparazioni_to_clienti_fornitori.cod_anag',
		'doc_riparazioni_to_clienti_fornitori.clienti_fornitori_to_anagrafiche.rag_soc1'
	];
	
//add search providers
	for(var i in searchProviders){
		search.addSearchProvider(searchProviders[i]);
	}

	//	execute search
	search.loadRecords(foundset);
	application.output(databaseManager.getSQL(foundset));
	application.output(databaseManager.getSQLParameters(foundset));
	

}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"53CEB81C-81DB-4F13-A1E5-5A10D1F96185"}
 */
function onLoad(event) {
	foundset.addFoundSetFilterParam('tipi_documento_id','=',72);
	foundset.loadAllRecords();
	foundset.sort('documento_id desc');
	
}


/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"17555007-8C52-4A2C-B98A-1D9F31A0C1C9"}
 */
function addRiparazioni(event) {
	
	databaseManager.setAutoSave(false);
	var rec = foundset.getRecord(foundset.newRecord());
	foundset.setSelectedIndex(foundset.getRecordIndex(rec));
	globals.setOrganization_Owner(rec)
	
	forms.mainForm.elements.menu.containedForm = 'frm_baseRiparazioniEstNew';
	forms.frm_Riparazioni$new.controller.readOnly = false;


	foundset.campo1n = getOperatore()
		
	foundset.data_documento = new Date()
	foundset.tipi_documento_id = 72 // TODO da risolvere
	foundset.doc_classi_id = 20 //TODO andrea
	foundset.stato_documento = 1
	foundset.magazzino_id =13215
	foundset.tipo_sogg = 'C'
	foundset.tab_valute_id = 1
	foundset.numero_progressivo = globals.wf_GetDocProgressivo(databaseManager.getDataSourceTableName(controller.getDataSource()), tipi_documento_id, data_documento.getFullYear())

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7103C16C-E779-4DCA-B2C7-EE0C0FD74449"}
 */
function goToDetail(foundsetindex, columnindex, record, event) {
	forms.frm_baseRiparazioniEst.elements.main_form.containedForm = 'frm_Riparazioni$detail$riparazione'
	
	forms.frm_Riparazioni$topForm.elements.backToTable.visible = true	
}


/**
 * @properties={typeid:24,uuid:"BD3371EA-8CD7-4874-AB98-EDF58815DC7A"}
 */
function getOperatore() {
	
	if (scopes.login.user_uuid == 'denis') 		// denis
		return 100;

	if (scopes.login.user_uuid == 'ivan') 		// ivan
		return 100;

	if (scopes.login.user_uuid == 'mirco')			// mirco
		return 99;

	if (scopes.login.user_uuid == 'martina') 			// martina
		return 98;

	if (scopes.login.user_uuid == 'rosy') 		// rosy
		return 103;

	return null
}


/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"34AA2C43-E558-4CD4-AB3A-1FA8ADA26F77"}
 * @AllowToRunInFind
 */
function printAll(event) {
	var fsDuplicate = foundset.duplicateFoundSet()
	fsDuplicate.find()
	fsDuplicate.documento_id = documento_id
	fsDuplicate.search()
		plugins.jasperPluginRMI.runReport(foundset, 'doc_riparazioni.jasper', null, plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, null);

}

/**
 * @properties={typeid:24,uuid:"7AA7D714-BFA4-43B7-8C30-9F6A7302E273"}
 */
function logOut() {
	security.logout()
}