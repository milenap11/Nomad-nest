# nomad-nest
| URI | REST Route | HTTP Method | CRUD Action | EJS View |
|-----|------------|-------------|-------------|----------|
| / | | GET | read | home.ejs |
| /destinations | index | GET | read | destination-index.ejs |
| /destinations/:id | show | GET | read | destination-details.ejs |
| /destinations/new | new | GET | | new-form.ejs |
| /destinations | create | POST | create | |
| /destinations/:id/edit | edit | GET | read | edit-form.ejs |
| /destinations/:id | update | PUT | update | |
| /destinations/:id | delete | DELETE | delete | |
| /reviews/ | index | GET | read | review-index.ejs |
| /reviews/:id | show | GET | read | review-details.ejs | 
| /reviews/new/:id | new | GET | read | new-form.ejs |
| /reviews/create/:id | create | POST | create | |
| /seed | | GET | delete & create | |