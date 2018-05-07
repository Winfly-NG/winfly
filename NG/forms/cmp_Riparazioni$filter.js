/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"F2537FC7-4FF5-46AC-89DC-CF17C6F5569D",variableType:93}
 */
var startDate = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C9DC57D7-0625-448A-A524-20C3BF283154",variableType:93}
 */
var endDate = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DD5FEACF-11E0-4460-B07D-727C0656B6CD",variableType:93}
 */
var date = null;

/**
  * @type {Number}
 *
 * @properties={typeid:35,uuid:"16F63F05-C22D-472E-ABC8-4078BED4F258",variableType:8}
 */
var stato = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"716EC892-2288-45D1-AC04-6188D6F1F5B2"}
 */
var dipeId = '';

/**
 *
 * @properties={typeid:24,uuid:"790EF1C4-8FB9-48EA-909C-2D2202DE6B05"}
 */
function filterDipendenti(){
	
	// REMOVED NAMED FILTER
	var filterName = 'employeeFilter';
	foundset.removeFoundSetFilterParam(filterName);
	
	// APPLY IN FILTER IF ANY IDS SPECIFEID
	if(dipeId){
		var ids = dipeId.split('\n');
		
		foundset.addFoundSetFilterParam(
			'campo1n',
			'IN',
			ids,
			filterName
		);
	}
	
	// LOAD ALL RECORDS - REQUIRED TO APPLY THE FILTERS
	foundset.loadAllRecords();
}

/**
 *
 * @properties={typeid:24,uuid:"6D4E17A3-6892-4D0E-A9E7-743537FEE1EB"}
 */
function filterDate(){

	//	REMOVED NAMED FILTER
	var filterName = 'dateFilter';
	foundset.removeFoundSetFilterParam(filterName);
	
	// ADD START DATE LOWER BOUND IF SPECIFIED
	if(startDate){
	//	startDate.setHours(0,0,0,0);
		foundset.addFoundSetFilterParam(
			'data_documento',
			'>=',
			startDate,
			filterName
		);
	}
	
	// ADD END DATE UPPER BOUND IF SPECIFIED
	if(endDate){
//		endDate.setHours(23,59,59,999);
		foundset.addFoundSetFilterParam(
			'data_documento',
			'<=',
			endDate,
			filterName
		);
	}
	
	// LOAD ALL RECORDS - REQUIRED TO APPLY THE FILTERS
	foundset.loadAllRecords();
}

/**
 * @properties={typeid:24,uuid:"87887744-4A34-43FA-A8E3-9B367FFE01B3"}
 */
function filterStato(){
	
	// REMOVED NAMED FILTER
	var filterName = 'statoFilter';
	foundset.removeFoundSetFilterParam(filterName);
	
	// APPLY IN FILTER IF ANY IDS SPECIFEID
	if(stato) {
		var idt = stato.toString().split('\n');
		foundset.addFoundSetFilterParam(
			'stato_documento',
			'in',
			idt,
			filterName
		);
	}
	foundset.loadAllRecords();
	
}

/**
 *
 * @properties={typeid:24,uuid:"7341E4DD-1065-46E0-BD99-0E05D90E300C"}
 */
function filterSearchDate() {
	var filterName = 'dateSearch';
	foundset.removeFoundSetFilterParam(filterName);
	
	// ADD START DATE LOWER BOUND IF SPECIFIED
	if(date){
	//	startDate.setHours(0,0,0,0);
		foundset.addFoundSetFilterParam(
			'data_documento',
			'=',
			date,
			filterName
		);
	}
	
	
	// LOAD ALL RECORDS - REQUIRED TO APPLY THE FILTERS
	foundset.loadAllRecords();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"3349A5FC-0598-4676-B882-7BD3184CEA19"}
 */
function onDataChangeSearchDate(oldValue, newValue, event) {
	// TODO Auto-generated method stub
//	REMOVED NAMED FILTER
	
	filterSearchDate ();
	return true;
}



/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FD8B85A0-EA10-44D4-A61B-347074120529"}
 */
function clearStatoFilter(event) {
	// TODO Auto-generated method stub
	stato = null;
	filterStato();
	return true;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"67A127D7-C3E6-427C-9BB8-E096E2B088BC"}
 */
function clearTecnicoFilter(event) {
	// TODO Auto-generated method stub
	dipeId = '';
	filterDipendenti();
	return true;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"212F1FA4-D676-4165-8CBB-7DFDB0EC3F28"}
 */
function clearDate(event) {
	// TODO Auto-generated method stub
	endDate = null;
	startDate = null;
	date = null;
	filterDate();
	
	return true;
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 *
 * @properties={typeid:24,uuid:"5C5D828B-E2CE-4BA2-9949-C5170908A0BA"}
 */
function clearAll(event) {
	// TODO Auto-generated method stub
	if(endDate || startDate)
		clearDate(event)
	if(stato)
		clearStatoFilter(event)
	if(dipeId)
		clearTecnicoFilter(event)

}


/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"F6E28653-D14B-460F-852D-875223832DB1"}
 */
function onDataChangeStatoFilter(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	filterStato();
	return true;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"5FB38D56-0AD6-44C0-B855-605A1406574E"}
 */
function onDataChangeDipendentiFilter(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	filterDipendenti();
	return true;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"E2C41F80-79BF-40AF-AF41-D80213BD69AD"}
 */
function onDataChangeDateFilter(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	filterDate();
	return true;
}



/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EFF4A4D8-E9E5-4D4C-B47F-89EFCA6CF93B"}
 */
function applyFilter(event) {
	filterDate()
}
