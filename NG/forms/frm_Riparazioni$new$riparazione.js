/**
 * @properties={typeid:35,uuid:"8BB2BEF0-E624-42D0-988E-95657D9A3983",variableType:-4}
 */
var _codAnag = null;


/**
 * @properties={typeid:35,uuid:"496CDE8F-9D4F-43FC-B338-71CAB3DF224B",variableType:-4}
 */
var warnings = new Array;


/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D172D3EF-F588-4D8F-ADFA-86E0F722FC96"}
 */
function cancelAddRiparazione(event) {
	
	databaseManager.revertEditedRecords();
	databaseManager.setAutoSave(true)
	databaseManager.refreshRecordFromDatabase(foundset.getSelectedRecord(), 0);
	application.output("exit edit mode");
	
	forms.mainForm.elements.menu.containedForm = "frm_baseRiparazioniEst"
	forms.frm_Riparazioni$topForm.elements.backToTable.visible = true
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0C4BDAD2-44E0-40F7-A148-5E3D0444C7B0"}
 */
function onActionCliente(event) {
	
	var lookupObj = scopes.svyLookup.createLookup(datasources.db.winfly.clienti_fornitori.getDataSource());
	
	lookupObj.addField('cod_anag').setTitleText('Codice');
	lookupObj.addField('clienti_fornitori_to_anagrafiche.rag_soc1').setTitleText("Ragione Sociale");
	
	cliente_cod_anag = null
	//show pop-up
	var component = elements.cliente1;
	var initialValue = application.getValueListDisplayValue(elements.cliente1.getValueListName(),cliente_cod_anag)
	lookupObj.showPopUp(onSelect,component,600,300, initialValue);
	
	return true

}

/**
 * Callback for pop-up, passes the selected record
 *
 * @private
 * @param {JSRecord<db:/winfly/clienti_fornitori>} record
 *
 * @properties={typeid:24,uuid:"8592BAAA-256D-4276-AE1D-C0E346CCAF22"}
 */
function onSelect(record) {
	if (record) {
		foundset.getSelectedRecord().controparte_id = record.clienti_fornitori_id;
		_codAnag = record.cod_anag
	}
}




/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"EB322EC9-084E-4372-B5D9-A3D04A5D42C5"}
 */
function onDataChange_creazioneDettaglio(oldValue, newValue, event) {
	
	//controllo se i campi obbligatori sono stati inseriti
	var i = 0;
	warnings = []
	if(!cliente_cod_anag ) {
		warnings[i] = "Codice cliente"
		i++
	}
	
	if(warnings.length > 0) {
		globals.createWarning(warnings) 
		return false
	}
	
	else {
		var _articolo_id_ore = getArticoloOre(); //indica il codice operatore (intervento di)
		var found = false;

		// controllo se presente la riga
		if (utils.hasRecords(doc_riparazioni_to_doc_riparazioni_dett)) {
			for (var index = 1; index <= doc_riparazioni_to_doc_riparazioni_dett.getSize(); index++) {
				var record = doc_riparazioni_to_doc_riparazioni_dett.getRecord(index);
				if (record.articolo_id == _articolo_id_ore) {
					doc_riparazioni_to_doc_riparazioni_dett.setSelectedIndex(index)
					found = true
					break;
				}
			}
		}
		if (found == false) { //creo nuova riga
			var indexNew = doc_riparazioni_to_doc_riparazioni_dett.newRecord(false)
			if (indexNew > 0) {
				var recNew = doc_riparazioni_to_doc_riparazioni_dett.getRecord(indexNew);
				recNew.articolo_id = _articolo_id_ore;
				scopes.globals.currID_search_articolo_id_02 = recNew.articolo_id;
				recNew.articolo_id = _articolo_id_ore;
				recNew.tipo_riga = 0;
				recNew.descrizione = wf_getInfoArticolo(recNew.articolo_id, 1);
				recNew.prezzo = to_articoli$currid_searc_articolo_id.prezzo;
				recNew.tab_unit_mis_id = to_articoli$currid_searc_articolo_id.tab_unit_mis_id;
				recNew.tab_iva_id = to_articoli$currid_searc_articolo_id.tab_iva_id;
				recNew.cod_ven_acq = to_articoli$currid_searc_articolo_id.conto_vendita_id

				/* TODO andrea
				 if (recNew.tab_iva_id == null)
				 recNew.tab_iva_id = forms.wf_documenti.wf_doc_dett_load_iva_standard();
				 // recupero la relazione dettaglio articolo
				 globals.currID_search_articolo_id = recNew.articolo_id
				 var _relation_articoli = to_articoli$currid_searc_articolo_id
				 recNew['cod_ven_acq'] = forms.wf_documenti.getContoVendita(controparte_id, _relation_articoli, recNew['cod_ven_acq'])
				 */

				recNew.num_pezzi = totale_tempo_fatt;
				recNew.qta = scopes.globals.wf_doc_dett_getQtaFromOre(recNew.num_pezzi);
				recNew.imp_netto = recNew.qta * recNew.prezzo;
				recNew.n_riga = 1;
			}
		} else {
			//articolo già presente
			record.num_pezzi = totale_tempo_fatt;
			record.qta = scopes.globals.wf_doc_dett_getQtaFromOre(record.num_pezzi);
			record.imp_netto = record.qta * record.prezzo;
		}
		return true;
	}

}


/**
 * Ritorna codice e descrizione articolo
 *
 * @param _articolo_id
 * @param {Number} type  0 solo codice,1 solo descrizione,2 codice + descrizione
 * @properties={typeid:24,uuid:"E1813B73-714D-4334-8F8F-64331A53C79D"}
 */
function wf_getInfoArticolo(_articolo_id, type) {
	if (!_articolo_id)
		return null;
	scopes.globals.currID_search_articolo_id = _articolo_id;


	if (!utils.hasRecords(to_articoli$currid_searc_articolo_id))
		return null;
	
	switch (type) {
	case 0:
		return to_articoli$currid_searc_articolo_id.cod_art
		break;
	case 1:
		return to_articoli$currid_searc_articolo_id.descrizione
		break;
	case 2:
		return to_articoli$currid_searc_articolo_id.cod_art + " " + to_articoli$currid_searc_articolo_id.descrizione
		break;
	default:
		return to_articoli$currid_searc_articolo_id.cod_art
		break;
	}
}


/**
 * @properties={typeid:24,uuid:"A6D74915-0B0F-48C3-AA96-E65FE903C4DB"}
 */
function getArticoloOre() {
	var _articolo_id = null;
	
	if (campo1n == 100) 		// denis
		_articolo_id = 3380;

	if (campo1n == 101) 		// ivan
		_articolo_id = 2064;

	if (campo1n == 99)			// mirco
		_articolo_id = 2066;

	if (campo1n == 98) 			// martina
		_articolo_id = 2065;

	if (campo1n == 103) 		// rosy
		_articolo_id = 2069;
		
	return _articolo_id;
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2309C67D-E634-4FC7-B49B-D42F66807175"}
 */
function saveRiparazione(event) {
	
	
	var i = 0;
	warnings =[]
	if(!cliente_cod_anag ) {
		warnings[i] = "Cliente"
		i++
	}
	
	if(warnings.length > 0) {
		globals.createWarning(warnings)
		return
	}
	
	
	globals.setOrganization_Owner(foundset.doc_riparazioni_to_doc_riparazioni_dett)
	
	
	if (databaseManager.saveData(foundset.getSelectedRecord()));
	//TODO ANDREA da gestire in modo più cool
	
	plugins.svyBlockUI.spinner = 'Circle'
	plugins.svyBlockUI.show("Saving ... ", 0 )
	application.sleep (2000)
	plugins.svyBlockUI.stop()
	
	if (databaseManager.saveData(foundset.getSelectedRecord())) {
	plugins.webnotificationsToastr.success("Record saved!");
	databaseManager.setAutoSave(true);	
	}
	else
		plugins.webnotificationsToastr.error("Error saving, check log")
	
	forms.mainForm.elements.menu.containedForm = 'frm_baseRiparazioniEst';
	forms.frm_Riparazioni$topForm.elements.backToTable.visible = true
		
}
