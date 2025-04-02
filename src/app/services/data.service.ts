import { Injectable, inject } from '@angular/core';
import { Database, ref, get, push, set, update, remove, query, orderByChild, equalTo } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private db = inject(Database);

  constructor() { }

  async getAll(collection: string) {
    const dataRef = ref(this.db, collection);

    try {
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        console.log('No data found for '+ collection)
        return null;
      }
    } catch (error) {
      console.log('Error fetching ' + collection + ':', error);
      return null;
    }
  }

  async getQuery(collection: string, field: string, value: string) {
    const dataRef = ref(this.db, collection);
    const dataQuery = query(dataRef, orderByChild(field), equalTo(value))

    try {
      const snapshot = await get(dataQuery);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data found for '+ collection)
        return null;
      }
    } catch (error) {
      console.log('Error fetching ' + collection + ':', error);
      return null;
    }
  }
  
  async getById(collection: string, id: string) {
    const dataRef = ref(this.db, collection + id);

    try {
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data found for this '+ collection + ' ID')
        return null;
      }
    } catch (error) {
      console.log('Error fetching ' + collection + ':', error);
      return null;
    }
  }

  async pushRegister(collection: string, data: any) {
    const dataRef = ref(this.db, collection);

    const newRegister = push(dataRef);

    try {
      await set(newRegister, data);
      console.log(collection + ' added successfully: ', newRegister.key);
      return newRegister.key;
    } catch (error) {
      console.log('Error fetching ' + collection + ':', error);
      return null;
    }
  }

  async editById(collection: string, id: string, data: any) {
    const dataRef = ref(this.db, collection + id);

    try {
      await update(dataRef, data);
      console.log(collection + ' updated successfully');
      return true;
    } catch (error) {
      console.error('Error updating ' + collection, error);
      return false;
    }
  }

  async deleteById(collection: string, id: string) {
    const dataRef = ref(this.db, collection + id);

    try {
      await remove(dataRef);
      console.log(collection + ' deleted successfully');
      return true;
    } catch (error) {
      console.error('Error deleting ' + collection, error);
      return false;
    }
  }
}
