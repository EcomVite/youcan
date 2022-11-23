import { ResthooksEventEnum } from '../constants/enum/Resthooks';
declare class YouCanResthooks {
    getAllResthooks(): Promise<IResthooks[]>;
    resthookSubscribe(event: ResthooksEventEnum, target_url: string): Promise<IResthooksSubscribeResponse>;
    resthookUnsubscribe(resthookDd: string): Promise<IResthooksSubscribeResponse>;
}
export default YouCanResthooks;
