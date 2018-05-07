
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A57DEDCB-AD3C-4CF2-952E-46A9B4E07D08"}
 */
function onLoad(event) {
	initNav();
}

/**
 * @private 
 * @properties={typeid:24,uuid:"35630022-76B4-4B85-A3BF-43512F66932A"}
 * @SuppressWarnings(wrongparameters)
 */
function initNav(){
	
	/** @type {Array<servoyextra-sidenav.MenuItem>} */
	var items = [
		{
			id: 'home', 
			text:'Home', 
			iconStyleClass:'fa fa-home svy-sidenav-font-icon',
			data:{formName:'frm_home'},
		},			
//		{
//			id: 'Anagrafiche', 
//			text:'Anagrafiche',
//			iconStyleClass:'fa fa-id-card-o svy-sidenav-font-icon',
//			data:{formName:'frm_baseRiparazioniEst'}
//		},
//		{
//			id: 'orders', 
//			text:'Ordini',
//			iconStyleClass:'fa fa-cart-arrow-down svy-sidenav-font-icon',
//			data:{formName:'frm_details'}
//		},
		{
			id: 'riparazioni', 
			text:'Rip. Esterna',
			iconStyleClass:'fa fa-external-link-square svy-sidenav-font-icon',
			data:{formName:'frm_baseRiparazioniEst'}		
		}
//		,
//		{
//			id: 'calendario', 
//			text:'Calendario',
//			iconStyleClass:'glyphicon glyphicon-calendar svy-sidenav-font-icon',
//			data: {formName:'frm_Riparazioni$detail'}
//		}
	];
	
	elements.menu.setRootMenuItems(items)

	
//	elements.menu.addMenuItem({divider:true, styleClass:'svy-sidenav-divider'});
//	
//	elements.menu.addMenuItem({
//		id: 'statistiche',
//		text: 'Statistiche',
//		iconStyleClass:'fa fa-line-chart  svy-sidenav-font-icon'
//	});
//	
//	elements.menu.addMenuItem({
//		id: 'phoneGap', 
//		text:'phoneGap',
//		iconStyleClass:'fa fa-mobile  svy-sidenav-font-icon'
//	}); 
//	
//	elements.menu.addMenuItem({
//		id: 'settings', 
//		text:'Settings',
//		iconStyleClass:'fa fa-gear  svy-sidenav-font-icon'
//	}); 
//	
//	elements.menu.addMenuItem({
//		id: 'Articoli',
//		text: 'Articoli',
//		iconStyleClass: 'fa fa-barcode svy-sidenav-font-icon'
//	},'Anagrafiche');
//
//	elements.menu.addMenuItem({
//		id: 'Clienti',
//		text: 'Clienti',
//		iconStyleClass: 'fa fa-users svy-sidenav-font-icon'
//	},'Anagrafiche');
//	
//	elements.menu.addMenuItem({
//		id: 'Fornitori',
//		text: 'Fornitori',
//		iconStyleClass: 'fa fa-truck svy-sidenav-font-icon'
//	}, 'Anagrafiche');
	
	
	elements.menu.containedForm = forms.frm_home;
	
}
/**
 * @param {object} menuItemId
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C09BFA9A-4313-4075-B724-2181075F409E"}
 */
function onMenuItemSelected(menuItemId, event) {
	var item = elements.menu.getMenuItem(menuItemId);
	
	if (item.data && item.data.formName) {
		elements.menu.containedForm = item.data.formName;
	}
	return true;
}
