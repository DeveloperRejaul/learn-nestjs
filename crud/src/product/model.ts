import { UUIDV4 } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Users } from 'src/user/model';

@Table
export class Products extends Model<Products> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ defaultValue: UUIDV4() })
  id: string;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({})
  quantity: number;

  @ForeignKey(() => Users)
  @Column
  userId: string;

  @BelongsTo(() => Users)
  user: Users;
}
