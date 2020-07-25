import { plugin, prop, getModelForClass } from '@typegoose/typegoose';
import uniqueValidator from 'mongoose-unique-validator';

@plugin(uniqueValidator)
class User {
  @prop({ required: true })
  public name?: string;

  @prop({ required: true, unique: true })
  public email?: string;

  @prop({ required: true })
  public password?: string;
}

const UserModels = getModelForClass(User);

export default UserModels;
