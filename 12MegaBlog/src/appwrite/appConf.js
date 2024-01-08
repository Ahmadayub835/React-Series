import conf from "../Config/Config";
import { Client, ID, Storage, Databases, Query } from "appwrite";

export class AppService {
  // Instance variables for the Appwrite Client, Database, and Storage
  client = new Client();
  databases;
  storage;

  // Constructor function to initialize Appwrite Client, Database, and Storage
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl) // Set the Appwrite endpoint URL
      .setProject(conf.appWriteProjectId); // Set the Appwrite project ID
    this.databases = new Databases(this.client); // Create an instance of the Databases class
    this.storage = new Storage(this.client); // Create an instance of the Storage class
  }

  // Asynchronous function to create a post in the Appwrite database
  async CreatePost({ title, content, featuredImage, userId, slug, status }) {
    try {
      // Create a document in the Appwrite database with the specified data
      return await this.databases.createDocument(
        conf.appWriteDbId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          userId,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: CreatePost :: error", error);
    }
  }

  // Asynchronous function to update a post in the Appwrite database
  async updatePost(slug, { title, content, userId, status, featuredImage }) {
    try {
      // Update a document in the Appwrite database with the specified data
      return await this.databases.updateDocument(
        conf.appWriteDbId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          userId,
          status,
          featuredImage,
        }
      );
    } catch (error) {
      console.log("Appwrite :: updatePost :: error", error);
    }
  }

  // Asynchronous function to delete a post from the Appwrite database
  async deletePost(slug) {
    try {
      // Delete a document from the Appwrite database
      return await this.databases.deleteDocument(
        conf.appWriteDbId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite :: deletePost :: error", error);
    }
  }

  // Asynchronous function to get a post from the Appwrite database
  async getPost(slug) {
    try {
      // Retrieve a document from the Appwrite database
      return await this.databases.getDocument(
        conf.appWriteDbId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite :: getPost :: error", error);
      return false;
    }
  }

  // Asynchronous function to get a list of documents from the Appwrite database based on queries
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      // Retrieve a list of documents from the Appwrite database based on queries
      return await this.databases.listDocuments(
        conf.appWriteDbId,
        conf.appWriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log("Appwrite :: getListDocument :: error", error);
      return false;
    }
  }

  // Asynchronous function to upload a file to the Appwrite storage
  async uploadFile(file) {
    try {
      // Create a file in the Appwrite storage with the specified data
      return await this.storage.createFile(
        conf.appWriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite :: upload :: error", error);
      return false;
    }
  }

  // Asynchronous function to delete a file from the Appwrite storage
  async deleteFile(fileId) {
    try {
      // Delete a file from the Appwrite storage
      return await this.storage.deleteFile(conf.appWriteBucketID, fileId);
    } catch (error) {
      console.log("Appwrite :: deleteFile :: error", error);
      return false;
    }
  }

  // Function to get a file preview from the Appwrite storage
  getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appWriteBucketID, fileId);
  }
}

// Creating a single instance of the AppService class
const appService = new AppService();

// Exporting the single instance for use in other parts of the application
export default appService;
