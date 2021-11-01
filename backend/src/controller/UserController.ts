import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let updatedUser = await this.userRepository.findOne(request.params.id);
        updatedUser.username = request.body.username;
        updatedUser.email = request.body.email;
        updatedUser.password = request.body.password;
        return await this.userRepository.save(updatedUser);

        //throw new Error("error");

        //response.status(500).send("56876987");

    }

}