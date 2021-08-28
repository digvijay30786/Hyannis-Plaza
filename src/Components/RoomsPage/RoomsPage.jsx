import { RoomItem } from "./Components/RoomItem/RoomItem"
import { Header } from "./Components/Header/Header"
import styles from "./roomPage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getRooms } from "../../Redux/rooms/actions"
import { DetailTags } from "./Components/DetailTags/DetailTags"
import RoomsLeftSide from "./Components/RoomLeftSide/RoomsLeftSide"
import Modal from "./Components/Modal/Modal"

export const RoomsPage = () => {
    const rooms = useSelector((state) => state.app.rooms);
    const dispatch = useDispatch();

    useEffect(() => {
        const getRoomsAction = getRooms();
        dispatch(getRoomsAction)
    }, [dispatch]);


    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                <div className={styles.left}><RoomsLeftSide /></div>
                <div className={styles.right}>
                    <div>ROOM & RATES</div>
                    <DetailTags />
                    {rooms.map((el) => (
                        <RoomItem key={el.id} items={el} />
                        ))}
                </div>
            </div>
            <Modal />
        </div>
    )
}
