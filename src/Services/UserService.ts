import database from '@react-native-firebase/database';
import {userType} from '../types';

class UserService {
  private usersRef = database().ref('users');

  // signin user
  public async signInUser(user: userType) {
    const userExists = await this.userExists(user.uid);

    if (!userExists) {
      this.createUser(user);
    }

    return user;
  }
  // create a new user in the database
  public async createUser(user: userType) {
    return this.usersRef.child(user.uid).set(user);
  }

  // check if the user exists in the database
  public async userExists(uid: string) {
    const snapshot = await this.usersRef.child(uid).once('value');

    return snapshot.exists();
  }

  // get the user from the database
  public async getUser(uid: string) {
    const snapshot = await this.usersRef.child(uid).once('value');

    const value = await snapshot.val();

    return value;
  }

  // get all the users from the database
  public async getUsers() {
    const snapshot = await this.usersRef.once('value');

    return snapshot.val();
  }

  async updateUser(user: userType) {
    return this.usersRef.child(user.uid).update(user);
  }
}

export default new UserService();
