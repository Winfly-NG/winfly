
/**

 * @private
 *
 * @properties={typeid:24,uuid:"F0F626E5-07F8-40AC-9CA9-6413F1282E79"}
 */
function onActionCloseOpen() {
	if(forms.mainForm.elements.menu.open)
	forms.mainForm.elements.menu.open = false;
	else
		forms.mainForm.elements.menu.open = true;
}

/**
 * Called whenever a menu item is clicked or a submenu item is selected with the JSEvent and the menuItem object clicked on.
 *
 * @param {JSEvent} event
 * @param {bootstrapextracomponents-navbar.menuItem} menuItem
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3F63C7A0-4235-4711-A8DC-612172F3AD14"}
 */
function onMenuItemClicked(event, menuItem) {
	
	switch (menuItem.itemId) {
		case '1.1' : //LOG OUT
			security.logout();
			break;
		case '1.2' : //HELP DESK
			application.showURL("http://www.crminf.work/supporto");
			break;
		default:
			break;
		}

}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"54F96AF2-5B31-470C-BDE3-30657F24BF9B"}
 */
function logOut() {
	security.logout();
//	application.exit()
 }
