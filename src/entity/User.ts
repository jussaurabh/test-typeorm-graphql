import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from 'typeorm';

@Entity('myusers')
export class User extends BaseEntity {
	@ObjectIdColumn() id: ObjectID;

	@Column('varchar', { length: 255 })
	email: string;

	@Column('text') password: string;
}
