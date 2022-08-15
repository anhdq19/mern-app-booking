import authRouter from "./auth.router.js";
import hotelRouter from "./hotel.router.js";
import roomRouter from "./rooms.router.js";
import userRouter from "./users.routers.js"

const route = (app) => {

    app.use('/api/v1/auth', authRouter);

    app.use('/api/v1/hotels', hotelRouter);

    app.use('/api/v1/rooms', roomRouter);

    app.use('/api/v1/users', userRouter);

}
export default route;