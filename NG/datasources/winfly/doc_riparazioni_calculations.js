/**
 * @properties={type:12,typeid:36,uuid:"9FF41906-0677-435D-91DB-9B18D7BBACA5"}
 */
function setClassColumnStato()
{
	if(stato_documento == 1)
		return 'table-button_da_evad div'
	if(stato_documento == 2)
		return 'table-button_parz div'
		
	return 'table-button_evasi div'
}

/**
 * @properties={type:8,typeid:36,uuid:"1760258B-1FED-478F-98C2-AAAF00C01170"}
 */
function count_da_evadere()
{
	
}

/**
 * @properties={type:12,typeid:36,uuid:"242BBC9B-30F2-443C-844B-DCA0E73B088B"}
 */
function totale_tempo_fatt()
{
	 var _tempo_fatt = 0.00
		var _tempo_int = 0
	//	var _tempo_pausa = 0


		var /*_ora, _min, _tot_min, _tot_ore, */_tot_orec

		if (spese_trasporto > 0) {
			_tot_orec = Math.floor(spese_trasporto) + ( ( (spese_trasporto - Math.floor(spese_trasporto)) / 60) * 100)

			_tot_orec = globals.round(_tot_orec, null, 4)

			_tempo_int = _tot_orec

		}
		if (peso_netto > 0) {
			_tot_orec = Math.floor(peso_netto) + ( ( (peso_netto - Math.floor(peso_netto)) / 60) * 100)

			_tot_orec = globals.round(_tot_orec, null, 4)

			_tempo_int = _tempo_int + _tot_orec

		}

		if (peso_lordo > 0) {
			_tot_orec = Math.floor(peso_lordo) + ( ( (peso_lordo - Math.floor(peso_lordo)) / 60) * 100)

			_tot_orec = globals.round(_tot_orec, null, 4)

			_tempo_int = _tempo_int - _tot_orec

		}

		if(spese_bolli > 0) { // tempo pausa
			_tot_orec = Math.floor(spese_bolli) + ( ( (spese_bolli - Math.floor(spese_bolli)) / 60) * 100)

			_tot_orec = globals.round(_tot_orec, null, 4)

			_tempo_int = _tempo_int - _tot_orec

		}
			
		_tempo_fatt =globals.round( Math.floor(_tempo_int) +  ( ( (_tempo_int - Math.floor(_tempo_int)) * 60) / 100),null, 4)


		return _tempo_fatt
}

/**
 * @properties={type:12,typeid:36,uuid:"FE53CB08-7136-4E81-938D-443F758A3526"}
 */
function cliente_cod_anag()
{
	if (utils.hasRecords(doc_riparazioni_to_clienti_fornitori)) {
		// recupero i dati cod_anag
		return doc_riparazioni_to_clienti_fornitori.cod_anag

	}

	return null
}

/**
 * @properties={type:12,typeid:36,uuid:"0CAE4DB3-573B-4DD1-9E50-14619A38DCF3"}
 */
function cliente_rag_soc()
{
	if (utils.hasRecords(doc_riparazioni_to_clienti_fornitori) && utils.hasRecords(doc_riparazioni_to_clienti_fornitori.clienti_fornitori_to_anagrafiche)) {
		return doc_riparazioni_to_clienti_fornitori.clienti_fornitori_to_anagrafiche.rag_soc1
	}
	return null
}
