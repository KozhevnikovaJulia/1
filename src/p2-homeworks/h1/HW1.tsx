import React from "react";
import Message from "./Message";
import Message2 from "./Message2";

export type MessageDataPropsType = {
    avatar: string ,
    name: string,
    message: string,
    time: string,
}


const messageData:MessageDataPropsType  = {
    avatar: "https://i.pinimg.com/736x/6d/f7/03/6df7036c28e8cf6b160f4839a4bd8c3d--gru--agnes-despicable-me.jpg",
    name: "Julia",
    message: "Pies are a baked or fried dough dish with a filling. The dough can be different - yeast, sponge, puff, shortbread, grated... Pies are open when the filling is on top of the dough, and closed when the filling is completely inside the dough. There are many varieties of pies: kulebyaka, kurnik, sweet pies, chapilg, Kish, sponge cake, cheesecake, strudel, gingerbread, kulich, Mannik, taten, cheesecake, Babka",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            <h3>homeworks 1</h3>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
