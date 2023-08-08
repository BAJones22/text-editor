import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
console.log('console is running');

const jateDb = await openDB('jate', 1);
const tx =jateDb.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');

const request = store.put({ id: 1, value: content });
const result = await request;
};

export const getDb = async () => {

const jateDb = await openDB('jate', 1);
const tx = jateDb.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const allContent = await store.get(1);
const result = await allContent;

return result?.value ?? '';
} 

initdb();