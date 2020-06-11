    module.exports = class Util {
    
	static list(arr, conj = 'and') {
		const len = arr.length;
		return `${arr.slice(0, -1).join(', ')}${len > 1 ? `${len > 2 ? ',' : ''} ${conj} ` : ''}${arr.slice(-1)}`;
    }
    
    static randomRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}