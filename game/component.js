/***************************************************************
 * Represents a generic game component.
 * @constructor
 * @param {objectEnum} type - Required. The type of component object.
 * @param {object} associatedObject - Optional. Represents the object associated to this component.
 ****************************************************************/
class component {
    constructor(type, associatedObject) {
        this.type = type;
        this.associatedObject = associatedObject;
    }
}