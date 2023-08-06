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

export const putDb = async (content) => console.error('putDb not implemented');

try {
const contactDb = await openDB('jate', 1);
const tx = contactDb.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');

await store.add(content);
await tx.done;
}
catch (error) {
  console.error('putDb failed', error);
};

export const getDb = async () => console.error('getDb not implemented');

try {
const contactDb = await openDB('jate', 1);
const tx = contactDb.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const content = await store.getAll();
await tx.done;

return content;
} catch (error) {
console.error('getDb failed', error);
return [];
};


initdb();