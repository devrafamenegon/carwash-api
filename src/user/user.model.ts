import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  cpf: string;

  @Column({
    type: DataType.DATE(),
    allowNull: false,
  })
  birthday: Date;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  street: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  number: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  complement: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  country: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  zipcode: string;
}
