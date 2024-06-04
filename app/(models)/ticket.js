import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

const ticketSchema = new Schema(
    {
      title: String,
      description: String,
      catrgory: String, // corrected typo here
      priority: Number,
      progress: Number,
      status: String,
      active: Boolean,
    },
    { timestamps: true } // corrected typo here
  );

// export const Ticket = mongoose.model("Ticket", ticketSchema);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;