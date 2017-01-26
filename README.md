Express Gallery
===============

Tech Used
-----------
HTML5, JavaScript, Express, Sequelize, Node.js, stored on PostgreSQL


---

Create a multi-user Gallery.
Any user should be able to access these routes:

- `GET /` to view a list of gallery photos
- `GET /gallery/:id` to see a single gallery photo
  - each gallery photo should include a link to delete this gallery photo
  - each gallery photo should include a link to edit this gallery photo
- `GET /gallery/new` to see a "new photo" form
  - the form fields are:
    - `author` : Text
    - `link` : Text (the image url)
    - `description` : TextArea
- `POST /gallery` to create a new gallery photo i
- `GET /gallery/:id/edit` to see a form to *edit* a gallery photo identified by the `:id` param
  - the form fields are:
    - `author` : Text
    - `link` : Text (the image url)
    - `description` : TextArea
- `PUT /gallery/:id` updates a single gallery photo identified by the `:id` param
- `DELETE /gallery/:id` to delete a single gallery photo identified by the `:id` param

---

- Setting up the project
- Fork and clone on local machine
- Navigate to corresponding folder
- Run psql in cmd line
- Create a database for the project in postgres in (express-gallery) (psql cmd = create database "name of database";)
- Connect to database (psql cmd = \c "name of database")
- Run npm start
- Run sequelize db:seed:all
- Run gulp
- (Linux) gulp may not automatically run redis-server, in that case start it up manually before the next step
- Gulp should bring up a Chrome window at http://localhost:3000

---

