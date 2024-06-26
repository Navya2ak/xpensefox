import User from "../../database/models/user";
import Xpense from "../../database/models/xpense";
import XpenseCard from "../../database/models/xpense_card";
export class XpenseService {
  constructor() {}

  async createxpenseCard(data: any) {
    if (!data.name) throw Error("params missing");
    return await XpenseCard.create(data);
  }

  async editxpenseCard(data: any) {
    let updatingData = {
      name: data.name ?? data.name,
      budget: data.budget ?? data.budget,
      is_active: data.is_active ?? data.is_active,
    };
    await XpenseCard.update(updatingData, {
      where: {
        userId: data.userId,
        id: data.cardId,
      },
    });
    return "User Details Updated";
  }

  async deletexpenseCard(data: any) {
    await XpenseCard.destroy({
      where: {
        userId: data.userId,
        id: data.cardId,
      },
    });
    return "Card Removed";
  }
  async listxpenseCards(data:any) {
   let cards= await XpenseCard.findAll({
      where: {
        userId: data.userId,
            },
            include:[
             { model: User,
                as:'users'}
            ]
    });
    return cards
  }
  fetchxpense() {

  }
  async addxpense(data: any) {
    if (!data.userId || !data.cardId || !data.amount) throw Error("params missing");
    return await Xpense.create(data);
  }
  edixpense() {}
  deletexpense() {}
}
