import mongoose from 'mongoose';
import { User } from './user.js';

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/rutvikDB1');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
connectToDatabase();

async function run() {
  try {
    //   await User.create({ name: 'R', age: 27 });
    // const user = await User.create({
    //   name: 'Rutvik',
    //   age: 27,
    //   email: 'tuadsl@aexp.com',
    //   hobbies: ['coding', 'reading'],
    //   address: {
    //     street: '123 Main St',
    //     city: 'Springfield',
    //     state: 'IL',
    //     zip: 62701,
    //   },
    // });
    // This will return the user with the name Rutvik and populate the bestFriend field with the user that has the name Rutvik.
    // const users = await User.find({ name: 'Rutvik' }).populate('bestFriend');
    // const user = await User.findById('')
    // users[0].bestFriend = users[1]._id;
    // await users[0].save();
    // console.log(users[0]);

    //We can also create our own custom methods on the model. Here's an example of a method that returns the user's full name:
    // const users = await User.getFullName('Rutvik');

    const users = await User.findOne({ name: 'Rutvik', age: 27 });
    // console.log(users[2].fullName);
    await users.save();
    console.log(users);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

run();
// OR

// mongoose
//   .connect('mongodb://127.0.0.1:27017/rutvikDB1')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });
