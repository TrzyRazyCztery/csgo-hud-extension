const hasStorage = (function() {
  const uid = new Date().toDateString();
  try {
    localStorage.setItem(uid, uid);
    const result = localStorage.getItem(uid) === uid;
    localStorage.removeItem(uid);
    return result;
  } catch (exception) {}
})();

export const storageAdapter = {
  hasStorage() {
    return hasStorage;
  },
  store(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  },
  load(name) {
    return JSON.parse(localStorage.getItem(name));
  },
  remove(name) {
    localStorage.remove(name);
  }
};
