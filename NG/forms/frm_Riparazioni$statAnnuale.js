/**
 * @properties={typeid:35,uuid:"34D5F168-C728-4FBF-A762-E93416FCBE77",variableType:-4}
 */
var num_da_evadere = []
/**
 * @properties={typeid:35,uuid:"46933FA7-59AD-4AB7-B4DD-DE422D581CF2",variableType:-4}
 */
var num_parz_evasi = []
/**
 * @properties={typeid:35,uuid:"6E12FC1B-0F84-493F-A0A2-4D715C20D72A",variableType:-4}
 */
var num_evasi=  []

/**
 * @properties={typeid:35,uuid:"C5D18111-54DF-4382-9D45-D07FBB96221A",variableType:-4}
 */
var param = []


/**
 * @properties={typeid:35,uuid:"50C0EA35-8BA7-42DB-B443-0B647BF75AB3",variableType:-4}
 */
var label = []

/**
 * @properties={typeid:35,uuid:"BE1A2C19-FA8C-430C-9DEE-6CE95D4AA81E",variableType:-4}
 */
var dipe = null;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8A094D75-9084-42E5-9EF9-FAE859335369"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	loadAggregates();
	
	var count = 1
	
	var query = "select date_part ('month', data_documento) as month , count(*) as tot "
		query += "from doc_riparazioni where tipi_documento_id = 72 and date_part('year', data_documento) = 2018 group by date_part('month', data_documento) " 
			query += "order by date_part('month', data_documento) asc"
	var ds = databaseManager.getDataSetByQuery('winfly', query, param, -1);
	
	var month = ds.getMaxRowIndex()
	
	//aggiorno array documenti evasi, e labels del grafico
	while(count<=month) {
		num_evasi.push(ds.getValue(count,2))
		label.push(getMonthName(count))
		count ++
	}
	
	
//	var month= 1
//	for(month = 1; month<=12; month++) {
//		//da evadere
//		if(foundset.find()) {
//			stato_documento = 1
//			if(dipe!= null)
//				campo1n = dipe
//			if(month==2)
//				data_documento = '01/'+month.toString()+'/201...28/'+month.toString()+'/2017|dd/MM/yyyy'
//			else if(month==4 || month == 6 || month== 9 || month ==11)
//				data_documento = '01/'+month.toString()+'/2017...30/'+month.toString()+'/2017|dd/MM/yyyy'
//			else
//			data_documento = '01/'+month.toString()+'/2017...31/'+month.toString()+'/2017|dd/MM/yyyy'
//			foundset.search()
//			num_da_evadere[month-1] = foundset.count_rip_esterne
//		}
//	}
//
//	for(month = 1; month<=12; month++) {
//		//parzialmente evaso
//		if(foundset.find()) {
//			stato_documento = 2
//			if(dipe!= null)
//				campo1n = dipe
//			if(month==2)
//				data_documento = '01/'+month.toString()+'/2017...28/'+month.toString()+'/2017|dd/MM/yyyy'
//			else if(month==4 || month == 6 || month== 9 || month ==11)
//				data_documento = '01/'+month.toString()+'/2017...30/'+month.toString()+'/2017|dd/MM/yyyy'
//			else
//			data_documento = '01/'+month.toString()+'/2017...31/'+month.toString()+'/2017|dd/MM/yyyy'
//			foundset.search()
//			num_parz_evasi[month-1] = foundset.count_rip_esterne
//		}
//	}
//
//	for(month = 1; month<=12; month++) {
//		//evasi
//		if(foundset.find()) {
//			stato_documento = 3
//			if(dipe!= null)
//				campo1n = dipe
//			if(month==2)
//				data_documento = '01/'+month.toString()+'/2017...28/'+month.toString()+'/2017|dd/MM/yyyy'
//			else if(month==4 || month == 6 || month== 9 || month ==11)
//				data_documento = '01/'+month.toString()+'/2017...30/'+month.toString()+'/2017|dd/MM/yyyy'
//			else
//			data_documento = '01/'+month.toString()+'/2017...31/'+month.toString()+'/2017|dd/MM/yyyy'
//			foundset.search()
//			num_evasi[month-1] = foundset.count_rip_esterne
//		}
//	}



var data = {
	type: 'line',
	data: {
		labels: label,
		datasets: [{
			label: "Riparazioni esterne",
			fill: true,
			backgroundColor: "rgba(70,191,189, 0.2)",
			borderColor: "#46BFBD",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: "rgba(220,220,220,0.1)",
			pointBackgroundColor: "#FDB45C",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgba(220,220,220,0.5)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 2,
			tension: 0.2,
			data: num_evasi

		}/*, {
			label: "Da evadere",
			fill: false,
			backgroundColor: "#FF5A5E",
			borderColor: "#FF5A5E",
			pointBorderColor: "rgba(220,220,220,1)",
			pointBackgroundColor: "#000",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgba(220,220,220,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 2,
			data: num_da_evadere
		}, */
	/*	
		{
			label: "Parzialmente evasi",
			fill: false,
			backgroundColor: "#FDB45C",
			borderColor: "#FDB45C",
			pointBorderColor: "rgba(220,220,220,1)",
			pointBackgroundColor: "#000",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgba(220,220,220,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 2,
			data: num_parz_evasi
		} */
		
		]
	}
}

var options = {
	title: {
		display: true,
		text: 'Grafico andamento annuale',
		fontSize: 16,
		fontFamily: "'Helvetica', 'sans-serif'",
		fontStyle: 'normal',
		fontColor: '#111'
	},
	responsive: true,
	tooltips: {
		mode: 'label'
	},
	elements: {
		line: {
			fill: true
		}
	},
	legend: {
        display: true,
        labels: {
        	fontSize:14,
            fontColor: '#111'
        }
    },
	scales: { }
}

elements.chart.setData(data);
elements.chart.setOptions(options);
}


/**
 * @properties={typeid:24,uuid:"7A95CEBB-5BEE-4636-B094-33C0A80906CC"}
 */
function loadAggregates() {
	
	var q = datasources.db.winfly.doc_riparazioni.createSelect();
	
	//AGGREAGTE: TOT RIPARAZIONI
	var totRip = q.columns.documento_id.count;
	
//	var nameTecnico = q.joins.doc_riparazioni_to_dipendenti.columns.descrizione
	
	//RESULT
	q.result
		.add(q.columns.stato_documento)
		.add(totRip)
	
	q.where.add(q.columns.tipi_documento_id.eq(72))
		
	q.groupBy
		.add(q.columns.stato_documento)
		
	
	//LOAD DATA
	var ds = databaseManager.getDataSetByQuery(q,-1)
	
	ds.getColumnAsArray(1);
		
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} month
 *
 *@return {String}
 * @properties={typeid:24,uuid:"CE61170C-BE5B-40CB-B6DF-BCE1D2DFB385"}
 */
function getMonthName(month) {
	
	switch (month) {
	case 1:
		 return 'Gennaio'
		break;
	case 1:
	 return 'Gennaio'
	break;
	case 2:
	 return 'Febbraio'
	break;
	case 3:
	 return 'Marzo'
	break;
	case 4:
	 return 'Aprile'
	break;
	case 5:
	 return 'Maggio'
	break;
	case 6:
	 return 'Giugno'
	break;
	case 7:
	 return 'Luglio'
	break;
	case 8:
	 return 'Agosto'
	break;
	case 9:
	 return 'Settembre'
	break;
	case 10:
	 return 'Ottobre'
	break;
	case 11:
	 return 'Novembre'
	break;
	case 12:
	 return 'Dicembre'
	break;
	default:
		break;
	}
	
	
	
	
	
	
}
