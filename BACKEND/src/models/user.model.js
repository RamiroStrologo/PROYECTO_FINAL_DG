import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      requred: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
    carts: {
      type: [
        {
          cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'carts',
          },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);
const User = mongoose.model('users', UserSchema);
export default User;
