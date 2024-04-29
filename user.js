import { create } from 'domain';
import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, lowercase: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  bestFriend: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  hobbies: [{ type: String }],
  address: addressSchema,
});

userSchema.methods.sayHi = function () {
  console.log(`Hi, my name is ${this.name}`);
};

userSchema.statics.findByAge = function (age) {
  console.log(age);
  return this.find({ age });
};

userSchema.statics.getFullName = function (name) {
  return this.where('name', name).limit(1);
};

//we can also create query which we can use with .find() method
userSchema.query.byAge = function (age) {
  return this.where({ age: { $lt: age } });
};

// we can also create virtual fields
userSchema.virtual('fullName').get(function () {
  return `${this.name} ${this.email}`;
});

// we can also create pre hooks
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// we can also create post hooks
userSchema.post('save', function (doc, next) {
  doc.sayHi();
  next();
});

const User = mongoose.model('User', userSchema);

export { User };
