import { getRepository } from "typeorm";
import { Contacts } from "../entity/Contacts";
import { Request, Response } from "express";

export const getContacts = async (request: Request, response: Response) => {
    const contacts = await getRepository(Contacts).find();
    return response.json(contacts);
}

export const getContact = async (request: Request, response: Response) => {
    const { id } = request.params;
    const contact = await getRepository(Contacts).findOne(id);
    return response.json(contact);
}

export const saveContact = async (request: Request, response: Response) => {
    const contact = await getRepository(Contacts).save(request.body);
    return response.json({
        status: "Cadastro salvo com sucesso meu chapa!",
        Contact_Saved: contact
    });
}

export const updateContact = async (request: Request, response: Response) => {
    const { id } = request.params;
    const contact = await getRepository(Contacts).update(id, request.body);
    return contact.affected == 1 ? response.status(200).json('Contato alterado com sucesso!') : response.status(404).json('Contato não localizado.');
}

export const deleteContact = async (request: Request, response: Response) => {
    const { id } = request.params;
    const contact = await getRepository(Contacts).delete(id);
    return contact.affected == 1 ? response.status(200).json('Contato excluido com sucesso!') : response.status(404).json('Contato não localizado.');
}


