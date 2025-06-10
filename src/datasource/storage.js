export default class LocalStorageWrapper {
    constructor(prefix = 'cre-impro') {
      this.prefix = prefix;
    }
  
    _fullKey(key) {
      return this.prefix + '_' + key;
    }
  
    set(key, value) {
      try {
        const serialized = JSON.stringify(value);
        localStorage.setItem(this._fullKey(key), serialized);
      } catch (e) {
        console.error('Failed to set in localStorage:', e);
      }
    }
  
    get(key) {
      try {
        const item = localStorage.getItem(this._fullKey(key));
        return item ? JSON.parse(item) : null;
      } catch (e) {
        console.error('Failed to parse localStorage item:', e);
        return null;
      }
    }
  
    remove(key) {
      localStorage.removeItem(this._fullKey(key));
    }
  }
  