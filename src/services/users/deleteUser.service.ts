import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";

const deleteUserService = async (idUser: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: idUser,
  });

  await userRepository.softRemove(user!);
};

export default deleteUserService;
