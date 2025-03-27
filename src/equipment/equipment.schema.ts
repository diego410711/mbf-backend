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

  @Prop({ type: Buffer }) // Tipo explícito para evitar ambigüedades
  invoice: string | Buffer;

  @Prop()
  assignedTechnician?: string; // Nuevo campo agregado

  @Prop({ unique: true, sparse: true })
  technicalDataSheet?: string; // Ahora opcional

  @Prop()
  diagnosis: string;

  @Prop()
  customerApproval: string;

  @Prop({ type: Date }) // 📅 Nueva propiedad para la fecha de autorización
  authorizationDate?: Date;

  @Prop({ type: Date }) // 📅 Nueva propiedad para la fecha de entrega
  deliveryDate?: Date;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
