# Contributing

## Adding a New Language

If you want to help us add a new language, please open a pull request with the following information:

Title: [Dothraki] Add Dothraki language support

1. ### Create a new branch: ###

    Before making any changes, create a new branch. Do not push changes directly to the master branch.
    ```git
     git checkout -b feat/add-dothraki-language
   ```
    <img width="1279" alt="Screenshot 2024-08-01 at 5 43 15 PM" src="https://github.com/user-attachments/assets/fb38f0cc-53ec-4afb-b3e9-0e6c10b33f56"> 

    <img width="1279" alt="Screenshot 2024-08-01 at 5 46 04 PM" src="https://github.com/user-attachments/assets/464a489b-0a08-4983-9802-1214e06364ba">


2. ### Add Language Files: ###
   Create Dothraki language files and place them in the src/locales/frontend and src/locales/backend folders.
3. ### Update Frontend Localization: ###
   
   •	Open src/locales/frontend/index.ts.
   
	 •	Add the following lines:
    ```ts
    // other lines
    import { kr } from './korean'
    import { es } from './spanish'
    // insert here
    import { dothraki } from './dothraki'
    
    const locales = { en, bn, cn, cz, de, fr, jp, kr, es, dothraki }
    
    export { en, bn, cn, cz, de, fr, jp, kr, es, dothraki }
    
    export default locales
    ```
5. ### Update Backend Localization: ###
   
   • Open src/locales/backend/index.ts
   
   • Add the following lines:
   
   ```ts
    // other lines
    import { kr } from './korean'
    import { es } from './spanish'
    // insert here
    import { dothraki } from './dothraki'
    const locales = { en, bn, cn, cz, de, fr, jp, kr, es, dothraki }
    export { en, bn, cn, cz, de, fr, jp, kr, es, dothraki }
    export default locales
    ```

7. ### Commit and Push Your Changes: ###
   •	After making the changes, commit and push your branch.

   ##### from commandline #####
   
    ```git
    git add .
    git commit -m "Add Dothraki language support"
    git push origin add-dothraki-language
    ```
9. ### Open a Pull Request: ###
   
    •	Go to the repository on GitHub
    
    •	Open a pull request from your branch to the master branch.

If you have any questions or need help, feel free to ask in the issue or pull request or shoot us at support@agencyhandy.com


## Suggesting a new Language ##

To suggest a new language, Create a new issue include a title and description with label tag "Feature".

### Language Request Example ###

#### Title: I want Dothraki language support #####

Description:
Hey, I am a huge Game of Thrones fan. I want to create a Dothraki language-based shop and manage my clients with Agency Handy.
Label: Feature

### Reporting an Issue ###

When reporting an issue, please include the following information:

	•	Expected Behavior: What you expected to happen.
	•	Actual Behavior: What actually happened.

#### Issue Report Example ####

Title: The word “Kick off Date” is not being translated correctly in Bengali

Description:
The word “Kick off Date” is being translated as “কিক অফ তারিখ” instead of “কিকঅফ তারিখ”.


	•	Website Link: your_subdomain.agencyhandy.com/dashboard
	•	File Name (Optional): locales/frontend/en.json
	•	Line Number (Optional): 123
	•	Expected Behavior: The word “Kick off Date” should be translated as “কিকঅফ তারিখ”.
	•	Actual Behavior: The word “Kick off Date” is being translated as “কিক অফ তারিখ”.

We appreciate your interest in contributing!

For any queries, Open a new issue or mail us at support@agencyhandy.com 



