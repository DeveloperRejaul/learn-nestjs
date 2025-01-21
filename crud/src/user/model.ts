import { UUIDV4 } from 'sequelize';
import {
  Column,
  DataType,
  HasMany,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Products } from 'src/product/model';

@Table
export class Users extends Model<Users> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ defaultValue: UUIDV4() })
  id: string;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  email: string;

  // one to many
  @HasMany(() => Products)
  products: Products[];
}
