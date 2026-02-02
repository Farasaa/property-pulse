import { Schema, model, models } from "mongoose";


const PropertySchema = new Schema(
    {
     owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
     },
     name : {
        type: String,
        required: true,
     },
     type : {
        type: String,
        required: true,
     },
     description : {
        type: String,
     },
     location : {
        street : String,
        city : String,
        state : String,
        zip : String,
     },
     beds : {
        type: Number,
        required: true,
     },
        baths : { 
        type: Number,
        required: true,
     },
     squre_feet : {
        type: Number,
        required: true,
     },
      amenities : [{
        type: String,
      }],
      rates : {
        nightly : Number,
        weekly : Number,
        monthly : Number,
      },
      seller_info : {
        name : String,
        phone : String,
        email : String,
      },
      images : [{
        type: String,
      }],
      is_featured : {
        type: Boolean,
        default: false,
      }
    },
    { timestamps: true }
)

const Property = models.Property || model("Property", PropertySchema);

export default Property;