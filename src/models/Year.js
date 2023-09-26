import { Schema, model, models } from 'mongoose';

const PricesSchema = new Schema({
  id:{
    type: String,
    unique: [true, 'Id already exists!'],    
  },
  data:{
    type:String,
    unique: [true, 'this data exists already exists!'],
  },
  year: {
    type: Object,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
});

const Price = models.Prices || model("Prices", PricesSchema);

export default Price;