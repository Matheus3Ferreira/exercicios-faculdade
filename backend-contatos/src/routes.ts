import { Router } from "express";
import { deleteContact, getContact, getContacts, saveContact, updateContact } from "./controllers/ContactController"

const routes = Router();

routes.get('/contact', getContacts);
routes.get('/contact/:id', getContact);
routes.post('/contact', saveContact);
routes.put('/contact/:id', updateContact);
routes.delete('/contact/:id', deleteContact);


export default routes;