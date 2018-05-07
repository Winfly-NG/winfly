/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D73E4F31-C018-46CB-9B41-288B5F6DFA11"}
 */
var query = "select count(*) from doc_riparazioni where tipi_documento_id = 72 and stato_documento = ? "

/**
 * @properties={typeid:35,uuid:"07EDE41A-3743-4D33-B615-18C5B4D7EB2D",variableType:-4}
 */
var param = []

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7BB5E69B-BE96-4690-8377-8D2D6041D66F",variableType:8}
 */
var da_evadere

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"692C3E83-DAB6-486C-B4FD-E0FBF4E859F0",variableType:8}
 */
var evasi

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BAA28AD5-D7AC-495C-BE38-AF7DF48BEEE1",variableType:8}
 */
var parz_evasi


/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"22FD4FFD-65C3-4CCC-A901-5D9D17973BC7",variableType:93}
 */
var today 

/**
 * @properties={typeid:24,uuid:"279AEC86-64EE-42C0-A2C8-E4B69167D184"}
 */
function loadStat() {
	
	today = new Date() 
		
	//da evadere
	param.push(1)
	var ds = databaseManager.getDataSetByQuery('winfly', query, param, -1);
	da_evadere = ds.getValue(1,1)
	
	//evasi
	param = []
	param.push(3)
	ds = databaseManager.getDataSetByQuery('winfly', query, param, -1);
	evasi = ds.getValue(1,1)
	
	//parz. evasi
	param = []
	param.push(2)
	ds = databaseManager.getDataSetByQuery('winfly', query, param, -1);
	parz_evasi = ds.getValue(1,1)
	
	application.output(da_evadere)
}