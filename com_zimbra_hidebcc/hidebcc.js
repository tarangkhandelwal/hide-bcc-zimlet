//////////////////////////////////////////////////////////////////////////////
// Zimlet that hides option the add a bcc to new compose email in Zimbra Web Client.
// @author Zimlet author: Tarang Khandelwal 
//////////////////////////////////////////////////////////////////////////////

function ZHideBCC() {};

ZHideBCC.prototype = new ZmZimletBase();
ZHideBCC.prototype.constructor = ZHideBCC;

ZHideBCC.prototype.init = function() {};

ZHideBCC.prototype.onParticipantActionMenuInitialized = function(controller, menu) {
    this.onActionMenuInitialized(controller, menu);
};

ZHideBCC.prototype.onActionMenuInitialized = function(controller, menu) {
    this._hideMenuBtn(controller, menu);
};

ZHideBCC.prototype._hideMenuBtn = function(controller, menu) {
    menu.getMenuItem(ZmOperation.SHOW_BCC).getHtmlElement().style.display = "none";
};

ZHideBCC.prototype.initializeToolbar = function(app, toolbar, controller, viewId) {
    var viewType = appCtxt.getViewTypeFromId(viewId);
    if (viewType == ZmId.VIEW_COMPOSE) {
        var menu = controller._toolbar.getButton(ZmOperation.COMPOSE_OPTIONS).getMenu();
        var showBccBtn = menu.getItemById(ZmOperation.KEY_ID, ZmOperation.SHOW_BCC);
        if (showBccBtn) {
            showBccBtn.getHtmlElement().style.display = "none";
        }
    }
};
