/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EquipmentDocument = Equipment & Document;

@Schema()
export class Equipment {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  model: string;

  @Prop()
  serial: string;

  @Prop({ required: true })
  issue: string;

  @Prop()
  photos: Buffer[];

  @Prop({ type: Buffer })
  invoice: string | Buffer;

  @Prop()
  assignedTechnician?: string;

  @Prop({ unique: true, sparse: true })
  technicalDataSheet?: string;

  @Prop()
  diagnosis: string;

  @Prop()
  customerApproval: string;

  @Prop({ type: Date })
  authorizationDate?: Date;

  @Prop({ type: Date })
  deliveryDate?: Date;

  // Nuevos campos opcionales
  @Prop()
  firstname?: string;

  @Prop()
  lastname?: string;

  @Prop()
  email?: string;

  @Prop()
  phone?: string;

  @Prop()
  address?: string;

  @Prop()
  userId?: string;

  @Prop()
  doc?: string;

  @Prop()
  company?: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
