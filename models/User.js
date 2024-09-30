import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String, },
  email: { type: String, required: true },
  password: { type: String, select: false },
  // whenever we are protecting the routes
  role:{type: String, default: 'user'},
  image: {type: String},
  // This is going to be coming from the provider
  authProviderId: {type: String}
});

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
