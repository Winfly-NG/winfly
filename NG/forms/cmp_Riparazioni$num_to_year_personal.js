/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"040D6D68-34B4-4A29-913D-0FA654AD516E"}
 */
var query = "select count(*) from doc_riparazioni where tipi_documento_id = 72 and date_part('year', data_documento) = ? and campo1n = ?";

/**
 * @properties={typeid:35,uuid:"9CF39755-5C3F-421B-A48F-38BBFA3A417C",variableType:-4}
 */
var param = [];

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6330BBA8-073D-4657-8F79-2D4A195DD460",variableType:8}
 */
var number_personal_year;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2FE2FF85-23EE-4657-8945-35015FF7B74A"}
 */
function onLoad(event) {
	var date = new Date()
	var user = getCampo1n()
	param.push(date.getFullYear())
	param.push(user)
	var ds = databaseManager.getDataSetByQuery('winfly', query, param, -1);
	
	number_personal_year = ds.getValue(1,1)
}


/**
 * @properties={typeid:24,uuid:"C8E3410C-2D1F-483D-9C82-9B716BB31303"}
 */
function getCampo1n () {
	
	switch (scopes.login.user_uuid) {
	case 'mirco':
		return 99
		break;
	case 'denis':
		return 100
		break;
	case 'martina':
		return 98
		break;
	case 'ivan':
		return 101
		break;
	case 'rosy':
		return 103
		break;
	default:
		break;
	}
}