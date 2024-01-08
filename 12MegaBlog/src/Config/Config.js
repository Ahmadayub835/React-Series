//We had to make it for the appwrite config js.
const conf = {
    //We had make this appWriteUrl to access it globally.
    appWriteUrl : String(import.meta.env.VITE_APP_APPWRITE_URL),
    appWriteProjectId : String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appWriteDbId : String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appWriteCollectionId : String(import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID),
    appWriteBucketID : String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID),
    //We made all of them to access them easily without any error.
}

export default conf
