# TypeScript-Login-App

## Install all the dependencies inside the project with `npm`
```
npm install
```
This will install the dependencies like `Express`, `Cookie-Session` and `Body-Parser`
or You can install them as
```
npm install @types/express @types/body-parser @types/cookie-session
```
### Run 
To run the application using npm:
```
npm start
```
This will generate the javascript file `index.js` from typeScript file `index.ts`
This will start the server on port `3000`. You can change the port in `start()` method in `index.ts` file.

```
this.app.listen(3000, () => {
      console.log('Listening on 3000');
    });
```
You can view the ouput at: http://localhost:3000/
