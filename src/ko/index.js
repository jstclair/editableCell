var polyfill = require('../polyfill');

// Knockout binding handlers
var bindingHandlers = {
    editableCell: require('./editableCellBinding'),
    editableCellSelection: require('./editableCellSelectionBinding'),
    editableCellScrollHost: require('./editableCellScrollHostBinding')
};

// Register Knockout binding handlers if Knockout is loaded
if (typeof ko !== 'undefined') {
    for (var bindingHandler in bindingHandlers) {
        ko.bindingHandlers[bindingHandler] = bindingHandlers[bindingHandler];
    }
}