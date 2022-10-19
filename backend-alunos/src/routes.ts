import { Router, request, response, Request, Response } from 'express'
import { deleteStudent, getOneStudent, getStudents, saveStudent, turnOffStudent, updateStudent } from './controller/controllerStudent'


const routes = Router()

routes.get('/students', getStudents);
routes.post('/students', saveStudent);
routes.get('/students/:id', getOneStudent);
routes.put('/students/:id', updateStudent);
routes.delete('/students/:id', deleteStudent);
routes.patch('/students/:id', turnOffStudent);

export default routes