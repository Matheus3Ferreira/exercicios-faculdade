import { getRepository } from 'typeorm';
import { Students } from '../entity/students';
import { Request, Response } from 'express';

export const getStudents = async (request: Request, response: Response) => {
    const students = await getRepository(Students).find();
    return response.json(students);
}

export const saveStudent = async (request: Request, response: Response) => {
    const students = await getRepository(Students).save(request.body);
    return response.json(students);
}

export const getOneStudent = async (request: Request, response: Response) => {
    const { id } = request.params;
    const student = await getRepository(Students).findOne(id);
    return response.json(student);
}

export const updateStudent = async (request: Request, response: Response) => {
    const { id } = request.params;
    const student = await getRepository(Students).update(id, request.body);

    if (student.affected == 1) {
        const studentUpdated = await getRepository(Students).findOne(id);
        return response.json(studentUpdated);
    }
    else
        return response.status(404).json({ message: "Estudante não localizado." });
}

export const deleteStudent = async (request: Request, response: Response) => {
    const { id } = request.params;
    const student = await getRepository(Students).delete(id);
    
    if (student.affected == 1)
        return response.json({ message: "Estudante excluido com sucesso." });
    else
        return response.status(404).json({ message: "Estudante não localizado." });
}

export const turnOffStudent = async (request: Request, response: Response) => {
    const { id } = request.params;

    const {active} = await getRepository(Students).findOne(id); // Pega o status do estudante

    const student = await getRepository(Students).update(id, { active: !active }); // Transforma o status ao contrário

    if (student.affected == 1) {
        const studentTurnedOff = await getRepository(Students).findOne(id);
        return response.json(studentTurnedOff);
    }
    else
        return response.status(404).json({ message: "Estudante não localizado." });
}