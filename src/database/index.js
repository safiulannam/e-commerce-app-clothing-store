import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const connectToDB = async () => {
    const connectionUrl =
        'mongodb+srv://safiulannam:KTrjMw4fA5TZUOwH@cluster0.9wvy90l.mongodb.net/';

    mongoose
        .connect(connectionUrl, configOptions)
        .then(() => console.log("Koneksi Database Berhasil"))
        .catch((err) =>
            console.log(`Getting Error from DB connection ${err.message}`)
        );
};

export default connectToDB;
