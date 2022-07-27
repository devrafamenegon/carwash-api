import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  name: string;

  @Column
  cpf: string;

  @Column
  birthday: Date;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  phone: string;

  @Column
  street: string;

  @Column
  number: string;

  @Column
  complement: string;

  @Column
  city: string;

  @Column
  state: string;

  @Column
  country: string;

  @Column
  zipcode: string;
}
