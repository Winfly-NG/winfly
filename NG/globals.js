/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C648006E-1FF1-42FB-9024-866032EA3E85"}
 */
var user;


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C9009C9E-0007-4B29-AF6A-9D433D209D2B"}
 */
var svy_sec_lgn_owner_id = 'A770F828-B8C8-42ED-AACD-AC2C27B99804';


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"84C866FD-EA24-4279-A7F5-3CE65A518800"}
 */
var svy_sec_lgn_organization_id = '7EE1D0AD-0E57-487B-B26B-3869DB8E464C';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB018698-07CE-45F5-B36F-58D5FC62E24A"}
 */
var msg = null;



/**
 * Varianile usata nella relazione per recuperare i dati articolo
 * @type {Number}
 * @properties={typeid:35,uuid:"D3F78748-B55A-4BF0-8341-C2839464E8A8",variableType:8}
 */
var currID_search_articolo_id_02 = null;


/**
 * Variabile usata nella relazione per recuperare i dati articolo
 * @type {Number}
 * @properties={typeid:35,uuid:"C8E3B08C-37B9-4164-8C9E-CBC91E698768",variableType:8}
 */
var currID_search_articolo_id = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param record
 *
 * @properties={typeid:24,uuid:"ED6C3741-C1B8-4ACF-9A64-ACCC78CA28EF"}
 */
function setOrganization_Owner(record) {
	record.owner_id = globals.svy_sec_lgn_owner_id
	record.organization_id = globals.svy_sec_lgn_organization_id
}


/**
 * @param {String} _sname // nome tabella
 * @param {Number} tipo_documento_id
 * @param {Number} documentYear
 * @properties={typeid:24,uuid:"4045EAB3-3C74-4803-B6BF-D06665C48AD6"}
 */
function wf_GetDocProgressivo(_sname, tipo_documento_id, documentYear) {
	var _ret = null
//	var msg
	var _startData = new Date(documentYear, 0, 01)
	var _endData = new Date(documentYear, 11, 31)
	//forms.WinFly_Base.setStatusText("Recupero Numero Progressivo Inzio  ------------>");
	//var srvname = globals.winfly_name_db
	var srvname = "winfly"
	// Recupera il contatore associato al documento (in base al tipi_documento_id), recupera anche le info del contatore
	var query1 = "select c.DOC_CONTATORE_ID, c.suffisso, c.FLAG_ANNUALE " + " from tipi_documento t, DOC_CONTATORI c " + " where t.TIPI_DOCUMENTO_ID = ? " + " and t.DOC_CONTATORE_ID = c.DOC_CONTATORE_ID ";
//	var _queryParte = globals.wf_setFilterQuery("tipi_documento", "t");
//	if (_queryParte)
//		query1 += " and" + _queryParte
	var param1 = new Array();
	param1.push(tipo_documento_id);
	var dataset = databaseManager.getDataSetByQuery(srvname, query1, param1, -1);
	if (dataset.getMaxRowIndex() > 0) {
		var contatoreID = dataset[0][0]
	//	var contatoreSuff = dataset[0][1]
		var contatoreYear = dataset[0][2]
		//var documentYear = dataset[0][3]

		var param2 = new Array();
		// Recupera il numero massimo associato al contatore
		var query2 = " select max(NUMERO_PROGRESSIVO)+1 from " + _sname + "  d " + " where 1 = 1";
//		_queryParte = globals.wf_setFilterQuery(_sname, "d");
//		if (_queryParte)
//			query2 += " and" + _queryParte

		if (contatoreYear) { // SE contatore prevede il flag di azzeramento annuale limitata la query all'anno
			query2 += " and d.data_documento between ?   and ? "
			param2.push(_startData);
			param2.push(_endData)

			//			query2 += " and date_part('year', d.data_documento) = ? ";
			//			param2.push(documentYear);
		}
		query2 += " and d.TIPI_DOCUMENTO_ID IN (select TIPI_DOCUMENTO_ID from tipi_documento where DOC_CONTATORE_ID = ?)"
		param2.push(contatoreID);

		dataset = databaseManager.getDataSetByQuery(srvname, query2, param2, -1);
		if (dataset.getMaxRowIndex() > 0) {
			_ret = dataset[0][0]
		}
		if (_ret == null)
			_ret = 1
	} else {
	//	var msg = "Non Associato nessun contatore,impossibile continuare"
	//	wf_showWarningDialog(msg, false)
		_ret = null
	}
	//forms.WinFly_Base.setStatusText("Recupero Numero Progressivo FINE  ------------>");

	return _ret;
}



/**
 * ANDREA
 * Funziona per la creazione del messaggio di warning prima del salvataggio
 * @param {Array<String>} warnings
 *
 * @properties={typeid:24,uuid:"0DF8DA14-5008-44E2-A3C4-961CBEC6DD27"}
 */
function createWarning(warnings) {
	var i = 0;
	msg = "Inserire "
	for (i; i< warnings.length; i++) {
		if(i != warnings.length -1) 
			msg = msg + warnings[i] + " , "
		else
			msg = msg + warnings[i] + "."
	}
	plugins.dialogs.showWarningDialog("Warning", msg)
}


/**
*
* @param {Number} num
* @param {Number} _tab_valute_id se null recupera i numeri dalla valuta di defaul
* @param {Number} num_decimali
* @properties={typeid:24,uuid:"77C77716-1E4A-4D2A-AF03-FDF1B812F3BC"}
*/
function round(num, _tab_valute_id, num_decimali) {
	if (!num || num == 0)
		return 0
	if (num_decimali == null) {
		// numeri decimali recupero dalla Valuta di default
		var _ret_dati = new Array()
		_ret_dati = wf_doc_load_valutaNdec_default()
		if (_ret_dati && _ret_dati.length > 0) { // RECUPERO IL NUMERO DECIMALE
			num_decimali = _ret_dati[1]
		}
		if (!num_decimali)
			num_decimali = 2 // VALUTA EURO

	}
	//	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,num_decimali);
	// TODO verificare il round, se si riesce ad aliminare il warning 9.405 due cifre deve dare 9.41
	//var molt = (num*Math.pow(10,num_decimali)).toFixed(2)
	var molt = (num * Math.pow(10, num_decimali)).toFixed(num_decimali)
	var result = Math.round(parseFloat(molt)) / Math.pow(10, num_decimali);
	return result;

}


/**
 * TODO generated, please specify type and doc for the params
 * @param newValue
 *
 * @properties={typeid:24,uuid:"11B5388C-C900-4981-B528-E1D4763821C0"}
 */
function wf_doc_dett_getQtaFromOre(newValue) {
	var _tot_orec;

	_tot_orec = Math.floor(newValue) + ( ( (newValue - Math.floor(newValue)) / 60) * 100)

//	if (scopes.custom_winfly_base.isOwner('CRM'))
		_tot_orec = wf_round(_tot_orec, 2)
//	else
//		_tot_orec = _super.wf_round(_tot_orec, 4)

	return _tot_orec
}


/**
 * TODO generated, please specify type and doc for the params
 * @param num
 * @param num_decimali
 *
 * @properties={typeid:24,uuid:"6265E0FA-6C0C-4EBB-94FF-A77BAA4330DB"}
 */
function wf_round(num, num_decimali) {
	//var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	var molt = (num * Math.pow(10, num_decimali)).toFixed(num_decimali)
	var result = Math.round(parseFloat(molt)) / Math.pow(10, num_decimali);

	return result;

}
