/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91D69AA4-6F63-484C-BE70-C7C264371677"}
 */
var query = "select count(*) from doc_riparazioni where tipi_documento_id = 72 and date_part('year', data_documento) = ? "
	
/**
 * @properties={typeid:35,uuid:"9A2CBD6C-4148-460D-9B86-9D4A2B5E759C",variableType:-4}
 */
var param = []

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5DC5A2B1-35E0-4E63-B159-24C8958F13E1",variableType:8}
 */
var number 

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3E8877C0-703C-434C-A10C-2305B59E4019",variableType:8}
 */
var number_previous_year 


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"201ECFA0-5074-412E-A18B-51C0CE174F08",variableType:8}
 */
var perc_number


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BD52495B-A829-42C2-9AFB-F56D38150495"}
 */
function onLoad(event) {
	var date = new Date()
	var year = date.getFullYear()
		
	param.push(year)
	var ds = databaseManager.getDataSetByQuery('winfly', query, param, -1);
	
	number = ds.getValue(1,1)
	
	param = [] //reset parametri
	param.push(year-1) // anno precedente
	date.setFullYear(date.getFullYear() -1)
	param.push(date) //stessa data anno precedente
	var query_last_year = "select count(*) from doc_riparazioni where tipi_documento_id = 72 and date_part('year', data_documento) = ? and data_documento <= ? "
	
	ds = databaseManager.getDataSetByQuery('winfly', query_last_year, param, -1)
	
	number_previous_year = ds.getValue(1,1) //numero riparazioni anno precedente stesso periodo
	
	//calcolo variazione percentuale, a meno che non sonp al primo anno
	if(number_previous_year > 0 ) {
		perc_number = ((number - number_previous_year) / number_previous_year) //moltiplico % successivamente nel format label
	
	if (perc_number > 0) {
		elements.perc.fgcolor = "#6dc066"
		elements.increase.visible = true 
		elements.decrease.visible = false
	}
	else {
		elements.perc.fgcolor = "#ff4040"
		elements.decrease.visible = true
		elements.increase.visible = false
	}
		}	
	application.output(perc_number)
}
