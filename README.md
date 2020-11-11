#  List 

## Information

To run locally as developer please start two separated bash instances.

First instance (Server)
 - `cd server && npm install && npm run start`
 - this will start server on port 3000 which will power the API
   - if you have `process.env.PORT` set to something else, it will use that port but then you need to update
     manually `proxy` field in `frontend/package.json`.
   - API is mocked and on each server restart values will change, however any changes in frontend will be correctly
     tracked by backend during one session.
   - server mock the `car-page.json` and send it to frontend by API `/api/v1/data`

Second instance (Frontend)
 - `cd frontend && npm install && npm run start`
 - this will start React frontend
   - since port `3000` will most likely be taken by server, it will offer you to start on `3001` and then
      all axios requests will automatically use proxy to port `3000`.
   - page access by url `/page/id=237089773`
   - any others pages redirect to notFound page
   - main is AppView component as layout in `/src/routes/App/components/AppView`
   - all redux in reducer `store/global-reducers/data-reducer`
 
 Test of modal component 
  - `cd frontend && npm install && npm run test`

## Tasks
1. Create a simple VIP based on [node.js](https://nodejs.org/) and [react.js](https://reactjs.org/), that properly works in one of the major browsers (Google Chrome, Mozilla Firefox, Apple Safari or Microsoft Edge)
2. Add a simple picture gallery to the VIP with the following functionality
    * The user can browse through the images
    * The user can click/tap on the image to get a fullscreen view of the image
    * The user can close the fullscreen view and get back to the VIP
3. Add the title and the price to the VIP
4. Make sure this web site fulfills the basic SEO requirements. Name the SEO features, you implemented and explain them!
5. Add a list with technical data attributes to the VIP
6. Add a list of features to the VIP
7. Add the vehicle description to the VIP
8. Add the contact information of the seller to the VIP
9. Make sure, the application is properly tested!
10. Make the design look pretty. It does not have to look like the original mobile.de VIP, come up with your own design!
11. Document your solution!
12. Make your website work properly in the other three browsers, too!
