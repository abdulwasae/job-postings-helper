# Job Postings Helper - Admin Panel
The admin panel is a [Retool](https://tryretool.com) app. Retool might seem intimidating at first glance but it is really not. Sign up with retool and follow the steps.


### Integrate Firebase
In the resources selector view - choose "Firebase." You will be prompted to provide a Service Account Key as well as a Database URL. The Service Account key is a JSON blob that you can create from your Firebase console, and the Database URL is how you can inform which database Retool should use.

1. You can write anything in Label. The app export, talked about in the next step, assumes the following resource label: ```Careers Firestore```
2. Firebase database url will be like: ```https://your-firebase-project-id.firebaseio.com```
3. Firebase Project is self explanatory: ```your-firebase-project-id```
4. To generate a private key file for your service account:
   1. In the Firebase console, open Settings > Service Accounts.
   2. Click Generate New Private Key, then confirm by clicking Generate Key.
   3. In case it's not clear enough, see this [guide](https://firebase.google.com/docs/admin/setup#initialize_the_sdk).   

For more details on how you can obtain these fields, see [guide](https://docs.tryretool.com/docs/firebase-integration#section-setting-up-firebase).

### Create retool app
This repo contains a pre-made retool app, exported as this [file](retool_app_exports/retoolAdminPanelApp.json) in the ```admin_panel/retool_app_exports/``` folder. Download it and follow the steps:

1. Go to the App section
2. Select ```Create```
3. Select ```Import App```
4. Give your app a name
5. Select ```Upload App```, and choose the file downloaded as mentioned above.
6. Select ```Create```
7. For a few buttons (View Website, View Raw, Access Raw Database) in the app to work, you will need to replace the dummy links, associated with these buttons, with the correct links. In the said links, replace ```your-firebase-project-id``` with your firebase project id.

