export default class ObjectHelper {

    /**
     * Test if something is an object
     * 
     * @example 
     * var obj = {};
     * ObjectHelper.isObject(obj);
     * // returns true
     * 
     * @param {*} item - The item to test
     * @returns {boolean} - True or false whether the type item is an object
     */
    static isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }
    
    /**
     * Deep merge two objects it modifies the first object passed with following arguments and returns the modified object as well
     * 
     * @param {Object} target - The target to be modified
     * @param {...Object} sources - The objects that will be deeply merged
     * @returns {Object} - The modified target object
     * 
     * @example
     * var obj1 = {message: {greeting: 'Hello', subject: 'World}};
     * var obj2 = {message: {subject: "Doggo"}};
     * ObjectHelper.deepMerge(obj1, obj2) 
     * // returns {message: greeing: 'Hello', subject: 'Doggo'}
     */
    static deepMerge(target, ...sources) {
        if(!sources.length) {
            return target;
        }
        const source = sources.shift();
    
        if (ObjectHelper.isObject(target) && ObjectHelper.isObject(source)) {
            for (const key in source) {
                if (ObjectHelper.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, { [key]: {} });
                    }
                    ObjectHelper.deepMerge(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
    
        return ObjectHelper.deepMerge(target, ...sources);
    }
}