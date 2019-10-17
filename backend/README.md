# Job Postings Helper - Backend
The backend consists of just a [Firebase Firestore](https://firebase.google.com/docs/firestore/quickstart) database. It will be read by the web frontend, and written to by the retool based admin panel.

### Firestore schema
The schema just consists of a collection ```jobPostings```, the documents in it, that look like:

![firestore-schema](readme-assets/firestore-schema.png)

The document field names are self-explanatory

### Firestore rules
For rules, you can allow public read. You do not need write permissions, since the retool based backend will use Firebase Admin rights to be able to make changes to this firestore db. Rules should look like this:
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
    }
  }
}
```

### Firestore indexes
This db uses 3 composite indexes: 

![firestore-schema](readme-assets/firestore-indexes.png)
