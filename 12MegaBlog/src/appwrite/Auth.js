import conf from "../Config/Config";
import { Account, ID, Client } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async CreateAccount({ name, email, password }) { //if this method is okay then send the user to login page
    try {
      const createUser = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );
      if (createUser) {
        //If user Account exists than go to login method:
        return this.Login({ email, password });
      } else {
        return createUser;
      }
    } catch (error) {
      throw error;
    }
  }

  async Login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() { //This method checks that the user has logged in to home page or not? 
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    return null; //if it does not get the username it returns the nothing. this is as like as if-else
  }

  async Logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Logged Out", error);
    }
  }
}

const authService = new AuthService(); 
//this object gets the acess to the all methods that are defined upper
export default authService;
